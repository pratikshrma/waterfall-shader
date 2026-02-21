import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
    Plane001: THREE.Mesh
    NurbsPath: THREE.Mesh
    NurbsPath001: THREE.Mesh
    Plane004: THREE.Mesh
    Plane005: THREE.Mesh
    bubbleplane004: THREE.Mesh
    bubbleplane005: THREE.Mesh
    Plane007: THREE.Mesh
    bubbleplane009: THREE.Mesh
    NurbsPath002: THREE.Mesh
    Plane002: THREE.Mesh
    bubbleplane010: THREE.Mesh
    bubbleplane011: THREE.Mesh
    bubbleplane014: THREE.Mesh
    Plane003: THREE.Mesh
    Plane009: THREE.Mesh
    Plane010: THREE.Mesh
    Plane011: THREE.Mesh
    Plane012: THREE.Mesh
    Plane013: THREE.Mesh
    Plane014: THREE.Mesh
    Plane015: THREE.Mesh
    Plane016: THREE.Mesh
    Plane017: THREE.Mesh
    Plane018: THREE.Mesh
    Plane008: THREE.Mesh
    Plane019: THREE.Mesh
    Plane020: THREE.Mesh
    Plane021: THREE.Mesh
    Plane022: THREE.Mesh
    NurbsPath003: THREE.Mesh
    NurbsPath004: THREE.Mesh
    Plane024: THREE.Mesh
    Icosphere: THREE.Mesh
    Icosphere001: THREE.Mesh
    Icosphere002: THREE.Mesh
    Icosphere003: THREE.Mesh
    Icosphere004: THREE.Mesh
    Icosphere005: THREE.Mesh
    Icosphere006: THREE.Mesh
    Icosphere007: THREE.Mesh
    Icosphere008: THREE.Mesh
    Icosphere009: THREE.Mesh
    Icosphere010: THREE.Mesh
    Icosphere011: THREE.Mesh
    Icosphere012: THREE.Mesh
    Icosphere013: THREE.Mesh
    Icosphere014: THREE.Mesh
    Icosphere015: THREE.Mesh
    Icosphere016: THREE.Mesh
    Icosphere017: THREE.Mesh
    Icosphere018: THREE.Mesh
    Icosphere020: THREE.Mesh
    Icosphere021: THREE.Mesh
    Icosphere022: THREE.Mesh
    Icosphere023: THREE.Mesh
    Icosphere024: THREE.Mesh
    Icosphere025: THREE.Mesh
    Icosphere026: THREE.Mesh
    Icosphere027: THREE.Mesh
    Icosphere028: THREE.Mesh
    Icosphere029: THREE.Mesh
    Icosphere030: THREE.Mesh
    Icosphere031: THREE.Mesh
    Icosphere032: THREE.Mesh
    Icosphere033: THREE.Mesh
    Icosphere034: THREE.Mesh
    Icosphere035: THREE.Mesh
    Icosphere036: THREE.Mesh
    Icosphere037: THREE.Mesh
    Icosphere038: THREE.Mesh
    Icosphere039: THREE.Mesh
    Icosphere040: THREE.Mesh
    Icosphere041: THREE.Mesh
    Icosphere042: THREE.Mesh
    Icosphere043: THREE.Mesh
    Icosphere044: THREE.Mesh
    Icosphere045: THREE.Mesh
  }
}

