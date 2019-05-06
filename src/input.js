var _inputHandler = null;
var clicked = false;
var last_shape = 0;
var TRIANGLE = 0;
var SQUARE = 1;
var CIRCLE = 2;
var CUBE = 3;
var rainbow = 0;
/**
 * Specifies a Input Handler. Used to parse input events from a HTML page.
 *
 * @author Lucas N. Ferreira
 * @this {Scene}
 */
class InputHandler {
    /**
     * Initializes the event handeling functions within the program.
     */
    constructor(canvas, scene) {
      this.canvas = canvas;
      this.scene = scene;
      this.image = null;

      _inputHandler = this;

      // Mouse Events
      this.canvas.onmousedown = function(ev) { _inputHandler.click(ev) };
      this.canvas.onmousemove = function(ev) { _inputHandler.move(ev)  };
      this.canvas.onmouseup   = function(ev) { _inputHandler.up(ev)    };

      // Button Events
      document.getElementById('fileLoad').onclick = function() { _inputHandler.readSelectedFile() };
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
      document.getElementById("cube").onclick = function() {set_cube()};
      function set_cube() {
          last_shape = CUBE;
      }
      document.getElementById("rainbow").onclick = function(){
        if(rainbow == 0) {
          rainbow = 1;
          document.getElementById("rainbow").innerHTML= 'Solid Color';
        } else {
          rainbow = 0;
          document.getElementById("rainbow").innerHTML = 'Rainbow';
        }
      };
      document.getElementById('textureInput').onchange = function(){_inputHandler.readTexture() };
    }

    /**
     * Function called upon mouse click.
     */
    click(ev) {
        clicked = true;
        this.draw(ev);
    }
    draw(ev) {
      if(clicked){
        // Print x,y coordinates.
        console.log(ev.clientX, ev.clientY);
        // Refresh the values selected in the sliders
        red = document.getElementById("red").value / 100;
        green = document.getElementById("green").value / 100;
        blue = document.getElementById("blue").value / 100;
        size = document.getElementById("size").value;
        segments = document.getElementById("segments").value;
        // Get the coordinates in the canvas
        var rect = ev.target.getBoundingClientRect();
        var x = ((ev.clientX - rect.left) - this.canvas.width/2)/(this.canvas.width/2);
        var y = (this.canvas.height/2 - (ev.clientY - rect.top))/(this.canvas.height/2);
        switch (last_shape) {
          case 1:
            var shape = new Square(shader, x, y);
            break;
          case 2:
            var shape = new Circle(shader, x, y);
            break;
          case 3:
            var shape = new Cube(shader, x, y, _inputHandler.image);
            break
          default:
            var shape = new Triangle(shader, x, y);
            break;
        }
        this.scene.addGeometry(shape);
      }
    }
    move(ev){
      this.draw(ev);
    }
    up(ev) {
      clicked = false;
    }

    /**
     * Function called to read a selected file.
     */
    readSelectedFile() {
        var fileReader = new FileReader();
        var objFile = document.getElementById("fileInput").files[0];

        if (!objFile) {
            alert("OBJ file not set!");
            return;
        }

        fileReader.readAsText(objFile);
        fileReader.onloadend = function() {
            red = document.getElementById("red").value / 100;
            green = document.getElementById("green").value / 100;
            blue = document.getElementById("blue").value / 100;
            var customObj = new CustomOBJ(shader, fileReader.result);
            _inputHandler.scene.addGeometry(customObj);
        }
    }
    readTexture(){
      var image = new Image();
      if (!image){
        console.log('Failed to create the image object');
        return false;
      }
      image.onload = function(){
        _inputHandler.image = image;
      }
      var fullPath = document.getElementById("textureInput").value;
      var splitPath = fullPath.split("\\");
      var fileName = splitPath[splitPath.length - 1];
      image.src = 'objs/' + fileName;
    }
}
