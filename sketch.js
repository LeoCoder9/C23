const Engine = Matter.Engine; //Namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;


var universe, earth, ground, ball;


function setup() {
  createCanvas(400,400);

  universe = Engine.create();
  earth= universe.world;

ground = new Ground(200,380, 400, 40)
box1 = new box(200,200,30,30)
box2 = new box(202,100,30,30)


  
}

function draw() {
  background("lightblue"); 

  Engine.update(universe);
  
   ground.display()
   box1.display()
   box2.display()



  //rect(200,200,50,50); //x,y,width,height
  
 
}