// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let room = 0;

let flowers = [];
let seeds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

}

function draw() {
  background(220);
  draw_pots();
  
}

function draw_pots(){
  rect( 400, 250, 50, 50);
  rect( 600, 250, 50, 50);
  rect(800, 250, 50,50);
  rect( 400, 500, 50, 50);
  rect( 600, 500, 50, 50);
  rect(800, 500, 50,50);
}

function plant_seed(pot, seedtpe){
  console.log(pot);
}

function mousePressed(){
  console.log("uhh");
  let pot = "";
  if (mouseX > 375 && mouseX < 425 && mouseY > 225 && mouseY < 275){
    pot = "one";
    plant_seed(pot, "red");
  }
  else if (mouseX > 575 && mouseX <625 && mouseY > 225 && mouseY < 275){
    pot = "two";
    plant_seed(pot, "red");
  }
  else if (mouseX > 775 && mouseX < 825 && mouseY > 225 && mouseY < 275){
    pot = "three";
    plant_seed(pot, "red");
  }
  else if (mouseX >  375 && mouseX < 425 && mouseY > 475 && mouseY < 525){
    pot = "four";
    plant_seed(pot, "red");
  }
  else if (mouseX > 575 && mouseX <625 && mouseY > 475 && mouseY < 525){
    pot = "five";
    plant_seed(pot, "red");
  }
  else if (mouseX > 775 && mouseX < 825 && mouseY > 475 && mouseY < 525){
    pot = "six";
    plant_seed(pot, "red");
  }
}