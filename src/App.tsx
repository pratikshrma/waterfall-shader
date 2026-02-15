import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Experience from "./Components/Experience"

const App = () => {
  return (
    <>
      <Canvas flat>
        <color attach='background' args={['#ccc']} />
        <OrbitControls />
        <Experience />
      </Canvas>
    </>
  )
}

export default App
