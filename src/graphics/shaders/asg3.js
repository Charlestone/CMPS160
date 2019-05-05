// Vertex Shader
var ASG3_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  attribute vec4 a_Color;
  varying vec4 v_Color;
  uniform mat4 u_ModelMatrix;
  void main() {
    v_Color = a_Color;
    gl_Position = u_ModelMatrix * a_Position;
  }`;

// Fragment Shader
var ASG3_FSHADER =
  `precision mediump float;
  varying vec4 v_Color;
  uniform sampler2D u_Sampler;

  void main() {
    gl_FragColor = v_Color;
  }`;