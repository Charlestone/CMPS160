/**
 * Specifies a vertex. Currently only contains the vertex's position.
 *
 * @author Lucas N. Ferreira
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z) {
      this.point  = new Vector3([x, y, z]);
      if(rainbow == 1){
      	this.color  = [Math.random(), Math.random(), Math.random(), 1.0];
      } else {
      	this.color  = [red, green, blue, 1.0];
      }

      // This class can be extended to support other attributes such as
      // normals and UV coordinates.
  }
}
