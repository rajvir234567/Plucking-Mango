const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "play";

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(790,690,1600,20);
	tree = new Tree(650,550,250,250);
	boy = new Boy(150,600,250,250);
	stone = new Stone(70,550,100,100);
	rope = new SlingShot(stone.body,{x:70, y:550});
	mango1 = new Mango(570,640,100,100);
	mango2 = new Mango(530,650,100,100);
	mango3 = new Mango(550,670,100,100);
	mango4 = new Mango(540,670,100,100);
	mango5 = new Mango(560,660,100,100);

	Engine.run(engine);
  
}


function draw() {
	background(255);
	
	ground.display();	
	tree.display();
	boy.display();
	stone.display();
	rope.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    rope.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && stone.body.speed < 1){
       stone.trajectory = [];
	   Matter.Body.setPosition(stone.body,{x:70, y:550});
       slingshot.attach(stone.body);
    }
}


