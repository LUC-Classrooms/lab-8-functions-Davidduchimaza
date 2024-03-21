function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

   
    myShape(width / 2, height / 2, 1);

    
    myShape(width / 4, height / 4, 0.8);
  
   
    myShape(width * 3 / 4, height * 3 / 4, 1.2);
}

function myShape(x, y, s) {
  // make this function more interesting
  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(s);
    // Body
  line(0, -50, 40, -20);
  line(0, -50, -40, -20);
  fill(255);
  ellipse(0, 0, 55);
  ellipse(0, -35, 40);
  ellipse(0, -60, 30);
  fill(0);
  rectMode(CENTER);
  rect(0, -82, 20, 20);
  line(-20, -72, 20, -72);
  ellipse(-7, -65, 5);
  ellipse(7, -65, 5);
  ellipse(0, -60, 5);
  ellipse(0, -40, 5);
  ellipse(0, -30, 5);
  ellipse(0, -20, 5);
  
  // REFERENCE TO LAB 5 used the snowman

  pop(); // restore previous drawing state
}
