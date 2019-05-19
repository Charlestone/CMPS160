// Vertex Shader Color
var COLOR4_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  attribute vec4 a_Color;
  attribute vec2 a_TexCoord;
  varying vec4 v_Color;
  varying vec2 v_TexCoord;
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;
  void main() {
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    gl_Position = u_ProjectionMatrix * u_ViewMatrix * a_Position;
  }`;

// Fragment Shader Color
var COLOR4_FSHADER =
  `precision mediump float;
  varying vec4 v_Color;
  varying vec2 v_TexCoord;
  uniform sampler2D u_Sampler;
  void main() {
    gl_FragColor = v_Color;
  }`;

  // Vertex Shader Texture
var TEXTURE4_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  attribute vec4 a_Color;
  attribute vec2 a_TexCoord;
  varying vec4 v_Color;
  varying vec2 v_TexCoord; 
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;
  void main() {
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    gl_Position = u_ProjectionMatrix * u_ViewMatrix * a_Position;
  }`;

// Fragment Shader Texture
var TEXTURE4_FSHADER =
  `precision mediump float;
  varying vec4 v_Color;
  varying vec2 v_TexCoord;
  uniform sampler2D u_Sampler;
  void main() {
    gl_FragColor = texture2D(u_Sampler,v_TexCoord);
  }`;
