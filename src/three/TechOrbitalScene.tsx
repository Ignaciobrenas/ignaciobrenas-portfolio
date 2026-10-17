import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { techStackData } from '../data/techStack'
import type { TechItem } from '../data/techStack'

interface TechNodeProps {
  tech: TechItem
  angleOffset: number
  onHover: (tech: TechItem | null) => void
  onSelect: (tech: TechItem) => void
  isSelected: boolean
}

const TechNode: React.FC<TechNodeProps> = ({ tech, angleOffset, onHover, onSelect, isSelected }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const timeRef = useRef(0)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    timeRef.current += delta
    const t = timeRef.current * tech.orbitSpeed * 0.35 + angleOffset
    const x = Math.cos(t) * tech.orbitRadius
    const z = Math.sin(t) * tech.orbitRadius
    const y = Math.sin(t * 1.5) * 0.35
    meshRef.current.position.set(x, y, z)
  })

  const isHighlighted = hovered || isSelected

  return (
    <mesh
      ref={meshRef}
      onPointerOver={(e) => {
        e.stopPropagation()
        setHovered(true)
        onHover(tech)
      }}
      onPointerOut={() => {
        setHovered(false)
        onHover(null)
      }}
      onClick={(e) => {
        e.stopPropagation()
        onSelect(tech)
      }}
    >
      <sphereGeometry args={[isHighlighted ? 0.38 : 0.28, 24, 24]} />
      <meshStandardMaterial
        color={isHighlighted ? '#ffffff' : tech.color}
        emissive={tech.color}
        emissiveIntensity={isHighlighted ? 2.2 : 0.9}
        roughness={0.15}
        metalness={0.8}
      />
    </mesh>
  )
}

const OrbitRings: React.FC = () => {
  const radii = [3.2, 4.5, 5.8, 7.2, 8.6, 9.8]
  return (
    <group>
      {radii.map((r, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[r - 0.02, r + 0.02, 64]} />
          <meshBasicMaterial
            color="#38bdf8"
            transparent
            opacity={0.12}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

const CentralCore: React.FC = () => {
  const coreRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4
      coreRef.current.rotation.x += delta * 0.2
    }
  })

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          wireframe
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={1}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#38bdf8"
          emissiveIntensity={1.2}
          roughness={0.1}
        />
      </mesh>
      <pointLight color="#38bdf8" intensity={5} distance={12} />
    </group>
  )
}

interface TechOrbitalSceneProps {
  onHoverTech: (tech: TechItem | null) => void
  onSelectTech: (tech: TechItem) => void
  selectedTech: TechItem | null
}

export const TechOrbitalScene: React.FC<TechOrbitalSceneProps> = ({
  onHoverTech,
  onSelectTech,
  selectedTech,
}) => {
  return (
    <div className="w-full h-[520px] md:h-[600px] relative rounded-2xl overflow-hidden border border-white/10 bg-[#07090e] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 8, 12], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 15, 10]} intensity={1} />
        <OrbitControls
          enableZoom={true}
          maxDistance={22}
          minDistance={5}
          maxPolarAngle={Math.PI / 2 + 0.1}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
        <CentralCore />
        <OrbitRings />

        {techStackData.map((tech, idx) => {
          const angle = (idx / techStackData.length) * Math.PI * 2
          return (
            <TechNode
              key={tech.id}
              tech={tech}
              angleOffset={angle}
              onHover={onHoverTech}
              onSelect={onSelectTech}
              isSelected={selectedTech?.id === tech.id}
            />
          )
        })}
      </Canvas>

      {/* Floating Active Node Pill in Corner of 3D Scene */}
      {selectedTech && (
        <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.4)] backdrop-blur-md">
          <span
            className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]"
            style={{ backgroundColor: selectedTech.color, color: selectedTech.color }}
          />
          <span className="text-white font-bold">{selectedTech.name}</span>
          <span className="text-gray-400">({selectedTech.level})</span>
        </div>
      )}

      {/* Interactive Controls Overlay Hint */}
      <div className="absolute top-4 left-4 pointer-events-none z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 border border-white/10 text-xs font-mono text-cyan-300 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>THREE.JS ORBITAL CONSTELLATION</span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-10 text-center font-mono text-xs text-gray-400 bg-black/60 backdrop-blur-md py-1.5 px-3 rounded-lg border border-white/5 mx-auto max-w-md">
        Rota arrastrando · Zoom con rueda · Clic en cualquier nodo para inspeccionar
      </div>
    </div>
  )
}
