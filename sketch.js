var car, wall;
var speed, weight;





function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);  
  car = createSprite(50, 200, 100, 50);
  car.velocityX = speed;
  wall = createSprite(1280,200,60,height/2);

}

function draw() {
  background(0);
  if(wall.x-car.x<car.width/2+wall.width/2) {
    car.velocityX=0;
    var def = (0.5*weight*speed*speed)/22500;
    if(def>180) {
      car.shapeColor = color(255,0,0);
    } else if(def<180 && def>100) {
      car.shapeColor = color(230,230,0); 
    } else if(def<100) {
      car.shapeColor = color(0,255,0);
    }
  }  
  drawSprites();
}