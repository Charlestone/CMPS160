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
  constructor(shader, x, y, z, r, g, b, size, image) {
      super(shader);
      this.image = image;
      this.x = x;
      this.y = y;
      this.z = z;
      this.r = r;
      this.g = g;
      this.b = b;
      this.size = size;
      this.aux = new Matrix4();
      this.vertices = this.generateSquareVertices();
      this.faces = {0: this.vertices};
      
      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateSquareVertices() {
      var vertices = [];
      var one =   [-0.5,  0.0,  0.5];
      var two =   [ 0.5,  0.0,  0.5];
      var five =  [-0.5,  0.0, -0.5];
      var six =   [ 0.5,  0.0, -0.5];
      var uv13 = [0.0,1.0];
      var uv14 = [0.0,0.0];
      var uv15 = [1.0,0.0];
      var uv16 = [0.0,1.0];
      var uv17 = [1.0,1.0];
      var uv18 = [1.0,0.0];
      var normal = [0.0, 1.0, 0.0];
      var vertex1 = new Vertex(five[0], five[1], five[2], this.r, this.g, this.b, uv13[0], uv13[1]);
      var vertex2 = new Vertex(one[0], one[1], one[2], this.r, this.g, this.b, uv14[0], uv14[1]);
      var vertex3 = new Vertex(two[0], two[1], two[2], this.r, this.g, this.b, uv15[0], uv15[1]);
      var vertex4 = new Vertex(five[0], five[1], five[2], this.r, this.g, this.b, uv16[0], uv16[1]);
      var vertex5 = new Vertex(six[0], six[1], six[2], this.r, this.g, this.b, uv17[0], uv17[1]);
      var vertex6 = new Vertex(two[0], two[1], two[2], this.r, this.g, this.b, uv18[0], uv18[1]);
      vertex1.setNormal(normal);
      vertex2.setNormal(normal);
      vertex3.setNormal(normal);
      vertex4.setNormal(normal);
      vertex5.setNormal(normal);
      vertex6.setNormal(normal);
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex4);
      vertices.push(vertex5);
      vertices.push(vertex6);
      var init_position = new Matrix4();
      var init_size = new Matrix4();
      init_size.setScale(this.size, this.size, this.size);
      init_position.setTranslate(this.x, this.y, this.z);
      this.shader.setUniform("u_ModelMatrix", init_position.multiply(init_size).elements);
      vertices.forEach(function(it){
        it.point = init_size.multiplyVector3(it.point);
      });
      return vertices;
  }
}
