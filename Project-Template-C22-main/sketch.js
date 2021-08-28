const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob,bob1,bob2,bob3,bob4;
//Create multiple bobs, mulitple ropes varibale here
var r,r1,r2,r3,r4;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
	var bob_options = {
		restitution: 0.8,
		isStatic: false
	  }
	  
	  
	  bob = Bodies.circle(400,100,10,bob_options);
	  World.add(world,bob);
	 
	  bob1 = Bodies.circle(350,100,10,bob_options);
	  World.add(world,bob1);
	  
	  bob2 = Bodies.circle(300,100,10,bob_options);
	  World.add(world,bob2);

	  bob3 = Bodies.circle(450,100,10,bob_options);
	  World.add(world,bob3);

	  bob4 = Bodies.circle(500,100,10,bob_options);
	  World.add(world,bob4);

r = new Rope({x:400,y:100},bob);
r1 = new Rope({x:350,y:100},bob1);
r2 = new Rope({x:300,y:100},bob2);
r3 = new Rope({x:450,y:100},bob3);
r4 = new Rope({x:500,y:100},bob4);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(bob.position.x,bob.position.y,40);
  ellipse(bob1.position.x,bob1.position.y,40);
  ellipse(bob2.position.x,bob2.position.y,40);
  ellipse(bob3.position.x,bob3.position.y,40);
  ellipse(bob4.position.x,bob4.position.y,40);

r.display();
r1.display();
r2.display();
r3.display();
r4.display();

if(keyDown('w')){
	push();
}
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function push(){
	Matter.Body.applyForce(bob,{x:0,y:0},{x:0.5,y:0})
}
