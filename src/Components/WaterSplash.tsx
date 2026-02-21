import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BUBBLE_COUNT = 400;
const GRAVITY = 9.8;

function createBubble(prewarm = false) {
  const angle = Math.random() * Math.PI * 2;
  const speed = Math.random() * 3 + 1;
  const maxLife = Math.random() * 1.8 + 0.6;

  return {
    x: (Math.random() - 0.5) * 0.4,
    y: 0,
    z: (Math.random() - 0.5) * 0.4,
    vx: Math.cos(angle) * speed * 0.6,
    vy: Math.random() * speed + 1.5,
    vz: Math.sin(angle) * speed * 0.6,
    life: prewarm ? Math.random() * maxLife : 0,
    maxLife,
    scale: Math.random() * 0.04 + 0.01,
  };
}

export default function WaterfallSplash({ position = [0, 0, 0] }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const bubbles = useMemo(
    () => Array.from({ length: BUBBLE_COUNT }, () => createBubble(true)),
    []
  );

  useFrame((_, delta) => {
    const d = Math.min(delta, 0.05);

    for (let i = 0; i < BUBBLE_COUNT; i++) {
      const b = bubbles[i];
      b.life += d;

      if (b.life >= b.maxLife) {
        Object.assign(bubbles[i], createBubble(false));
        dummy.scale.setScalar(0);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
        continue;
      }
      b.vy -= GRAVITY * d;

      b.x += b.vx * d;
      b.y += b.vy * d;
      b.z += b.vz * d;

      const progress = b.life / b.maxLife;
      const scale = b.scale * (1 - progress * 0.5);

      dummy.position.set(
        position[0] + b.x,
        position[1] + b.y,
        position[2] + b.z
      );
      dummy.scale.setScalar(Math.max(scale, 0));
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, BUBBLE_COUNT]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshPhysicalMaterial
        color="#a8d8f0"
        transparent
        opacity={0.7}
        roughness={0.05}
        metalness={0.0}
        transmission={0.9}
        thickness={0.5}
      />
    </instancedMesh>
  );
}
