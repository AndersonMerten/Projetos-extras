function buildStage(){
fillFixedBricks();
fillBreakableBricks();
clearInitialAreas();
drawPlayers();
gameLoop();
}

function gameLoop () {
  player1.animation.update();
  player1.animation.render();
}

function fillFixedBricks(){
  context.fillRect(0,0,canvas.width,canvas.height);
  for(var i = 0; i<dimensionX;i++){
    context.drawImage(fixedBrick,widthControl,0,30,30);
    context.drawImage(fixedBrick,widthControl,canvas.height-30,30,30);
    widthControl = widthControl+30;
  }
  for(i = 0; i<dimensionY;i++){
    context.drawImage(fixedBrick,0,heightControl,30,30);
    context.drawImage(fixedBrick,canvas.width-30,heightControl,30,30);
    heightControl = heightControl+30;
  }
  //ends borders fill
  widthControl = 60;
  heightControl = 60;
  for(var j=0;j<dimensionY;j++){
    for(i=0; i<dimensionX;i++){
      context.drawImage(fixedBrick,widthControl,heightControl,30,30);
      widthControl = widthControl+60;
    }
    heightControl = heightControl+60;
    widthControl = 60;
}
}

function fillBreakableBricks(){
  heightControl = 30;
  widthControl = 30;
  for(j=1;j<dimensionY-1;j++){
    for(i = 1; i<dimensionX-1;i++){
      temporaryContext.drawImage(breakableBrick,widthControl,heightControl,30,30);
      if(j%2===0){
        widthControl = widthControl + 60;
      }else widthControl = widthControl+30;
    }
    heightControl = heightControl + 30;
    widthControl = 30;
  }
}

function clearInitialAreas(){
  temporaryContext.clearRect(30,30,90,30);
  temporaryContext.clearRect(30,30,30,90);

  temporaryContext.clearRect(canvas.width-120,canvas.height-60,canvas.width-30,canvas.height-30);
  temporaryContext.clearRect(canvas.width-60,canvas.height-120,canvas.width-30,canvas.height-30);

  temporaryContext.clearRect(canvas.width-120,30,canvas.width-30,30);
  temporaryContext.clearRect(canvas.width-60,30,canvas.width-60,90);

  temporaryContext.clearRect(30,canvas.height-120,30,canvas.height-30);
  temporaryContext.clearRect(30,canvas.height-60,90,canvas.height-30);
}

function drawPlayers(){
  

}
