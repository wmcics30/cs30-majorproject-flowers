// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let room = 1;

let flowers = [];
let seeds = [];
let pots = [];



let currentSeed = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  createpots();

}

function draw() {
  background(220);
  if (room === 1){
    draw_pots();
    draw_seeds();
  }
  
  
  
  
}

function draw_seeds(){
  fill("red");
  rect(400, 700, 30, 50);
  fill("pink");
  rect(450, 700, 30, 50);
  fill("white");
  rect(500, 700, 30, 50);
  fill("blue");
  rect(550, 700, 30, 50);
  
}

function draw_pots(){
  fill("white");
  rect( 400, 250, 50, 50);
  rect( 600, 250, 50, 50);
  rect(800, 250, 50,50);
  rect( 400, 500, 50, 50);
  rect( 600, 500, 50, 50);
  rect(800, 500, 50,50);
}

function plant_seed(pot, seedtype){
  if (pot === "one"){
    if (pots[0].hasplant === false && seedtype !== ""){
      pots[0].hasplant = true;
      pots[0].millisplanted = millis();
      pots[0].flowerColor = seedtype;
    }
  }
  if (pot === "two"){
    if (pots[1].hasplant === false && seedtype !== ""){
      pots[1].hasplant = true;
      pots[1].millisplanted = millis();
      pots[1].flowerColor = seedtype;
    }
  }
  if (pot === "three"){
    if (pots[2].hasplant === false && seedtype !== ""){
      pots[2].hasplant = true;
      pots[2].millisplanted = millis();
      pots[2].flowerColor = seedtype;
    }
  }
  if (pot === "four"){
    if (pots[3].hasplant === false && seedtype !== ""){
      pots[3].hasplant = true;
      pots[3].millisplanted = millis();
      pots[3].flowerColor = seedtype;
    }
  }
  if (pot === "five"){
    if (pots[4].hasplant === false && seedtype !== ""){
      pots[4].hasplant = true;
      pots[4].millisplanted = millis();
      pots[4].flowerColor = seedtype;
    }
  }
  if (pot === "six"){
    if (pots[5].hasplant === false && seedtype !== ""){
      pots[5].hasplant = true;
      pots[5].millisplanted = millis();
      pots[5].flowerColor = seedtype;
    }
  }

  
}

function mousePressed(){
  let pot = "";
  if (mouseX > 375 && mouseX < 425 && mouseY > 225 && mouseY < 275){
    pot = "one";
    plant_seed(pot, currentSeed);
  }
  else if (mouseX > 575 && mouseX <625 && mouseY > 225 && mouseY < 275){
    pot = "two";
    plant_seed(pot, currentSeed);
  }
  else if (mouseX > 775 && mouseX < 825 && mouseY > 225 && mouseY < 275){
    pot = "three";
    plant_seed(pot, currentSeed);
  }
  else if (mouseX >  375 && mouseX < 425 && mouseY > 475 && mouseY < 525){
    pot = "four";
    plant_seed(pot, currentSeed);
  }
  else if (mouseX > 575 && mouseX <625 && mouseY > 475 && mouseY < 525){
    pot = "five";
    plant_seed(pot, currentSeed);
  }
  else if (mouseX > 775 && mouseX < 825 && mouseY > 475 && mouseY < 525){
    pot = "six";
    plant_seed(pot, currentSeed);
  }

  if (mouseX > 385 && mouseX < 415 && mouseY > 685 && mouseY < 715){
    currentSeed = "red";
  }
  if (mouseX > 435 && mouseX < 465 && mouseY > 685 && mouseY <715){
    currentSeed = "pink";
  }
  if (mouseX > 485 && mouseX < 515 && mouseY > 685 && mouseY <715){
    currentSeed = "white";
  }
  if (mouseX > 535 && mouseX < 565 && mouseY > 685 && mouseY < 715){
    currentSeed = "blue";
    
  }
}

function createpots(){
  for (let i =0; i < 6; i++){
    let pot = {
      hasplant: false,
      flowerColor: "",
      millisplanted: 0,
      plantState: "none",
    };
    pots.push(pot);
  }
  
  
}