var block1, block2, block3;
var block1_options,block2_options,block3_options;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground;
//var plane;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var block1_options = {
    restitution: 0.5,
    friction: 0.02,
    frictionAir:0
  }

  var block2_options = {
    restitution: 0.7,
    friction: 0.01,
    frictionAir:0.1
  }

  var block3_options = {
    restitution: 0.01,
    friction: 1,
    frictionAir:0.3
  }

   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(300,400,400,20,ground_options);
  World.add(world,ground);

  block1 = Bodies.circle(220,10,10,block1_options);
  World.add(world,block1);

  block2 = Bodies.rectangle(110,50,10,10,block2_options); //(250,300,400,20,block2_options);
  World.add(world,block2);

  block3 = Bodies.rectangle(350,50,10,10,block3_options); //(350,50,10,10,block3_options);
  World.add(world,block3);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  background("lightgreen");
  fill("cyan");
  
  ellipse(block1.position.x,block1.position.y,20);
  rect(block2.position.x,block2.position.y,35);
  rect(block3.position.x,block3.position.y,10);
  //rect(ground.position.x,ground.position.y,400,20);

}





