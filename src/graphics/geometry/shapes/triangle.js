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
  constructor(shader, x, y) {
      super(shader);
      this.vertices = this.generateTriangleVertices(x, y);
      this.faces = {0: this.vertices};
      this.cont = 1;
      this.scale = 1;
      this.x = x;
      this.y = y;
      this.size = size;
      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateTriangleVertices(x, y) {
      var vertices = [];
      var vertex1 = new Vertex(-0.05, -0.05, 0.0);
      var vertex2 = new Vertex( 0.05, -0.05, 0.0);
      var vertex3 = new Vertex( 0.0,   0.05, 0.0);
      var init_position = new Matrix4();
      var init_size = new Matrix4();
      init_size.setScale(size, size, size);
      init_position.setTranslate(x, y, 0);
      this.shader.setUniform("u_ModelMatrix", init_position.multiply(init_size).elements);
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      console.log(vertices)
      return vertices;
  }
  render() {
    var aux = new Matrix4();
    aux.setScale(1 + 0.01 * this.cont, 1 + 0.01 * this.cont, 1 + 0.01 * this.cont);
    if(this.scale == 1){
      if(this.cont > 30){
        this.scale = -1;
        this.cont--;
      }
      this.cont++;
    } else {
      if(this.cont < -30){
        this.scale = 1;
        this.cont++;
      }
      this.cont--;
    }
    var init_position = new Matrix4();
    var init_size = new Matrix4();
    var center = new Matrix4();
    init_size.setScale(this.size, this.size, this.size);
    init_position.setTranslate(this.x, this.y, 0);
    center.setTranslate(0,0,0);
    this.modelMatrix = init_position.multiply(aux.multiply(init_size.multiply(center)));
    this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
  }
}
