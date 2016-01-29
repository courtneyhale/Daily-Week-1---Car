function setup() {
  createCanvas(1000,1000);
  fill('green'); //green car
  rect(300,400,400,100); // car top
  rect(200,500,600,170);//car base
  fill('white');// white window color
  rect(610,420,60,60);//window
  fill('red'); //red break lights
  rect(200,560,20,50);// break lights
  fill('yellow');// yellow head lights
  rect(780,560,20,50);//head lights
  fill('black');//black tires
  ellipse(280,660,70,70);//rear tire 
  ellipse(680,660,70,70);// front tire
  fill('white');// white inside circle
  ellipse(280,660,40,40);//rear inside circle
  ellipse(680,660,40,40);//front inside circle
}

function draw() {
  
}