const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var PLAY=0;
var END = 1
var gameState=PLAY;
var car1,car2,car3,car4,car5;
var score=0;
var icon,icon2;

function preload(){
    C1=loadImage("car1.png")
    C2=loadImage("car2.png")
    C3=loadImage("car3.png")
    C4=loadImage("car4.png")
    C5=loadImage("car5.png")
    obstacle=loadImage("barrier.png")
    parking=loadImage("parking-icon.png")
}

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    
    icon=createSprite(460,-1500,20,20);
    icon.addImage("parking",parking);
    icon.scale=0.1

    icon2=createSprite(920,-2000,20,20);
    icon2.addImage("parking",parking);
    icon2.scale=0.1

    car1 = createSprite(600,535,70,100);
    car1.addImage("car1",C1);
    car1.scale=0.3

    car2 = createSprite(460,-400,20,20);
    car2.addImage("car2",C2);
    car2.scale=0.35;

    car3 = createSprite(460,-800,20,20);
    car3.addImage("car3",C3);
    car3.scale=0.45;

    car4 = createSprite(460,-1200,20,20);
    car4.addImage("car4",C4);
    car4.scale=0.1;

    car5 = createSprite(460,-1720,20,20);
    car5.addImage("car5",C5);
    car5.scale=0.17;

    car2 = createSprite(460,-2120,20,20);
    car2.addImage("car2",C2);
    car2.scale=0.35;

    car4 = createSprite(460,-2800,20,20);
    car4.addImage("car4",C4);
    car4.scale=0.1;

    car4 = createSprite(460,-3500,20,20);
    car4.addImage("car4",C4);
    car4.scale=0.1;

    car3 = createSprite(460,-4000,20,20);
    car3.addImage("car2",C3);
    car3.scale=0.45;

    car5 = createSprite(460,-4420,20,20);
    car5.addImage("car5",C5);
    car5.scale=0.17;

    car2 = createSprite(920,-500,20,20);
    car2.addImage("car2",C2);
    car2.scale=0.35;

    car3 = createSprite(920,-950,20,20);
    car3.addImage("car3",C3);
    car3.scale=0.45;

    car2 = createSprite(920,-1300,20,20);
    car2.addImage("car2",C2);
    car2.scale=0.35;

    car4 = createSprite(920,-1700,20,20);
    car4.addImage("car4",C4);
    car4.scale=0.1;

    car5 = createSprite(920,-2220,20,20);
    car5.addImage("car5",C5);
    car5.scale=0.17;

    car4 = createSprite(920,-2600,20,20);
    car4.addImage("car4",C4);
    car4.scale=0.1;

    car4 = createSprite(920,-3200,20,20);
    car4.addImage("car4",C4);
    car4.scale=0.1;

    car2 = createSprite(920,-3700,20,20);
    car2.addImage("car2",C2);
    car2.scale=0.35;

    car5 = createSprite(920,-4220,20,20);
    car5.addImage("car5",C5);
    car5.scale=0.17;

   track1=new Track(displayWidth/2,-2350,900,6000)
}

function draw(){
    background('green')
    console.log(PLAY);
    Engine.update(engine);

    textSize(24);
    text("Score: "+score,100,car1.y-200);

    if(gameState===PLAY){
    console.log(car1.y)

    if(keyDown('up_arrow')){
        car1.y=car1.y-25
    }
    if(keyDown('down_arrow')){
        car1.y=car1.y+25
    }
    if(keyDown('left_arrow')){      
        car1.x=car1.x-10
    }
    if(keyDown('right_arrow')){
        car1.x=car1.x+10
    }
    if(car1.y===-4000 && gameState===PLAY){
        gameState=END;
        console.log("gameState changed")
    }

    if(car1.isTouching(icon)){
        score=10;
    }
    if(car1.isTouching(icon2)){    
        score=20;
    }

    camera.position.x = displayWidth/2;
    camera.position.y = car1.y-120;

    track1.display();
    car1.display(); 
    car2.display(); 
    car3.display(); 
    car4.display();
    car5.display();
    icon.display();
    //spawnCars();
    drawSprites();
}
if(gameState===END){
    console.log("You Won")
    text("YOU WON :)",600,400);
    
}
}

