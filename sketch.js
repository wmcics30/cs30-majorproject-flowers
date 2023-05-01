// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let room = 1;

let flowers = [];
let redFlowers = 0;
let pinkflowers = 0;
let whiteflowers = 0;
let blueflowers = 0;

let redseeds = 0;
let pinkseeds = 0;
let whiteseeds = 0;
let blueseeds = 0;

let seeds = [];
let pots = [];

let currentSeed = "";

let blueflowerinpotImg;
let budImg;
let emptypotImg;
let orangeflowerinpotImg;
let pinkflowerinpotImg;
let plantedpotImg;
let purpleflowerinpotImg;
let redflowerinpotimg;
let sproutImg;
let whiteflowerinpotImg;

function preload(){
  blueflowerinpotImg = loadImage("pictures/blue flower in pot.png");
  budImg = loadImage("pictures/bud.png");
  emptypotImg = loadImage("pictures/empty pot.png");
  orangeflowerinpotImg = loadImage("pictures/orange flower in pot.png");
  pinkflowerinpotImg = loadImage("pictures/pink flower in pot.png");
  plantedpotImg = loadImage("pictures/planted pot.png");
  purpleflowerinpotImg = loadImage("pictures/purple flower in pot.png");
  redflowerinpotimg = loadImage("pictures/red flower in pot.png");
  sproutImg = loadImage("pictures/sprout.png");
  whiteflowerinpotImg = loadImage("pictures/white flower in pot.png");

}


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
  
  update_pots();
  draw_flowers();
  
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

  fill("purple");
  rect(600, 700, 30, 50);
  
}
function draw_flowers(){
  for (let i = 0; i < flowers.length; i++){
    fill(flowers[i]);
    rect(50 + 50*i, 50, 15, 15);
  }
}


function draw_pots(){
  fill("white");

  for (let i = 0; i < pots.length; i++){
    if (i < 3){
      image(pots[i].image, 400 + 200*i, 100);
    }
    else{
      image(pots[i].image, 400 + 200*(i-3), 400);
    }
  }

 
}

function plant_seed(pot, seedtype){
  if (pot === "one"){
    if (pots[0].hasplant === false && seedtype !== ""){
      pots[0].hasplant = true;
      pots[0].plantState = "dirt";
      pots[0].millisplanted = millis();
      pots[0].flowerColor = seedtype;
      pots[0].image = plantedpotImg;
    }
  }
  if (pot === "two"){
    if (pots[1].hasplant === false && seedtype !== ""){
      pots[1].hasplant = true;
      pots[1].plantState = "dirt";
      pots[1].millisplanted = millis();
      pots[1].flowerColor = seedtype;
      pots[1].image = plantedpotImg;
    }
  }
  if (pot === "three"){
    if (pots[2].hasplant === false && seedtype !== ""){
      pots[2].hasplant = true;
      pots[2].plantState = "dirt";
      pots[2].millisplanted = millis();
      pots[2].flowerColor = seedtype;
      pots[2].image = plantedpotImg;
    }
  }
  if (pot === "four"){
    if (pots[3].hasplant === false && seedtype !== ""){
      pots[3].hasplant = true;
      pot[3].plantState = "dirt";
      pots[3].millisplanted = millis();
      pots[3].flowerColor = seedtype;
      pots[3].image = plantedpotImg;
    }
  }
  if (pot === "five"){
    if (pots[4].hasplant === false && seedtype !== ""){
      pots[4].hasplant = true;
      pots[4].plantState = "dirt";
      pots[4].millisplanted = millis();
      pots[4].flowerColor = seedtype;
      pots[4].image = plantedpotImg;
    }
  }
  if (pot === "six"){
    if (pots[5].hasplant === false && seedtype !== ""){
      pots[5].hasplant = true;
      pots[5].plantState = "dirt";
      pots[5].millisplanted = millis();
      pots[5].flowerColor = seedtype;
      pots[5].image = plantedpotImg;
    }
  }

  
}

