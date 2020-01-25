
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255,179,179);
  translate(200,200);
  rotate(-90);

  //set up angles
  let secondAngle = map(second(), 0, 60, 0, 360)
  let minuteAngle = map(minute(), 0, 60, 0, 360) 
  let hourAngle = map(hour() % 12, 0, 12, 0, 360)
  
  //backgroun circle
  strokeWeight(1);
  stroke(0);
  circle(0, 0, 250, 250);
  fill(255,179,179);

  
  //hour
  push();
  strokeWeight(2);
  rotate(hourAngle);
  stroke(0)
  fill(255,230,230);
  rect(0,0,50,20);
  pop();

  //minute
  push();
  rotate(minuteAngle);
  strokeWeight(2);
  stroke(0)
  fill(255,230,230);
  rect(0,0,80,10);
  pop();
  
  //second
  push();
  strokeWeight(2);
  rotate(secondAngle);
  stroke(0);
  fill(255,230,230);
  rect(0,0,100,10);
  pop();
  
}


