#include "../Deps/glsl-perlin-noise/perlin.glsl"
#include "../Deps/glsl-voronoi-noise/2d.glsl"
#include "../Deps/glsl-voronoi-noise/3d.glsl"

varying vec2 vUv;

uniform vec3 uBaseColor1;
uniform vec3 uBaseColor2;
uniform vec3 uBaseColor3;
uniform vec3 uBaseColor4;
uniform vec3 uBaseColor5;
uniform vec3 uBaseColor6;
uniform vec3 uBaseColor7;
uniform vec3 uBaseColor8;
uniform float uTime;

vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453123);
}

vec2 euclideanVoronoi(vec2 p) {
  vec2 n = floor(p);
  vec2 f = fract(p);
  float F1 = 10.0;
  float F2 = 10.0;

  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 neighbor = vec2(float(i), float(j));
      vec2 point = hash2(n + neighbor);
      point = 0.5 + 0.5 * sin(0.0 + 6.2831 * point);
      vec2 diff = neighbor + point - f;
      float dist = length(diff); // euclidean = round cells

      if (dist < F1) {
        F2 = F1;
        F1 = dist;
      } else if (dist < F2) {
        F2 = dist;
      }
    }
  }
  return vec2(F1, F2);
}

vec3 layer1() {
  vec2 modifiedvUv = vUv;
  modifiedvUv.y *= 2.0;
  modifiedvUv.y -= 0.5;
  float linearGradient = pow(modifiedvUv.y, 4.0);
  float voronoiNoise = voronoi2d(vUv * 15.0);
  linearGradient += voronoiNoise;
  linearGradient = step(0.95, linearGradient);

  return mix(uBaseColor1, uBaseColor2, linearGradient);
}

vec3 layer2() {
  vec3 layer1Color = layer1();

  vec2 modifiedvUv = vUv;
  modifiedvUv.y *= 2.0;
  float linearGradient = pow(modifiedvUv.y, 4.0);
  float voronoiNoise = voronoi2d(vUv * 15.0);
  linearGradient += voronoiNoise;
  linearGradient = step(0.95, linearGradient);

  return mix(uBaseColor3, layer1Color, linearGradient);
}

vec3 layer3() {
  vec3 layer2Color = layer2();
  vec2 modifiedvUv = vUv;
  modifiedvUv.y *= 2.0;

  float noise = perlinNoise3D(vec3(modifiedvUv * 10.0, 10.0));
  noise += perlinNoise3D(vec3(vUv * 25.0, 0.0));
  noise += perlinNoise3D(vec3(vUv * 60.0, 0.0));
  noise = step(0.80, noise);

  return mix(layer2Color, uBaseColor4, noise);
}

vec3 layer4FoamLayer() {
  vec3 layer3Color = layer3();
  vec2 modifiedvUv = vUv;

  float uvNoise = perlinNoise3D(vec3(vUv * 1.5, 0.1));
  modifiedvUv += uvNoise * 0.3; // stronger warp to break rigidity

  // vec2 v1 = euclideanVoronoi(modifiedvUv * 12.0 + uTime * 0.3);
  // vec2 v2 = euclideanVoronoi(modifiedvUv * 15.0 - uTime * 0.5);

  vec2 v1 = euclideanVoronoi(modifiedvUv * 12.0);
  vec2 v2 = euclideanVoronoi(modifiedvUv * 15.0);

  float foam1 = v1.y - v1.x;
  float foam2 = v2.y - v2.x;

  vec2 modifedGradientvUv = vUv;
  modifedGradientvUv /= 5.0;
  modifedGradientvUv.y += 0.05;
  modifedGradientvUv.x -= 0.1;
  float gradientMask = length(modifedGradientvUv);
  gradientMask = 1.0 - smoothstep(0.1, 0.2, gradientMask);
  // gradientMask += perlinNoise3D(vec3(vUv * 16.0, uTime * 0.3));
  gradientMask += perlinNoise3D(vec3(vUv * 16.0, 0.0));
  gradientMask = step(0.7, gradientMask);

  float foam = foam1 * foam2 / 2.0; // multiply to get grouping effect
  foam = step(0.015, foam);
  foam = 1.0 - foam;

  // return vec3(foam * gradientMask);
  // return vec3(gradientMask);
  // return vec3(foam);
  return mix(layer3Color, uBaseColor5, foam * gradientMask);
}

vec3 layer5() {
  vec3 layer4Color = layer4FoamLayer();
  return vec3(1.0);
}

void main() {
  vec3 finalColor = vec3(1.0);
  vec3 layer1Color = layer4FoamLayer();
  gl_FragColor = vec4(layer1Color, 1.0);
}
