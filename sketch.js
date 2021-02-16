var gameState = 0;
var playerCount = 0;
var database;
var form, game, player;

var player1, player2;
var b1, b2, r1, r2;
var obstacle1, obstacle2, obstacle3;
var bg;
var count = 3;
function preload(){
  b1 = loadAnimation("player1/player10.png");
  b2 = loadAnimation("player1/player1.png","player1/player2.png","player1/player3.png","player1/player4.png","player1/player5.png","player1/player6.png","player1/player7.png");
  r1 = loadAnimation("player2/red10.png");
  r2 = loadAnimation("player2/red1.png","player2/red2.png","player2/red3.png","player2/red4.png","player2/red5.png","player2/red6.png","player2/red7.png");
  obstacle1 = loadImage("images/obstacle1.png");
  obstacle2 = loadImage("images/obstacle2.png");
  obstacle3 = loadImage("images/obstacle3.png");
  bg = loadImage("images/background1.jpg");


}
function setup() {

  database= firebase.database();
  createCanvas(windowWidth,windowHeight);
  form = new Form();
  player = new Player();
  game = new Game();
  game.start();
  form.display();
 
}

function draw() {
  if(playerCount===2){
    gameState=1;
  }
  
  if(gameState===1){
    background("white");
    textSize(30);
    text(count, width/2,height/2);


  
  if(count>0){
    if(frameCount%30===0){
      count = count -1;
    }
  }
  else{
    gameState = 2;
  }
  }

  if(gameState===2){
    game.play();
  }


}
function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(width,random(player1.y+20,player1.y-20),10,40);
    obstacle.velocityX = -6;

    
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
                obstacle.scale = 0.4;
               break;
       case 2: obstacle.addImage(obstacle2);
                obstacle.scale = 0.5;
               break;
       case 3: obstacle.addImage(obstacle3);
                obstacle.scale = 0.6;
               break;
       default: break;
     }
    }
  }
  function spawnObstacles2(){
    if (frameCount % 60 === 0){
      var obstacle = createSprite(width,random(player2.y+20,player2.y-20),10,40);
      obstacle.velocityX = -6;
      obstacle.scale = 0.3;
      
       //generate random obstacles
       var rand = Math.round(random(1,3));
       switch(rand) {
        case 1: obstacle.addImage(obstacle1);
        obstacle.scale = 0.4;
       break;
        case 2: obstacle.addImage(obstacle2);
        obstacle.scale = 0.5;
       break;
        case 3: obstacle.addImage(obstacle3);
        obstacle.scale = 0.6;
       break;
         default: break;
       }
      }
    }