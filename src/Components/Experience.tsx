import { useMemo } from "react"
import * as THREE from 'three'
import waterfallVertShader from '../Shaders/Waterfall/vert.glsl'
import waterfallFragShader from '../Shaders/Waterfall/frag.glsl'
import waterfallBaseFragShader from '../Shaders/WaterfallBase/frag.glsl'
import waterfallBaseVertShader from '../Shaders/WaterfallBase/vert.glsl'
import waterfallSplashAreaVertShader from '../Shaders/WaterfallSplashArea/vert.glsl'
import waterfallSplashAreaFragShader from '../Shaders/WaterfallSplashArea/frag.glsl'
import rockFragShader from '../Shaders/Rocks/frag.glsl'
import rockVertShader from '../Shaders/Rocks/vert.glsl'
import { useFrame } from "@react-three/fiber"
import { folder, useControls } from "leva"
import WaterFallModel from "./WaterFallModel"


const Experience = () => {

  const { gradientStrength,
    noiseStep,
    noiseScale,
    colorLayerL1,
    colorLayerL2,
    colorLayerL3,
    colorLayerL4,
    mixStrength,
    longLineColor,
    shortLineColor,
    topfoam,
    flowingFoam,
    baseColor1,
    baseColor2,
    baseColor3,
    baseColor4,
    baseColor5,
    baseColor6,
    baseColor7,
    baseColor8,
    baseColor9,
    baseColor10,
    baseColor11,
    baseColor12,
    baseColor13,
    splashColor1,
    splashColor2,
    splashColor3,
    rockColor1,
    rockColor2
  } = useControls(
    {
      'Waterfall Color': folder({
        colorLayerL1: {
          value: '#00dfef'
        },
        colorLayerL2: {
          value: '#00aac1'
        },
        colorLayerL3: {
          value: '#03c0d5'
        },
        colorLayerL4: {
          value: '#00fffd'
        },
        longLineColor: {
          value: '#0084a6'
        },
        shortLineColor: {
          value: '#00f7ff'
        },
        topfoam: {
          value: '#ffffff'
        },
        flowingFoam: {
          value: '#ffffff'
        }
      }),
      'Base Color': folder({
        baseColor1: {
          value: '#00d2e1'
        },
        baseColor2: {
          value: '#00c9d7'
        },
        baseColor3: {
          value: '#00aac1'
        },
        baseColor4: {
          value: '#00fffd'
        },
        baseColor5: {
          value: '#ffffff'
        },
        baseColor6: {
          value: '#00aac1'
        },
        baseColor7: {
          value: '#008da0'
        },
        baseColor8: {
          value: '#0000ff'
        },
        baseColor9: {
          value: '#ffff00'
        },
        baseColor10: {
          value: '#ff00ff'
        },
        baseColor11: {
          value: '#00ff00'
        },
        baseColor12: {
          value: '#aa00aa'
        },
        baseColor13: {
          value: '#cc00cc'
        },
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
      'Splash Area': folder({
        splashColor1: {
          value: '#ffffff'
        },
        splashColor2: {
          value: '#00d2e1'
        },
        splashColor3: {
          value: '#cc00cc'
        },
      }),
      'Rocks': folder({
        rockColor1: {
          value: '#ff0000',
        },
        rockColor2: {
          value: '#00ff00',
        }
      })
    }
  )

  const { waterfallMaterial } = useMemo(() => {
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
        uTopFoamColor: { value: new THREE.Color() },
        uFlowingFoamColor: { value: new THREE.Color() },
        uRandomNumber: { value: 1.0 }
      },
      toneMapped: false
    })
    return {
      waterfallMaterial: mat
    }
  }, [])


  const { waterfallBaseMaterial } = useMemo(() => {
    const mat = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      vertexShader: waterfallBaseVertShader,
      fragmentShader: waterfallBaseFragShader,
      uniforms: {
        uTime: { value: 0.0 },
        uBaseColor1: { value: new THREE.Color() },
        uBaseColor2: { value: new THREE.Color() },
        uBaseColor3: { value: new THREE.Color() },
        uBaseColor4: { value: new THREE.Color() },
        uBaseColor5: { value: new THREE.Color() },
        uBaseColor6: { value: new THREE.Color() },
        uBaseColor7: { value: new THREE.Color() },
        uBaseColor8: { value: new THREE.Color() },
        uBaseColor9: { value: new THREE.Color() },
        uBaseColor10: { value: new THREE.Color() },
        uBaseColor11: { value: new THREE.Color() },
        uBaseColor12: { value: new THREE.Color() },
        uBaseColor13: { value: new THREE.Color() },
      },
      toneMapped: false
    })
    return {
      waterfallBaseMaterial: mat
    }
  }, [])

  const { waterfallSplashAreaMaterial } = useMemo(() => {
    const waterfallSplashAreaMaterial = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      vertexShader: waterfallSplashAreaVertShader,
      fragmentShader: waterfallSplashAreaFragShader,

      uniforms: {
        uTime: { value: 0.0 },
        uSplashColor1: { value: new THREE.Color() },
        uSplashColor2: { value: new THREE.Color() },
        uSplashColor3: { value: new THREE.Color() },
      },
      toneMapped: false
    })

    return { waterfallSplashAreaMaterial }
  }, [])

  const { rockMaterial } = useMemo(() => {
    const rockMaterial = new THREE.ShaderMaterial({
      vertexShader: rockVertShader,
      fragmentShader: rockFragShader,
      uniforms: {
        uIndex: { value: 0 },
        uRockColor1: { value: new THREE.Color() },
        uRockColor2: { value: new THREE.Color() }
      }
    })

    return { rockMaterial }
  }, [])

  useFrame((state) => {
    if (waterfallMaterial) {
      waterfallMaterial.uniforms.uTime.value = state.clock.elapsedTime * 0.5
      waterfallMaterial.uniforms.uGradientStrength.value = gradientStrength
      waterfallMaterial.uniforms.uNoiseStep.value = noiseStep
      waterfallMaterial.uniforms.uNoiseScale.value = noiseScale
      waterfallMaterial.uniforms.uMixStrength.value = mixStrength
      waterfallMaterial.uniforms.uColorLayerL1.value.set(colorLayerL1)
      waterfallMaterial.uniforms.uColorLayerL2.value.set(colorLayerL2)
      waterfallMaterial.uniforms.uColorLayerL3.value.set(colorLayerL3)
      waterfallMaterial.uniforms.uColorLayerL4.value.set(colorLayerL4)
      waterfallMaterial.uniforms.uLongLineColor.value.set(longLineColor)
      waterfallMaterial.uniforms.uShortLineColor.value.set(shortLineColor)
      waterfallMaterial.uniforms.uTopFoamColor.value.set(topfoam)
      waterfallMaterial.uniforms.uFlowingFoamColor.value.set(flowingFoam)

    }

    if (waterfallBaseMaterial) {
      waterfallBaseMaterial.uniforms.uTime.value = state.clock.elapsedTime
      waterfallBaseMaterial.uniforms.uBaseColor1.value.set(baseColor1)
      waterfallBaseMaterial.uniforms.uBaseColor2.value.set(baseColor2)
      waterfallBaseMaterial.uniforms.uBaseColor3.value.set(baseColor3)
      waterfallBaseMaterial.uniforms.uBaseColor4.value.set(baseColor4)
      waterfallBaseMaterial.uniforms.uBaseColor5.value.set(baseColor5)
      waterfallBaseMaterial.uniforms.uBaseColor6.value.set(baseColor6)
      waterfallBaseMaterial.uniforms.uBaseColor7.value.set(baseColor7)
      waterfallBaseMaterial.uniforms.uBaseColor8.value.set(baseColor8)
      waterfallBaseMaterial.uniforms.uBaseColor9.value.set(baseColor9)
      waterfallBaseMaterial.uniforms.uBaseColor10.value.set(baseColor10)
      waterfallBaseMaterial.uniforms.uBaseColor11.value.set(baseColor11)
      waterfallBaseMaterial.uniforms.uBaseColor12.value.set(baseColor12)
      waterfallBaseMaterial.uniforms.uBaseColor13.value.set(baseColor13)
    }

    if (waterfallSplashAreaMaterial) {
      waterfallSplashAreaMaterial.uniforms.uTime.value = state.clock.elapsedTime
      waterfallSplashAreaMaterial.uniforms.uSplashColor1.value.set(splashColor1)
      waterfallSplashAreaMaterial.uniforms.uSplashColor2.value.set(splashColor2)
      waterfallSplashAreaMaterial.uniforms.uSplashColor3.value.set(splashColor3)
    }

    if (rockMaterial) {
      rockMaterial.uniforms.uIndex.value = 0;
      rockMaterial.uniforms.uRockColor1.value.set(rockColor1)
      rockMaterial.uniforms.uRockColor2.value.set(rockColor2)
    }

  })

  return (
    <>
      <WaterFallModel
        waterfallMaterial={waterfallMaterial}
        waterfallBaseMaterial={waterfallBaseMaterial}
        waterfallSplashAreaMaterial={waterfallSplashAreaMaterial}
        rockMaterial={rockMaterial}
      />
    </>
  )
}

export default Experience
