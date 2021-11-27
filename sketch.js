
//PROBLEMA: não estou conseguindo criar a rope (corda)

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball, rope;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box18,box20;
var ground;

function setup(){
 createCanvas(3000,800);

 engine = Engine.create();
 world = engine.world;

 ball = new Ball(8500,530,80,80);
 rope = new Rope(ball.body,{x:600,y:150});
 ground = new Ground(600,600,1200,20);

 box1 = new Box(700,510,50,50);
 box2 = new Box(700,520,50,50);
 box3 = new Box(700,530,50,50);
 box4 = new Box(700,540,50,50);
 box5 = new Box(700,550,50,50);
 box6 = new Box(800,510,50,50);
 box7 = new Box(800,520,50,50);
 box8 = new Box(800,530,50,50);
 box9 = new Box(800,540,50,50);
 box10 = new Box(800,550,50,50);
 box11 = new Box(900,510,50,50);
 box12 = new Box(900,520,50,50);
 box13 = new Box(900,530,50,50);
 box14 = new Box(900,540,50,50);
 box15 = new Box(900,550,50,50);
 box16 = new Box(1000,510,50,50);
 box17 = new Box(1000,520,50,50);
 box18 = new Box(1000,530,50,50);
 box19 = new Box(1000,540,50,50);
 box20 = new Box(1000,550,50,50);

}

function draw(){
background(180);

Engine.update(engine);

ball.display()
rope.display()
ground.display()

box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()

mouseDragged()
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}