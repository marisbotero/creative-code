function setup() {
  createCanvas(800, 800);
  noLoop();
  background(30); // Fondo oscuro
  drawPattern();
}

function drawPattern() {
  let colors = [
    color(255, 179, 71),   // Naranja
    color(255, 223, 0),    // Amarillo
    color(144, 238, 144)   // Verde claro
  ];

  let shapes = ['circle', 'rect', 'line', 'semiCircle'];
  stroke(255);
  strokeWeight(1);

  for (let y = 0; y < height; y += 50) {
    for (let x = 0; x < width; x += 50) {
      let shapeType = random(shapes);
      let col = random(colors);

      fill(col);
      noStroke();

      if (shapeType === 'circle') {
        ellipse(x + 25, y + 25, 20);
      } else if (shapeType === 'rect') {
        rect(x + 10, y + 10, 30, 30);
      } else if (shapeType === 'line') {
        stroke(col);
        line(x, y + 25, x + 50, y + 25);
      } else if (shapeType === 'semiCircle') {
        arc(x + 25, y + 25, 40, 40, 0, PI);
      }

      drawLinePattern(x, y, col);
    }
  }

  drawExtraShapes();
}

function drawLinePattern(x, y, col) {
  noFill();
  stroke(col);
  strokeWeight(1);

  let patternType = int(random(3));

  if (patternType === 0) {
    for (let i = 0; i < 5; i++) {
      line(x + i * 10, y, x + i * 10, y + 50);
    }
  } else if (patternType === 1) {
    for (let i = 0; i < 5; i++) {
      line(x, y + i * 10, x + 50, y + i * 10);
    }
  } else if (patternType === 2) {
    for (let i = 0; i < 5; i++) {
      arc(x + 25, y + 25, i * 10, i * 10, 0, PI);
    }
  }
}

function drawExtraShapes() {
  let colors = [
    color(255, 179, 71),   // Naranja
    color(255, 223, 0),    // Amarillo
    color(144, 238, 144)   // Verde claro
  ];

  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let col = random(colors);

    fill(col);
    noStroke();

    let shapeType = int(random(2));
    if (shapeType === 0) {
      ellipse(x, y, random(5, 15));
    } else if (shapeType === 1) {
      rect(x, y, random(5, 15), random(5, 15));
    }
  }
}
