"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Procedural "field": a slowly drifting cloud of small luminous points
// arranged on a perturbed grid. Mouse offsets the field gently (max 24px-ish
// equivalent in normalized device coords). Lightweight — ~3,200 points, no
// post-processing — to keep first-load lean.

function FieldPoints() {
  const ref = useRef<THREE.Points>(null);
  const { viewport, pointer } = useThree();

  const { positions, colors } = useMemo(() => {
    const N = 3200;
    const positions = new Float32Array(N * 3);
    const colors = new Float32Array(N * 3);
    const palette = [
      new THREE.Color("#7C5CFF"),
      new THREE.Color("#22D3EE"),
      new THREE.Color("#5EEAD4"),
      new THREE.Color("#F5C97A"),
      new THREE.Color("#A99BFF"),
    ];
    for (let i = 0; i < N; i++) {
      const r = Math.sqrt(Math.random()) * 6.0;
      const theta = Math.random() * Math.PI * 2;
      const x = Math.cos(theta) * r + (Math.random() - 0.5) * 0.4;
      const y = Math.sin(theta) * r * 0.4 + (Math.random() - 0.5) * 0.4;
      const z = (Math.random() - 0.5) * 2.0;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      const c = palette[i % palette.length]!;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.02;
    const targetX = pointer.y * 0.05;
    const targetY = pointer.x * 0.05;
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.04;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.04;
    const s = Math.min(viewport.width, viewport.height) / 8;
    ref.current.scale.setScalar(s);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function FieldCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      dpr={[1, 1.5]}
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <FieldPoints />
      </Suspense>
    </Canvas>
  );
}
