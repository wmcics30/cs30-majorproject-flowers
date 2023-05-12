// Project Title
// Faith
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let room = 0;

let backgroundWidth;
let backgroundHeight;
let border;

let flowers = [];
let redFlowers = 0;
let pinkflowers = 0;
let whiteflowers = 0;
let blueflowers = 0;

let redseeds = 0;
let pinkseeds = 0;
let whiteseeds = 0;
let blueseeds = 0;

let fertiziler = 0;

let seeds = [];
let pots = [];

let dragging_flower;
let arrangement = [];



let currentSeed = "";

let greenhouse;
let arrangingroom;
let startScreenNormal;
let startScreenhoverd;

let greenhousebutton;
let hoveredgreenhousebutton;
let arrangingroombutton;
let hoveredarrangingroombutton;

let storeButton;
let hoveredStorebutton;

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

let whiteSeeds;

let emptyVase;
let flowerbeingdragged = "none";

class Grabbed_flower{
  constructor(flowerimage){
    this.flower = flowerimage;
    
  }
  display(){
    fill(this.flower);
    rect(mouseX, mouseY, 50, 50);
  }
  inVase(){
    return mouseX > 125 && mouseX < 175 && mouseY < 173 && mouseY > 113;
  }
  

} 


function preload(){

  greenhouse = loadImage("pictures/greenhouseUNFINISHED.png");
  arrangingroom = loadImage("pictures/arranging room.png");
  startScreenNormal = loadImage("pictures/startscreennothovered.png");
  startScreenhoverd = loadImage("pictures/startscreenhovered.png");

  greenhousebutton = loadImage("pictures/greenhousebutton.png");
  hoveredgreenhousebutton = loadImage("pictures/hoveredgreenhousebutton.png");
  arrangingroombutton = loadImage("pictures/arrangingroombutton.png");
  hoveredarrangingroombutton = loadImage("pictures/hoveredarrangingroombutton.png");

  storeButton = loadImage("pictures/storeButtonunhovered.png");
  hoveredStorebutton = loadImage("pictures/storeButtonhovered.png");

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


  if (width > height){
    backgroundHeight = height;
    backgroundWidth = backgroundHeight*(3/2);
    border = (windowWidth - backgroundWidth)/2;
  }
  else{
    backgroundWidth = width;
    backgroundHeight = backgroundWidth*(2/3);
    border = (windowWidth - backgroundWidth)/2;
  }
}

