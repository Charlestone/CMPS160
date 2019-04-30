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
      for(var i = 1; i < segments; i++){
        var vertex = new Vertex(
          (aux_x * Math.cos(angle * i)) - (aux_y * Math.sin(angle * i)) * size + x,
          (aux_x * Math.sin(angle * i)) + (aux_y * Math.cos(angle * i)) * size + y,
          0.0);
        vertices.push(vertex1);
        vertices.push(vertex2);
        vertices.push(vertex);
        vertex2 = vertex;
      }
      vertex = new Vertex(aux_x * size + x, aux_y * size + y, 0.0);
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex);
      var init_position = new Matrix4();
      var init_size = new Matrix4();
      init_size.setScale(size, size, size);
      init_position.setTranslate(x, y, 0);

      console.log(vertices);
      return vertices;
  }
  render() {
    var aux = new Matrix4();
    aux.setTranslate(getRandomArbitrary(-0.01,0.01), getRandomArbitrary(-0.01,0.01), 0);
    this.modelMatrix = aux.multiply(this.modelMatrix)
    this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
  }
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}