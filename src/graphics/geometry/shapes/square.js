/**
 * Specifies a Square. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Square}
 */
class Square extends Geometry {
  /**
   * Constructor for Square.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Triangle} Triangle created
   */
  constructor(shader, x, y) {
      super(shader);
      this.vertices = this.generateSquareVertices(x, y);
      this.faces = {0: this.vertices};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateSquareVertices(x, y) {
      var vertices = [];

      var vertex1 = new Vertex((-0.05 * size + x), (-0.05 * size + y), 0.0);
      var vertex2 = new Vertex( (0.05 * size + x), (-0.05 * size + y), 0.0);
      var vertex3 = new Vertex( (0.05 * size + x),  (0.05 * size + y), 0.0);
      var vertex4 = new Vertex((-0.05 * size + x), (-0.05 * size + y), 0.0);
      var vertex5 = new Vertex((-0.05 * size + x),  (0.05 * size + y), 0.0);
      var vertex6 = new Vertex( (0.05 * size + x),  (0.05 * size + y), 0.0);
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex4);
      vertices.push(vertex5);
      vertices.push(vertex6);
      console.log(vertices);
      return vertices;
  }
}
