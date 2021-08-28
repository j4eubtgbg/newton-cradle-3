class Rope{
	constructor(pointA,bodyB)
	{
	//create rope constraint here
	this.rope = Matter.Constraint.create({
		pointA:pointA,
		 bodyB:bodyB,
		 length:300,
		 stiffness:0.1
	   });
   World.add(world,this.rope);
	}


    //create display() here 
	display(){
	let pos = this.rope.pointA;
    let pos2 = this.rope.bodyB.position;
    push();
    stroke(255);
    line(pos.x, pos.y,pos2.x,pos2.y);
   pop();
	}
}
