const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var MaxDrops = 100

function preload() {
        image1 = loadImage("images/thunderbolt/1.png")
        image2 = loadImage("images/thunderbolt/2.png")
        image3 = loadImage("images/thunderbolt/3.png")
        image4 = loadImage("images/thunderbolt/4.png")
        image5 = loadImage("ededed.jpg")
    human_running = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png",
    "images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
}
function setup(){
    var canvas = createCanvas(2000,1000);
    engine = Engine.create();
    world = engine.world;
human = createSprite(500,400,100,100)
human.addAnimation("shambhavi",human_running)
human.scale = 0.5

}

function draw(){
    background("black");
    Engine.update(engine);
    //strokeWeight(4);
    spawnObstacles()
    Rain();
     drawSprites();   

}

function spawnObstacles(){
    if (frameCount % 60 === 0){
      var thunder = createSprite(600,165,10,40);
     
      
       //generate random obstacles
       var rand = Math.round(random(1,4));
       switch(rand) {
         case 1: thunder.addImage("1",image1);
                 break;
         case 2: thunder.addImage("2",image2);
                 break;
         case 3: thunder.addImage("3",image3);
                 break;
         case 4: thunder.addImage("4",image4);
                 break;
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       thunder.scale = 0.5;
     thunder.velocityX = -5
    }
   }
   function Rain(){
        if (frameCount % 60 === 0){
      /*   aargh = new Raindrop((random(100,400)),100) 
          
           //generate random obstacles
           var rand = Math.round(random(1,4));
           switch(rand) {
             case 1: aargh.body.position.x = 100
                     aargh.body.position.y = 1
                     break;
             case 2: aargh.body.position.x = 200
                     aargh.body.position.y = 1
                     break;
             case 3: aargh.body.position.x = 300
                     aargh.body.position.y = 1
                     break;
             case 4: aargh.body.position.x = 400
                     aargh.body.position.y = 1
                     break;
             default: break;
           }
          
           //assign scale and lifetime to the obstacle           
          // thunder.scale = 0.5;
       */
var rain = createSprite((random(300,700)),100,10,10)
rain.addImage("rain", image5)
rain.velocityY = 5  
rain.scale = 0.05
        }
       }
    