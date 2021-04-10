var database 
var car1img
var car2img,groundimg,trackimg
var car1,car2
var cars=[]
var player,form,game
var gameState=0
var playerCount=0
var  allPlayers
var car1,car2,cars
function preload(){
    bg=loadImage("bg.jpg")
groundimg=loadImage("ground.png")
trackimg=loadImage("track.jpg")
car1img=loadImage("car1.png")
car2img=loadImage("car2.png")
}
function setup(){
    createCanvas(displayWidth,displayHeight)
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start()
    
}
function draw(){
    background(bg)
    if (playerCount===2){
        game.update(1)
    }
    if(gameState===1){
        clear()
        game.play()
    }
    if(gameState===2){
        game.end()
    }
}