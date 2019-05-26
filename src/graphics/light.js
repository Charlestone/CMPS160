
class Light {
    constructor(x, y, z) {
        this.pos = new Vector3([x, y, z]);
        //Light colors
        this.ambient = [1.0, 1.0, 1.0];
        this.diffuse = [1.0, 1.0, 1.0];
        this.specular = [1.0, 1.0, 1.0];
    }
}
