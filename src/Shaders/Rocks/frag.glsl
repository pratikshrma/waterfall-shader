#include "../Deps/glsl-perlin-noise/perlin.glsl"
#include "../Deps/glsl-voronoi-noise/voronoi2d.glsl"
#include "../Deps/glsl-voronoi-noise/voronoi3d.glsl"

varying vec2 vUv;

uniform float uIndex;
uniform vec3 uRockColor1;
uniform vec3 uRockColor2;

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

  float uvNoise = perlinNoise3D(vec3(vUv * 1.5, 0.1));
  modifiedvUv += uvNoise * 0.3;

  vec2 v1 =
      euclideanVoronoi(vec2(modifiedvUv.x * 2.0 + uIndex, modifiedvUv.y * 2.0));
  vec2 v2 =
      euclideanVoronoi(vec2(modifiedvUv.x * 8.0, modifiedvUv.y * 2.0 + uIndex));

  float crack1 = v1.y - v1.x;
  float crack2 = v2.y - v2.x;

  vec2 modifedGradientvUv = vUv;
  modifedGradientvUv /= 5.0;
  modifedGradientvUv.y += 0.05;
  modifedGradientvUv.x -= 0.1;
  float gradientMask = length(modifedGradientvUv);
  gradientMask = 1.0 - smoothstep(0.1, 0.12, gradientMask);
  // gradientMask += perlinNoise3D(vec3(vUv * 16.0, uTime * 0.3));
  gradientMask += perlinNoise3D(vec3(vUv * 16.0, 0.0));
  gradientMask = step(0.9, gradientMask);

  float crack = crack1 * crack2 / 2.0; // multiply to get grouping effect
  crack = step(0.002, crack);
  crack = 1.0 - crack;
  return mix(uRockColor1, uRockColor2, crack);
}

void main() {
  vec3 layer1Color = layer1();

  gl_FragColor = vec4(layer1Color, 1.0);
}
