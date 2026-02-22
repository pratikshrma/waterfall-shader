import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Experience from "./Components/Experience"
import * as THREE from 'three'

const App = () => {
  return (
    <>
      <Canvas flat gl={{ toneMapping: THREE.AgXToneMapping }} camera={{
        position: [-30, 30, 30]
      }}>
        <color attach='background' args={['#000000']} />
        <OrbitControls />
        <Experience />
      </Canvas>
    </>
  )
}

export default App
