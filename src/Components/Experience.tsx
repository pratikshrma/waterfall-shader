import { useMemo, useRef } from "react"
import * as THREE from 'three'
import waterfallVertShader from '../Shaders/Waterfall/vert.glsl'
import waterfallFragShader from '../Shaders/Waterfall/frag.glsl'
import { useFrame } from "@react-three/fiber"
import { folder, useControls } from "leva"
// import { useGLTF } from '@react-three/drei'

const Experience = () => {
  const waterFallMeshRef = useRef<THREE.Mesh | null>(null)
  // const { nodes } = useGLTF('models/plane.glb')

  const { gradientStrength, noiseStep, noiseScale, colorLayerL1, colorLayerL2, colorLayerL3, colorLayerL4, mixStrength, longLineColor, shortLineColor, topFoam } = useControls(
    {
      'Colors': folder({
        colorLayerL1: {
          value: '#9DB7B1'
        },
        colorLayerL2: {
          value: '#2D5557'
        },
        colorLayerL3: {
          value: '#447B71'
        },
        colorLayerL4: {
          value: '#ff0000'
        },
        longLineColor: {
          value: '#00ff00'
        },
        shortLineColor: {
          value: '#00ff00'
        },
        topFoam: {
          value: '#c4c4c4'
        }
      }),
      'Layer 1': folder({
        gradientStrength: {
          value: 12.3,
          min: 0.0,
          max: 20.0,
          step: 0.01
        },
        mixStrength: {
          value: 0.3,
          min: 0.0,
          max: .5,
          step: 0.01
        },
        noiseStep: {
          value: 1,
          min: 0.0,
          max: 2.0,
          step: 0.01
        },
        noiseScale: {
          value: 5.0,
          min: 0.0,
          max: 20.0,
          step: 0.1
        },
      }),
      'Layer 2': folder({
      })
    }
  )

  const { waterfallGeometry, waterfallMaterial } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(1, 3)
    const mat = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      vertexShader: waterfallVertShader,
      fragmentShader: waterfallFragShader,
      uniforms: {
        uTime: { value: 0.0 },
        uGradientStrength: { value: 0.0 },
        uNoiseStep: { value: 0.0 },
        uNoiseScale: { value: 0.0 },
        uMixStrength: { value: 0.0 },
        uColorLayerL1: { value: new THREE.Color() },
        uColorLayerL2: { value: new THREE.Color() },
        uColorLayerL3: { value: new THREE.Color() },
        uColorLayerL4: { value: new THREE.Color() },
        uLongLineColor: { value: new THREE.Color() },
        uShortLineColor: { value: new THREE.Color() },
        uTopFoamColor: { value: new THREE.Color() }
      },
      toneMapped: false
    })
    return {
      waterfallGeometry: geo,
      waterfallMaterial: mat
    }
  }, [])

  useFrame((state) => {
    if (waterFallMeshRef.current) {
      const waterFallMaterial = waterFallMeshRef.current.material as THREE.ShaderMaterial
      waterFallMaterial.uniforms.uTime.value = state.clock.elapsedTime
      waterFallMaterial.uniforms.uGradientStrength.value = gradientStrength
      waterFallMaterial.uniforms.uNoiseStep.value = noiseStep
      waterFallMaterial.uniforms.uNoiseScale.value = noiseScale
      waterFallMaterial.uniforms.uMixStrength.value = mixStrength
      waterFallMaterial.uniforms.uColorLayerL1.value.set(colorLayerL1)
      waterFallMaterial.uniforms.uColorLayerL2.value.set(colorLayerL2)
      waterFallMaterial.uniforms.uColorLayerL3.value.set(colorLayerL3)
      waterFallMaterial.uniforms.uColorLayerL4.value.set(colorLayerL4)
      waterFallMaterial.uniforms.uLongLineColor.value.set(colorLayerL4)
      waterFallMaterial.uniforms.uShortLineColor.value.set(shortLineColor)
      waterFallMaterial.uniforms.uLongLineColor.value.set(longLineColor)
      waterFallMaterial.uniforms.uTopFoamColor.value.set(topFoam)
    }
  })

  return (
    <>
      <mesh ref={waterFallMeshRef} geometry={waterfallGeometry} material={waterfallMaterial} />

      {/* <group dispose={null}> */}
      {/*   <mesh */}
      {/*     name="Plane019" */}
      {/*     castShadow */}
      {/*     receiveShadow */}
      {/*     geometry={nodes.Plane019.geometry} */}
      {/*     material={waterfallMaterial} */}
      {/*     position={[-12.455, 18.333, -27.76]} */}
      {/*     scale={[3.08, 1.912, 1.912]} */}
      {/*   /> */}
      {/*   <mesh */}
      {/*     name="Plane020" */}
      {/*     castShadow */}
      {/*     receiveShadow */}
      {/*     geometry={nodes.Plane020.geometry} */}
      {/*     material={waterfallMaterial} */}
      {/*     position={[-5.385, 18.333, -27.596]} */}
      {/*     rotation={[0, 0.08, 0]} */}
      {/*     scale={[2.926, 1.912, 1.917]} */}
      {/*   /> */}
      {/*   <mesh */}
      {/*     name="Plane021" */}
      {/*     castShadow */}
      {/*     receiveShadow */}
      {/*     geometry={nodes.Plane021.geometry} */}
      {/*     material={waterfallMaterial} */}
      {/*     position={[-18.639, 18.333, -27.76]} */}
      {/*     scale={[2.95, 1.912, 1.912]} */}
      {/*   /> */}
      {/*   <mesh */}
      {/*     name="Plane022" */}
      {/*     castShadow */}
      {/*     receiveShadow */}
      {/*     geometry={nodes.Plane022.geometry} */}
      {/*     material={waterfallMaterial} */}
      {/*     position={[0.643, 18.333, -27.596]} */}
      {/*     rotation={[0, 0.08, 0]} */}
      {/*     scale={[2.903, 1.912, 1.917]} */}
      {/*   /> */}
      {/* </group> */}
    </>
  )
}

export default Experience
