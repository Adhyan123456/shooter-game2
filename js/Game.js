class Game 
{

  constructor(){
this.resetButton = createButton("reset");
  }

    getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }
  
 start(){
   console.log("we are in the start function ")
   player = new Player();
   playerCount = player.getCount();
   form =new Form ();
   form.display();


   
    player1 = createSprite(116,346,10,10);
    player1.addImage("player1",player1_img );
    player1.scale=0.3;
    
    player2 = createSprite(1072,346,10,10);
    player2.addImage("player2", player2_img);
    player2.scale=0.5;


    bulletGroup = new Group();
   
    players=[player1,player2];

    obstacleGroup = new Group();

   /* var obstaclesPositions = [
      { x: 188, y: 165 , image:obstacleImg },
      { x: 784, y: 324, image: obstacleImg },
    ]
 
    this.addSprites(
      obstacle,
      obstaclesPosition.length,
      obstacleImg,
      0.04,
      
    );*/
 
    
 
 
 
  }

  



    
    
 
    
    
    
    
    
 
  
 

 handleElements(){

form.hide();
this.resetButton.position(586,51);

 }
    
 
play()
{
  this.handleResetButton();
  console.log("we are in the play function ");

  this.handleElements();
  
  Player.getPlayersInfo();
  if(allPlayers !==undefined ){

   
    var index=0;

 

    for(var plr in allPlayers){

      index=index+1;
      var x = allPlayers[plr].positionX;
      var y = height - allPlayers[plr].positionY;
        
        
      players[index - 1].position.x = x;
      players[index - 1].position.y = y;


   if (index === player.index) {

       if(keyDown("space"))
        {

        
     this.handleBullets(index);
       }
      }
       
    }
    this.handlePlayerControls();
    
    drawSprites();
  }
}

handlePlayerControls(){

  if (keyIsDown(UP_ARROW)) {
    //this.playerMoving = true;
    player.positionY -= 10;
    player.update();
  }

  if (keyIsDown(DOWN_ARROW)) {
    //this.playerMoving = true;
    player.positionY += 10;
    player.update();
  }


  
}
handleResetButton(){

  this.resetButton.mousePressed(() => {
    database.ref("/").set({
      playerCount: 0,
      gameState: 0,
      players: {}
      
    });
    window.location.reload();
  });
}

handleBullets(index)
{

console.log("handleBullet function ")
    if(index==1)
    {
      if(keyDown("space"))
      {
      bullet = createSprite(players[index-1].x,players[index-1].y-30)
      
      bullet.addImage(bulletImg);
      bullet.scale = 0.08;
      bullet.velocityX = 2;
      
      bulletGroup.add(bullet)
     // players[index-1].depth = bullet.depth
     // players[index-1].depth = player.depth+2
    
     // bullets = bullets-1
      }
    }
    else if(index==2)
    {
      if(keyDown("space")){
      
      bullet = createSprite(players[index-1].x,players[index-1].y-303)
      
      bullet.addImage(bulletImg);
      bullet.scale= 0.08;
      bullet.velocityX = -1;
      bulletGroup.add(bullet)
     // players[index-1].depth = bullet.depth
    //  players[index-1].depth = player.depth+2
    
     // bullets = bullets-1
      }
  
   
  }




}












}
  