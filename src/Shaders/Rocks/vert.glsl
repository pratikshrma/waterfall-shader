#include "../Deps/glsl-perlin-noise/perlin.glsl"
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 modifiedPosition = position;
  float noise = perlinNoise3D(modifiedPosition);

  modifiedPosition.xyz += noise * 0.3;
  vec4 modelPosition = modelMatrix * vec4(modifiedPosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
