var hypnoticBall, database;
var position;
var form, player, game, allPlayers;
var cars, car1, car2, car3, car4;
var carImg1, carImg2, carImg3, carImg4, trackImg, groundImg;

var gameState = 0;
var playerCount = 0;

function preload(){

  carImg1 = loadImage("images/car1.png");
  carImg2 = loadImage("images/car2.png");
  carImg3 = loadImage("images/car3.png");
  carImg4 = loadImage("images/car4.png");
  trackImg = loadImage("images/track.jpg"); 
  groundImg = loadImage("images/ground.png");
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth-5,windowHeight-8);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){

if(playerCount === 4){
  gameState = 1;
  game.updateState(1);
}

if(gameState === 1){
  game.play();
}

}