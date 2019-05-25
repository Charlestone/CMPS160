
class Light {
    constructor(x, y, z) {
        this.pos = new Vector3([x, y, z]);
        //Light colors
        this.ambient = [0.3, 0.3, 0.3];
        this.diffuse = [0.5, 0.5, 0.5];
        this.specular = [1.0, 1.0, 1.0];
    }
}
