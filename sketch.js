var canvas;
var backgroundImage, player1_img, player2_img, track;
var form ,player1, player2,player;
var gameState,database,playerCount,allPlayers;
var bullet,bulletImg,bulletGroup;
var obstacle,obstacleImg,obstacleGroup;

var players= [];



function preload() {
  backgroundImage = loadImage("assets/final background image.jpg");
  player1_img= loadImage("assets/8-bit.png");
  player2_img= loadImage("assets/final colt.png");
  bulletImg = loadImage("assets/ball image.png.png");
  obstacleImg = loadImage("assets/final_obstacle-removebg-preview.png");
  
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  game = new Game();
 game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
 if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    //game.showLeaderboard();
   // game.end();
  }

text ( "x: " +mouseX+" y: " +mouseY,mouseX,mouseY)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}





