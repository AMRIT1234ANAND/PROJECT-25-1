
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine,world;
var dustbinObj,groundObject	
var paper1;
var dustbin1;
var dustbin2;
var dustbin3;
var dustbinImg;
var paperImg;
function Preload(){
//paperImg=loadImage("paper.png");
}
function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	groundObject=new Ground(400,340,800,20);
	 paper1= new Paper(100,330,10);
//	 paper1.addImage(paperImg);
   dustbin1= new Dustbin(450,280,20,100);
   dustbin2= new Dustbin(510,320,100,20);
   dustbin3= new Dustbin(570,280,20,100);
   Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
 Engine.update(engine);

  groundObject.display();
  paper1.display();

dustbin1.display();
dustbin2.display();
dustbin3.display();
//paper1.velocityX=0;
//paper1.velocityY=0;


drawSprites();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:13,y:-13})
	}
}
