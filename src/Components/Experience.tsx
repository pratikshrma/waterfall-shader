import { useMemo, useRef } from "react"
import * as THREE from 'three'
import waterfallVertShader from '../Shaders/Waterfall/vert.glsl'
import waterfallFragShader from '../Shaders/Waterfall/frag.glsl'
import { useFrame } from "@react-three/fiber"
import { folder, useControls } from "leva"

const Experience = () => {
  const waterFallMeshRef = useRef<THREE.Mesh | null>(null)

  const { gradientStrength, noiseStep, noiseScale, colorLayerL1, colorLayerL2, colorLayerL3, colorLayerL4, mixStrength, longLineColor, shortLineColor, topFoam } = useControls(
    {
      'Colors': folder({
        colorLayerL1: {
          value: '#c2ded8'
        },
        colorLayerL2: {
          value: '#5ea3a7'
        },
        colorLayerL3: {
          value: '#27d6cc'
        },
        colorLayerL4: {
          value: '#cae6e1'
        },
        longLineColor: {
          value: '#000000'
        },
        shortLineColor: {
          value: '#ffffff'
        },
        topFoam: {
          value: '#ebebeb'
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
      waterFallMaterial.uniforms.uTime.value = state.clock.elapsedTime * 0.5
      waterFallMaterial.uniforms.uGradientStrength.value = gradientStrength
      waterFallMaterial.uniforms.uNoiseStep.value = noiseStep
      waterFallMaterial.uniforms.uNoiseScale.value = noiseScale
      waterFallMaterial.uniforms.uMixStrength.value = mixStrength
      waterFallMaterial.uniforms.uColorLayerL1.value.set(colorLayerL1)
      waterFallMaterial.uniforms.uColorLayerL2.value.set(colorLayerL2)
      waterFallMaterial.uniforms.uColorLayerL3.value.set(colorLayerL3)
      waterFallMaterial.uniforms.uColorLayerL4.value.set(colorLayerL4)
      waterFallMaterial.uniforms.uLongLineColor.value.set(longLineColor)
      waterFallMaterial.uniforms.uShortLineColor.value.set(shortLineColor)
      waterFallMaterial.uniforms.uTopFoamColor.value.set(topFoam)
    }
  })

  return (
    <>
      <mesh ref={waterFallMeshRef} geometry={waterfallGeometry} material={waterfallMaterial} />
    </>
  )
}

export default Experience
