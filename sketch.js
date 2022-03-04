
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball;
var ground;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;
	var ball_options={ 	
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,25,ball_options)
	World.add(world, ball)
	Engine.run(engine);
	ellipseMode(RADIUS)
	ground = new Ground(400,590,2000,30)
	leftSide = new Ground(500,515,20,125)
	rightSide = new Ground(750,515,20,125)
  
}


function draw() {
  rectMode(CENTER);
  background("orange")
  ellipse(ball.position.x, ball.position.y, 25)
  ground.display()
  leftSide.display()
  rightSide.display()
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode=== UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:55,y:-0.252});
	}
}



