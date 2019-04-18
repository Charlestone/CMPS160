/**
 * Specifies a Circle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Circle}
 */
class Circle extends Geometry {
  /**
   * Constructor for Circle.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Triangle} Triangle created
   */
  constructor(shader, x, y) {
      super(shader);
      this.vertices = this.generateCircleVertices(x, y);
      this.faces = {0: this.vertices};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCircleVertices(x, y) {
      var vertices = [];
      var aux_x = 0.00;
      var aux_y = 0.05;
      var angle = Math.PI * 2 / segments;
      var vertex1 = new Vertex(0.0 * size + x, 0.0 * size +y, 0.0);
      var vertex2 = new Vertex( aux_x * size + x, aux_y * size + y, 0.0);
      vertices.push(vertex1);
      vertices.push(vertex2);
      for(var i = 1; i < segments; i++){
        var vertex = new Vertex(
          (aux_x * Math.cos(angle * i)) - (aux_y * Math.sin(angle * i)) * size + x,
          (aux_x * Math.sin(angle * i)) + (aux_y * Math.cos(angle * i)) * size + y,
          0.0);
        vertices.push(vertex);
      }
      vertex = new Vertex(aux_x * size + x, aux_y * size + y, 0.0);
      vertices.push(vertex);
      console.log(vertices);
      return vertices;
  }
}
/*

(0,0)
(0,l) === p

push verts
first two points

for i in seg
  p = rotate p by theta
  translate p by (x,y)
  push p */