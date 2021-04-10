class Player{
constructor(){
this.name=null
this.distance=0
this.index=0
}
update(){
    var playerIndex="players/player"+this.index
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })
}
updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
}
getCount(){
    var playerCountref=database.ref('playerCount')
    playerCountref.on("value",(data)=>{
        playerCount=data.val()
    })
}
static getPlayerinfo(){
    var playerInforef=database.ref('players')
    playerInforef.on("value",(data)=>{
        allPlayers=data.val()
    })
}
}