const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var Pig1;
var log1;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,380,1200,20);

    box1 = new Box(700,320,70,70);
    Pig1 = new Pig(810,320);
    box2 = new Box(920,320,70,70);
    log1 = new Log(810,260,300,PI/2);

    box3 = new Box(700,240,70,70);

    bird1 = new Bird(100,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    Pig1.display();
    log1.display();
    bird1.display();
    box3.display();
}