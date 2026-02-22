import * as THREE from 'three'

interface WaterfallSplashAreaProps {
  nodes: any
  material: THREE.ShaderMaterial
}

export default function WaterfallSplashArea({ nodes, material }: WaterfallSplashAreaProps) {
  return (
    <>
      <mesh
        name="NurbsPath"
        geometry={nodes.NurbsPath.geometry}
        material={material}
        position={[-12.399, 0.298, -0.85]}
        rotation={[0.008, 0.231, -0.03]}
        scale={[1.727, 1.272, 1.403]}
      />
      <mesh
        name="NurbsPath001"
        geometry={nodes.NurbsPath001.geometry}
        material={material}
        position={[-10.298, 12.123, -9.04]}
        rotation={[0, 0.162, 0.003]}
        scale={[1.225, 1.097, 1.1]}
      />
      <mesh
        name="NurbsPath002"
        geometry={nodes.NurbsPath002.geometry}
        material={material}
        position={[-12.447, -1.068, -0.142]}
        rotation={[0.008, 0.231, -0.03]}
        scale={[1.656, 1.272, 1.399]}
      />
      <mesh
        name="NurbsPath003"
        geometry={nodes.NurbsPath003.geometry}
        material={material}
        position={[-11.267, 13.268, -27.435]}
        rotation={[0.008, 0.231, -0.03]}
        scale={[1.475, 1.199, 1.392]}
      />
      <mesh
        name="NurbsPath004"
        geometry={nodes.NurbsPath004.geometry}
        material={material}
        position={[-12.447, 11.98, -26.727]}
        rotation={[0.008, 0.231, -0.03]}
        scale={[1.656, 1.199, 1.399]}
      />
      <group name="foamdisplace" position={[-1.307, 20.327, 11.767]} scale={4.458} />
    </>
  )
}
