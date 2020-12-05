




var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(800,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  wall = createSprite(700,200,thickness,200);
  //wall.shapeColor(80,80,80);
  bullet = createSprite(200,200,20,20);

  bullet.velocityX = speed;

}

function draw() {
  background("black");  

  if(bullet.x - wall.x < bullet.width/2 + wall.width/2
    && wall.x - bullet.x < bullet.width/2 + wall.width/2){

     var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;

     bullet.velocityX = 0;

     if(damage > 10){
       wall.shapeColor = "red";
     }
     if(damage < 10){
       wall.shapeColor = "green";
      }
  }

  drawSprites();
}
