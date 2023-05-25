
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options={
	 isStatic: true
	}

	var block1
	var block2
	
	fill();
	rectMode();
	ellipseMode();

	World.Bodies('block1','block2');

	rotator1 = Bodies.rectangle(250,200,150,20,rotator_opitions);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(300,200,150,20,rotator_opitions);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(350,200,150,20,rotator_opitions);
	World.add(world,rotator3);

	Engine.run(engine);
  
	Matter.Body.rotate(rotator1,angle1)
	push();
	translate(rotator1.position.x,rotator1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1 +=0.2;

	Matter.Body.rotate(rotator2,angle1)
	push();
	translate(rotator2.position.x,rotator2.position.y);
	rotate(angle2);
	rect(0,0,150,20);
	pop();
	angle2 +=0.4;

	Matter.Body.rotate(rotator3,angle1)
	push();
	translate(rotator3.position.x,rotator3.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle3 +=0.6;

	var particle_opitions = {
	 restitution:0.4,
	 friction:0.2	
	}

	particle1 = Bodies.circle(220,10,10,particle_opitions);
	World.add(world,particle1);

	particle2 = Bodies.circle(220,10,10,particle_opitions);
	World.add(world,particle2);

	particle3 = Bodies.circle(220,10,10,particle_opitions);
	World.add(world,particle3);

	elipse();
	draw();
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  update();

  drawSprites();
 
}



