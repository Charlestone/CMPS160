var shader = null;
var last_shape = 0;
var TRIANGLE = 0;
var SQUARE = 1;
var CIRCLE = 2;
var red = 0.0;
var green = 0.0;
var blue = 0.0;
var size = -1;
var segments = -1;

function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  // Initialize the scene
  var scene = new Scene();
  var inputHandler = new InputHandler(canvas, scene);
  // Set the event handler for the
  document.getElementById("clear_canvas").onclick = function() {clear_canvas()};
  function clear_canvas() {
      scene.clearGeometries();
  }
  document.getElementById("triangle").onclick = function() {set_triangle()};
  function set_triangle() {
      last_shape = TRIANGLE;
  }
  document.getElementById("square").onclick = function() {set_square()};
  function set_square() {
      last_shape = SQUARE;
  }
  document.getElementById("circle").onclick = function() {set_circle()};
  function set_circle() {
      last_shape = CIRCLE;
  }

  // Initialize shader
  shader = new Shader(gl, ASG1_VSHADER, ASG1_FSHADER);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");

  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, null);
  renderer.start();
}
