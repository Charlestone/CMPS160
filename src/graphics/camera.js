/*
ASS4
According to the tutorial from LearnWebGL
*/
class Camera{

	constructor(){
		this.speed = 0.1;
		//View Atttributes
		this.eye 	= new Vector3([0.0, 0.0, -1.0]);
		this.center = new Vector3([0.0, 0.0,  1.0]);
		this.up 	= new Vector3([0.0, 1.0,  0.0]);

		//Projection Attributes
		
		this.viewMatrix = new Matrix4();
		this.updateView();

		this.ProjectionMatrix = new Matrix4();
	}

	truck(dir){
		var n = this.center.sub(this.eye);
		n = n.normalize();
		var v = this.up;
		var u = v.cross(v);
		u = u.normalize();
		u = u.mul(dir * this.speed);

		this.eye = this.eye.add(u);
		this.center = this.center.add(u);

		this.updateView();
	}

	dolly(){

	}

	pan(){

	}

	tilt(){

	}

	updateView(){
		this.viewMatrix.setLookAt(this.eye.elements[0],this.eye.elements[1],this.eye.elements[2],
			this.center.elements[0],this.center.elements[1],this.center.elements[2],
			this.up.elements[0],this.up.elements[1],this.up.elements[2]);
	}

	updateProjection(){ sd
		this.projectionMatrix.setPerspective(fovy,);
	}
}