var car,wall;
var speed,weight,deformation;
function setup() {
  createCanvas(1500,1500);
  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50, 300, 50, 50);
  car.shapeColor=("white");
  wall = createSprite(1200,300,60,height/2);
  car.velocityX=speed;
  wall.shapeColor=("turquoise")
}

function draw() {
  background("black");  

 

if(wall.x - car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * width * speed * speed/22500;
  if(deformation>180)
  {
    car.shapeColor=("green");
  }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=("yellow")
  }
  if(deformation<100){
    car.shapeColor=("red");
  }
}

  drawSprites();
}