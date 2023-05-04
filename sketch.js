// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let room = 0;

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

let greenhouse;
let arrangingroom;
let startScreenNormal;
let startScreenhoverd;

let greenhousebutton;
let hoveredgreenhousebutton;
let arrangingroombutton;
let hoveredarrangingroombutton;

let emptypotImg;
let plantedpotImg;
let budImg;
let sproutImg;

let blueflowerinpotImg;
let orangeflowerinpotImg;
let pinkflowerinpotImg;
let purpleflowerinpotImg;
let redflowerinpotimg;
let whiteflowerinpotImg;

let blueFlower;
let orangeflower;
let pinkFlower;
let purpleFlower;
let redFlower;
let whiteFlower;

let emptyVase;


function preload(){

  greenhouse = loadImage("pictures/greenhouseUNFINISHED.png");
  arrangingroom = loadImage("pictures/arranging room.png");
  startScreenNormal = loadImage("pictures/startscreennothovered.png");
  startScreenhoverd = loadImage("pictures/startscreenhovered.png");

  greenhousebutton = loadImage("pictures/greenhousebutton.png");
  hoveredgreenhousebutton = loadImage("pictures/hoveredgreenhousebutton.png");
  arrangingroombutton = loadImage("pictures/arrangingroombutton.png");
  hoveredarrangingroombutton = loadImage("pictures/hoveredarrangingroombutton.png");


  emptypotImg = loadImage("pictures/empty pot.png");
  plantedpotImg = loadImage("pictures/planted pot.png");
  budImg = loadImage("pictures/bud.png");
  sproutImg = loadImage("pictures/sprout.png");

  blueflowerinpotImg = loadImage("pictures/blue flower in pot.png");
  orangeflowerinpotImg = loadImage("pictures/orange flower in pot.png");
  pinkflowerinpotImg = loadImage("pictures/pink flower in pot.png");
  purpleflowerinpotImg = loadImage("pictures/purple flower in pot.png");
  redflowerinpotimg = loadImage("pictures/red flower in pot.png");
  whiteflowerinpotImg = loadImage("pictures/white flower in pot.png");

  blueFlower = loadImage("pictures/blue flower.png");
  orangeflower = loadImage("pictures/orange flower.png");
  pinkFlower = loadImage("pictures/pink flower.png");
  purpleFlower = loadImage("pictures/purple flower.png");
  redFlower = loadImage("pictures/red flower.png");
  whiteFlower = loadImage("pictures/white flower.png");
  
  emptyVase = loadImage("pictures/vase.png");
}


function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  createpots();

}

function draw() {
  background(200);
  
  if (room === 0){
    if (mouseX > 200 && mouseX < 1300 && mouseY > 655 && mouseY < 925){
      image(startScreenhoverd, 1500/2 +5, 505);
    }
    else{
      image(startScreenNormal, 1500/2 + 5, 505);
    }
  }

  if (room === 1){
    image(greenhouse, 1500/2+5, 505);
    draw_pots();
    draw_seeds();
    diplaybuttons();
  }

  if (room === 2){
    image(arrangingroom, 1500/2+5, 505);
    diplaybuttons();
  }
  
  update_pots();
  
  
}

function diplaybuttons(){
  
  if (mouseX > 17 && mouseX < 175 && mouseY > 900 && mouseY < 1005){
    image(hoveredgreenhousebutton, 100, 950);
    image(arrangingroombutton, 275, 944);
  }
  else if (mouseX > 200 && mouseX < 350 && mouseY > 900 && mouseY < 1005){
    image(hoveredarrangingroombutton, 275, 950);
    image(greenhousebutton, 100 ,944);
  }
  else{
    image(greenhousebutton, 100 ,944);
    image(arrangingroombutton, 275, 944);
  }
}

function draw_seeds(){
  fill("red");
  rect(1250, 240, 30, 50);

  fill("pink");
  rect(1350, 240, 30, 50);

  fill("white");
  rect(1250, 340, 30, 50);

  fill("blue");
  rect(1350, 340, 30, 50);

  fill("purple");
  rect(1250, 440, 30, 50);
  fill ("orange");
  rect(1350, 440, 30, 50);
  
}


