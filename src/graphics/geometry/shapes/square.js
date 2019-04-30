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
      this.x = x;
      this.y = y;
      this.size = size;
      this.aux = new Matrix4();
      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateSquareVertices(x, y) {
      var vertices = [];

      var vertex1 = new Vertex(-0.05, -0.05, 0.0);
      var vertex2 = new Vertex( 0.05, -0.05, 0.0);
      var vertex3 = new Vertex( 0.05,  0.05, 0.0);
      var vertex4 = new Vertex(-0.05, -0.05, 0.0);
      var vertex5 = new Vertex(-0.05,  0.05, 0.0);
      var vertex6 = new Vertex( 0.05,  0.05, 0.0);
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex4);
      vertices.push(vertex5);
      vertices.push(vertex6);
      var init_position = new Matrix4();
      var init_size = new Matrix4();
      init_size.setScale(size, size, size);
      init_position.setTranslate(x, y, 0);
      this.shader.setUniform("u_ModelMatrix", init_position.multiply(init_size).elements);
      vertices.forEach(function(it){
        it.point = init_size.multiplyVector3(it.point);
      });
      console.log(vertices);
      return vertices;
  }
  render() {
    var aux = new Matrix4();
    aux.setRotate(1,0,0,1);
    this.aux = aux.multiply(this.aux);
    var init_position = new Matrix4();
    var center = new Matrix4();
    init_position.setTranslate(this.x, this.y, 0);
    center.setTranslate(0,0,0);
    this.modelMatrix = init_position.multiply(this.aux.multiply(center));
    this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
  }
}
