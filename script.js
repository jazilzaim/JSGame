// By Jazil and Ahmed
// Roadrunner Game

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//The light blue color to the left. (Water)
ctx.moveTo(0, 0);
ctx.lineTo(200,0);
ctx.lineTo(200, 600);
ctx.lineTo(0, 600);
ctx.fillStyle = "lightblue";
ctx.fill();
ctx.stroke();
ctx.closePath();

//The road in the middle.
ctx.beginPath();
ctx.moveTo(200, 0);
ctx.lineTo(400, 0);
ctx.lineTo(400, 600);
ctx.lineTo(200, 600);
ctx.fillStyle = "lightgray";
ctx.fill();
ctx.stroke();
ctx.closePath();

//The light blue color on the right. (Water)
ctx.beginPath();
ctx.moveTo(400, 0);
ctx.lineTo(600, 0);
ctx.lineTo(600, 600);
ctx.lineTo(400, 600);
ctx.fillStyle = "lightblue";
ctx.fill();
ctx.stroke();
ctx.closePath();

window.addEventListener("keydown", moveSomething, false);

var pointX = 0;
var pointY = 0;

//This draws the circle.
function drawCircle() {

  //The Circle
  ctx.beginPath();
  ctx.arc(300 + pointX, 520 + pointY, 40, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  //The Outline
  ctx.lineWidth = 8;
  ctx.strokeStyle = "green";
  ctx.stroke();

  //Fill color
  ctx.fillStyle = "black";
  ctx.fill();

}


function drawRectangle() {

  //The Rectangle
  ctx.beginPath();
  ctx.moveTo(300, 0);
  ctx.lineTo(300, 50);
  ctx.lineTo(300, 70);
  ctx.lineTo(380, 70);
  ctx.lineTo(380, 50);
  ctx.fillStyle= "red";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

}



//Function to move the object.
function moveSomething(e) {
  switch (e.keyCode) {
    case 37:
      //left key pressed
      pointX -= 2;
      break;

    case 38:
      // up key pressed
      pointY -= 2;
      break;

    case 39:
      // right key pressed
      pointX += 2;
      break;

    case 40:
      // down key pressed
      pointY += 2;
      break;

    default:

  }

  e.preventDefault();

  //This puts the circle on the canvas.
  drawCircle();

  //This puts the rectangle on the canvas.
  drawRectangle();
}
