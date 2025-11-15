"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import CameraRig from "./CameraRig";

function ProOrb({ color }) {
  const orb = useRef();

  useFrame((state, delta) => {
    if (!orb.current) return;

    orb.current.rotation.y += delta * 0.3;
    orb.current.rotation.x += delta * 0.15;

    orb.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.12;
  });

  return (
    <group ref={orb}>
      {/* Liquid Metal Sphere */}
      <Sphere args={[1.3, 128, 128]}>
        <MeshDistortMaterial
          distort={0.28}     // daha güçlü efekt
          speed={1.4}
          roughness={0.05}
          metalness={0.85}
          envMapIntensity={1.2}
          color={color}
        />
      </Sphere>

      {/* Outer neon halo */}
      <Sphere scale={1.8}>
        <meshBasicMaterial color={color} transparent opacity={0.08} />
      </Sphere>

      {/* Outer fresnel rim */}
      <Sphere scale={1.4}>
        <meshBasicMaterial color={color} transparent opacity={0.18} />
      </Sphere>
    </group>
  );
}

export default function HeroCanvas() {
  const isDark =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const orbColor = isDark ? "#00ff99" : "#3b82f6";

  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <CameraRig />
        <ProOrb color={orbColor} />

        {/* Bloom Glow */}
        <EffectComposer>
          <Bloom
            intensity={1.2}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}