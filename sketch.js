const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine, world;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
var block17,block18,b19,b20,b21,b22,b23,b24,b25;
var polygon,launcher;
var polygon_Img;



function preload() {
    polygon_Img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    fill("yellow");
    block1 = new Block(300,275,30,40);
    block2 = new Block(300,235,30,40);
    block3 = new Block(300,195,30,40);
    block4 = new Block(300,175,30,40);
    block5 = new Block(300,135,30,40);

    block6 = new Block(400,275,30,40);
    block7 = new Block(400,235,30,40);
    block8 = new Block(400,195,30,40);
    block9 = new Block(400,175,30,40);
    block10 = new Block(400,135,30,40);

    block11 = new Block(500,275,30,40);
    block12 = new Block(500,235,30,40);
    block13 = new Block(500,195,30,40);
    block14 = new Block(500,175,30,40);
    block15 = new Block(500,135,30,40);

    block16 = new Block(600,275,30,40);
    block17 = new Block(600,235,30,40);
    block18 = new Block(600,195,30,40);
    b19 = new Block(600,175,30,40);
    b20 = new Block(600,135,30,40);

    b21 = new Block(700,275,30,40);
    b22 = new Block(700,235,30,40);
    b23 = new Block(700,195,30,40);
    b24 = new Block(700,175,30,40);
    b25 = new Block(700,135,30,40);
   
    
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    launcher = new Launcher(this.polygon,{x:150,y:200});

}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();

   

   

    
    image(polygon_Img,polygon.position.x,polygon.position.y,60,60);
    launcher.display();

    

    //getBackgroundImg();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(this.polygon,{x: 150, y: 200});
        launcher.attach(this.polygon);
    }
}

//async function getBackgroundImg(){
    //var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //var responseJSON = await response.json();

    //var datetime = responseJSON.datetime;
    //var hour = datetime.slice(11,13);
    
    //if(hour>=0600 && hour<=1800){
        //background("lightblue");
    //}
    //else{
        //background("darkblue");
    //}

    
//}