const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var base,base2,ground,bridge,jointPoint,jointLink;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  base = new Base(10,350,300,100);
  base2 = new Base(1500,350,300,100);
  ground= new Base(780,700,1600,50);
  bridge = new Bridge (10,{x:1300,y:330})
  jointPoint = new Base (500,500,20,20)
  Matter.Composite.add(bridge.body,jointPoint);
 jointLink = new Link (bridge,jointPoint);
  rectMode(CENTER);
}

function draw() {
  background("white");
  Engine.update(engine);
  base.show();
  base2.show();
  ground.show();
  bridge.show();
  jointPoint.show();
}