function draw() {
  background(200);


  update_pots();


  if (room === 0){
    if (mouseX > backgroundWidth*(2/15)+ border && mouseX < backgroundWidth*(13/15)+ border && mouseY > backgroundHeight*(131/200) && mouseY < backgroundHeight*(37/40)){
      image(startScreenhoverd, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight );
    }
    else{
      image(startScreenNormal, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
    }
  }

  if (room === 1){
    display_greenhouse();
    // image(greenhouse, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
    // draw_pots();
    // draw_seeds();
    // diplaybuttons();
  }

  if (room === 2){
    // image(arrangingroom, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
    // rect(200, 100, 50, 50);
    // diplaybuttons();
    // display_vase();
    display_arraingingRoom();
    
  }
}

function display_greenhouse(){
  image(greenhouse, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  draw_pots();
  draw_seeds();
  diplaybuttons();
  image(storeButton, backgroundWidth*(89/100) + border, backgroundHeight*(90/100), backgroundWidth*(18/125), backgroundHeight*(1/8));
}

function display_arraingingRoom(){
  image(arrangingroom, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  diplaybuttons();
  display_vase();
  if (!flowerbeingdragged === "none"){
    if (mouseIsPressed){
      grab_flower(flowerbeingdragged);
    }
    
  }
  else{
    if (mouseX > 99 + 625){
      arrangement.push(flowerbeingdragged);
    }
    flowerbeingdragged = "none";
  }


  if (mouseIsPressed){
    grab_flower(redFlower);

  }
  
}

function diplaybuttons(){
  
  if (mouseX > backgroundWidth*(1/125) + border && mouseX < backgroundWidth*(17/150)+border && mouseY > backgroundHeight*(171/200) && mouseY < backgroundHeight){
    image(hoveredgreenhousebutton, backgroundWidth*(1/15)+ border, backgroundHeight*(189/200), backgroundWidth*(157/1500), backgroundHeight*(111/1000) );
    image(arrangingroombutton, backgroundWidth*(11/60) + border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
  }
  else if (mouseX > backgroundWidth*(2/15)+border && mouseX < backgroundWidth*(7/30) + border && mouseY > backgroundHeight*(9/10) && mouseY < backgroundHeight){
    image(hoveredarrangingroombutton, backgroundWidth*(11/60)+ border, backgroundHeight*(189/200), backgroundWidth*(157/1500), backgroundHeight*(111/1000) );
    image(greenhousebutton, backgroundWidth*(1/15) + border ,backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
  }
  else{
    image(greenhousebutton, backgroundWidth*(1/15)+ border ,backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(arrangingroombutton, backgroundWidth*(11/60)+border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
  }
}

function draw_seeds(){

  fill("red");
  
  rect(backgroundWidth*(5/6)+ border, backgroundHeight*(6/25), backgroundWidth*(1/50), backgroundHeight*(1/20));

  fill("pink");
  rect(backgroundWidth*(9/10) + border, backgroundHeight*(6/25), backgroundWidth*(1/50), backgroundHeight*(1/20) );

  fill("white");
  rect(backgroundWidth*(5/6) + border, backgroundHeight*(17/50), backgroundWidth*(1/50) , backgroundHeight*(1/20));

  fill("blue");
  rect(backgroundWidth*(9/10) + border, backgroundHeight*(17/50), backgroundWidth*(1/50), backgroundHeight*(1/20));

  fill("purple");
  rect(backgroundWidth*(5/6) + border, backgroundHeight*(11/25), backgroundWidth*(1/50), backgroundHeight*(1/20));

  fill ("orange");
  rect(backgroundWidth*(9/10) + border, backgroundHeight*(11/25), backgroundWidth*(1/50), backgroundHeight*(1/20));
  
}

function draw_pots(){
  for (let i = 0; i < pots.length; i++){
    
    image(pots[i].image, backgroundWidth*(1/12) + backgroundWidth*(37/300)*i + border, backgroundHeight*(3/5), backgroundWidth*(8/75), backgroundHeight*(39/125));
    
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
      pots[3].plantState = "dirt";
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
    if (mouseX > backgroundWidth*(2/15)+ border && mouseX < backgroundWidth*(13/15)+ border && mouseY > backgroundHeight*(131/200) && mouseY < backgroundHeight*(37/40)){
      room = 1;
    }
  }


  if (room === 1){
    let pot = "";
    if (mouseX > backgroundWidth*(3/100)+border && mouseX < backgroundWidth*(13/100)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "one";
      if (pots[0].hasplant === false && currentSeed !== ""){
        plant_seed(pot, currentSeed);
      
      }
      else if (pots[0].hasplant === true && pots[0].plantState === "done"){
        pick_flower(pot, pots[0].flowerColor);
      }
    
    }

    else if (mouseX > backgroundWidth*(3/20)+border && mouseX < backgroundWidth*(1/4)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "two";
      if (pots[1].hasplant === false && currentSeed !== ""){
        plant_seed(pot, currentSeed);
      
      }
      else if (pots[1].hasplant === true && pots[1].plantState === "done"){
        pick_flower(pot, pots[1].flowerColor);
      }
    }

    else if (mouseX > backgroundWidth*(7/25)+border && mouseX < backgroundWidth*(28/75)+ border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "three";
      if (pots[2].hasplant === false && currentSeed !== ""){
        plant_seed(pot, currentSeed);
      
      }
      else if (pots[2].hasplant === true && pots[2].plantState === "done"){
        pick_flower(pot, pots[2].flowerColor);
    
      }
    }

    else if (mouseX >  backgroundWidth*(121/300)+ border && mouseX < backgroundWidth*(149/300)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "four";
      if (pots[3].hasplant === false && currentSeed !== ""){
        plant_seed(pot, currentSeed);
      
      }
      else if (pots[3].hasplant === true && pots[3].plantState === "done"){
        pick_flower(pot, pots[3].flowerColor);
      }
    }

    else if (mouseX > backgroundWidth*(79/150)+ border && mouseX < backgroundWidth*(187/300)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "five";
    
      if (pots[4].hasplant === false && currentSeed !== ""){
        plant_seed(pot, currentSeed);
      }
      else if (pots[4].hasplant === true && pots[4].plantState === "done"){
        pick_flower(pot, pots[4].flowerColor);
        
      }
    }

    else if (mouseX > backgroundWidth*(13/20)+border && mouseX < backgroundWidth*(56/75)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      
      pot = "six";
      if (pots[5].hasplant === false && currentSeed !== ""){
        plant_seed(pot, currentSeed);
      }
      else if (pots[5].hasplant === true && pots[5].plantState === "done"){
        pick_flower(pot, pots[5].flowerColor);
      }
    }

    if (mouseX > backgroundWidth*(41/50) + border && mouseX < backgroundWidth*(253/300)+ border && mouseY > backgroundHeight*(43/200) && mouseY < backgroundHeight*(53/200)){
      currentSeed = "red";
    }
    else if (mouseX > backgroundWidth*(133/150) + border && mouseX < backgroundWidth*(91/100) + border && mouseY > backgroundHeight*(43/200) && mouseY < backgroundHeight*(53/200)){
      currentSeed = "pink";
    }
    else if (mouseX > backgroundWidth*(41/50) + border && mouseX < backgroundWidth*(253/300)+ border && mouseY > backgroundHeight*(63/200) && mouseY < backgroundHeight*(73/200)){
      currentSeed = "white";
    }
    else if (mouseX >  backgroundWidth*(133/150) + border && mouseX < backgroundWidth*(91/100) + border && mouseY > backgroundHeight*(63/200) && mouseY < backgroundHeight*(73/200)){
      currentSeed = "blue";
    }
    else if (mouseX > backgroundWidth*(41/50) + border && mouseX < backgroundWidth*(253/300)+ border && mouseY > backgroundHeight*(83/200) && mouseY < backgroundHeight*(93/200)){
      currentSeed = "purple";
    }
    else if (mouseX >  backgroundWidth*(133/150) + border && mouseX < backgroundWidth*(91/100) + border && mouseY > backgroundHeight*(83/200) && mouseY < backgroundHeight*(93/200)){
      currentSeed = "orange";
    }
  }


  if (room === 2){
    console.log(mouseX);
    console.log(mouseY);
    if (mouseX > 175 && mouseY > 225 && mouseY > 75 && mouseX > 125){
      dragging_flower = new Grabbed_flower("red");
      flowerbeingdragged = true;
    }
  }


  if (mouseX > backgroundWidth*(1/125) + border && mouseX < backgroundWidth*(17/150)+border && mouseY > backgroundHeight*(171/200) && mouseY < backgroundHeight){
    room = 1;
  }
  else if (mouseX > backgroundWidth*(2/15)+border && mouseX < backgroundWidth*(7/30) + border && mouseY > backgroundHeight*(9/10) && mouseY < backgroundHeight){
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

function create_vase(){
  arrangement = [];
}

function display_vase(){
  image(emptyVase, backgroundWidth*(5/12) + border, backgroundHeight*(3/5), backgroundWidth*(197/1500), backgroundHeight*(277/1000));
}

function grab_flower(flowerimage){
  image(flowerimage, mouseX, mouseY, backgroundWidth*(17/250), backgroundHeight*(167/1000));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (width > height){
    backgroundHeight = height;
    backgroundWidth = backgroundHeight*(3/2);
    border = (windowWidth - backgroundWidth)/2;
  }
  else{
    backgroundWidth = width;
    backgroundHeight = backgroundWidth*(2/3);
    border = (windowWidth - backgroundWidth)/2;
  }
}
