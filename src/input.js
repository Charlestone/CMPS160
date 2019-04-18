var _inputHandler = null;
var clicked = false;
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

      _inputHandler = this;

      // Mouse Events
      this.canvas.onmousedown = function(ev) { _inputHandler.click(ev) };
      this.canvas.onmousemove = function(ev) { _inputHandler.move(ev)  };
      this.canvas.onmouseup   = function(ev) { _inputHandler.up(ev)    };
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
}