function mousePressed(){
  let pot = "";
  console.log(mouseX);
  console.log(mouseY);
  if (mouseX > 415 && mouseX < 500 && mouseY > 215 && mouseY < 310){
    pot = "one";
    if (pots[0].hasplant === false && currentSeed !== ""){
      plant_seed(pot, currentSeed);
      
    }
    else if (pots[0].hasplant === true && pots[0].plantState === "done"){
      pick_flower(pot, pots[0].flowerColor);
    }
    
  }

  else if (mouseX > 615 && mouseX < 700 && mouseY > 215 && mouseY < 310){
    pot = "two";
    if (pots[1].hasplant === false && currentSeed !== ""){
      plant_seed(pot, currentSeed);
      
    }
    else if (pots[1].hasplant === true && pots[1].plantState === "done"){
      pick_flower(pot, pots[1].flowerColor);
    }
  }

  else if (mouseX > 815 && mouseX < 900 && mouseY > 215 && mouseY < 310){
    pot = "three";
    if (pots[2].hasplant === false && currentSeed !== ""){
      plant_seed(pot, currentSeed);
      
    }
    else if (pots[2].hasplant === true && pots[2].plantState === "done"){
      pick_flower(pot, pots[2].flowerColor);
    
    }
  }

  else if (mouseX >  415 && mouseX < 500 && mouseY > 515 && mouseY < 610){
    pot = "four";
    if (pots[3].hasplant === false && currentSeed !== ""){
      plant_seed(pot, currentSeed);
      
    }
    else if (pots[3].hasplant === true && pots[3].plantState === "done"){
      pick_flower(pot, pots[3].flowerColor);
      
    }
  }

  else if (mouseX > 615 && mouseX < 700 && mouseY > 515 && mouseY < 610){
    pot = "five";
    
    if (pots[4].hasplant === false && currentSeed !== ""){
      plant_seed(pot, currentSeed);
      
    }
    else if (pots[4].hasplant === true && pots[4].plantState === "done"){
      pick_flower(pot, pots[4].flowerColor);
      
    }
  }

  else if (mouseX > 815 && mouseX < 900 && mouseY > 515 && mouseY < 610){
    
    pot = "six";
    if (pots[5].hasplant === false && currentSeed !== ""){
      plant_seed(pot, currentSeed);
    }
    else if (pots[5].hasplant === true && pots[5].plantState === "done"){
      pick_flower(pot, pots[5].flowerColor);
    }
  }





  if (mouseX > 385 && mouseX < 415 && mouseY > 685 && mouseY < 715){
    currentSeed = "red";
  }
  else if (mouseX > 435 && mouseX < 465 && mouseY > 685 && mouseY <715){
    currentSeed = "pink";
  }
  else if (mouseX > 485 && mouseX < 515 && mouseY > 685 && mouseY <715){
    currentSeed = "white";
  }
  else if (mouseX > 535 && mouseX < 565 && mouseY > 685 && mouseY < 715){
    currentSeed = "blue";
    
  }
  else if (mouseX > 585 && mouseX < 615 && mouseY > 685 && mouseY < 715){
    currentSeed = "purple";
  }


}

function createpots(){
  for (let i =0; i < 6; i++){
    let pot = {
      hasplant: false,
      flowerColor: "",
      millisplanted: 0,
      plantState: "none",
      image: emptypotImg,
    };
    pots.push(pot);
  }
  
}

function update_pots(){
  for (let i = 0; i < 6; i++){
    if (pots[i].hasplant === true){

      if (millis() - pots[i].millisplanted > 30000){
        pots[i].plantState = "done";
        if (pots[i].flowerColor === "white"){
          pots[i].image = whiteflowerinpotImg;
        }
        else if (pots[i].flowerColor === "pink"){
          pots[i].image = pinkflowerinpotImg;
        }
        else if (pots[i].flowerColor === "blue"){
          pots[i].image = blueflowerinpotImg;
        }
        else if (pots[i].flowerColor === "orange"){
          pots[i].image = orangeflowerinpotImg;
        }
        else if (pots[i].flowerColor === "purple"){
          pots[i].image = purpleflowerinpotImg;
        }
        else if (pots[i].flowerColor === "red"){
          pots[i].image = redflowerinpotimg;
        }
      }
      else if (millis() - pots[i].millisplanted > 20000){
        pots[i].plantState = "bud";
        pots[i].image = budImg;
        
      }
      else if (millis() - pots[i].millisplanted > 10000){
        pots[i].plantState = "sprout";
        pots[i].image = sproutImg;
        
      }
      
    }
  }
}

function pick_flower(pot, color){
  for (let i = 0; i< 3; i++){
    flowers.push(color);
  }

  if (pot === "one"){
    pots[0].hasplant = false;
    pots[0].plantState = "none";
    pots[0].flowerColor = "";
    pots[0].millisplanted = 0;
    pots[0].image = emptypotImg;
  }
  else if (pot === "two"){
    pots[1].hasplant = false;
    pots[1].plantState = "none";
    pots[1].flowerColor = "";
    pots[1].millisplanted = 0;
    pots[1].image = emptypotImg;
  }
  else if (pot === "three"){
    pots[2].hasplant = false;
    pots[2].plantState = "none";
    pots[2].flowerColor = "";
    pots[2].millisplanted = 0;
    pots[2].image = emptypotImg;
  }
  else if (pot === "four"){
    pots[3].hasplant = false;
    pots[3].plantState = "none";
    pots[3].flowerColor = "";
    pots[3].millisplanted = 0;
    pots[3].image = emptypotImg;
  }
  else if (pot === "five"){
    pots[4].hasplant = false;
    pots[4].plantState = "none";
    pots[4].flowerColor = "";
    pots[4].millisplanted = 0;
    pots[4].image = emptypotImg;
  }
  else if (pot === "six"){
    pots[5].hasplant = false;
    pots[5].plantState = "none";
    pots[5].flowerColor = "";
    pots[5].millisplanted = 0;
    pots[5].image = emptypotImg;
  }
}