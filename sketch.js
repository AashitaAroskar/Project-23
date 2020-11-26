var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1, side1Body;
var side2, side2Body;
var side3, side3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	side1=createSprite(width/2,640,200,20, {isStatic:true} );
	side1.shapeColor= "red";

	side2=createSprite(300,600,20,100);
	side2.shapeColor= "red";

	side3=createSprite(500,600,20,100);
	side3.shapeColor= "red";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true})
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	side1Body = Bodies.rectangle(width/2,640,200,20);
	World.add(world, side1Body);

	side2Body = Bodies.rectangle(300,600,200,20);
	World.add(world, side2Body);

	side3Body = Bodies.rectangle(300,600,200,20);
	World.add(world, side3Body);


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	packageBody.velocityY = 1.5;
	packageBody.velocityY= packageSprite.velocityY;
	var package_options ={
	restitution: 1.0
	}
  }
}



