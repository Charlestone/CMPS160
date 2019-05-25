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
  constructor(shader, x, y, z, r, g, b, csize, image) {
      super(shader);
      this.image = image;
      this.x = x;
      this.y = y;
      this.z = z;
      this.r = r;
      this.g = g;
      this.b = b;
      this.size = csize;
      this.vertices = this.generateCubeVertices();
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

  generateCubeVertices() {
      var vertices = [];
      //vertices
      var one =   [-0.5, 0.5,  -0.5];
      var two =   [ 0.5, 0.5,  -0.5];
      var three = [-0.5, -0.5,  -0.5];
      var four =  [ 0.5, -0.5,  -0.5];
      var five =  [-0.5, 0.5,  0.5];
      var six =   [ 0.5, 0.5,  0.5];
      var seven = [-0.5, -0.5,  0.5];
      var eight = [ 0.5, -0.5,  0.5];
      //uv coordinates
      //front face
      var uv1 = [0.0,1.0];
      var uv2 = [1.0,1.0];
      var uv3 = [0.0,0.0];
      var uv4 = [1.0,1.0];
      var uv5 = [0.0,0.0];
      var uv6 = [1.0,0.0];
      //back face
      var uv7 = [0.0,1.0];
      var uv8 = [1.0,1.0];
      var uv9 = [0.0,0.0];
      var uv10 = [1.0,1.0];
      var uv11 = [0.0,0.0];
      var uv12 = [1.0,0.0];
      //top face
      var uv13 = [0.0,1.0];
      var uv14 = [0.0,0.0];
      var uv15 = [1.0,0.0];
      var uv16 = [0.0,1.0];
      var uv17 = [1.0,1.0];
      var uv18 = [1.0,0.0];
      //bottom face
      var uv19 = [0.0,1.0];
      var uv20 = [0.0,0.0];
      var uv21 = [1.0,0.0];
      var uv22 = [0.0,1.0];
      var uv23 = [1.0,1.0];
      var uv24 = [1.0,0.0];
      //right face
      var uv25 = [0.0,1.0];
      var uv26 = [0.0,0.0];
      var uv27 = [1.0,0.0];
      var uv28 = [0.0,1.0];
      var uv29 = [1.0,1.0];
      var uv30 = [1.0,0.0];
      //left face
      var uv31 = [0.0,1.0];
      var uv32 = [0.0,0.0];
      var uv33 = [1.0,0.0];
      var uv34 = [0.0,1.0];
      var uv35 = [1.0,1.0];
      var uv36 = [1.0,0.0];
      //normals
      //front normal
      var normalf = [0, 0, -1];
      //back normal
      var normalb = [0, 0, 1];
      //top normal
      var normalt = [0, 1, 0];
      //bottom normal
      var normalm = [0, -1, 0];
      //right normal
      var normalr = [1, 0, 0];
      //left normal
      var normall = [-1, 0, 0];
      //front face 1
      var vertex1 = new Vertex(one[0], one[1], one[2], this.r, this.g, this.b, uv1[0], uv1[1]);
      var vertex2 = new Vertex(two[0], two[1], two[2], this.r, this.g, this.b, uv2[0], uv2[1]);
      var vertex3 = new Vertex(three[0], three[1], three[2], this.r, this.g, this.b, uv3[0], uv3[1]);
      //front face 2
      var vertex4 = new Vertex(two[0], two[1], two[2], this.r, this.g, this.b, uv4[0], uv4[1]);
      var vertex5 = new Vertex(three[0], three[1], three[2], this.r, this.g, this.b, uv5[0], uv5[1]);
      var vertex6 = new Vertex(four[0], four[1], four[2], this.r, this.g, this.b, uv6[0], uv6[1]);
      //back face 1
      var vertex7 = new Vertex(five[0], five[1], five[2], this.r, this.g, this.b, uv7[0], uv7[1]);
      var vertex8 = new Vertex(six[0], six[1], six[2], this.r, this.g, this.b, uv8[0], uv8[1]);
      var vertex9 = new Vertex(seven[0], seven[1], seven[2], this.r, this.g, this.b, uv9[0], uv9[1]);
      //back face 2
      var vertex10 = new Vertex(six[0], six[1], six[2], this.r, this.g, this.b, uv10[0], uv10[1]);
      var vertex11 = new Vertex(seven[0], seven[1], seven[2], this.r, this.g, this.b, uv11[0], uv11[1]);
      var vertex12 = new Vertex(eight[0], eight[1], eight[2], this.r, this.g, this.b, uv12[0], uv12[1]);
      //top face 1
      var vertex13 = new Vertex(five[0], five[1], five[2], this.r, this.g, this.b, uv13[0], uv13[1]);
      var vertex14 = new Vertex(one[0], one[1], one[2], this.r, this.g, this.b, uv14[0], uv14[1]);
      var vertex15 = new Vertex(two[0], two[1], two[2], this.r, this.g, this.b, uv15[0], uv15[1]);
      //top face 2
      var vertex16 = new Vertex(five[0], five[1], five[2], this.r, this.g, this.b, uv16[0], uv16[1]);
      var vertex17 = new Vertex(six[0], six[1], six[2], this.r, this.g, this.b, uv17[0], uv17[1]);
      var vertex18 = new Vertex(two[0], two[1], two[2], this.r, this.g, this.b, uv18[0], uv18[1]);
      //bottom face 1
      var vertex19 = new Vertex(seven[0], seven[1], seven[2], this.r, this.g, this.b, uv19[0], uv19[1]);
      var vertex20 = new Vertex(three[0], three[1], three[2], this.r, this.g, this.b, uv20[0], uv20[1]);
      var vertex21 = new Vertex(four[0], four[1], four[2], this.r, this.g, this.b, uv21[0], uv21[1]);
      //bottom face 2
      var vertex22 = new Vertex(seven[0], seven[1], seven[2], this.r, this.g, this.b, uv22[0], uv22[1]);
      var vertex23 = new Vertex(eight[0], eight[1], eight[2], this.r, this.g, this.b, uv23[0], uv23[1]);
      var vertex24 = new Vertex(four[0], four[1], four[2], this.r, this.g, this.b, uv24[0], uv24[1]);
      //right face 1
      var vertex25 = new Vertex(two[0], two[1], two[2], this.r, this.g, this.b, uv25[0], uv25[1]);
      var vertex26 = new Vertex(four[0], four[1], four[2], this.r, this.g, this.b, uv26[0], uv26[1]);
      var vertex27 = new Vertex(eight[0], eight[1], eight[2], this.r, this.g, this.b, uv27[0], uv27[1]);
      //right face 2
      var vertex28 = new Vertex(two[0], two[1], two[2], this.r, this.g, this.b, uv28[0], uv28[1]);
      var vertex29 = new Vertex(six[0], six[1], six[2], this.r, this.g, this.b, uv29[0], uv29[1]);
      var vertex30 = new Vertex(eight[0], eight[1], eight[2], this.r, this.g, this.b, uv30[0], uv30[1]);
      //left face 1
      var vertex31 = new Vertex(one[0], one[1], one[2], this.r, this.g, this.b, uv31[0], uv31[1]);
      var vertex32 = new Vertex(three[0], three[1], three[2], this.r, this.g, this.b, uv32[0], uv32[1]);
      var vertex33 = new Vertex(seven[0], seven[1], seven[2], this.r, this.g, this.b, uv33[0], uv33[1]);
      //feft face 2
      var vertex34 = new Vertex(one[0], one[1], one[2], this.r, this.g, this.b, uv34[0], uv34[1]);
      var vertex35 = new Vertex(five[0], five[1], five[2], this.r, this.g, this.b, uv35[0], uv35[1]);
      var vertex36 = new Vertex(seven[0], seven[1], seven[2], this.r, this.g, this.b, uv36[0], uv36[1]);

      //setting normals
      //front
      vertex1.setNormal(normalf);
      vertex2.setNormal(normalf);
      vertex3.setNormal(normalf);
      vertex4.setNormal(normalf);
      vertex5.setNormal(normalf);
      vertex6.setNormal(normalf);
      //back
      vertex7.setNormal(normalb);
      vertex8.setNormal(normalb);
      vertex9.setNormal(normalb);
      vertex10.setNormal(normalb);
      vertex11.setNormal(normalb);
      vertex12.setNormal(normalb);
      //top
      vertex13.setNormal(normalt);
      vertex14.setNormal(normalt);
      vertex15.setNormal(normalt);
      vertex16.setNormal(normalt);
      vertex17.setNormal(normalt);
      vertex18.setNormal(normalt);
      //bottom
      vertex19.setNormal(normalm);
      vertex20.setNormal(normalm);
      vertex21.setNormal(normalm);
      vertex22.setNormal(normalm);
      vertex23.setNormal(normalm);
      vertex24.setNormal(normalm);
      //right
      vertex25.setNormal(normalr);
      vertex26.setNormal(normalr);
      vertex27.setNormal(normalr);
      vertex28.setNormal(normalr);
      vertex29.setNormal(normalr);
      vertex30.setNormal(normalr);
      //left
      vertex31.setNormal(normall);
      vertex32.setNormal(normall);
      vertex33.setNormal(normall);
      vertex34.setNormal(normall);
      vertex35.setNormal(normall);
      vertex36.setNormal(normall);
      //pushing vertices
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
      init_size.setScale(this.size, this.size, this.size);
      init_position.setTranslate(this.x, this.y, this.z);
      //console.log('init_position:', init_position);
      vertices.forEach(function(it){
        it.point = init_position.multiplyVector3(init_size.multiplyVector3(it.point));
      });
      return vertices;
  }
}
