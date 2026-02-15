#include "../Deps/glsl-perlin-noise/perlin.glsl"
#include "../Deps/glsl-voronoi-noise/2d.glsl"

varying vec2 vUv;

uniform float uGradientStrength;
uniform float uNoiseStep;
uniform float uNoiseScale;
uniform float uMixStrength;
uniform vec3 uColorLayerL1;
uniform vec3 uColorLayerL2;
uniform vec3 uColorLayerL3;
uniform vec3 uColorLayerL4;
uniform vec3 uLongLineColor;
uniform vec3 uShortLineColor;
uniform float uTime;

vec3 layer1() {
  vec2 localUv = vUv;
  localUv.y += 0.3;
  float noise = voronoi2d(vUv * uNoiseScale + uTime * 0.7);
  float gradient = 1.0 - pow(localUv.y, uGradientStrength);
  float distortedGradient = gradient + (noise)*uMixStrength;
  float mask = step(uNoiseStep, distortedGradient);
  return mix(uColorLayerL1, uColorLayerL2, mask);
}

vec3 layer2() {
  vec2 localUv = vUv;
  localUv.y += 0.5;
  vec3 layer1Color = layer1();
  float noise = voronoi2d(localUv.yx * uNoiseScale + uTime * 0.8);
  // yx just to give a different seed
  float gradient = 1.0 - pow(localUv.y, uGradientStrength);
  float distortedGradient = gradient + (noise)*uMixStrength;
  float mask = step(uNoiseStep, distortedGradient);
  vec3 layer2Color = mix(vec3(1.0, 1.0, 1.0), uColorLayerL3, mask);
  return mix(layer1Color, layer2Color, mask);
}

vec3 layer3() {
  vec3 layer2Color = layer2();
  vec2 localUv = vUv;
  localUv.x *= 1.0;
  localUv.y *= 5.0;
  vec2 noiseOffset = vec2(perlinNoise3D(vec3(vUv.xy * 2.0, 1.0)),
                          perlinNoise3D(vec3(vUv.xy * 5.0, 0.0)));
  vec2 distortedUv = vUv + noiseOffset * 0.5;
  float mask = smoothstep(0.0, 0.7, length(localUv - vec2(0.5, 3.5)));
  mask = 1.0 - mask;

  float noise =
      1.0 -
      step(0.5, voronoi2d(distortedUv * uNoiseScale * 0.5 + uTime * 0.25));
  float noisyMask = mask * noise;
  vec3 maskColor = uColorLayerL4;

  return mix(layer2Color, maskColor, noisyMask);
}

vec3 longLineLayer() {
  float offsetX = perlinNoise3D(vec3(vUv * 3.0, uTime * 0.1));
  float offsetY = perlinNoise3D(vec3(vUv * 3.0 + 100.0, uTime * 0.1));

  vec2 offset = vec2(offsetX, offsetY) * 0.1; // 0.1 = distortion strength

  // Apply distortion
  vec2 distortedUv = vUv + offset;

  vec3 layer3Color = layer3();
  vec4 layer3ColorRGBA = vec4(layer3Color, 1.0);
  vec4 lineColor = vec4(uLongLineColor, 0.2);
  float lineMask = step(0.1, abs(sin(distortedUv.x * 15.0)));

  vec3 blendedColor = mix(lineColor.rgb, layer3ColorRGBA.rgb, lineMask);
  float blendedAlpha = mix(lineColor.a, layer3ColorRGBA.a, lineMask);

  vec3 finalColor =
      mix(layer3Color, lineColor.rgb, (1.0 - lineMask) * lineColor.a);

  return finalColor;
}

vec3 shortLineLayer() {
  vec3 longLineLayerColor = longLineLayer();

  vec2 maskingUv = vUv;
  maskingUv.y *= 4.0;
  maskingUv.x *= 0.5;
  float centerRegion = length(maskingUv - vec2(0.25, 1.5));
  centerRegion = smoothstep(0.6, 0.7, centerRegion);
  centerRegion = 1.0 - centerRegion;

  float offsetX = perlinNoise3D(vec3(vUv * 4.0, uTime * 0.1));
  float offsetY = perlinNoise3D(vec3(vUv * 6.0, uTime * 0.1));
  vec2 offset = vec2(offsetX, offsetY) * 0.1;
  vec2 distortedUv = vUv + offset;

  vec3 layer3Color = layer3();
  vec4 layer3ColorRGBA = vec4(layer3Color, 1.0);
  float lineMask = step(0.995, abs(sin(distortedUv.x * 25.0)));

  vec4 lineColor = vec4(uShortLineColor, 0.2);
  float finalMask = lineMask * centerRegion;

  vec3 finalColor =
      mix(lineColor.rgb, longLineLayerColor.rgb, 1.0 - finalMask * lineColor.a);

  return finalColor;
}

// vec3 whiteFoamLayer() {
//   vec2 maskingUv = vUv;
//   maskingUv.y *= 4.0;
//
//   float baseMask = length(maskingUv - vec2(0.5, 3.7));
//   baseMask = smoothstep(0.7, 0.9, baseMask);
//
//   vec2 foamMaskUv = vUv;
//   foamMaskUv.y *= 4.0;
//   float noise = perlinNoise3D(vec3(foamMaskUv * 10.0, 1.0));
//   foamMaskUv.y += noise;
//
//   float foamMask = length(foamMaskUv - vec2(0.5, 3.8));
//   foamMask = step(0.6, foamMask);
//
//   return vec3(foamMask);
// }

void main() {
  vec3 finalColor = vec3(1.0);
  // finalColor = layer3();
  finalColor = shortLineLayer();
  // finalColor = whiteFoamLayer();
  // gl_FragColor = finalColor;
  gl_FragColor = vec4(finalColor, 1.0);
}
