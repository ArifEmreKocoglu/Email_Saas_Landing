"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraRig() {
  const { camera } = useThree();
  const scrollRef = useRef(0);

  useFrame(() => {
    const targetZ = 5 + scrollRef.current * 0.002;
    camera.position.z += (targetZ - camera.position.z) * 0.05;
  });

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      scrollRef.current = window.scrollY;
    });
  }

  return null;
}