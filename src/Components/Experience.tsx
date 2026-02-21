import { useMemo, useRef } from "react"
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
import { useGLTF } from "@react-three/drei"
import WaterfallSplash from "./WaterSplash"
import WaterFallModel from "./WaterFallModel"


const Experience = () => {
  const waterFallMeshRef = useRef<THREE.Mesh | null>(null)
  const waterFallBaseMeshRef = useRef<THREE.Mesh | null>(null)
  const waterFallSplashAreaMeshRef = useRef<THREE.Mesh | null>(null)
  const rockMeshRef = useRef<THREE.Mesh | null>(null)

  const { nodes: splashAreaNodes } = useGLTF('models/stylizedwaterfallSplashArea.glb')

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
        topfoam: {
          value: '#ebebeb'
        },
        flowingFoam: {
          value: '#e8e8e8'
        }
      }),
      'Base Color': folder({
        baseColor1: {
          value: '#c2ded8'
        },
        baseColor2: {
          value: '#5ea3a7'
        },
        baseColor3: {
          value: '#27d6cc'
        },
        baseColor4: {
          value: '#cae6e1'
        },
        baseColor5: {
          value: '#ffffff'
        },
        baseColor6: {
          value: '#cae6e1'
        },
        baseColor7: {
          value: '#27d6cc'
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
          value: '#00ccff'
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

  const { waterfallGeometry, waterfallMaterial } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(1, 3, 128, 128)
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
        uFlowingFoamColor: { value: new THREE.Color() }
      },
      toneMapped: false
    })
    return {
      waterfallGeometry: geo,
      waterfallMaterial: mat
    }
  }, [])


  const { waterfallBaseGeometry, waterfallBaseMaterial } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(4, 4, 128, 128)
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
      waterfallBaseGeometry: geo,
      waterfallBaseMaterial: mat
    }
  }, [])

  const { waterfallSplashAreaGeometry, waterfallSplashAreaMaterial } = useMemo(() => {
    const waterfallSplashAreaGeometry = (splashAreaNodes.NurbsPath as THREE.Mesh).geometry
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

    return { waterfallSplashAreaGeometry, waterfallSplashAreaMaterial }
  }, [splashAreaNodes])

  const { rockMaterial, rockGeometry } = useMemo(() => {
    const rockGeometry = new THREE.IcosahedronGeometry(1, 3)
    const rockMaterial = new THREE.ShaderMaterial({
      vertexShader: rockVertShader,
      fragmentShader: rockFragShader,
      uniforms: {
        uIndex: { value: 0 },
        uRockColor1: { value: new THREE.Color() },
        uRockColor2: { value: new THREE.Color() }
      }
    })

    return { rockGeometry, rockMaterial }
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
      waterFallMaterial.uniforms.uTopFoamColor.value.set(topfoam)
      waterFallMaterial.uniforms.uFlowingFoamColor.value.set(flowingFoam)
    }

    if (waterFallBaseMeshRef.current) {
      const waterFallBaseMaterial = waterFallBaseMeshRef.current.material as THREE.ShaderMaterial

      waterFallBaseMaterial.uniforms.uTime.value = state.clock.elapsedTime
      waterFallBaseMaterial.uniforms.uBaseColor1.value.set(baseColor1)
      waterFallBaseMaterial.uniforms.uBaseColor2.value.set(baseColor2)
      waterFallBaseMaterial.uniforms.uBaseColor3.value.set(baseColor3)
      waterFallBaseMaterial.uniforms.uBaseColor4.value.set(baseColor4)
      waterFallBaseMaterial.uniforms.uBaseColor5.value.set(baseColor5)
      waterFallBaseMaterial.uniforms.uBaseColor6.value.set(baseColor6)
      waterFallBaseMaterial.uniforms.uBaseColor7.value.set(baseColor7)
      waterFallBaseMaterial.uniforms.uBaseColor8.value.set(baseColor8)
      waterFallBaseMaterial.uniforms.uBaseColor9.value.set(baseColor9)
      waterFallBaseMaterial.uniforms.uBaseColor10.value.set(baseColor10)
      waterFallBaseMaterial.uniforms.uBaseColor11.value.set(baseColor11)
      waterFallBaseMaterial.uniforms.uBaseColor12.value.set(baseColor12)
      waterFallBaseMaterial.uniforms.uBaseColor13.value.set(baseColor13)
    }

    if (waterFallSplashAreaMeshRef.current) {
      const waterfallSplashMaterial = waterFallSplashAreaMeshRef.current.material as THREE.ShaderMaterial

      waterfallSplashMaterial.uniforms.uTime.value = state.clock.elapsedTime
      waterfallSplashMaterial.uniforms.uSplashColor1.value.set(splashColor1)
      waterfallSplashMaterial.uniforms.uSplashColor2.value.set(splashColor2)
      waterfallSplashMaterial.uniforms.uSplashColor3.value.set(splashColor3)
    }

    if (rockMeshRef.current) {
      const rockMaterial = rockMeshRef.current.material as THREE.ShaderMaterial

      rockMaterial.uniforms.uIndex.value = 0;
      rockMaterial.uniforms.uRockColor1.value.set(rockColor1)
      rockMaterial.uniforms.uRockColor2.value.set(rockColor2)
    }

  })

  return (
    <>
      {/* <mesh ref={waterFallMeshRef} geometry={waterfallGeometry} material={waterfallMaterial} /> */}
      {/* <mesh rotation={[Math.PI / 1.5, 0, 0]} ref={waterFallBaseMeshRef} geometry={waterfallBaseGeometry} material={waterfallBaseMaterial} /> */}
      {/* <mesh ref={waterFallSplashAreaMeshRef} geometry={waterfallSplashAreaGeometry} material={waterfallSplashAreaMaterial} /> */}
      {/* <mesh ref={rockMeshRef} geometry={rockGeometry} material={rockMaterial} /> */}
      {/* <WaterfallSplash /> */}

      <WaterFallModel />
    </>
  )
}

export default Experience
