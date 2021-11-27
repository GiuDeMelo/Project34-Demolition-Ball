class Box{

 //soul//
  constructor(x,y,width,height,){
  var options = {
   'density': 0.04,
   'restitution': 0.8,
   'friction': 1.0,
  }
   
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(world,this.body);
 }
   
 //body//
 display(){
  var pos = this.body.position;
  var angle = this.body.angle;
  push()
  translate(pos.x,pos.y);
  rotate(angle);

  rectMode(CENTER);
  stroke(0);
  strokeWeight(2);
  fill(155,103,60);
  //155,103,60 = brown
  rect(0,0,this.width,this.height);
  pop()
}
   
}