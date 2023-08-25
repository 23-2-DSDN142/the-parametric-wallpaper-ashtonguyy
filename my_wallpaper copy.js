//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

var centerY = height / 2;
var angle = 0;
var amplitude = 100;
var frequency = 0.02;

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  // Draw the soundwave
  drawSoundwave();
  
  noStroke(); // No stroke for logo elements

  // Draw the number "8"
  fill(255, 100, 100); // Red color
  ellipse(120, 200, 60, 75);
  ellipse(120, 150, 60, 75);

  fill(255, 255, 255); // White Color
  ellipse(120, 200, 30, 37.5);
  ellipse(120, 150, 30, 37.5);

  // Draw the "0"
  fill(255, 100, 100); // Red colour
  ellipse(200, 175, 80, 120);
  
  fill(255, 255, 255); // White colour
  ellipse(200, 175, 40, 80);

  // Draw the final "8"
  fill(255, 100, 100); // Red colour
  ellipse(280, 200, 60, 75);
  ellipse(280, 150, 60, 75);

  fill(255, 255, 255); // White Colour
  ellipse(280, 200, 30, 37.5);
  ellipse(280, 150, 30, 37.5);


  // Draw the letters "FM"
  fill(100, 100, 255); // Blue color
  textSize(72);
  text("F", 320, 240);
  text("M", 360, 240);
}

function drawSoundwave() {
  stroke(0);
  noFill();
  beginShape();
  for (let x = 0; x < width; x += 5) {
    let y = sin(angle) * amplitude;
    vertex(x, y);
    angle += frequency 
  }
  endShape();
}

function draw() {
  
}


