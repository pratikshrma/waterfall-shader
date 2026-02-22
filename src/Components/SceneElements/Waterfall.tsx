import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

interface WaterfallProps {
  nodes: any
  material: THREE.ShaderMaterial
}

const seededRandom = (index: number) => {
  const seed = index + 1
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export default function Waterfall({ nodes, material }: WaterfallProps) {
  const meshRefs = useRef<(THREE.Mesh | null)[]>([])

  const materials = useMemo(() => {
    return Array.from({ length: 9 }).map((_, i) => {
      const clonedMaterial = material.clone()
      clonedMaterial.uniforms.uRandomNumber.value = seededRandom(i)
      return clonedMaterial
    })
  }, [material])

  useFrame(() => {
    materials.forEach((mat) => {
      for (const key in material.uniforms) {
        if (key === 'uRandomNumber') continue
        
        const sourceUniform = material.uniforms[key]
        const targetUniform = mat.uniforms[key]
        
        if (targetUniform && sourceUniform) {
           targetUniform.value = sourceUniform.value
        }
      }
    })
  })

  return (
    <>
      <mesh
        ref={(el) => { meshRefs.current[0] = el }}
        name="Plane"
        geometry={nodes.Plane.geometry}
        material={materials[0]}
        position={[-12.455, 5.133, -1.888]}
        scale={[3.08, 1.912, 1.912]}
      />
      <mesh
        ref={(el) => { meshRefs.current[1] = el }}
        name="Plane004"
        geometry={nodes.Plane004.geometry}
        material={materials[1]}
        position={[-5.385, 5.133, -1.724]}
        rotation={[0, 0.08, 0]}
        scale={[2.926, 1.912, 1.917]}
      />
      <mesh
        ref={(el) => { meshRefs.current[2] = el }}
        name="Plane005"
        geometry={nodes.Plane005.geometry}
        material={materials[2]}
        position={[-0.981, -0.161, 10.009]}
        scale={[13.769, 10.033, 10.033]}
      />
      <mesh
        ref={(el) => { meshRefs.current[3] = el }}
        name="Plane007"
        geometry={nodes.Plane007.geometry}
        material={materials[3]}
        position={[-18.639, 5.133, -1.888]}
        scale={[2.95, 1.912, 1.912]}
      />
      <mesh
        ref={(el) => { meshRefs.current[4] = el }}
        name="Plane002"
        geometry={nodes.Plane002.geometry}
        material={materials[4]}
        position={[0.643, 5.133, -1.724]}
        rotation={[0, 0.08, 0]}
        scale={[2.903, 1.912, 1.917]}
      />
      <mesh
        ref={(el) => { meshRefs.current[5] = el }}
        name="Plane019"
        geometry={nodes.Plane019.geometry}
        material={materials[5]}
        position={[-12.455, 18.333, -27.76]}
        scale={[3.08, 1.912, 1.912]}
      />
      <mesh
        ref={(el) => { meshRefs.current[6] = el }}
        name="Plane020"
        geometry={nodes.Plane020.geometry}
        material={materials[6]}
        position={[-5.385, 18.333, -27.596]}
        rotation={[0, 0.08, 0]}
        scale={[2.926, 1.912, 1.917]}
      />
      <mesh
        ref={(el) => { meshRefs.current[7] = el }}
        name="Plane021"
        geometry={nodes.Plane021.geometry}
        material={materials[7]}
        position={[-18.639, 18.333, -27.76]}
        scale={[2.95, 1.912, 1.912]}
      />
      <mesh
        ref={(el) => { meshRefs.current[8] = el }}
        name="Plane022"
        geometry={nodes.Plane022.geometry}
        material={materials[8]}
        position={[-0.037, 18.333, -27.596]}
        rotation={[0, 0.08, 0]}
        scale={[2.903, 1.912, 1.917]}
      />
    </>
  )
}