function draw_pots(){
  for (let i = 0; i < pots.length; i++){
    
    image(pots[i].image, 125 + 185*i, 600, 160, 312);
    
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
  console.log(mouseX);
  console.log(mouseY);
  
  if (room === 0){
    
    if (mouseX > 200 && mouseX < 1300 && mouseY > 655 && mouseY < 925){
      room = 1;
    }
  }
  if (room === 1){
    let pot = "";
    if (mouseX > 50 && mouseX < 200 && mouseY > 600 && mouseY < 735){
      pot = "one";
      if (pots[0].hasplant === false && currentSeed !== ""){
        plant_seed(pot, currentSeed);
      
      }
      else if (pots[0].hasplant === true && pots[0].plantState === "done"){
        pick_flower(pot, pots[0].flowerColor);
      }
    
    }

    else if (mouseX > 250 && mouseX < 380 && mouseY > 600 && mouseY < 735){
      pot = "two";
      if (pots[1].hasplant === false && currentSeed !== ""){
        plant_seed(pot, currentSeed);
      
      }
      else if (pots[1].hasplant === true && pots[1].plantState === "done"){
        pick_flower(pot, pots[1].flowerColor);
      }
    }

    else if (mouseX > 425 && mouseX < 565 && mouseY > 600 && mouseY < 735){
      pot = "three";
      if (pots[2].hasplant === false && currentSeed !== ""){
        plant_seed(pot, currentSeed);
      
      }
      else if (pots[2].hasplant === true && pots[2].plantState === "done"){
        pick_flower(pot, pots[2].flowerColor);
    
      }
    }

    else if (mouseX >  610 && mouseX < 750 && mouseY > 600 && mouseY < 735){
      pot = "four";
      if (pots[3].hasplant === false && currentSeed !== ""){
        plant_seed(pot, currentSeed);
      
      }
      else if (pots[3].hasplant === true && pots[3].plantState === "done"){
        pick_flower(pot, pots[3].flowerColor);
      }
    }

    else if (mouseX > 795 && mouseX < 940 && mouseY > 600 && mouseY < 735){
      pot = "five";
    
      if (pots[4].hasplant === false && currentSeed !== ""){
        plant_seed(pot, currentSeed);
      }
      else if (pots[4].hasplant === true && pots[4].plantState === "done"){
        pick_flower(pot, pots[4].flowerColor);
        
      }
    }

    else if (mouseX > 980 && mouseX < 1125 && mouseY > 600 && mouseY < 735){
      
      pot = "six";
      if (pots[5].hasplant === false && currentSeed !== ""){
        plant_seed(pot, currentSeed);
      }
      else if (pots[5].hasplant === true && pots[5].plantState === "done"){
        pick_flower(pot, pots[5].flowerColor);
      }
    }

    if (mouseX > 1230 && mouseX < 1265 && mouseY > 215 && mouseY < 265){
      currentSeed = "red";
    }
    else if (mouseX > 1330 && mouseX < 1365 && mouseY > 215 && mouseY < 265){
      currentSeed = "pink";
    }
    else if (mouseX > 1230 && mouseX < 1265 && mouseY > 315 && mouseY < 365){
      currentSeed = "white";
    }
    else if (mouseX > 1330 && mouseX < 1365 && mouseY > 315 && mouseY < 365){
      currentSeed = "blue";
    }
    else if (mouseX > 1230 && mouseX < 1265 && mouseY > 415 && mouseY < 465){
      currentSeed = "purple";
    }
    else if (mouseX > 1330 && mouseX < 1365 && mouseY > 415 && mouseY < 465){
      currentSeed = "orange";
    }
  }

  if (mouseX > 17 && mouseX < 175 && mouseY > 900 && mouseY < 1005){
    room = 1;
  }
  else if (mouseX > 200 && mouseX < 350 && mouseY > 900 && mouseY < 1005){
    room = 2;
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