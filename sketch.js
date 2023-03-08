let x = 0
let y = 0
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(19, 21, 186);
  
  fill(18, 17, 17);
  noStroke();
  rect(0,300,400,100);
 
  //Body
  fill(14, 138, 74)
  ellipse(200,160,80,180);
  rect(200,140,80,20);
  rect(120,140,50,20);
 
  push();
  translate(120,140);
  rotate(radians(y))
  rect(0,0,20,50);
  y=y-100
  pop();
  
  push();
  translate(275,150);
  rotate(radians(y))
  rect(0,0,20,50);
  pop();
  
  rect(145,220,60,20);
  rect(140,230,20,60);
  rect(210,220,20,60);
  rect(230,260,60,20);
  
  //Eyes
  fill(18, 17, 17);
  ellipse(185,130,20,20);
  ellipse(220,130,20,20);
  
  //mouth
  fill(18, 17, 17);
  ellipse(200,180,20,50);
  
  //hairs
  stroke(0);
  line(200, 70, 200, 50);
  line(200, 70, 190, 50);
  line(200, 70, 210, 50);
}