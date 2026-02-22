import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import Waterfall from './SceneElements/Waterfall'
import WaterfallBase from './SceneElements/WaterfallBase'
import WaterfallSplashArea from './SceneElements/WaterfallSplashArea'
import Particles from './SceneElements/Particles'
// import Rocks from './SceneElements/Rocks'


interface WaterFallModelProps {
  waterfallMaterial: THREE.ShaderMaterial
  waterfallBaseMaterial: THREE.ShaderMaterial
  waterfallSplashAreaMaterial: THREE.ShaderMaterial
  rockMaterial: THREE.ShaderMaterial
}

export default function WaterFallModel({
  waterfallMaterial,
  waterfallBaseMaterial,
  waterfallSplashAreaMaterial,
  // rockMaterial,
}: WaterFallModelProps) {
  const { nodes } = useGLTF('models/wholeScene2.glb')
  const { scene: rockScene } = useGLTF('models/RocksModel.glb')
  return (
    <group>
      <group name="Scene">
        <Waterfall nodes={nodes} material={waterfallMaterial} />
        <Particles />
        <WaterfallSplashArea nodes={nodes} material={waterfallSplashAreaMaterial} />
        <WaterfallBase nodes={nodes} material={waterfallBaseMaterial} />
        {/* <Rocks nodes={nodes} material={rockMaterial} /> */}
        <primitive object={rockScene} />
      </group>
    </group>
  )
}

useGLTF.preload('models/wholeScene.glb')
