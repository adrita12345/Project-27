
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200, 450, 60);
    bob2 = new Bob(240, 450, 60);
	bob3 = new Bob(280, 450, 60);
	bob4 = new Bob(320, 450, 60);
	bob5 = new Bob(360, 450, 60);
    bob6 = new Bob(400, 450, 60);
	bob7 = new Bob(440, 450, 60);
	bob8 = new Bob(480, 450, 60);
	roof = new Roof(340, 100, 450, 20);
	r1 = new Roof(200, 100, 5, 20);
	r2 = new Roof(240, 100, 5, 20);
	r3 = new Roof(280, 100, 5, 20);
	r4 = new Roof(320, 100, 5, 20);
	r5 = new Roof(360, 100, 5, 20);
	r6 = new Roof(400, 100, 5, 20);
	r7 = new Roof(440, 100, 5, 20);
	r8 = new Roof(480, 100, 5, 20);
   rope1 = new Rope(bob1.body, r1.body, -60, 0);
   rope2 = new Rope(bob2.body, r2.body, -60, 0);
   rope3 = new Rope(bob3.body, r3.body, -60, 0);
   rope4 = new Rope(bob4.body, r4.body, -60, 0);
   rope5 = new Rope(bob5.body, r5.body, -60, 0);
   rope6 = new Rope(bob6.body, r6.body, -60, 0);
   rope7 = new Rope(bob7.body, r7.body, -60, 0);
   rope8 = new Rope(bob8.body, r8.body, -60, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(RIGHT);
  background(225);
  
if(keyDown(UP_ARROW)){
    //Matter.Body.setPosition(bob1.body, {x:bob1.body.positionX-1, y:bob1.body.positionY-1})
	//bob1.body(isStatic:false)
}


 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 bob6.display();
 bob7.display();
 bob8.display();
 roof. display(); 
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 rope6.display();
 rope7.display();
 rope8.display();
 
}





