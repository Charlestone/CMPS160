/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Triangle}
 */
class Triangle extends Geometry {
  /**
   * Constructor for Triangle.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Triangle} Triangle created
   */
  constructor(shader, x, y, size) {
      super(shader);
      this.vertices = this.generateTriangleVertices(x, y, size);
      this.faces = {0: this.vertices};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateTriangleVertices(x, y, size) {
      var vertices = []

      var vertex1 = new Vertex((-0.05 * size + x), (-0.05 * size + y), 0.0);
      var vertex2 = new Vertex( (0.05 * size + x), (-0.05 * size + y), 0.0);
      var vertex3 = new Vertex(  (0.0 * size + x),  (0.05 * size + y), 0.0);

      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      console.log(vertices)
      return vertices;
  }
}
