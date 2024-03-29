// Vertex Shader Color
var ASG2_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  attribute vec4 a_Color;
  attribute vec2 a_TexCoord;
  varying vec4 v_Color;
  varying vec2 v_TexCoord;
  uniform mat4 u_ModelMatrix;
  /*uniform mat4 u_ProjectionMatrix;*/
  void main() {
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    gl_Position = u_ModelMatrix * a_Position;
    /*gl_Position = u_ProjectionMatrix *u_ModelMatrix * a_Position;*/
  }`;

// Fragment Shader Color
var ASG2_FSHADER =
  `precision mediump float;
  varying vec4 v_Color;
  void main() {
    gl_FragColor = v_Color;
  }`;

  // Vertex Shader Texture
var ASG3_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  attribute vec4 a_Color;
  varying vec4 v_Color;
  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord; 
  uniform mat4 u_ModelMatrix;
  void main() {
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    gl_Position = u_ModelMatrix * a_Position;
  }`;

// Fragment Shader Texture
var ASG3_FSHADER =
  `precision mediump float;
  varying vec2 v_TexCoord;
  uniform sampler2D u_Sampler;
  void main() {
    gl_FragColor = texture2D(u_Sampler,v_TexCoord);
  }`;
