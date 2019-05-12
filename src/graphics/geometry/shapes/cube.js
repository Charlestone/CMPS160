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
  constructor(shader, x, y, image, initial) {
      super(shader);
      this.image = image;
      this.x = x;
      this.y = y;
      this.size = size;
      this.aux = new Matrix4();
      this.vertices = this.generateCubeVertices(x, y, initial);
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
      
      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCubeVertices(x, y, initial) {
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
      //uv coordinates
      var uv1 = [];
      var uv2 = [];
      var uv3 = [];
      var uv4 = [];
      var uv5 = [];
      var uv6 = [];
      var uv7 = [];
      var uv8 = [];
      var uv9 = [];
      var uv10 = [];
      var uv11 = [];
      var uv12 = [];
      var uv13 = [];
      var uv14 = [];
      var uv15 = [];
      var uv16 = [];
      var uv17 = [];
      var uv18 = [];
      var uv19 = [];
      var uv20 = [];
      var uv21 = [];
      var uv22 = [];
      var uv23 = [];
      var uv24 = [];
      var uv25 = [];
      var uv26 = [];
      var uv27 = [];
      var uv28 = [];
      var uv29 = [];
      var uv30 = [];
      var uv31 = [];
      var uv32 = [];
      var uv33 = [];
      var uv34 = [];
      var uv35 = [];
      var uv36 = [];
      console.log('Image:');
      console.log(this.image);
      if(this.image != null) {
        if(initial === undefined){
          //front face
          uv1 = [0.0,1.0];
          uv2 = [1.0,1.0];
          uv3 = [0.0,0.0];
          uv4 = [1.0,1.0];
          uv5 = [0.0,0.0];
          uv6 = [1.0,0.0];
          //back face
          uv7 = [0.0,1.0];
          uv8 = [1.0,1.0];
          uv9 = [0.0,0.0];
          uv10 = [1.0,1.0];
          uv11 = [0.0,0.0];
          uv12 = [1.0,0.0];
          //top face
          uv13 = [0.0,1.0];
          uv14 = [0.0,0.0];
          uv15 = [1.0,0.0];
          uv16 = [0.0,1.0];
          uv17 = [1.0,1.0];
          uv18 = [1.0,0.0];
          //bottom face
          uv19 = [0.0,1.0];
          uv20 = [0.0,0.0];
          uv21 = [1.0,0.0];
          uv22 = [0.0,1.0];
          uv23 = [1.0,1.0];
          uv24 = [1.0,0.0];
          //right face
          uv25 = [0.0,1.0];
          uv26 = [0.0,0.0];
          uv27 = [1.0,0.0];
          uv28 = [0.0,1.0];
          uv29 = [1.0,1.0];
          uv30 = [1.0,0.0];
          //left face
          uv31 = [0.0,1.0];
          uv32 = [0.0,0.0];
          uv33 = [1.0,0.0];
          uv34 = [0.0,1.0];
          uv35 = [1.0,1.0];
          uv36 = [1.0,0.0];
        } else {
          //front face (whole)
          uv1 = [0.0,1.0];
          uv2 = [1.0,1.0];
          uv3 = [0.0,0.0];
          uv4 = [1.0,1.0];
          uv5 = [0.0,0.0];
          uv6 = [1.0,0.0];
          //back face (whole inverted)
          uv7 = [0.0,1.0];
          uv8 = [1.0,1.0];
          uv9 = [0.0,0.0];
          uv10 = [1.0,1.0];
          uv11 = [0.0,0.0];
          uv12 = [1.0,0.0];
          //top face (top half)
          uv13 = [0.0,1.0];
          uv14 = [0.0,0.5];
          uv15 = [1.0,0.5];
          uv16 = [0.0,1.0];
          uv17 = [1.0,1.0];
          uv18 = [1.0,0.5];
          //bottom face (bottom half)
          uv19 = [1.0,0.5];
          uv20 = [1.0,0.0];
          uv21 = [0.0,0.0];
          uv22 = [1.0,0.5];
          uv23 = [0.0,0.5];
          uv24 = [0.0,0.0];
          //right face (2x1)
          uv25 = [0.0,1.0];
          uv26 = [0.0,0.0];
          uv27 = [2.0,0.0];
          uv28 = [0.0,1.0];
          uv29 = [2.0,1.0];
          uv30 = [2.0,0.0];
          //left face (3x3)
          uv31 = [3.0,3.0];
          uv32 = [3.0,0.0];
          uv33 = [0.0,0.0];
          uv34 = [3.0,3.0];
          uv35 = [0.0,3.0];
          uv36 = [0.0,0.0];
        }
      }
      //front face 1
      var vertex1 = new Vertex(one[0], one[1], one[2], uv1[0], uv1[1]);
      var vertex2 = new Vertex(two[0], two[1], two[2], uv2[0], uv2[1]);
      var vertex3 = new Vertex(three[0], three[1], three[2], uv3[0], uv3[1]);
      //front face 2
      var vertex4 = new Vertex(two[0], two[1], two[2], uv4[0], uv4[1]);
      var vertex5 = new Vertex(three[0], three[1], three[2], uv5[0], uv5[1]);
      var vertex6 = new Vertex(four[0], four[1], four[2], uv6[0], uv6[1]);
      //back face 1
      var vertex7 = new Vertex(five[0], five[1], five[2], uv7[0], uv7[1]);
      var vertex8 = new Vertex(six[0], six[1], six[2], uv8[0], uv8[1]);
      var vertex9 = new Vertex(seven[0], seven[1], seven[2], uv9[0], uv9[1]);
      //back face 2
      var vertex10 = new Vertex(six[0], six[1], six[2], uv10[0], uv10[1]);
      var vertex11 = new Vertex(seven[0], seven[1], seven[2], uv11[0], uv11[1]);
      var vertex12 = new Vertex(eight[0], eight[1], eight[2], uv12[0], uv12[1]);
      //top face 1
      var vertex13 = new Vertex(five[0], five[1], five[2], uv13[0], uv13[1]);
      var vertex14 = new Vertex(one[0], one[1], one[2], uv14[0], uv14[1]);
      var vertex15 = new Vertex(two[0], two[1], two[2], uv15[0], uv15[1]);
      //top face 2
      var vertex16 = new Vertex(five[0], five[1], five[2], uv16[0], uv16[1]);
      var vertex17 = new Vertex(six[0], six[1], six[2], uv17[0], uv17[1]);
      var vertex18 = new Vertex(two[0], two[1], two[2], uv18[0], uv18[1]);
      //bottom face 1
      var vertex19 = new Vertex(seven[0], seven[1], seven[2], uv19[0], uv19[1]);
      var vertex20 = new Vertex(three[0], three[1], three[2], uv20[0], uv20[1]);
      var vertex21 = new Vertex(four[0], four[1], four[2], uv21[0], uv21[1]);
      //bottom face 2
      var vertex22 = new Vertex(seven[0], seven[1], seven[2], uv22[0], uv22[1]);
      var vertex23 = new Vertex(eight[0], eight[1], eight[2], uv23[0], uv23[1]);
      var vertex24 = new Vertex(four[0], four[1], four[2], uv24[0], uv24[1]);
      //right face 1
      var vertex25 = new Vertex(two[0], two[1], two[2], uv25[0], uv25[1]);
      var vertex26 = new Vertex(four[0], four[1], four[2], uv26[0], uv26[1]);
      var vertex27 = new Vertex(eight[0], eight[1], eight[2], uv27[0], uv27[1]);
      //right face 2
      var vertex28 = new Vertex(two[0], two[1], two[2], uv28[0], uv28[1]);
      var vertex29 = new Vertex(six[0], six[1], six[2], uv29[0], uv29[1]);
      var vertex30 = new Vertex(eight[0], eight[1], eight[2], uv30[0], uv30[1]);
      //left face 1
      var vertex31 = new Vertex(one[0], one[1], one[2], uv31[0], uv31[1]);
      var vertex32 = new Vertex(three[0], three[1], three[2], uv32[0], uv32[1]);
      var vertex33 = new Vertex(seven[0], seven[1], seven[2], uv33[0], uv33[1]);
      //feft face 2
      var vertex34 = new Vertex(one[0], one[1], one[2], uv34[0], uv34[1]);
      var vertex35 = new Vertex(five[0], five[1], five[2], uv35[0], uv35[1]);
      var vertex36 = new Vertex(seven[0], seven[1], seven[2], uv36[0], uv36[1]);

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
