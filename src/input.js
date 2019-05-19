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
    constructor(canvas, scene, camera) {
      this.canvas = canvas;
      this.scene = scene;
      this.image = null;
      this.camera = camera;

      _inputHandler = this;

      // Mouse Events
      this.canvas.onmousemove = function(ev) { _inputHandler.move(ev)  };
      this.canvas.onmouseup   = function(ev) { _inputHandler.up(ev)    };
      this.canvas.onmousemove = function(ev) { _inputHandler.mouseMove(ev) };

      // Button Events
      document.addEventListener('keydown', function(ev) { _inputHandler.keyDown(ev); }, false);
      document.addEventListener('keyup',   function(ev) { _inputHandler.keyUp(ev);   }, false);
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
        var aux_shader = shader_col;
        switch (last_shape) {
          case 1:
            var shape = new Square(aux_shader, x, y);
            break;
          case 2:
            var shape = new Circle(aux_shader, x, y);
            break;
          case 3:
            if(_inputHandler.image != null){
              aux_shader = shader_frag;
            }
            var shape = new Cube(aux_shader, x, y, _inputHandler.image);
            break;
          default:
            var shape = new Triangle(aux_shader, x, y);
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

    keyUp(ev){
      var keyName = event.key;
    }

    keyDown(ev){
      var keyName = event.key;
      switch(keyName){
        case "a":
          this.camera.truck(1);
          break;
        case "d":
          this.camera.truck(-1);
          break;
        case "s":
          this.camera.dolly(-1);
          break;
        case "w":
          this.camera.dolly(1);
          break;
        case "i":
          this.camera.zoom(-3);
          break;
        case "o":
          this.camera.zoom(+3);
          break;
        case "p":
          this.camera.toggle_ortho();
          break;
      }

    }

    mouseMove(ev) {
        var movementX = ev.movementX;
        if (movementX != 0) {
          this.camera.pan(-movementX);
        }
        var movementY = ev.movementY;
        if (movementY != 0) {
          this.camera.tilt(movementY);
        }

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
            var aux_shader = shader_col;
            if(_inputHandler.image != null){
              aux_shader = shader_frag;
            }
            var customObj = new CustomOBJ(aux_shader, fileReader.result, _inputHandler.image);
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
        console.log('Image ready!');
      }
      var fullPath = document.getElementById("textureInput").value;
      var splitPath = fullPath.split("\\");
      var fileName = splitPath[splitPath.length - 1];
      image.src = 'objs/' + fileName;
      console.log(image.src);
    }
}
