import { useEffect, useRef } from "react";
import * as THREE from "three";

export function FloatingGeo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect reduced-motion & skip on very small screens
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 640) return;

    // ── Renderer ─────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.cssText = "position:absolute;inset:0;width:100%;height:100%";
    container.appendChild(renderer.domElement);

    // ── Scene & Camera ────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 5.5);

    // ── Geometry ──────────────────────────────────────────
    const geo = new THREE.IcosahedronGeometry(1.65, 1);

    const solidMesh = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({ color: 0x040404, roughness: 0.9, metalness: 0.05 }),
    );
    const wireMesh = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({ color: 0x00ff88, wireframe: true, transparent: true, opacity: 0.45 }),
    );
    wireMesh.scale.setScalar(1.004);

    const group = new THREE.Group();
    group.add(solidMesh, wireMesh);
    
    // Dynamically calculate X position to keep it anchored on the right
    const getTargetX = () => Math.max(3.0, camera.aspect * 2.0 - 0.5);
    group.position.set(getTargetX(), 0, 0);
    scene.add(group);

    // ── Lights ────────────────────────────────────────────
    const rimLight = new THREE.PointLight(0x00ff88, 10, 14, 2);
    scene.add(rimLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.03));

    // ── Mouse tracking ────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth)  *  2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * -2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ── Scroll depth ──────────────────────────────────────
    let scroll = 0;
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      scroll = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Resize ────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      group.position.x = getTargetX();
    };
    window.addEventListener("resize", onResize, { passive: true });

    // ── Animation loop ────────────────────────────────────
    const clock   = new THREE.Clock();
    let   rafId: number;
    // Current rotation (lerp target)
    let rx = 0, ry = 0;

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      // Idle vertical float
      group.position.y = Math.sin(t * 0.55) * 0.22;
      // Scroll depth — mesh retreats as user scrolls
      group.position.z = -scroll * 2.8;

      // Smooth mouse parallax
      rx += (-mouse.y * 0.65 - rx) * 0.055;
      ry += (mouse.x * 0.65 + t * 0.1 - ry) * 0.055;
      solidMesh.rotation.x = rx;
      solidMesh.rotation.y = ry;
      wireMesh.rotation.copy(solidMesh.rotation);

      // Orbiting rim light
      rimLight.position.set(
        Math.sin(t * 0.4)  * 3.5,
        Math.cos(t * 0.28) * 2.0,
        Math.cos(t * 0.4)  * 3.5,
      );

      renderer.render(scene, camera);
    };
    tick();

    // ── Cleanup ───────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll",    onScroll);
      window.removeEventListener("resize",    onResize);
      renderer.dispose();
      geo.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        // Fade out completely on the left half so text stays 100% readable
        maskImage: "linear-gradient(to right, transparent 0%, transparent 35%, black 65%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 35%, black 65%)",
      }}
    />
  );
}
