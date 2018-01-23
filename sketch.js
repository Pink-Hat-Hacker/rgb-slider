var slider1, slider2, slider3;

function setup() {
  createCanvas(600,400);
  background(255,180,90);
  
  slider1 = createSlider(0, 360, 60, 40);
  slider1.position(10, 10);

  slider2 = createSlider(0, 360, 60, 40);
  slider2.position(10, 50);

  slider3 = createSlider(0, 360, 60, 40);
  slider3.position(10, 90);

}

function draw() {
  redValue = slider1.value();
  
  textSize(32);
  text(redValue, 10, 30);
  fill(0, 102, 153);
  
  greenValue = slider2.value();
  
  textSize(32);
  text(greenValue, 10, 30);
  fill(0, 102, 153);
  
  blueValue = slider3.value();
  
  textSize(32);
  text(blueValue, 10, 30);
  fill(0, 102, 153);
  
  background(redValue, greenValue, blueValue);
}

