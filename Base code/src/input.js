var _inputHandler = null;

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
    }

    /**
     * Function called upon mouse click.
     */
    click(ev) {
        // Print x,y coordinates.
        console.log(ev.clientX, ev.clientY);
        // Refresh the colors selected in the sliders
        red = document.getElementById("red").value / 100;
        green = document.getElementById("green").value / 100;
        blue = document.getElementById("blue").value / 100;
        // Get the coordinates in the canvas
        var rect = ev.target.getBoundingClientRect();
        var x = ((ev.clientX - rect.left) - this.canvas.width/2)/(this.canvas.width/2);
        var y = (this.canvas.height/2 - (ev.clientY - rect.top))/(this.canvas.height/2);
        console.log(x,y)
        // Get the desired size for the figure
        var size = document.getElementById("size").value;
        switch (shape) {
          case 1:
            var shape = new Square(shader);
          case 2:
            var shape = new Circle(shader);
          default:
            var shape = new Triangle(shader, x, y, size);
        }
        this.scene.addGeometry(shape);
    }
}
