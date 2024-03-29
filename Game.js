class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountref=await database.ref('playerCount').once("value")
        if (playerCountref.exists()){
          playerCount=playerCountref.val()
          player.getCount()
        }
        form = new Form()
        form.display();
      }
      car1=createSprite(100,100)
      car2=createSprite(300,300)
      cars=[car1,car2]
      car1.addImage(car1img)
      car2.addImage(car2img)
    }
    play(){
      console.log("play")
      form.hide()
        Player.getPlayerinfo()
      if(allPlayers!==undefined){
        background(groundimg)
        image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
        var pos=100
        var index = 0
        var x = 215
        var y = 0                                                                                            
        for(var plr in allPlayers){
          index+=1
          x+=215
          y=displayHeight-allPlayers[plr].distance
          cars[index-1].x=x
          cars[index-1].y=y
          if(index===player.index){
            fill('red')
            cars[index-1].shapeColor='red'
            ellipse(x,y,60,60)
            camera.position.x=displayWidth/2
            camera.position.y=cars[index-1].y
          }
          else fill('black')
          textSize(20)
          text(allPlayers[plr].name+":"+allPlayers[plr].distance,cars[index-1].x-40,cars[index-1].y+70)
          //pos+=20
        }
      }
      if(keyDown(UP_ARROW)&& player.index!==null){
        player.distance+=50
        player.update()
      }
      if(player.distance>=4200){
        gameState=2
      }
      drawSprites()
    }
    end(){
      console.log('reached destination')
    }
  }