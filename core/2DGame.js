class game2DEngine{

    constructor(){
        console.log("2D game handler instantiate")
        this.players={};
    }

    newPlayer(id,nickname){
        this.players[id]={
            x:100,
            y:100,
            xSpeed:3,
            ySpeed:3,
            nickname:nickname
        };
        console.log("Added player "+this.players[id].nickname)
    }

    removePlayer(id){
        this.players[id]={};
    }

    move(id,movement){
        //console.log("moving")
        if(movement.up)
            this.players[id].y -= this.players[id].ySpeed

        if(movement.down)
            this.players[id].y += this.players[id].ySpeed

        if(movement.right)
            this.players[id].x += this.players[id].xSpeed
        
        if(movement.left)
            this.players[id].x -= this.players[id].xSpeed
    }

}

module.exports = game2DEngine