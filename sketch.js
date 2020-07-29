const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var world,engine;
var platform,platform2;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var slingshot;
var ball;




function setup() {
  createCanvas(800,400);

  engine=Engine.create()
  world=engine.world;

  platform=new Ground(400,300,200,10);
  platform2=new Ground(650,200,200,10);
  ground=new Ground(400,400,800,20);

   box1=new Box(400,150,50,50);
   box2=new Box(650,150,50,50);
   box3=new Box(350,150,50,50);
   box4=new Box(700,150,50,50);
   box5=new Box(450,150,50,50);
   box6=new Box(600,150,50,50);
   box7=new Box(370,100,50,50);
   box8=new Box(420,100,50,50);
   box9=new Box(395,50,50,50);
   box10=new Box(620,100,50,50);
   box11=new Box(670,100,50,50);
   box12=new Box(645,50,50,50);

   ball=new Ball(50,200,20);

  slingshot=new Slingshot(ball.body,{x:100,y:200});
}
  

function draw() {
  background(0); 
  Engine.update(engine); 

  ground.display();
  platform.display();
  platform2.display();

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();

  slingshot.display();

  ball.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}