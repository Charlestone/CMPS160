// Vertex Shader Color
var COLOR5_VSHADER =
  `precision mediump float;

  attribute vec4 a_Position;
  attribute vec4 a_Color;
  attribute vec2 a_TexCoord;
  attribute vec3 a_Normal;

  varying vec4 v_Position;
  varying vec4 v_Color;
  varying vec2 v_TexCoord;
  varying vec3 v_Normal;
  
  uniform mat4 u_ModelMatrix;
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;
  uniform mat4 u_NormalMatrix;

  void main() {
    v_Position = u_ProjectionMatrix * u_ViewMatrix * u_ModelMatrix * a_Position;
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    v_Normal = vec3(u_NormalMatrix * vec4(a_Normal, 1.0));
    gl_Position = v_Position;
  }`;

// Fragment Shader Color
var COLOR5_FSHADER =
  `precision mediump float;

  varying vec4 v_Position;
  varying vec4 v_Color;
  varying vec2 v_TexCoord;
  varying vec3 v_Normal;

  uniform sampler2D u_Sampler;
  uniform vec3 u_DifColor;
  uniform vec3 u_AmbColor;
  uniform vec3 u_SpecColor;
  uniform vec3 u_LightPos;
  uniform vec3 u_EyePos;

  void main() {
    vec3 normal = normalize(v_Normal);
    vec3 lightDir = normalize(u_LightPos - vec3(v_Position));
    vec3 reflectDir = reflect(lightDir, normal);
    vec3 viewDir = normalize(u_EyePos - vec3(v_Position));

    float lambertian = max(dot(lightDir, normal), 0.0);
    float spec = 0.0;

    if(lambertian > 0.0){
      float specAngle = max(dot(reflectDir, viewDir), 0.0);
      spec = pow(specAngle, 4.0);
    }

    gl_FragColor = vec4(vec3(v_Color) * (u_AmbColor + lambertian * u_DifColor + spec * u_SpecColor), 1.0);
  }`;

  // Vertex Shader Texture
var TEXTURE5_VSHADER =
  `precision mediump float;

  attribute vec4 a_Position;
  attribute vec4 a_Color;
  attribute vec2 a_TexCoord;
  attribute vec3 a_Normal;

  varying vec4 v_Position;
  varying vec4 v_Color;
  varying vec2 v_TexCoord; 
  varying vec3 v_Normal;
  
  uniform mat4 u_ModelMatrix;
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;
  uniform mat4 u_NormalMatrix;

  void main() {
    v_Position = u_ProjectionMatrix * u_ViewMatrix * u_ModelMatrix * a_Position;
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    v_Normal = vec3(u_NormalMatrix * vec4(a_Normal, 1.0));
    gl_Position = v_Position;
  }`;

// Fragment Shader Texture
var TEXTURE5_FSHADER =
  `precision mediump float;

  varying vec4 v_Position;
  varying vec4 v_Color;
  varying vec2 v_TexCoord;
  varying vec3 v_Normal;

  uniform sampler2D u_Sampler;
  uniform vec3 u_DifColor;
  uniform vec3 u_AmbColor;
  uniform vec3 u_SpecColor;
  uniform vec3 u_LightPos;
  uniform vec3 u_EyePos;

  void main() {
    vec3 normal = normalize(v_Normal);
    vec3 lightDir = normalize(u_LightPos - vec3(v_Position));
    vec3 reflectDir = reflect(lightDir, normal);
    vec3 viewDir = normalize(u_EyePos - vec3(v_Position));

    float lambertian = max(dot(reflectDir, normal), 0.0);
    float spec = 0.0;

    if(lambertian > 0.0){
      float specAngle = max(dot(reflectDir, viewDir), 0.0);
      spec = pow(specAngle, 4.0);
    }
    vec4 color = texture2D(u_Sampler, v_TexCoord);
    gl_FragColor = vec4(vec3(color) * (u_AmbColor + lambertian * u_DifColor + spec * u_SpecColor), 1.0);
  }`;