var playerCount , database;
var position;
var gameState = 0;
var form , game , player;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
 
}