export default function WaterFallModel() {
  const { nodes } = useGLTF('models/wholeScene.glb') as unknown as GLTFResult
  return (
    <group>
      <group name="Scene">
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          position={[-12.455, 5.133, -1.888]}
          scale={[3.08, 1.912, 1.912]}
        />
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={nodes.Plane001.material}
          position={[5.646, 2.958, -11.967]}
          rotation={[1.286, 0, 0]}
        />
        <mesh
          name="NurbsPath"
          geometry={nodes.NurbsPath.geometry}
          material={nodes.NurbsPath.material}
          position={[-12.399, 0.298, -0.85]}
          rotation={[0.008, 0.231, -0.03]}
          scale={[1.727, 1.272, 1.403]}
        />
        <group name="foamdisplace" position={[-1.307, 20.327, 11.767]} scale={4.458} />
        <mesh
          name="NurbsPath001"
          geometry={nodes.NurbsPath001.geometry}
          material={nodes.NurbsPath001.material}
          position={[-10.298, 12.123, -9.04]}
          rotation={[0, 0.162, 0.003]}
          scale={[1.225, 1.097, 1.1]}
        />
        <mesh
          name="Plane004"
          geometry={nodes.Plane004.geometry}
          material={nodes.Plane004.material}
          position={[-5.385, 5.133, -1.724]}
          rotation={[0, 0.08, 0]}
          scale={[2.926, 1.912, 1.917]}
        />
        <mesh
          name="Plane005"
          geometry={nodes.Plane005.geometry}
          material={nodes.Plane005.material}
          position={[-0.981, -0.161, 10.009]}
          scale={[13.769, 10.033, 10.033]}
        />
        <group name="bubbles" position={[-13.165, -0.829, -34.37]} />
        <mesh
          name="bubbleplane004"
          geometry={nodes.bubbleplane004.geometry}
          material={nodes.bubbleplane004.material}
          position={[-6.702, 1.89, 0.035]}
          rotation={[Math.PI / 2, 0, -0.087]}
          scale={[1.179, 1.083, 1.082]}
        />
        <mesh
          name="bubbleplane005"
          geometry={nodes.bubbleplane005.geometry}
          material={nodes.bubbleplane005.material}
          position={[8.398, 13.227, -9.154]}
          rotation={[Math.PI / 2, 0, -0.087]}
          scale={1.082}
        />
        <mesh
          name="Plane007"
          geometry={nodes.Plane007.geometry}
          material={nodes.Plane007.material}
          position={[-18.639, 5.133, -1.888]}
          scale={[2.95, 1.912, 1.912]}
        />
        <mesh
          name="bubbleplane009"
          geometry={nodes.bubbleplane009.geometry}
          material={nodes.bubbleplane009.material}
          position={[-4.241, 1.171, 7.119]}
          rotation={[0.595, -0.667, 0.064]}
          scale={[1.077, 1.02, 1.056]}
        />
        <mesh
          name="NurbsPath002"
          geometry={nodes.NurbsPath002.geometry}
          material={nodes.NurbsPath002.material}
          position={[-12.447, -1.068, -0.142]}
          rotation={[0.008, 0.231, -0.03]}
          scale={[1.656, 1.272, 1.399]}
        />
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={nodes.Plane002.material}
          position={[0.643, 5.133, -1.724]}
          rotation={[0, 0.08, 0]}
          scale={[2.903, 1.912, 1.917]}
        />
        <mesh
          name="bubbleplane010"
          geometry={nodes.bubbleplane010.geometry}
          material={nodes.bubbleplane010.material}
          position={[-10.713, 1.801, 5.147]}
          rotation={[1.081, -0.448, 0.488]}
          scale={[1.115, 1.071, 1.072]}
        />
        <mesh
          name="bubbleplane011"
          geometry={nodes.bubbleplane011.geometry}
          material={nodes.bubbleplane011.material}
          position={[5.121, 1.621, 3.28]}
          rotation={[0.394, 0.011, 0.239]}
          scale={[1.573, 1.457, 1.45]}
        />
        <mesh
          name="bubbleplane014"
          geometry={nodes.bubbleplane014.geometry}
          material={nodes.bubbleplane014.material}
          position={[10.365, 11.803, -7.209]}
          rotation={[1.03, -0.052, 0.684]}
          scale={[0.917, 1.311, 1.311]}
        />
        <mesh
          name="Plane003"
          geometry={nodes.Plane003.geometry}
          material={nodes.Plane003.material}
          position={[-7.765, 1.892, 0.923]}
          scale={[6.431, 1.306, 1.306]}
        />
        <mesh
          name="Plane009"
          geometry={nodes.Plane009.geometry}
          material={nodes.Plane009.material}
          position={[5.27, 1.099, 0.923]}
          scale={[6.427, 1.306, 1.306]}
        />
        <mesh
          name="Plane010"
          geometry={nodes.Plane010.geometry}
          material={nodes.Plane010.material}
          position={[-6.254, 13.031, -9.14]}
          scale={[6.18, 1.306, 1.306]}
        />
        <mesh
          name="Plane011"
          geometry={nodes.Plane011.geometry}
          material={nodes.Plane011.material}
          position={[4.998, 13.031, -9.14]}
          scale={[5.688, 1.331, 1.331]}
        />
        <mesh
          name="Plane012"
          geometry={nodes.Plane012.geometry}
          material={nodes.Plane012.material}
          position={[-0.981, 0.126, 10.009]}
          scale={[13.769, 10.033, 10.033]}
        />
        <mesh
          name="Plane013"
          geometry={nodes.Plane013.geometry}
          material={nodes.Plane013.material}
          position={[10.522, 7.583, -3.866]}
          rotation={[-2.817, -1.504, 2.53]}
          scale={[2.147, 1.241, 1.241]}
        />
        <mesh
          name="Plane014"
          geometry={nodes.Plane014.geometry}
          material={nodes.Plane014.material}
          position={[-12.547, 7.583, -3.866]}
          rotation={[-0.276, -1.492, -1.21]}
          scale={[2.147, 1.241, 1.241]}
        />
        <mesh
          name="Plane015"
          geometry={nodes.Plane015.geometry}
          material={nodes.Plane015.material}
          position={[10.522, 1.681, 10.626]}
          rotation={[-1.2, -1.492, -1.21]}
          scale={[2.147, 1.242, 1.311]}
        />
        <mesh
          name="Plane016"
          geometry={nodes.Plane016.geometry}
          material={nodes.Plane016.material}
          position={[-13.094, 2.153, 9.414]}
          rotation={[-1.2, -1.492, -1.21]}
          scale={[2.147, 1.241, 1.241]}
        />
        <mesh
          name="Plane017"
          geometry={nodes.Plane017.geometry}
          material={nodes.Plane017.material}
          position={[-1.368, 1.417, 16.247]}
          rotation={[-0.073, 0.02, -0.009]}
          scale={[2.147, 1.242, 1.311]}
        />
        <mesh
          name="Plane018"
          geometry={nodes.Plane018.geometry}
          material={nodes.Plane018.material}
          position={[-2.219, 12.968, -6.819]}
          rotation={[1.999, 0, 0]}
          scale={[11.952, 1.331, 1.331]}
        />
        <mesh
          name="Plane008"
          geometry={nodes.Plane008.geometry}
          material={nodes.Plane008.material}
          position={[-0.981, 12.651, -19.482]}
          scale={[13.769, 10.033, 10.033]}
        />
        <mesh
          name="Plane019"
          geometry={nodes.Plane019.geometry}
          material={nodes.Plane019.material}
          position={[-12.455, 18.333, -27.76]}
          scale={[3.08, 1.912, 1.912]}
        />
        <mesh
          name="Plane020"
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
          position={[-5.385, 18.333, -27.596]}
          rotation={[0, 0.08, 0]}
          scale={[2.926, 1.912, 1.917]}
        />
        <mesh
          name="Plane021"
          geometry={nodes.Plane021.geometry}
          material={nodes.Plane021.material}
          position={[-18.639, 18.333, -27.76]}
          scale={[2.95, 1.912, 1.912]}
        />
        <mesh
          name="Plane022"
          geometry={nodes.Plane022.geometry}
          material={nodes.Plane022.material}
          position={[-0.037, 18.333, -27.596]}
          rotation={[0, 0.08, 0]}
          scale={[2.903, 1.912, 1.917]}
        />
        <mesh
          name="NurbsPath003"
          geometry={nodes.NurbsPath003.geometry}
          material={nodes.NurbsPath003.material}
          position={[-11.267, 13.268, -27.435]}
          rotation={[0.008, 0.231, -0.03]}
          scale={[1.475, 1.199, 1.392]}
        />
        <mesh
          name="NurbsPath004"
          geometry={nodes.NurbsPath004.geometry}
          material={nodes.NurbsPath004.material}
          position={[-12.447, 11.98, -26.727]}
          rotation={[0.008, 0.231, -0.03]}
          scale={[1.656, 1.199, 1.399]}
        />
        <mesh
          name="Plane024"
          geometry={nodes.Plane024.geometry}
          material={nodes.Plane024.material}
          position={[1.525, 26.024, -34.728]}
          rotation={[1.562, 0, 0]}
          scale={[13.16, 1.306, 1.306]}
        />
        <mesh
          name="Icosphere"
          geometry={nodes.Icosphere.geometry}
          material={nodes.Icosphere.material}
          position={[-15.487, 2.94, -1.56]}
          rotation={[0.036, -0.067, -0.193]}
          scale={[2.104, 2.5, 2.032]}
        />
        <mesh
          name="Icosphere001"
          geometry={nodes.Icosphere001.geometry}
          material={nodes.Icosphere001.material}
          position={[-15.791, -0.413, 2.009]}
          rotation={[-0.453, -0.114, 0.506]}
          scale={[2.579, 3.11, 2.51]}
        />
        <mesh
          name="Icosphere002"
          geometry={nodes.Icosphere002.geometry}
          material={nodes.Icosphere002.material}
          position={[13.727, 0.669, 0.423]}
          rotation={[-0.453, -0.114, 0.506]}
          scale={[2.579, 3.11, 2.51]}
        />
        <mesh
          name="Icosphere003"
          geometry={nodes.Icosphere003.geometry}
          material={nodes.Icosphere003.material}
          position={[12.501, 4.14, -1.786]}
          rotation={[0.242, 0.116, 0.363]}
          scale={[1.925, 2.303, 2.423]}
        />
        <mesh
          name="Icosphere004"
          geometry={nodes.Icosphere004.geometry}
          material={nodes.Icosphere004.material}
          position={[-15.188, 6.681, -3.145]}
          rotation={[-0.767, 0.083, 0.076]}
          scale={[1.894, 2.657, 1.854]}
        />
        <mesh
          name="Icosphere005"
          geometry={nodes.Icosphere005.geometry}
          material={nodes.Icosphere005.material}
          position={[12.79, 6.79, -3.289]}
          rotation={[-0.472, -0.298, 0.412]}
          scale={[1.754, 2.108, 1.711]}
        />
        <mesh
          name="Icosphere006"
          geometry={nodes.Icosphere006.geometry}
          material={nodes.Icosphere006.material}
          position={[-18.154, 1.595, -2.491]}
          rotation={[0.35, -0.035, 1.206]}
          scale={[1.684, 2.127, 1.677]}
        />
        <mesh
          name="Icosphere007"
          geometry={nodes.Icosphere007.geometry}
          material={nodes.Icosphere007.material}
          position={[15.655, 2.691, -1.407]}
          rotation={[-0.2, -0.805, 0.582]}
          scale={[1.603, 1.956, 1.614]}
        />
        <mesh
          name="Icosphere008"
          geometry={nodes.Icosphere008.geometry}
          material={nodes.Icosphere008.material}
          position={[-15.104, 9.563, -5.488]}
          rotation={[-0.45, 0.311, -2.435]}
          scale={[1.893, 2.738, 1.89]}
        />
        <mesh
          name="Icosphere009"
          geometry={nodes.Icosphere009.geometry}
          material={nodes.Icosphere009.material}
          position={[-15.305, 12.706, -7.985]}
          rotation={[-0.45, 0.311, -2.435]}
          scale={[1.863, 2.694, 1.86]}
        />
        <mesh
          name="Icosphere010"
          geometry={nodes.Icosphere010.geometry}
          material={nodes.Icosphere010.material}
          position={[12.533, 12.878, -9.748]}
          rotation={[-0.472, -0.298, 0.412]}
          scale={[1.754, 2.108, 1.711]}
        />
        <mesh
          name="Icosphere011"
          geometry={nodes.Icosphere011.geometry}
          material={nodes.Icosphere011.material}
          position={[12.522, 9.561, -6.678]}
          rotation={[-0.795, -0.548, -0.429]}
          scale={[2.335, 2.805, 2.278]}
        />
        <mesh
          name="Icosphere012"
          geometry={nodes.Icosphere012.geometry}
          material={nodes.Icosphere012.material}
          position={[-15.804, -0.376, 6.64]}
          rotation={[-0.984, 0.602, 0.855]}
          scale={[1.68, 2.072, 1.682]}
        />
        <mesh
          name="Icosphere013"
          geometry={nodes.Icosphere013.geometry}
          material={nodes.Icosphere013.material}
          position={[-15.873, -0.376, 10.064]}
          rotation={[-0.72, 0.062, 0.826]}
          scale={[1.527, 1.882, 1.502]}
        />
        <mesh
          name="Icosphere014"
          geometry={nodes.Icosphere014.geometry}
          material={nodes.Icosphere014.material}
          position={[-18.305, -1.783, 6.677]}
          rotation={[-1.853, 0.574, -3.14]}
          scale={[1.293, 1.548, 1.273]}
        />
        <mesh
          name="Icosphere015"
          geometry={nodes.Icosphere015.geometry}
          material={nodes.Icosphere015.material}
          position={[13.493, -0.376, 4.17]}
          rotation={[2.158, 0.602, 0.855]}
          scale={[-1.68, -2.072, -1.682]}
        />
        <mesh
          name="Icosphere016"
          geometry={nodes.Icosphere016.geometry}
          material={nodes.Icosphere016.material}
          position={[13.562, -0.376, 7.593]}
          rotation={[2.422, 0.062, 0.826]}
          scale={[-1.527, -1.882, -1.502]}
        />
        <mesh
          name="Icosphere017"
          geometry={nodes.Icosphere017.geometry}
          material={nodes.Icosphere017.material}
          position={[15.994, -1.783, 4.206]}
          rotation={[1.289, 0.574, -3.14]}
          scale={[-1.293, -1.548, -1.273]}
        />
        <mesh
          name="Icosphere018"
          geometry={nodes.Icosphere018.geometry}
          material={nodes.Icosphere018.material}
          position={[13.344, -0.557, 11.674]}
          rotation={[1.662, -1.177, -0.473]}
          scale={[-1.713, -2.662, -1.601]}
        />
        <mesh
          name="Icosphere020"
          geometry={nodes.Icosphere020.geometry}
          material={nodes.Icosphere020.material}
          position={[-15.493, -0.376, 12.538]}
          rotation={[-0.885, 0.555, 1.344]}
          scale={[1.635, 2.058, 1.65]}
        />
        <mesh
          name="Icosphere021"
          geometry={nodes.Icosphere021.geometry}
          material={nodes.Icosphere021.material}
          position={[-15.502, -0.376, 15.597]}
          rotation={[-1.147, 0.764, 1.765]}
          scale={[2.016, 2.522, 2.05]}
        />
        <mesh
          name="Icosphere022"
          geometry={nodes.Icosphere022.geometry}
          material={nodes.Icosphere022.material}
          position={[12.724, -0.376, 19.143]}
          rotation={[2.422, 0.062, 0.826]}
          scale={[-2.512, -3.095, -2.47]}
        />
        <mesh
          name="Icosphere023"
          geometry={nodes.Icosphere023.geometry}
          material={nodes.Icosphere023.material}
          position={[-14.042, -1.011, 19.206]}
          rotation={[-1.43, -0.16, -1.701]}
          scale={[-2.334, -2.968, -2.335]}
        />
        <mesh
          name="Icosphere024"
          geometry={nodes.Icosphere024.geometry}
          material={nodes.Icosphere024.material}
          position={[-0.968, -1.141, 19.501]}
          rotation={[-2.904, 0.132, -1.695]}
          scale={[-2.348, -3.838, -2.356]}
        />
        <mesh
          name="Icosphere025"
          geometry={nodes.Icosphere025.geometry}
          material={nodes.Icosphere025.material}
          position={[7.612, -1.141, 19.501]}
          rotation={[-2.914, -0.16, -1.701]}
          scale={[-2.339, -2.958, -2.343]}
        />
        <mesh
          name="Icosphere026"
          geometry={nodes.Icosphere026.geometry}
          material={nodes.Icosphere026.material}
          position={[-10.042, -1.141, 19.501]}
          rotation={[-2.914, -0.16, -1.701]}
          scale={[-2.331, -2.269, -2.33]}
        />
        <mesh
          name="Icosphere027"
          geometry={nodes.Icosphere027.geometry}
          material={nodes.Icosphere027.material}
          position={[3.899, -1.141, 19.501]}
          rotation={[-2.914, -0.16, -1.701]}
          scale={[-2.331, -1.841, -2.33]}
        />
        <mesh
          name="Icosphere028"
          geometry={nodes.Icosphere028.geometry}
          material={nodes.Icosphere028.material}
          position={[-5.986, -0.738, 19.524]}
          rotation={[2.722, -1.132, -1.052]}
          scale={[-2.676, -2.477, -2.874]}
        />
        <mesh
          name="Icosphere029"
          geometry={nodes.Icosphere029.geometry}
          material={nodes.Icosphere029.material}
          position={[14.141, -0.557, 15.09]}
          rotation={[0.472, -0.572, -1.872]}
          scale={[-2.029, -3.154, -1.896]}
        />
        <mesh
          name="Icosphere030"
          geometry={nodes.Icosphere030.geometry}
          material={nodes.Icosphere030.material}
          position={[19.992, -3.046, 0.39]}
          rotation={[2.422, 0.062, 0.826]}
          scale={[-3.72, -4.585, -3.658]}
        />
        <mesh
          name="Icosphere031"
          geometry={nodes.Icosphere031.geometry}
          material={nodes.Icosphere031.material}
          position={[-19.734, -2.945, 7.641]}
          rotation={[2.422, 0.062, 0.826]}
          scale={[-3.72, -4.585, -3.658]}
        />
        <mesh
          name="Icosphere032"
          geometry={nodes.Icosphere032.geometry}
          material={nodes.Icosphere032.material}
          position={[12.533, 12.878, -13.39]}
          rotation={[-0.465, 0.249, 0.684]}
          scale={[1.916, 2.302, 1.869]}
        />
        <mesh
          name="Icosphere033"
          geometry={nodes.Icosphere033.geometry}
          material={nodes.Icosphere033.material}
          position={[12.533, 12.878, -22.462]}
          rotation={[-0.465, 0.249, 0.684]}
          scale={[2.336, 2.417, 3.113]}
        />
        <mesh
          name="Icosphere034"
          geometry={nodes.Icosphere034.geometry}
          material={nodes.Icosphere034.material}
          position={[12.615, 12.878, -17.333]}
          rotation={[-0.8, 0.921, 1.248]}
          scale={[2.161, 2.237, 2.881]}
        />
        <mesh
          name="Icosphere035"
          geometry={nodes.Icosphere035.geometry}
          material={nodes.Icosphere035.material}
          position={[-15.246, 12.878, -13.39]}
          rotation={[-0.465, 0.249, 0.684]}
          scale={[1.916, 2.302, 1.869]}
        />
        <mesh
          name="Icosphere036"
          geometry={nodes.Icosphere036.geometry}
          material={nodes.Icosphere036.material}
          position={[-15.246, 12.878, -22.462]}
          rotation={[-0.465, 0.249, 0.684]}
          scale={[2.336, 2.417, 3.113]}
        />
        <mesh
          name="Icosphere037"
          geometry={nodes.Icosphere037.geometry}
          material={nodes.Icosphere037.material}
          position={[-15.164, 12.878, -17.333]}
          rotation={[-0.8, 0.921, 1.248]}
          scale={[2.161, 2.237, 2.881]}
        />
        <mesh
          name="Icosphere038"
          geometry={nodes.Icosphere038.geometry}
          material={nodes.Icosphere038.material}
          position={[-5.246, 12.878, -31.061]}
          rotation={[-1.068, -1.052, -0.445]}
          scale={[1.9, 2.253, 1.856]}
        />
        <mesh
          name="Icosphere039"
          geometry={nodes.Icosphere039.geometry}
          material={nodes.Icosphere039.material}
          position={[4.387, 12.569, -31.155]}
          rotation={[-0.589, -0.672, 0.167]}
          scale={[4.595, 2.708, 3.538]}
        />
        <mesh
          name="Icosphere040"
          geometry={nodes.Icosphere040.geometry}
          material={nodes.Icosphere040.material}
          position={[-1.304, 12.878, -30.946]}
          rotation={[-0.501, -0.442, 0.33]}
          scale={[2.143, 2.189, 2.861]}
        />
        <mesh
          name="Icosphere041"
          geometry={nodes.Icosphere041.geometry}
          material={nodes.Icosphere041.material}
          position={[11.55, 12.878, -28.994]}
          rotation={[-0.5, 0.436, 0.788]}
          scale={[2.336, 2.417, 3.113]}
        />
        <mesh
          name="Icosphere042"
          geometry={nodes.Icosphere042.geometry}
          material={nodes.Icosphere042.material}
          position={[-15.641, 12.878, -10.853]}
          rotation={[-0.465, 0.249, 0.684]}
          scale={[1.815, 2.181, 1.771]}
        />
        <mesh
          name="Icosphere043"
          geometry={nodes.Icosphere043.geometry}
          material={nodes.Icosphere043.material}
          position={[-15.183, 12.878, -29.56]}
          rotation={[-0.493, -0.409, 0.35]}
          scale={[2.329, 2.761, 2.275]}
        />
        <mesh
          name="Icosphere044"
          geometry={nodes.Icosphere044.geometry}
          material={nodes.Icosphere044.material}
          position={[-11.515, 12.619, -30.431]}
          rotation={[-0.473, -0.308, 0.407]}
          scale={[5.324, 1.935, 1.837]}
        />
        <mesh
          name="Icosphere045"
          geometry={nodes.Icosphere045.geometry}
          material={nodes.Icosphere045.material}
          position={[-15.695, 11.721, -26.781]}
          rotation={[-0.493, -0.409, 0.35]}
          scale={[1.782, 2.113, 1.741]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/wholeScene.glb')
