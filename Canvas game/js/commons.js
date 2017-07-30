var dimensionX = Math.floor(window.innerWidth/30);
var dimensionY = Math.floor(window.innerHeight/30);
if(dimensionX%2===0){
  dimensionX++;
}
if(dimensionY % 2 ===0){
  dimensionY++;
}

var canvas = document.createElement('canvas');
canvas.id = "GameCanvas";
canvas.width = dimensionX*30;
canvas.height = dimensionY*30;
canvas.style.zIndex = 8;
canvas.style.position = "absolute";
var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);
var context = canvas.getContext('2d');


var tempCanvas = document.createElement('canvas');
tempCanvas.id = "temporaryCanvas";
tempCanvas.width = dimensionX*30;
tempCanvas.height = dimensionY*30;
tempCanvas.style.zIndex = 8;
tempCanvas.style.position = "absolute";
var body = document.getElementsByTagName("body")[0];
body.appendChild(tempCanvas);
var temporaryContext = tempCanvas.getContext('2d');


fixedBrick = new Image();
fixedBrick.src = "img/brick.png";
breakableBrick = new Image();
breakableBrick.src = "img/breakable.png";
var charactersImage = new Image();
charactersImage.src = "img/character_sprite.png";

var widthControl = 0;
var heightControl = 0;
