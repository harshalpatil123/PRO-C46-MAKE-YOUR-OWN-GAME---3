var obstacles,obstaclesGroup;
var character,ground,gr;
var wonSprite,checkpoint,power;
var lives,score=0;
var gamestate="play"
var restart,char,iground,score=0

function preload() {
    gr=loadImage('1.png')
    re=loadImage('restart.png');
    chare=loadAnimation('0001.png','0001.png','0002.png','0002.png');
}
function setup() {
    createCanvas(windowWidth,windowHeight);

    restart=createButton('restart')
    restart.position(width/2+400,height-600);
    restart.mousePressed(restart1)
    
iground=createSprite(width/2,height/2+260,1100,110);

    obstaclesGroup=new Group();
    ground=createSprite(width/2,height/2+400,1100,60);
    ground.addImage(gr)
   
    ground.scale=2.1
    character=createSprite(width/2-400,height/2+116,30,120);
    character.shapeColor='pink'
    character.addAnimation('character_walking',chare)
   // character.scale=1
    console.log(character.width)
}

function draw() {
    background('cyan')
    drawSprites();
    
    character.collide(iground);
    character.velocityY=character.velocityY+0.5
score= Math.round(score+getFrameRate()/60);
 fill('red')
text('score = '+score,width/2+360,height-560)
    

    if (ground.x<0) {
        ground.x=ground.width/2;
    }
    if (gamestate==='play') {
        ground.velocityX=-12;
if(keyDown('space')){
character.velocityY=-10
}

   
    obstaclest();
if(obstaclesGroup.isTouching(character)){

    gamestate='end'
}
    }
if(gamestate==='end'){
obstaclesGroup.destroyEach();
    background('white');
    obstaclesGroup.setVelocityXEach(0);
    obstacles.velocityX=0
    ground.velocityX=0
    textSize(32)
    fill ('red')
    text("YOU LOST",width/2,height/2)
    
    drawSprites();
   restart.visible=false
   if(keyDown('space')){
gamestate='play'

   }
}

}



function restart1() {
    gamestate='play';
}

function obstaclest() {
    if(frameCount%60===0){
obstacles=createSprite(width/2+600,height/2+193,20,110);
obstacles.velocityX=-12;
obstaclesGroup.add(obstacles)
obstacles.shapeColor='red';

obstaclesGroup.collide(iground);
    }
}