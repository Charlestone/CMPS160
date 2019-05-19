/*
ASS4
According to the tutorial from LearnWebGL
*/
class Camera{
	/**
    * Constructor for Camera.
    *
    * @constructor
    * @returns {Camera} Camera object created
    */
	constructor(canvas){
		this.speed = 1;

		//View Atttributes
		this.eye 	= new Vector3([0.0, 3.0,  0.0]);
		this.center = new Vector3([0.0, 3.0,  1.0]);
		this.up 	= new Vector3([0.0, 1.0,  0.0]);
		this.canvas = canvas;
		//Projection Attributes
		this.near = 0.1;
		this.far = 100;
		this.fov = 60;
		this.ratio = this.canvas.width/this.canvas.height;
		this.ortho = false;
		this.viewMatrix = new Matrix4();
		this.updateView();

		this.projectionMatrix = new Matrix4();
		this.updateProjection();
	}

	truck(dir){
		var n = this.center.sub(this.eye);
		n = n.normalize();

		var u = this.up.cross(n);
		u = u.normalize();

		u = u.mul(dir * this.speed);

		this.eye = this.eye.add(u);
		this.center = this.center.add(u);

		this.updateView();
	}

	dolly(dir){
		var n = this.center.sub(this.eye);
		n = n.normalize();


		n = n.mul(dir * this.speed);

		this.eye = this.eye.add(n);
		this.center = this.center.add(n);

		this.updateView();
	}

	pan(dir){
		var n = this.center.sub(this.eye);
		n = n.normalize();
		var rot_mat = new Matrix4();
		rot_mat.setRotate(dir, this.up.elements[0], this.up.elements[1], this.up.elements[2]);

		this.center = rot_mat.multiplyVector3(n).add(this.eye);
		
		this.updateView();
		
	}

	tilt(dir){
		var n = this.center.sub(this.eye);
		n = n.normalize();

		var u = this.up.cross(n);
		u = u.normalize();

		var rot_mat = new Matrix4();
		rot_mat.setRotate(dir, u.elements[0], u.elements[1], u.elements[2]);

		this.center = rot_mat.multiplyVector3(n).add(this.eye);
		
		this.updateView();
	}

	zoom(angle){
		//the zoom should only work with perspective
		if(!this.ortho) {
			if(this.fov + angle < 1) {
				this.fov = 1;
			} else if (this.fov + angle > 179) {
				this.fov = 179;
			} else {
				this.fov += angle;
			}
			this.updateProjection();
		}
	}

	toggle_ortho(){
		if(this.ortho){
			this.updateProjection();
		} else {
			this.projectionMatrix.setOrtho(-5,5,-5,5,1,6);
		}
		this.ortho = !this.ortho;
	}
	updateView(){
		this.viewMatrix.setLookAt(this.eye.elements[0], this.eye.elements[1], this.eye.elements[2],
                                  this.center.elements[0], this.center.elements[1], this.center.elements[2],
                                  this.up.elements[0], this.up.elements[1], this.up.elements[2]);
	}

	updateProjection(){
		this.projectionMatrix.setPerspective(this.fov, this.ratio, this.near, this.far);
	}
}