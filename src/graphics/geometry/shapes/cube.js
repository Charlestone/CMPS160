/**
 * Specifies a Cube. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Cube}
 */
class Cube extends Geometry {
  /**
   * Constructor for Cube.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Triangle} Triangle created
   */
  constructor(shader, x, y, image) {
      super(shader);
      this.vertices = this.generateCubeVertices(x, y);
      this.faces = {0: this.vertices};
      this.x = x;
      this.y = y;
      this.size = size;
      this.aux = new Matrix4()
      this.image = image;
      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCubeVertices(x, y) {
      var vertices = [];

      var vertex1 = new Vertex(-0.05, -0.05, 0.05);
      var vertex2 = new Vertex( 0.05, -0.05, 0.05);
      var vertex3 = new Vertex( 0.05,  0.05, 0.05);

      var vertex4 = new Vertex(-0.05, -0.05, 0.05);
      var vertex5 = new Vertex(-0.05,  0.05, 0.05);
      var vertex6 = new Vertex( 0.05,  0.05, 0.05);

      var vertex7 = new Vertex(-0.05, -0.05, -0.05);
      var vertex8 = new Vertex( 0.05, -0.05, -0.05);
      var vertex9 = new Vertex( 0.05,  0.05, -0.05);

      var vertex10 = new Vertex(-0.05, -0.05, -0.05);
      var vertex11 = new Vertex(-0.05,  0.05, -0.05);
      var vertex12 = new Vertex( 0.05,  0.05, -0.05);

      var vertex13 = new Vertex(-0.05, -0.05, 0.05);
      var vertex14 = new Vertex( 0.05, -0.05, 0.05);
      var vertex15 = new Vertex( 0.05, -0.05, -0.05);

      var vertex16 = new Vertex(-0.05, -0.05, -0.05);
      var vertex17 = new Vertex(-0.05, -0.05, 0.05);
      var vertex18 = new Vertex( 0.05, -0.05, -0.05);

      var vertex19 = new Vertex(-0.05, 0.05, 0.05);
      var vertex20 = new Vertex( 0.05, 0.05, -0.05);
      var vertex21 = new Vertex( 0.05, 0.05, 0.05);

      var vertex22 = new Vertex(0.05, 0.05, -0.05);
      var vertex23 = new Vertex(-0.05, -0.05, -0.05);
      var vertex24 = new Vertex( -0.05, -0.05, 0.05);

      var vertex25 = new Vertex(-0.05, 0.05, 0.05);
      var vertex26 = new Vertex(-0.05, 0.05, -0.05);
      var vertex27 = new Vertex(-0.05,-0.05, 0.05);

      var vertex28 = new Vertex(-0.05, -0.05, 0.05);
      var vertex29 = new Vertex(-0.05, -0.05, -0.05);
      var vertex30 = new Vertex(-0.05, 0.05, 0.05);

      var vertex31 = new Vertex( 0.05, 0.05, 0.05);
      var vertex32 = new Vertex( 0.05, 0.05, -0.05);
      var vertex33 = new Vertex( 0.05, -0.05, 0.05);

      var vertex34 = new Vertex( 0.05, -0.05, 0.05);
      var vertex35 = new Vertex( 0.05, -0.05, -0.05);
      var vertex36 = new Vertex( 0.05, 0.05, 0.05);
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex4);
      vertices.push(vertex5);
      vertices.push(vertex6);
      vertices.push(vertex7);
      vertices.push(vertex8);
      vertices.push(vertex9);
      vertices.push(vertex10);
      vertices.push(vertex11);
      vertices.push(vertex12);
      vertices.push(vertex13);
      vertices.push(vertex14);
      vertices.push(vertex15);
      vertices.push(vertex16);
      vertices.push(vertex17);
      vertices.push(vertex18);
      vertices.push(vertex19);
      vertices.push(vertex20);
      vertices.push(vertex21);
      vertices.push(vertex22);
      vertices.push(vertex23);
      vertices.push(vertex24);
      vertices.push(vertex25);
      vertices.push(vertex26);
      vertices.push(vertex27);
      vertices.push(vertex28);
      vertices.push(vertex29);
      vertices.push(vertex30);
      vertices.push(vertex31);
      vertices.push(vertex32);
      vertices.push(vertex33);
      vertices.push(vertex34);
      vertices.push(vertex35);
      vertices.push(vertex36);
      var init_position = new Matrix4();
      var init_size = new Matrix4();
      init_size.setScale(size, size, size);
      init_position.setTranslate(x, y, 0);
      var init_tilting = new Matrix4();
      init_tilting.setRotate(20,0,0,1);
      vertices.forEach(function(it){
        it.point = init_tilting.multiplyVector3(init_size.multiplyVector3(it.point));
      });
      this.shader.setUniform("u_ModelMatrix", init_position.elements);
      console.log(vertices);
      return vertices;
  }
  render() {
    var aux = new Matrix4();
    aux.setRotate(1,0,1,0);
    this.aux = aux.multiply(this.aux);
    var init_position = new Matrix4();
    var center = new Matrix4();
    init_position.setTranslate(this.x, this.y, 0);
    center.setTranslate(0,0,0);
    this.modelMatrix = init_position.multiply(this.aux.multiply(center));
    this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
  }
}
