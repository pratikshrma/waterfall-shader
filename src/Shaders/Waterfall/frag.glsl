#include "../Deps/glsl-perlin-noise/perlin.glsl"
#include "../Deps/glsl-voronoi-noise/2d.glsl"
#include "../Deps/glsl-voronoi-noise/3d.glsl"

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
uniform vec3 uTopFoamColor;
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
  localUv.y *= 6.0;

  float noise = perlinNoise3D(vec3(vUv.x * 4.0, vUv.y * 8.0, uTime * 0.8));
  localUv += noise * 1.3;
  float dist = step(0.5, length(localUv - vec2(0.5, 5.0)));
  return mix(layer2Color, uColorLayerL4, 1.0 - dist);
}

vec3 longLineLayer() {
  float offsetX = perlinNoise3D(vec3(vUv * 3.0, uTime * 0.1));
  float offsetY = perlinNoise3D(vec3(vUv * 3.0 + 100.0, uTime * 0.1));

  vec2 offset = vec2(offsetX, offsetY) * 0.031; // 0.1 = distortion strength

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

  maskingUv.y *= 10.0;
  maskingUv.x *= 0.5;
  float centerRegion = length(maskingUv - vec2(0.25, 3.5));
  centerRegion = smoothstep(0.6, 0.7, centerRegion);
  centerRegion = 1.0 - centerRegion;

  float offsetX = perlinNoise3D(vec3(vUv * 4.0, uTime * 0.1));
  float offsetY = perlinNoise3D(vec3(vUv * 6.0, uTime * 0.1));
  vec2 offset = vec2(offsetX, offsetY) * 0.1;
  vec2 distortedUv = vUv + offset;

  vec3 layer3Color = layer3();
  vec4 layer3ColorRGBA = vec4(layer3Color, 1.0);
  float lineMask = step(0.995, abs(sin(distortedUv.x * 20.0)));

  vec4 lineColor = vec4(uShortLineColor, 0.5);
  float finalMask = lineMask * centerRegion;

  vec3 finalColor =
      mix(lineColor.rgb, longLineLayerColor.rgb, 1.0 - finalMask * lineColor.a);

  return finalColor;
  // return vec3(finalMask);
}

vec3 whiteFoamLayer() {
  vec3 shortLineLayerColor = shortLineLayer();

  vec2 foamMaskUv = vUv;
  foamMaskUv.y *= 0.8;
  float noise = perlinNoise3D(vec3(foamMaskUv * 10.0 + uTime, uTime));
  foamMaskUv.y += noise;
  vec2 toCenter = foamMaskUv - vec2(0.5, 1.5);
  toCenter.x *= 0.5;
  float foamMask = length(toCenter);
  foamMask = 1.0 - foamMask;
  foamMask *= pow(vUv.y, 2.0); // kills bottom, preserves top
  foamMask = step(0.3, foamMask);

  return mix(shortLineLayerColor, uTopFoamColor, foamMask);
}

void main() {
  vec3 finalColor = vec3(1.0);
  finalColor = whiteFoamLayer();
  gl_FragColor = vec4(finalColor, 1.0);
}
