var shader_col = null;
var shader_frag = null;
var red = 0.0;
var green = 0.0;
var blue = 0.0;
var size = 10;
var segments = -1;
var gl = null;

function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  // Retrieve WebGL rendering context
  gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  // Initialize the scene
  var scene = new Scene();
  var camera = new Camera();
  var inputHandler = new InputHandler(canvas, scene, camera);
  //Create a world
  //
  // Initialize shaders
  shader_col = new Shader(gl, ASG2_VSHADER, ASG2_FSHADER);
  shader_col.addAttribute("a_Position");
  shader_col.addAttribute("a_Color");
  shader_col.addAttribute("a_TexCoord");
  shader_col.addUniform("u_Sampler", "sampler2D", 0);
  var idMatrix = new Matrix4();
  shader_col.addUniform("u_ModelMatrix", "mat4", idMatrix.elements);
  shader_frag = new Shader(gl, ASG3_VSHADER, ASG3_FSHADER);
  shader_frag.addAttribute("a_Position");
  shader_frag.addAttribute("a_Color");
  shader_frag.addAttribute("a_TexCoord");
  shader_frag.addUniform("u_ModelMatrix", "mat4", idMatrix.elements)
  shader_frag.addUniform("u_Sampler", "sampler2D", 0);
  //shader.addUniform("u_ProjectionMatrix", "mat4", idMatrix.elements);
  //shader.addUniform("u_ViewMatrix", "mat4", idMatrix.elements);
  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, camera);
  renderer.start();
  //Create a cube at the beggining
  var image = new Image();
  if (!image){
    console.log('Failed to create the image object');
    return false;
  }
  image.onload = function(){
    scene.addGeometry(new Cube(shader_frag, 0.0, 0.0, image, 0));
  }
  image.src = 'objs/' + 'cat_.jpg';
  
}
