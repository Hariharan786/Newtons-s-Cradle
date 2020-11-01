
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope5,rope4;




function setup() {
	createCanvas(800, 700);
	 engine = Engine.create();
	 world = engine.world;
	
	 let canvasmouse = Mouse.create(canvas.elt);
	 canvasmouse.pixelRatio = pixelDensity();
	 let options = {
		 mouse: canvasmouse
	 };
	 mConstraint = MouseConstraint.create(engine,options);
	 World.add(world,mConstraint);

	 bob1 = new Pendulum(160,320,"red");
	 bob2 = new Pendulum(bob1.x+100,bob1.y,"red");
	 bob3 = new Pendulum(bob2.x+100,bob2.y,"red");
	 bob4 = new Pendulum(bob3.x+100,bob3.y,"red");
	 bob5 = new Pendulum(bob4.x+100,bob4.y,"red");
}


function draw() {

  background(0);
  
}

function mouseDragged(){
	Matter.body.setPosition(bob1.body,{x:mouseX, y:mouseY});
}




