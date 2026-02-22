import * as THREE from 'three'

interface RocksProps {
  nodes: any
  material: THREE.ShaderMaterial
}

export default function Rocks({ nodes, material }: RocksProps) {
  return (
    <>
      <mesh
        name="Icosphere"
        geometry={nodes.Icosphere.geometry}
        material={material}
        position={[-15.487, 2.94, -1.56]}
        rotation={[0.036, -0.067, -0.193]}
        scale={[2.104, 2.5, 2.032]}
      />
      <mesh
        name="Icosphere001"
        geometry={nodes.Icosphere001.geometry}
        material={material}
        position={[-15.791, -0.413, 2.009]}
        rotation={[-0.453, -0.114, 0.506]}
        scale={[2.579, 3.11, 2.51]}
      />
      <mesh
        name="Icosphere002"
        geometry={nodes.Icosphere002.geometry}
        material={material}
        position={[13.727, 0.669, 0.423]}
        rotation={[-0.453, -0.114, 0.506]}
        scale={[2.579, 3.11, 2.51]}
      />
      <mesh
        name="Icosphere003"
        geometry={nodes.Icosphere003.geometry}
        material={material}
        position={[12.501, 4.14, -1.786]}
        rotation={[0.242, 0.116, 0.363]}
        scale={[1.925, 2.303, 2.423]}
      />
      <mesh
        name="Icosphere004"
        geometry={nodes.Icosphere004.geometry}
        material={material}
        position={[-15.188, 6.681, -3.145]}
        rotation={[-0.767, 0.083, 0.076]}
        scale={[1.894, 2.657, 1.854]}
      />
      <mesh
        name="Icosphere005"
        geometry={nodes.Icosphere005.geometry}
        material={material}
        position={[12.79, 6.79, -3.289]}
        rotation={[-0.472, -0.298, 0.412]}
        scale={[1.754, 2.108, 1.711]}
      />
      <mesh
        name="Icosphere006"
        geometry={nodes.Icosphere006.geometry}
        material={material}
        position={[-18.154, 1.595, -2.491]}
        rotation={[0.35, -0.035, 1.206]}
        scale={[1.684, 2.127, 1.677]}
      />
      <mesh
        name="Icosphere007"
        geometry={nodes.Icosphere007.geometry}
        material={material}
        position={[15.655, 2.691, -1.407]}
        rotation={[-0.2, -0.805, 0.582]}
        scale={[1.603, 1.956, 1.614]}
      />
      <mesh
        name="Icosphere008"
        geometry={nodes.Icosphere008.geometry}
        material={material}
        position={[-15.104, 9.563, -5.488]}
        rotation={[-0.45, 0.311, -2.435]}
        scale={[1.893, 2.738, 1.89]}
      />
      <mesh
        name="Icosphere009"
        geometry={nodes.Icosphere009.geometry}
        material={material}
        position={[-15.305, 12.706, -7.985]}
        rotation={[-0.45, 0.311, -2.435]}
        scale={[1.863, 2.694, 1.86]}
      />
      <mesh
        name="Icosphere010"
        geometry={nodes.Icosphere010.geometry}
        material={material}
        position={[12.533, 12.878, -9.748]}
        rotation={[-0.472, -0.298, 0.412]}
        scale={[1.754, 2.108, 1.711]}
      />
      <mesh
        name="Icosphere011"
        geometry={nodes.Icosphere011.geometry}
        material={material}
        position={[12.522, 9.561, -6.678]}
        rotation={[-0.795, -0.548, -0.429]}
        scale={[2.335, 2.805, 2.278]}
      />
      <mesh
        name="Icosphere012"
        geometry={nodes.Icosphere012.geometry}
        material={material}
        position={[-15.804, -0.376, 6.64]}
        rotation={[-0.984, 0.602, 0.855]}
        scale={[1.68, 2.072, 1.682]}
      />
      <mesh
        name="Icosphere013"
        geometry={nodes.Icosphere013.geometry}
        material={material}
        position={[-15.873, -0.376, 10.064]}
        rotation={[-0.72, 0.062, 0.826]}
        scale={[1.527, 1.882, 1.502]}
      />
      <mesh
        name="Icosphere014"
        geometry={nodes.Icosphere014.geometry}
        material={material}
        position={[-18.305, -1.783, 6.677]}
        rotation={[-1.853, 0.574, -3.14]}
        scale={[1.293, 1.548, 1.273]}
      />
      <mesh
        name="Icosphere015"
        geometry={nodes.Icosphere015.geometry}
        material={material}
        position={[13.493, -0.376, 4.17]}
        rotation={[2.158, 0.602, 0.855]}
        scale={[-1.68, -2.072, -1.682]}
      />
      <mesh
        name="Icosphere016"
        geometry={nodes.Icosphere016.geometry}
        material={material}
        position={[13.562, -0.376, 7.593]}
        rotation={[2.422, 0.062, 0.826]}
        scale={[-1.527, -1.882, -1.502]}
      />
      <mesh
        name="Icosphere017"
        geometry={nodes.Icosphere017.geometry}
        material={material}
        position={[15.994, -1.783, 4.206]}
        rotation={[1.289, 0.574, -3.14]}
        scale={[-1.293, -1.548, -1.273]}
      />
      <mesh
        name="Icosphere018"
        geometry={nodes.Icosphere018.geometry}
        material={material}
        position={[13.344, -0.557, 11.674]}
        rotation={[1.662, -1.177, -0.473]}
        scale={[-1.713, -2.662, -1.601]}
      />
      <mesh
        name="Icosphere020"
        geometry={nodes.Icosphere020.geometry}
        material={material}
        position={[-15.493, -0.376, 12.538]}
        rotation={[-0.885, 0.555, 1.344]}
        scale={[1.635, 2.058, 1.65]}
      />
      <mesh
        name="Icosphere021"
        geometry={nodes.Icosphere021.geometry}
        material={material}
        position={[-15.502, -0.376, 15.597]}
        rotation={[-1.147, 0.764, 1.765]}
        scale={[2.016, 2.522, 2.05]}
      />
      <mesh
        name="Icosphere022"
        geometry={nodes.Icosphere022.geometry}
        material={material}
        position={[12.724, -0.376, 19.143]}
        rotation={[2.422, 0.062, 0.826]}
        scale={[-2.512, -3.095, -2.47]}
      />
      <mesh
        name="Icosphere023"
        geometry={nodes.Icosphere023.geometry}
        material={material}
        position={[-14.042, -1.011, 19.206]}
        rotation={[-1.43, -0.16, -1.701]}
        scale={[-2.334, -2.968, -2.335]}
      />
      <mesh
        name="Icosphere024"
        geometry={nodes.Icosphere024.geometry}
        material={material}
        position={[-0.968, -1.141, 19.501]}
        rotation={[-2.904, 0.132, -1.695]}
        scale={[-2.348, -3.838, -2.356]}
      />
      <mesh
        name="Icosphere025"
        geometry={nodes.Icosphere025.geometry}
        material={material}
        position={[7.612, -1.141, 19.501]}
        rotation={[-2.914, -0.16, -1.701]}
        scale={[-2.339, -2.958, -2.343]}
      />
      <mesh
        name="Icosphere026"
        geometry={nodes.Icosphere026.geometry}
        material={material}
        position={[-10.042, -1.141, 19.501]}
        rotation={[-2.914, -0.16, -1.701]}
        scale={[-2.331, -2.269, -2.33]}
      />
      <mesh
        name="Icosphere027"
        geometry={nodes.Icosphere027.geometry}
        material={material}
        position={[3.899, -1.141, 19.501]}
        rotation={[-2.914, -0.16, -1.701]}
        scale={[-2.331, -1.841, -2.33]}
      />
      <mesh
        name="Icosphere028"
        geometry={nodes.Icosphere028.geometry}
        material={material}
        position={[-5.986, -0.738, 19.524]}
        rotation={[2.722, -1.132, -1.052]}
        scale={[-2.676, -2.477, -2.874]}
      />
      <mesh
        name="Icosphere029"
        geometry={nodes.Icosphere029.geometry}
        material={material}
        position={[14.141, -0.557, 15.09]}
        rotation={[0.472, -0.572, -1.872]}
        scale={[-2.029, -3.154, -1.896]}
      />
      <mesh
        name="Icosphere030"
        geometry={nodes.Icosphere030.geometry}
        material={material}
        position={[19.992, -3.046, 0.39]}
        rotation={[2.422, 0.062, 0.826]}
        scale={[-3.72, -4.585, -3.658]}
      />
      <mesh
        name="Icosphere031"
        geometry={nodes.Icosphere031.geometry}
        material={material}
        position={[-19.734, -2.945, 7.641]}
        rotation={[2.422, 0.062, 0.826]}
        scale={[-3.72, -4.585, -3.658]}
      />
      <mesh
        name="Icosphere032"
        geometry={nodes.Icosphere032.geometry}
        material={material}
        position={[12.533, 12.878, -13.39]}
        rotation={[-0.465, 0.249, 0.684]}
        scale={[1.916, 2.302, 1.869]}
      />
      <mesh
        name="Icosphere033"
        geometry={nodes.Icosphere033.geometry}
        material={material}
        position={[12.533, 12.878, -22.462]}
        rotation={[-0.465, 0.249, 0.684]}
        scale={[2.336, 2.417, 3.113]}
      />
      <mesh
        name="Icosphere034"
        geometry={nodes.Icosphere034.geometry}
        material={material}
        position={[12.615, 12.878, -17.333]}
        rotation={[-0.8, 0.921, 1.248]}
        scale={[2.161, 2.237, 2.881]}
      />
      <mesh
        name="Icosphere035"
        geometry={nodes.Icosphere035.geometry}
        material={material}
        position={[-15.246, 12.878, -13.39]}
        rotation={[-0.465, 0.249, 0.684]}
        scale={[1.916, 2.302, 1.869]}
      />
      <mesh
        name="Icosphere036"
        geometry={nodes.Icosphere036.geometry}
        material={material}
        position={[-15.246, 12.878, -22.462]}
        rotation={[-0.465, 0.249, 0.684]}
        scale={[2.336, 2.417, 3.113]}
      />
      <mesh
        name="Icosphere037"
        geometry={nodes.Icosphere037.geometry}
        material={material}
        position={[-15.164, 12.878, -17.333]}
        rotation={[-0.8, 0.921, 1.248]}
        scale={[2.161, 2.237, 2.881]}
      />
      <mesh
        name="Icosphere038"
        geometry={nodes.Icosphere038.geometry}
        material={material}
        position={[-5.246, 12.878, -31.061]}
        rotation={[-1.068, -1.052, -0.445]}
        scale={[1.9, 2.253, 1.856]}
      />
      <mesh
        name="Icosphere039"
        geometry={nodes.Icosphere039.geometry}
        material={material}
        position={[4.387, 12.569, -31.155]}
        rotation={[-0.589, -0.672, 0.167]}
        scale={[4.595, 2.708, 3.538]}
      />
      <mesh
        name="Icosphere040"
        geometry={nodes.Icosphere040.geometry}
        material={material}
        position={[-1.304, 12.878, -30.946]}
        rotation={[-0.501, -0.442, 0.33]}
        scale={[2.143, 2.189, 2.861]}
      />
      <mesh
        name="Icosphere041"
        geometry={nodes.Icosphere041.geometry}
        material={material}
        position={[11.55, 12.878, -28.994]}
        rotation={[-0.5, 0.436, 0.788]}
        scale={[2.336, 2.417, 3.113]}
      />
      <mesh
        name="Icosphere042"
        geometry={nodes.Icosphere042.geometry}
        material={material}
        position={[-15.641, 12.878, -10.853]}
        rotation={[-0.465, 0.249, 0.684]}
        scale={[1.815, 2.181, 1.771]}
      />
      <mesh
        name="Icosphere043"
        geometry={nodes.Icosphere043.geometry}
        material={material}
        position={[-15.183, 12.878, -29.56]}
        rotation={[-0.493, -0.409, 0.35]}
        scale={[2.329, 2.761, 2.275]}
      />
      <mesh
        name="Icosphere044"
        geometry={nodes.Icosphere044.geometry}
        material={material}
        position={[-11.515, 12.619, -30.431]}
        rotation={[-0.473, -0.308, 0.407]}
        scale={[5.324, 1.935, 1.837]}
      />
      <mesh
        name="Icosphere045"
        geometry={nodes.Icosphere045.geometry}
        material={material}
        position={[-15.695, 11.721, -26.781]}
        rotation={[-0.493, -0.409, 0.35]}
        scale={[1.782, 2.113, 1.741]}
      />
    </>
  )
}
