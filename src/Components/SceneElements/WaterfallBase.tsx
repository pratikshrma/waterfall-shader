import * as THREE from 'three'

interface WaterfallBaseProps {
  nodes: any
  material: THREE.ShaderMaterial
}

export default function WaterfallBase({ nodes, material }: WaterfallBaseProps) {
  return (
    <>
      <mesh
        name="Plane012"
        geometry={nodes.Plane012.geometry}
        material={material}
        position={[-0.981, 0.126, 10.009]}
        scale={[13.769, 10.033, 10.033]}
      />
      <mesh
        name="Plane008"
        geometry={nodes.Plane008.geometry}
        material={material}
        position={[-0.981, 12.651, -19.482]}
        scale={[13.769, 10.033, 10.033]}
      />
    </>
  )
}
