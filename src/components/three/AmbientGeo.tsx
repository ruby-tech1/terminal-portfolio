import { useEffect, useRef } from "react";
import * as THREE from "three";

export function AmbientGeo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.innerWidth < 640) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // ── Renderer ─────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(120, 120);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.cssText = "width:100%;height:100%";
    container.appendChild(renderer.domElement);

    // ── Scene & Camera ────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 3.2);

    // ── Mesh ──────────────────────────────────────────────
    const geo  = new THREE.IcosahedronGeometry(1, 1);
    const mesh = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        wireframe: true,
        transparent: true,
        opacity: 0.32,
      }),
    );
    scene.add(mesh);

    const light = new THREE.PointLight(0x00ff88, 2, 6, 2);
    light.position.set(1.5, 1.5, 1.5);
    scene.add(light);

    // ── Animation loop ────────────────────────────────────
    const clock = new THREE.Clock();
    let   rafId: number;

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      const t = clock.getElapsedTime() * 0.28;
      mesh.rotation.x = t * 0.7;
      mesh.rotation.y = t;
      mesh.rotation.z = t * 0.4;
      renderer.render(scene, camera);
    };
    tick();

    // ── Cleanup ───────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
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
        top: "4.5rem",
        right: "1.5rem",
        width: 120,
        height: 120,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.6,
      }}
    />
  );
}
