const Engine      = Matter.Engine;

const World      = Matter.World;

const Body       = Matter.Body;

const Bodies     = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;

var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;

var polygon1;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  Stand  = new Ground(390, 300, 250, 10);
  stand2 = new Ground(700, 200, 200, 10);

  //---------------------------------------------first level------------------------------------------
  BlockBlue1 = new Box(300, 275);

  BlockBlue2 = new Box(330, 275);

  BlockBlue3 = new Box(360, 275);

  BlockBlue4 = new Box(390, 275);

  BlockBlue5 = new Box(420, 275);

  BlockBlue6 = new Box(450, 275);

  BlockBlue7 = new Box(480, 275);
//------------------------SECONDElEVEL---------------------------------------------------------------
  BlockPink1 = new BoxPink(330, 235);

  BlockPink2 = new BoxPink(360, 235);

  BlockPink3 = new BoxPink(390, 235);

  BlockPink4 = new BoxPink(420, 235);

  BlockPink5 = new BoxPink(450, 235);

  BlockPink6 = new BoxPink(360, 195);

  BlockPink7 = new BoxPink(390, 195);

//------------------------------thirdBlock------------------------------------------------
  BlockBlue8  = new Box(420, 195);

  BlockBlue9  = new Box(390, 155);

  BlockBlue10 = new Box(640, 155);

  BlockBlue11 = new Box(670, 175);

  BlockBlue12 = new Box(700, 175);

  BlockBlue13 = new Box(730, 175);

  BlockBlue14 = new Box(760, 175);

  BlockBlue15 = new Box(790, 175);

  BlockBlue16 = new Box(800, 175);

  BlockBlue17 = new Box(830, 175);

  BlockBlue18 = new Box(860, 175);

  BlockBlue19 = new Box(890, 175);


  polygon_1 = new poly(110, 100, 20, 20);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  KeyPressed();
 //Statnds Display 
  Stand.display();
  stand2.display();

//------------------------------Displaying(blocks)----------------------------------------------------
  BlockBlue1.display ();

  BlockBlue2.display ();

  BlockBlue3.display ();

  BlockBlue4.display ();

  BlockBlue5.display ();

  BlockBlue6.display ();

  BlockBlue7.display ();

  BlockPink1.display ();

  BlockPink2.display ();

  BlockPink3.display ();

  BlockPink4.display ();

  BlockPink5.display ();

  BlockPink6.display ();

  BlockPink7.display ();

  BlockBlue8.display ();

  BlockBlue9.display ();

  BlockBlue10.display();

  BlockBlue11.display();

  BlockBlue12.display();

  BlockBlue13.display();

  BlockBlue14.display();

  BlockBlue15.display();

  BlockBlue16.display();

  BlockBlue17.display();

  BlockBlue18.display();

  BlockBlue17.display();

  polygon_1.display  ();
  
  sling.display();
}


function mouseDragged() {

  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {

  sling.fly();
}

function KeyPressed() {
  if (keyCode === 32) {
    console.log("ATTACH")
    sling.attach(polygon_1.body);
    
  }


}

