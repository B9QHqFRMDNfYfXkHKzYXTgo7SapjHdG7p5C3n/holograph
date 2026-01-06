let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Create static starfield
  for (let i = 0; i < 400; i++) {
    stars.push({
      pos: createVector(random(-2000, 2000), random(-2000, 2000), random(-2000, 0)),
      size: random(1, 3)
    });
  }
}

function draw() {
  background(5, 5, 15);
  orbitControl(); // Allows you to look around with your mouse!

  // 2. Draw Purple Rotating Planet
  push();
  translate(0, -100, -800);
  rotateY(frameCount * 0.003);
  
  // High-end Cinematic Lighting
  pointLight(180, 100, 255, 500, -500, 200); // Purple Sun
  ambientLight(20, 20, 60); // Blue shadow fill
  
  specularMaterial(100, 50, 150);
  shininess(1);
  sphere(300);
  pop();

  // 3. Draw Holographic Desk (Grid)
  push();
  translate(0, 300, 0);
  rotateX(HALF_PI);
  stroke(34, 211, 238, 100);
  noFill();
  // Drawing a perspective grid
  for(let i = -400; i <= 400; i += 40) {
    line(i, -400, i, 400);
    line(-400, i, 400, i);
  }
  pop();

  // 4. Non-Repeating Data Pillars
  drawDataPillars();
}

function drawDataPillars() {
  noFill();
  strokeWeight(1);
  for(let i = 0; i < 10; i++) {
    let x = sin(frameCount * 0.01 + i) * 500;
    let z = cos(frameCount * 0.01 + i) * 200 - 300;
    stroke(168, 85, 247, random(50, 200));
    line(x, -500, z, x, 500, z);
  }
}
