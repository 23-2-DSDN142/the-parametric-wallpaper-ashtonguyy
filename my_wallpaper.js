//your parameter variables go here!
//parameter varaibles are down below 


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}
//attempted to parametize this variable... unsuccessfully.
function wallpaper_background() {
  background(51, 51, 51); //light honeydew green colour
}

var centerY = 200 / 2;
var angle = 0;
var amplitude = 60;
var frequency = 0.6;
var wavelength = 0.06


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  var red = color(255,100,100)
  var white = color(255, 255, 255)
  var blue = color(100, 100, 255)
  var grey = color(51, 51, 51)
  var green = color(102, 128, 109)
  var burgandy = color(149, 61, 76)

  var elipsecolor = color(blue)
  var backgroundcolor = color(grey)

  //if statement based on frequency 

  
  // Draw the soundwave
  drawSoundwave();
  
  noStroke(); // No stroke for logo elements

  // Draw the number "8"
  fill(elipsecolor); // Insert color choice
  ellipse(45, 75, 30, 37.5);
  ellipse(45, 100, 30, 37.5);

  fill(backgroundcolor); // White color
  ellipse(45, 75, 15, 18.75);
  ellipse(45, 100, 15, 18.75);

  // Draw the "0"
  fill(elipsecolor); // Insert color choice
  ellipse(82.5, 87.5, 40, 60);
  
  fill(backgroundcolor); // White colour
  ellipse(82.5, 87.5, 20, 35);

  // Draw the final "8"
  fill(elipsecolor); // Insert color choice
  ellipse(120, 75, 30, 37.5);
  ellipse(120, 100, 30, 37.5);

  fill(backgroundcolor); // white color
  ellipse(120, 75, 15, 18.75);
  ellipse(120, 100, 15, 18.75);


  //if statement for FM Color

  if (frequency > 0.3) {
    fill(burgandy);
  } else {
    fill(green)
  }
  // Draw the letters "FM"
  textSize(35);
  text("F", 135, 115);
  text("M", 155, 115);
}

function drawSoundwave() {
  angleMode(RADIANS)
  stroke(0);
  noFill();
  beginShape();
  for (let x = 0; x < width * wavelength; x += 5) {
    let y = centerY + sin(angle) * amplitude;
    curveVertex(x, y);
    angle += frequency 
  }
  endShape();
}


  



