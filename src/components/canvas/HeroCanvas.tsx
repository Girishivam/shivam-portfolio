import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

function StarField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(2500 * 3);
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 18;
    return arr;
  }, []);

  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x -= dt * 0.02;
      ref.current.rotation.y -= dt * 0.025;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={"#7dd3fc"}
        size={0.015}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function GlowingSphere({ position, color, scale = 1, speed = 1 }: { position: [number, number, number]; color: string; scale?: number; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
      ref.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function Scene({ mouse }: { mouse: { x: number; y: number } }) {
  const group = useRef<THREE.Group>(null);
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += (mouse.x * 0.4 - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (-mouse.y * 0.3 - group.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.4} color="#7dd3fc" />
      <pointLight position={[-5, -3, -2]} intensity={1.2} color="#c084fc" />

      <StarField />
      <GlowingSphere position={[-2.6, 0.4, 0]} color="#22d3ee" scale={1.1} />
      <GlowingSphere position={[2.4, -0.6, -1]} color="#a78bfa" scale={0.9} speed={-1} />
      <GlowingSphere position={[0, 1.6, -2]} color="#60a5fa" scale={0.6} speed={1.4} />
    </group>
  );
}

export function HeroCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <div
      className="absolute inset-0"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Scene mouse={mouse.current} />
        </Suspense>
      </Canvas>
    </div>
  );
}
