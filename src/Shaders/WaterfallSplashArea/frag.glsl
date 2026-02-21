#include "../Deps/glsl-perlin-noise/perlin.glsl"

varying vec2 vUv;

uniform float uTime;
uniform vec3 uSplashColor1;
uniform vec3 uSplashColor2;
uniform vec3 uSplashColor3;

vec3 layer1() {
  vec2 modifiedvUv = vUv;
  float noise1 = perlinNoise3D(vec3(vUv * 4.0 + uTime * 0.5, 1.0));
  float noise2 = perlinNoise3D(vec3(vUv * 16.0 + uTime, 1.0));
  modifiedvUv.y += noise1 * 0.1;
  modifiedvUv.y += noise2 * 0.3;
  float gradient = modifiedvUv.y;

  gradient = step(0.7, gradient);

  return mix(uSplashColor2, uSplashColor1, gradient);
}

void main() {
  vec3 finalColor = vec3(1.0, 1.0, 0.0);
  vec3 layer1Color = layer1();
  gl_FragColor = vec4(layer1Color, 1.0);
}
