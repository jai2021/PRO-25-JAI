const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground1;
var dustbin1,paper1;
var dustbin_img;

function preload()
{
  dustbin_img=loadImage("dustbingreen.png")

}


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
  world = engine.world;
  
 

	//Create the Bodies Here.
 

  paper1=new paper(100,320,100);
  dustbin1=new Dustbin(700,325,10,220);
  //dustbin2=new Dustbin(850,380,280,10);
  dustbin3=new Dustbin(980,325,10,220);
  ground1=new Ground(600,392.5,1200,10);

  
}


function draw() {
  
  background("lightgrey");

  Engine.update(engine);
  paper1.display();
  image(dustbin_img,800,200,180,190);

  dustbin3.display();
  dustbin1.display();
  //dustbin2.display();
  
  ground1.display();


}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(paper1.body,paper1.body.position,{x:920,y:-920});
  }
}


