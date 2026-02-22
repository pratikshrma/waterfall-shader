#include "../Deps/glsl-perlin-noise/perlin.glsl"

varying vec2 vUv;

uniform float uTime;
uniform float uRandomNumber;

void main() {
  // vUv = uv;
  vUv = vec2(uv.x, 1.0 - uv.y);

  float noise = perlinNoise3D(position * 2.0 + uTime + uRandomNumber * 10.0);
  vec3 modifiedPosition = position;
  modifiedPosition.z += noise * 0.2;
  modifiedPosition.x += noise * 0.02;
  vec4 modelPosition = modelMatrix * vec4(modifiedPosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
