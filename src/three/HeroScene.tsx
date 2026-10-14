import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

const WireframeCore: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const innerMeshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25
      meshRef.current.rotation.y += delta * 0.35
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x -= delta * 0.4
      innerMeshRef.current.rotation.z += delta * 0.3
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Outer wireframe icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshStandardMaterial
          wireframe
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* Inner pulsing octahedron */}
      <mesh ref={innerMeshRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          wireframe
          color="#34d399"
          emissive="#10b981"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Point light in center */}
      <pointLight color="#38bdf8" intensity={4} distance={8} />
      <pointLight color="#34d399" intensity={3} distance={6} position={[0, 1, 0]} />
    </group>
  )
}

const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null)

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05
      pointsRef.current.rotation.x += delta * 0.02
    }
  })

  const particleCount = 450
  const positions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [])

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#38bdf8"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export const HeroScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Stars radius={50} depth={30} count={1200} factor={3} saturation={0.8} fade speed={1.2} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
          <WireframeCore />
        </Float>
        <ParticleField />
      </Canvas>
    </div>
  )
}
