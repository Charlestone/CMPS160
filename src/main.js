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
  var camera = new Camera(canvas);
  var light = new Light(100, 100, 100);
  scene.setLight(light);
  var inputHandler = new InputHandler(canvas, scene, camera);
  //Create a world
  //
  // Initialize shaders
  shader_col = new Shader(gl, COLOR5_VSHADER, COLOR5_FSHADER);
  shader_col.addAttribute("a_Position");
  shader_col.addAttribute("a_Color");
  shader_col.addAttribute("a_TexCoord");
  shader_col.addAttribute("a_Normal");
  shader_col.addUniform("u_Sampler", "sampler2D", 0);


  var idMatrix = new Matrix4();
  shader_col.addUniform("u_ModelMatrix", "mat4", idMatrix.elements);
  shader_col.addUniform("u_ViewMatrix", "mat4", idMatrix.elements);
  shader_col.addUniform("u_ProjectionMatrix", "mat4", idMatrix.elements);
  shader_col.addUniform("u_NormalMatrix", "mat4", idMatrix.elements);
  shader_frag = new Shader(gl, TEXTURE5_VSHADER, TEXTURE5_FSHADER);
  shader_frag.addAttribute("a_Position");
  shader_frag.addAttribute("a_Color");
  shader_frag.addAttribute("a_TexCoord");
  shader_col.addAttribute("a_Normal");
  shader_frag.addUniform("u_ModelMatrix", "mat4", idMatrix.elements)
  shader_frag.addUniform("u_Sampler", "sampler2D", 0);
  shader_frag.addUniform("u_ViewMatrix", "mat4", idMatrix.elements);
  shader_frag.addUniform("u_ProjectionMatrix", "mat4", idMatrix.elements);
  shader_col.addUniform("u_NormalMatrix", "mat4", idMatrix.elements);
  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, camera);
  renderer.start();
  //Create the world at the begginig
  //var wall = new Image();
  var walls = new Array(32);
  for(var i = 0; i < walls.length; i++){
    walls[i] = Array.from({length: 32}, () => Math.floor(Math.random() * 4));
  }
  if (!wall){
    console.log('Failed to create the image object');
    return false;
  }
  scene.addGeometry(new Square(shader_col, 0.0, 0.0, 0.0, 0.486, 0.988, 0, 32));
  
  /*wall.onload = function(){
    for(var i = 0; i < walls.length; i++){
      for(var j = 0; j < walls[i].length; j++){
        for(var k = 0; k < walls[i][j]; k++){
          scene.addGeometry(new Cube(shader_frag, -7.5 + j, 0.5 + k, 7.5 - i, 0.5, 0.5, 0.5, 1, wall));
          console.log('One wall loaded');
        }
      }
    }
  }*/
  scene.addGeometry(new Cube(shader_col, 0.0, 0.0, 0.0, 0.529, 0.808, 0.922, 32));
  

  //wall.src = 'objs/' + 'wall.jpg';
  
}
