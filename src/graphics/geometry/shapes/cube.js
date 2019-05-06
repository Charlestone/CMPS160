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
      this.faces = {0:[[this.vertices[0], this.vertices[1], this.vertices[2]],
                      [this.vertices[3], this.vertices[4], this.vertices[5]]],
                    1:[[this.vertices[6], this.vertices[7], this.vertices[8]],
                      [this.vertices[9], this.vertices[10], this.vertices[11]]],
                    2:[[this.vertices[12], this.vertices[13], this.vertices[14]],
                      [this.vertices[15], this.vertices[16], this.vertices[17]]],
                    3:[[this.vertices[18], this.vertices[19], this.vertices[20]],
                      [this.vertices[21], this.vertices[22], this.vertices[23]]],
                    4:[[this.vertices[24], this.vertices[25], this.vertices[26]],
                      [this.vertices[27], this.vertices[28], this.vertices[29]]],
                    5:[[this.vertices[30], this.vertices[31], this.vertices[32]],
                      [this.vertices[33], this.vertices[34], this.vertices[35]]]};
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
      //vertices
      var one =   [-0.05,  0.05,  0.05];
      var two =   [ 0.05,  0.05,  0.05];
      var three = [-0.05, -0.05,  0.05];
      var four =  [ 0.05, -0.05,  0.05];
      var five =  [-0.05,  0.05, -0.05];
      var six =   [ 0.05,  0.05, -0.05];
      var seven = [-0.05, -0.05, -0.05];
      var eight = [ 0.05, -0.05, -0.05];
      //front face 1
      var vertex1 = new Vertex(one[0], one[1], one[2]);
      var vertex2 = new Vertex(two[0], two[1], two[2]);
      var vertex3 = new Vertex(three[0], three[1], three[2]);
      //front face 2
      var vertex4 = new Vertex(two[0], two[1], two[2]);
      var vertex5 = new Vertex(three[0], three[1], three[2]);
      var vertex6 = new Vertex(four[0], four[1], four[2]);
      //back face 1
      var vertex7 = new Vertex(five[0], five[1], five[2]);
      var vertex8 = new Vertex(six[0], six[1], six[2]);
      var vertex9 = new Vertex(seven[0], seven[1], seven[2]);
      //back face 2
      var vertex10 = new Vertex(six[0], six[1], six[2]);
      var vertex11 = new Vertex(seven[0], seven[1], seven[2]);
      var vertex12 = new Vertex(eight[0], eight[1], eight[2]);
      //top face 1
      var vertex13 = new Vertex(five[0], five[1], five[2]);
      var vertex14 = new Vertex(one[0], one[1], one[2]);
      var vertex15 = new Vertex(two[0], two[1], two[2]);
      //top face 2
      var vertex16 = new Vertex(five[0], five[1], five[2]);
      var vertex17 = new Vertex(six[0], six[1], six[2]);
      var vertex18 = new Vertex(two[0], two[1], two[2]);
      //bottom face 1
      var vertex19 = new Vertex(seven[0], seven[1], seven[2]);
      var vertex20 = new Vertex(three[0], three[1], three[2]);
      var vertex21 = new Vertex(four[0], four[1], four[2]);
      //bottom face 2
      var vertex22 = new Vertex(seven[0], seven[1], seven[2]);
      var vertex23 = new Vertex(eight[0], eight[1], eight[2]);
      var vertex24 = new Vertex(four[0], four[1], four[2]);
      //right face 1
      var vertex25 = new Vertex(two[0], two[1], two[2]);
      var vertex26 = new Vertex(four[0], four[1], four[2]);
      var vertex27 = new Vertex(eight[0], eight[1], eight[2]);
      //right face 2
      var vertex28 = new Vertex(two[0], two[1], two[2]);
      var vertex29 = new Vertex(six[0], six[1], six[2]);
      var vertex30 = new Vertex(eight[0], eight[1], eight[2]);
      //left face 1
      var vertex31 = new Vertex(one[0], one[1], one[2]);
      var vertex32 = new Vertex(three[0], three[1], three[2]);
      var vertex33 = new Vertex(seven[0], seven[1], seven[2]);
      //feft face 2
      var vertex34 = new Vertex(one[0], one[1], one[2]);
      var vertex35 = new Vertex(five[0], five[1], five[2]);
      var vertex36 = new Vertex(seven[0], seven[1], seven[2]);

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
