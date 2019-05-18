/**
 * Specifies a vertex. Currently only contains the vertex's position.
 *
 * @author Lucas N. Ferreira
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z, r, g, b, u, v) {
    this.point  = new Vector3([x, y, z]);
  	this.color  = [r, g, b, 1.0];
  	this.textCoord = [u, v];

      

      // This class can be extended to support other attributes such as
      // normals and UV coordinates.
  }
}
