// Project Title
// Faith
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let room = 0;

let hasData = false;
let backgroundWidth;
let backgroundHeight;
let border;

let flowers = [];

let redflowersHave = 0;
let pinkflowersHave = 0;
let whiteflowersHave = 0;
let blueflowersHave = 0;
let orangeflowerHave = 0;
let purpleflowerHave = 0;

let redseeds = 0;
let pinkseeds = 0;
let whiteseeds = 0;
let blueseeds = 0;
let purpleseeds =0;
let orangeseeds = 0;

let money = 3;
let seeds;

let fertiziler = 0;


let pots = [];


let arrangement = [];

let currentSeed = "";

let greenhouse;
let arrangingroom;
let startScreenNormal;
let startScreenhoverd;

let storebackground;
let storeseedbutton;
let storebackbutton;

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

let blueSeedpack;
let orangeSeedpack;
let pinkSeedpack;
let purpleSeedpack;
let redSeedpack;
let whiteSeedpack;

let blueinVase1;
let blueinVase2;
let blueinVase3;
let blueinVase4;
let blueinVase5;

let orangeinVase1;
let orangeinVase2;
let orangeinVase3;
let orangeinVase4;
let orangeinVase5;

let pinkinVase1;
let pinkinVase2;
let pinkinVase3;
let pinkinVase4;
let pinkinVase5;

let purpleinVase1;
let purpleinVase2;
let purpleinVase3;
let purpleinVase4;
let purpleinVase5;

let redinVase1;
let redinVase2;
let redinVase3;
let redinVase4;
let redinVase5;

let whiteinVase1;
let whiteinVase2;
let whiteinVase3;
let whiteinVase4;
let whiteinVase5;

let emptyVase;
let sellButton;
let flowerbeingdragged = "none";


function preload(){

  greenhouse = loadImage("pictures/greenhouseUNFINISHED.png");
  arrangingroom = loadImage("pictures/arranging room.png");
  startScreenNormal = loadImage("pictures/startscreennothovered.png");
  startScreenhoverd = loadImage("pictures/startscreenhovered.png");

  greenhousebutton = loadImage("pictures/greenhousebutton.png");
  hoveredgreenhousebutton = loadImage("pictures/hoveredgreenhousebutton.png");
  arrangingroombutton = loadImage("pictures/arrangingroombutton.png");
  hoveredarrangingroombutton = loadImage("pictures/hoveredarrangingroombutton.png");

  storebackground = loadImage("pictures/StoreBackground.png");
  storeseedbutton = loadImage("pictures/StoreSeedbutton.png");
  storebackbutton = loadImage("pictures/StoreBackButton.png");

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

  blueSeedpack = loadImage("pictures/blueSeeds.png");
  orangeSeedpack = loadImage("pictures/orangeSeeds.png");
  pinkSeedpack = loadImage("pictures/pinkSeeds.png");
  purpleSeedpack = loadImage("pictures/purpleSeeds.png");
  redSeedpack = loadImage("pictures/redSeeds.png");
  whiteSeedpack = loadImage("pictures/whiteSeeds.png");
  
  emptyVase = loadImage("pictures/vase.png");
  sellButton = loadImage("pictures/Sellbutton.png");

  blueinVase1 = loadImage("pictures/vaseBlue1st.png");
  blueinVase2 = loadImage("pictures/vaseBlue2nd.png");
  blueinVase3 = loadImage("pictures/vaseBlue3rd.png");
  blueinVase4 = loadImage("pictures/vaseBlue4th.png");
  blueinVase5 = loadImage("pictures/vaseBlue5th.png");

  orangeinVase1 = loadImage("pictures/vaseOrange1st.png");
  orangeinVase2 = loadImage("pictures/vaseOrange2nd.png");
  orangeinVase3 = loadImage("pictures/vaseOrange3rd.png");
  orangeinVase4 = loadImage("pictures/vaseOrange4th.png");
  orangeinVase5 = loadImage("pictures/vaseOrange5th.png");

  pinkinVase1 = loadImage("pictures/vasePink1st.png");
  pinkinVase2 = loadImage("pictures/vasePink2nd.png");
  pinkinVase3 = loadImage("pictures/vasePink3rd.png");
  pinkinVase4 = loadImage("pictures/vasePink4th.png");
  pinkinVase5 = loadImage("pictures/vasePink5th.png");

  purpleinVase1 = loadImage("pictures/vasePurple1st.png");
  purpleinVase2 = loadImage("pictures/vasePurple2nd.png");
  purpleinVase3 = loadImage("pictures/vasePurple3rd.png");
  purpleinVase4 = loadImage("pictures/vasePurple4th.png");
  purpleinVase5 = loadImage("pictures/vasePurple5th.png");

  redinVase1 = loadImage("pictures/vaseRed1st.png");
  redinVase2 = loadImage("pictures/vaseRed2nd.png");
  redinVase3 = loadImage("pictures/vaseRed3rd.png");
  redinVase4 = loadImage("pictures/vaseRed4th.png");
  redinVase5 = loadImage("pictures/vaseRed5th.png");

  whiteinVase1 = loadImage("pictures/vaseWhite1st.png");
  whiteinVase2 = loadImage("pictures/vaseWhite2nd.png");
  whiteinVase3 = loadImage("pictures/vaseWhite3rd.png");
  whiteinVase4 = loadImage("pictures/vaseWhite4th.png");
  whiteinVase5 = loadImage("pictures/vaseWhite5th.png");
}

function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER);
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

  seeds = new Map();
  set_seeds();

  // get_data();
}

function draw() {
  background(200);
  update_pots();

  if (room === 0){
    display_startScreen();
  }

  if (room === 1){
    display_greenhouse();
    
  }

  if (room === 2){
    display_arraingingRoom();
    drag_flower();
  }
  if (room === 3){
    display_store();
  }
}

function display_startScreen(){
  if (mouseX > backgroundWidth*(2/15)+ border && mouseX < backgroundWidth*(13/15)+ border && mouseY > backgroundHeight*(131/200) && mouseY < backgroundHeight*(37/40)){
    image(startScreenhoverd, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight );
  }
  else{
    image(startScreenNormal, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  }
}

function display_store(){
  image(storebackground, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  image(storebackbutton, backgroundWidth*(1300/1500)+border, backgroundHeight*(110/1000), backgroundWidth*(274/1500), backgroundHeight*(135/1000));
  image(storeseedbutton, backgroundWidth*(160/1500)+ border, backgroundHeight*(110/1000), backgroundWidth*(274/1500), backgroundHeight*(135/1000));

  image(redSeedpack, backgroundWidth*(375/1500)+border, backgroundHeight*(400/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(pinkSeedpack, backgroundWidth*(375/1500)+border, backgroundHeight*(800/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(whiteSeedpack, backgroundWidth*(750/1500)+border, backgroundHeight*(400/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(blueSeedpack, backgroundWidth*(750/1500)+border, backgroundHeight*(800/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(purpleSeedpack, backgroundWidth*(1125/1500)+ border, backgroundHeight*(400/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(orangeSeedpack, backgroundWidth*(1125/1500)+ border, backgroundHeight*(800/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));

  fill("black");
  rect(backgroundWidth*(1400/1500) + border, backgroundHeight/2, backgroundWidth*(50/1500), backgroundHeight*(75/1000));

  display_seed_amounts();
}

function display_greenhouse(){
  image(greenhouse, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  draw_pots();
  display_seeds();
  diplaybuttons();
  rect(backgroundWidth*(1335/1500) + border, backgroundHeight *(780/1000), backgroundWidth*(50/1500), backgroundHeight*(75/1000) );
  if (mouseX > backgroundWidth*(1227/1500) + border && mouseX < backgroundWidth*(1443/1500) + border && mouseY > backgroundHeight*(839/1000) && mouseY < backgroundHeight*(962/1000)){
    image(hoveredStorebutton, backgroundWidth*(1335/1500) + border, backgroundHeight*(90/100), backgroundWidth*(216/1500), backgroundHeight*(1/8));
  }
  else{
    image(storeButton, backgroundWidth*(1335/1500) + border, backgroundHeight*(90/100), backgroundWidth*(216/1500), backgroundHeight*(1/8));
  }
}

function display_arraingingRoom(){
  image(arrangingroom, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  diplaybuttons();
  display_vase();
  image(sellButton, backgroundWidth*(900/1500) + border, backgroundHeight*(820/1000), backgroundWidth*(298/1500), backgroundHeight*(167/1000));

  if (!flowerbeingdragged === "none"){
    if (mouseIsPressed){
      grab_flower(flowerbeingdragged);
    }
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

function display_seeds(){
  image(redSeedpack, backgroundWidth*(1260/1500)+border, backgroundHeight*(240/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(pinkSeedpack, backgroundWidth*(1410/1500)+border, backgroundHeight*(240/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(whiteSeedpack, backgroundWidth*(1260/1500)+border, backgroundHeight*(440/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(blueSeedpack, backgroundWidth*(1410/1500)+border, backgroundHeight*(440/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(purpleSeedpack, backgroundWidth*(1260/1500)+ border, backgroundHeight*(640/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(orangeSeedpack, backgroundWidth*(1410/1500)+ border, backgroundHeight*(640/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
}

function draw_pots(){
  for (let i = 0; i < pots.length; i++){
    image(pots[i].image, backgroundWidth*(1/12) + backgroundWidth*(37/300)*i + border, backgroundHeight*(3/5), backgroundWidth*(8/75), backgroundHeight*(39/125));
    
  } 
}

function display_seed_amounts(){
  textSize(backgroundWidth*(50/1500));
  let amountofred = str(seeds.get("red"));
  text(amountofred, backgroundWidth*(375/1500) + border, backgroundHeight*(528/1000), backgroundHeight*(116/1500, backgroundHeight*(75/1000)));
  
  let amountofpink = str(seeds.get("pink"));
  text(amountofpink, backgroundWidth*(375/1500) + border, backgroundHeight*(927/1000), backgroundHeight*(116/1500, backgroundHeight*(75/1000)));
  
  let amountofwhite = str(seeds.get("white"));
  text(amountofwhite, backgroundWidth*(750/1500) + border, backgroundHeight*(528/1000), backgroundHeight*(116/1500, backgroundHeight*(75/1000)));
  
  let amountofpurple = str(seeds.get("purple"));
  text(amountofpurple, backgroundWidth*(1125/1500) + border, backgroundHeight*(528/1000), backgroundHeight*(116/1500, backgroundHeight*(75/1000)));
  
  let amountofblue = str(seeds.get("blue"));
  text(amountofblue, backgroundWidth*(750/1500) + border, backgroundHeight*(927/1000), backgroundHeight*(116/1500, backgroundHeight*(75/1000)));

  let amountoforange = str(seeds.get("orange"));
  text(amountoforange, backgroundWidth*(1150/1500) + border, backgroundHeight*(927/1000), backgroundHeight*(116/1500, backgroundHeight*(75/1000)));

  let amountoffertiziler = str(fertiziler);
  text(amountoffertiziler, backgroundWidth*(1400/1500) + border, backgroundHeight*(590/1000), backgroundHeight*(116/1500, backgroundHeight*(75/1000)));

}

function set_seeds(){
  seeds.set("red", 0);
  seeds.set("pink", 0);
  seeds.set("orange", 0);
  seeds.set("white", 0);
  seeds.set("purple", 0);
  seeds.set("blue", 0);
  
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

function fertilize_plant(pot){
  pots[pot].plantState = "done";
  fertiziler --;
}

function mousePressed(){
  // console.log(backgroundWidth);
  // console.log(backgroundHeight);
  // console.log(mouseX);
  // console.log(mouseY);
  
  if (room === 0){
    if (mouseX > backgroundWidth*(2/15)+ border && mouseX < backgroundWidth*(13/15)+ border && mouseY > backgroundHeight*(131/200) && mouseY < backgroundHeight*(37/40)){
      room = 1;
    }
  }


  if (room === 1){
    let pot = "";
    if (mouseX > backgroundWidth*(3/100)+border && mouseX < backgroundWidth*(13/100)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "one";
      if (pots[0].hasplant === false && currentSeed !== "" && seeds.get(currentSeed) > 0){
        plant_seed(pot, currentSeed);
        seeds.set(currentSeed, seeds.get(currentSeed)-1);
        
      
      }
      else if (pots[0].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0){
        fertilize_plant(0);
      }
      else if (pots[0].hasplant === true && pots[0].plantState === "done"){
        pick_flower(pot, pots[0].flowerColor);
        
      }
    
    }

    else if (mouseX > backgroundWidth*(3/20)+border && mouseX < backgroundWidth*(1/4)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "two";
      if (pots[1].hasplant === false && currentSeed !== "" && seeds.get(currentSeed) > 0){
        plant_seed(pot, currentSeed);
        seeds.set(currentSeed, seeds.get(currentSeed)-1);
      
      }
      else if (pots[1].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0){
        fertilize_plant(1);
      }
      else if (pots[1].hasplant === true && pots[1].plantState === "done"){
        pick_flower(pot, pots[1].flowerColor);
      }
    }

    else if (mouseX > backgroundWidth*(7/25)+border && mouseX < backgroundWidth*(28/75)+ border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "three";
      if (pots[2].hasplant === false && currentSeed !== "" && seeds.get(currentSeed) > 0){
        plant_seed(pot, currentSeed);
        seeds.set(currentSeed, seeds.get(currentSeed)-1);
      
      }
      else if (pots[2].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0){
        fertilize_plant(2);
      }
      else if (pots[2].hasplant === true && pots[2].plantState === "done"){
        pick_flower(pot, pots[2].flowerColor);
    
      }
    }

    else if (mouseX >  backgroundWidth*(121/300)+ border && mouseX < backgroundWidth*(149/300)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "four";
      if (pots[3].hasplant === false && currentSeed !== "" && seeds.get(currentSeed) > 0){
        plant_seed(pot, currentSeed);
        seeds.set(currentSeed, seeds.get(currentSeed)-1);
      
      }
      else if (pots[3].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0){
        fertilize_plant(3);
      }
      else if (pots[3].hasplant === true && pots[3].plantState === "done"){
        pick_flower(pot, pots[3].flowerColor);
      }
    }

    else if (mouseX > backgroundWidth*(79/150)+ border && mouseX < backgroundWidth*(187/300)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "five";
    
      if (pots[4].hasplant === false && currentSeed !== "" && seeds.get(currentSeed) > 0){
        plant_seed(pot, currentSeed);
        seeds.set(currentSeed, seeds.get(currentSeed)-1);
      }
      else if (pots[4].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0){
        fertilize_plant(4);
      }
      else if (pots[4].hasplant === true && pots[4].plantState === "done"){
        pick_flower(pot, pots[4].flowerColor);
        
      }
    }

    else if (mouseX > backgroundWidth*(13/20)+border && mouseX < backgroundWidth*(56/75)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      
      pot = "six";
      if (pots[5].hasplant === false && currentSeed !== "" && seeds.get(currentSeed) > 0){
        plant_seed(pot, currentSeed);
        seeds.set(currentSeed, seeds.get(currentSeed)-1);
      }
      else if (pots[5].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0){
        fertilize_plant(5);
      }
      else if (pots[5].hasplant === true && pots[5].plantState === "done"){
        pick_flower(pot, pots[5].flowerColor);
      }
    }

    if (mouseX > backgroundWidth*(1202/1500) + border && mouseX < backgroundWidth*(1318/1500)+ border && mouseY > backgroundHeight*(172/1000) && mouseY < backgroundHeight*(309/1000)){
      currentSeed = "red";
    }
    else if (mouseX > backgroundWidth*(1352/1500) + border && mouseX < backgroundWidth*(1468/1500) + border && mouseY > backgroundHeight*(172/1000) && mouseY < backgroundHeight*(309/1000)){
      currentSeed = "pink";
    }
    else if (mouseX > backgroundWidth*(1202/1500) + border && mouseX < backgroundWidth*(1318/1500)+ border && mouseY > backgroundHeight*(372/1000) && mouseY < backgroundHeight*(509/1000)){
      currentSeed = "white";
    }
    else if (mouseX >  backgroundWidth*(1352/1500) + border && mouseX < backgroundWidth*(1468/1500) + border && mouseY > backgroundHeight*(372/1000) && mouseY < backgroundHeight*(509/1000)){
      currentSeed = "blue";
    }
    else if (mouseX > backgroundWidth*(1202/1500) + border && mouseX < backgroundWidth*(1318/1500)+ border && mouseY > backgroundHeight*(572/1000) && mouseY < backgroundHeight*(709/1000)){
      currentSeed = "purple";
    }
    else if (mouseX >  backgroundWidth*(1352/1500) + border && mouseX < backgroundWidth*(1468/1500) + border && mouseY > backgroundHeight*(572/1000) && mouseY < backgroundHeight*(709/1000)){
      currentSeed = "orange";
    }
    else if (mouseX > backgroundWidth*(1310/1500)+ border && mouseX < backgroundWidth*(1360/1500)+border && mouseY > backgroundHeight*(742/1000) && mouseY < backgroundHeight*(818/1000)){
      currentSeed = "fertilizer";
    }

    if (mouseX > backgroundWidth*(1227/1500) + border && mouseX < backgroundWidth*(1443/1500) + border && mouseY > backgroundHeight*(839/1000) && mouseY < backgroundHeight*(962/1000)){
      room = 3;
    }
  }


  if (room === 2){
    
    if (mouseX > backgroundWidth*(1207/1500) + border && mouseX < backgroundWidth*(1305/1500) + border && mouseY > backgroundHeight*(210/1000) && mouseY < backgroundHeight*(378/1000) && purpleflowerHave > 0){
      flowerbeingdragged = purpleFlower;
    }
    else if (mouseX > backgroundWidth*(1235/1500) + border && mouseX < backgroundWidth*(1332/1500) + border && mouseY > backgroundHeight*(458/1000) && mouseY< backgroundHeight*(620/1000) && orangeflowerHave > 0){
      flowerbeingdragged = orangeflower;
    }
    else if (mouseX > backgroundWidth*(1230/1500) + border && mouseX < backgroundWidth*(1325/1500) + border && mouseY > backgroundHeight*(721/1000) && mouseY< backgroundHeight*(890/1000) && whiteflowersHave > 0){
      flowerbeingdragged = whiteFlower;
    }
    else if (mouseX > backgroundWidth*(1373/1500) + border && mouseX < backgroundWidth*(1468/1500) + border && mouseY > backgroundHeight*(213/1000) && mouseY< backgroundHeight*(375/1000) && pinkflowersHave > 0){
      flowerbeingdragged = pinkFlower;
    }
    else if (mouseX > backgroundWidth*(1384/1500) + border && mouseX < backgroundWidth*(1478/1500) + border && mouseY > backgroundHeight*(461/1000) && mouseY< backgroundHeight*(621/1000) && blueflowersHave > 0){
      flowerbeingdragged = blueFlower;
    }
    else if (mouseX > backgroundWidth*(1370/1500) + border && mouseX < backgroundWidth*(1467/1500) + border && mouseY > backgroundHeight*(722/1000) && mouseY< backgroundHeight*(889/1000) && redflowersHave > 0){
      flowerbeingdragged = redFlower;
    }

    else if (mouseX > backgroundWidth*(751/1500)+border && mouseX < backgroundWidth*(1049/1500)+border && mouseY > backgroundHeight*(737/1000) && mouseY < backgroundHeight*(904/1000)){
      sell_arrangement();
    }

  }

  if (room === 3){
    if (mouseX > backgroundWidth*(288/1500)+border && mouseX < backgroundWidth*(462/1500) +border && mouseY > backgroundHeight*(279/1000) && mouseY < backgroundHeight*(503/1000) && money > 0){
      seeds.set("red", seeds.get("red")+ 1);
      money --;
      console.log(seeds.get("red"));
    }
    else if (mouseX > backgroundWidth*(288/1500)+border && mouseX < backgroundWidth*(462/1500) +border && mouseY > backgroundHeight*(679/1000) && mouseY < backgroundHeight*(903/1000)  && money > 0){
      seeds.set("pink", seeds.get("pink")+ 1);
      money --;
      console.log(seeds.get("pink"));
    }
    else if (mouseX > backgroundWidth*(663/1500) + border && mouseX < backgroundWidth *(837/1500)+border && mouseY > backgroundHeight*(279/1000) && mouseY < backgroundHeight*(503/1000) && money > 0){
      seeds.set("white", seeds.get("white")+ 1);
      money --;
      console.log(seeds.get("white"));
    }
    else if (mouseX > backgroundWidth*(663/1500) + border && mouseX < backgroundWidth *(837/1500)+border && mouseY > backgroundHeight*(679/1000) && mouseY < backgroundHeight*(903/1000) && money > 0){
      seeds.set("blue", seeds.get("blue")+ 1);
      money --;
      console.log(seeds.get("blue"));
    }
    else if (mouseX > backgroundWidth*(1038/1500) + border && mouseX < backgroundWidth *(1212/1500)+border && mouseY > backgroundHeight*(279/1000) && mouseY < backgroundHeight*(503/1000) && money > 0){
      seeds.set("purple", seeds.get("purple")+ 1);
      money --;
      console.log(seeds.get("purple"));
    }
    else if (mouseX > backgroundWidth*(1038/1500) + border && mouseX < backgroundWidth*(1212/1500)+border && mouseY > backgroundHeight*(679/1000) && mouseY < backgroundHeight*(903/1000) && money > 0){
      seeds.set("orange", seeds.get("orange")+ 1);
      money --;
      console.log(seeds.get("orange"));
    }
    else if (mouseX > backgroundWidth*(1375/1500) + border && mouseX < backgroundWidth*(1425/1500) +border && mouseY > backgroundHeight*(463/1000) && mouseY < backgroundHeight*(538/1000)){
      fertiziler ++;
      money --;
    }
    else if (mouseX > backgroundWidth*(1163/1500) + border && mouseX < backgroundWidth*(1437/1500) + border && mouseY > backgroundHeight*(43/1000) && mouseY < backgroundHeight*(178/1000)){
      room = 1;
    }
  }

  if (room === 1 || room === 2){
    if (mouseX > backgroundWidth*(1/125) + border && mouseX < backgroundWidth*(17/150)+border && mouseY > backgroundHeight*(171/200) && mouseY < backgroundHeight){
      room = 1;
    }
    else if (mouseX > backgroundWidth*(2/15)+border && mouseX < backgroundWidth*(7/30) + border && mouseY > backgroundHeight*(9/10) && mouseY < backgroundHeight){
      room = 2;
    }
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
      if (pots[i].plantState === "done"){
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

      else if (millis() - pots[i].millisplanted > 30000){
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

function add_flower(color){
  if (color === "white"){
    whiteflowersHave ++;
  }
  else if (color === "red"){
    redflowersHave ++;
  }
  else if (color === "pink"){
    pinkflowersHave ++;
  }
  else if (color === "blue"){
    blueflowersHave ++;
  }
  else if (color === "orange"){
    orangeflowerHave ++;
  }
  else if (color === "purple"){
    purpleflowerHave ++;
  }
}

function use_flower(color){
  if (color === whiteFlower){
    whiteflowersHave -= 1;
  }
  else if (color === redFlower){
    redflowersHave -= 1;
  }
  else if (color === pinkFlower){
    pinkflowersHave -= 1;
  }
  else if (color === blueFlower){
    blueflowersHave -= 1;
  }
  else if (color === orangeflower){
    orangeflowerHave -= 1;
  }
  else if (color === purpleFlower){
    purpleflowerHave -= 1;
  }
}

function pick_flower(pot, color){
  for (let i = 0; i< 3; i++){
    add_flower(color);
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

function sell_arrangement(){
  for (let i = 0; i < arrangement.length; i++){
    money += 1;
  }
  create_vase();
}

function display_vase(){  
  if (arrangement.length > 4){
    if (arrangement[4] === redFlower){
      image(redinVase5, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[4] === whiteFlower){
      image(whiteinVase5, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[4] === pinkFlower){
      image(pinkinVase5, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if ( arrangement[4] === blueFlower){
      image(blueinVase5, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[4] === orangeflower){
      image(orangeinVase5, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[4] === purpleFlower){
      image(purpleinVase5, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
  }
  if (arrangement.length > 3){
    if (arrangement[3] === redFlower){
      image(redinVase4, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[3] === whiteFlower){
      image(whiteinVase4, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[3] === pinkFlower){
      image(pinkinVase4, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if ( arrangement[3] === blueFlower){
      image(blueinVase4, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[3] === orangeflower){
      image(orangeinVase4, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[3] === purpleFlower){
      image(purpleinVase4, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
  }
  if (arrangement.length > 2){
    if (arrangement[2] === redFlower){
      image(redinVase3, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[2] === whiteFlower){
      image(whiteinVase3, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[2] === pinkFlower){
      image(pinkinVase3, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if ( arrangement[2] === blueFlower){
      image(blueinVase3, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[2] === orangeflower){
      image(orangeinVase3, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[2] === purpleFlower){
      image(purpleinVase3, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
  }
  if (arrangement.length > 1){
    if (arrangement[1] === redFlower){
      image(redinVase2, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[1] === whiteFlower){
      image(whiteinVase2, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[1] === pinkFlower){
      image(pinkinVase2, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if ( arrangement[1] === blueFlower){
      image(blueinVase2, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[1] === orangeflower){
      image(orangeinVase2, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[1] === purpleFlower){
      image(purpleinVase2, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
  }
  if (arrangement.length > 0){
    if (arrangement[0] === redFlower){
      image(redinVase1, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[0] === whiteFlower){
      image(whiteinVase1, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[0] === pinkFlower){
      image(pinkinVase1, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if ( arrangement[0] === blueFlower){
      image(blueinVase1, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[0] === orangeflower){
      image(orangeinVase1, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
    else if (arrangement[0] === purpleFlower){
      image(purpleinVase1, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
    }
  }
  else{
    image(emptyVase, backgroundWidth*(5/12) + border, backgroundHeight*(3/5), backgroundWidth*(197/1500), backgroundHeight*(277/1000));

  }

  
}

function grab_flower(flowerimage){
  image(flowerimage, mouseX, mouseY, backgroundWidth*(17/250), backgroundHeight*(167/1000));
}

function drag_flower(){
  if (flowerbeingdragged !== "none"){
    if (mouseIsPressed){
      grab_flower(flowerbeingdragged);
    }
    else {
      if (mouseX > backgroundWidth*(536/1500) + border && mouseX < backgroundWidth*(724/1500) + border && mouseY > backgroundHeight*(465/1000) && mouseY < backgroundHeight*(736/1000)){
        arrangement.push(flowerbeingdragged);
        use_flower(flowerbeingdragged);
        flowerbeingdragged = "none";
      }
      else{
        flowerbeingdragged = "none";
      }
    }
  }
  
}

function get_data(){
  hasData = getItem(hasData);
  if (hasData === true){
    redflowersHave = getItem("redflowersHave");
    pinkflowersHave = getItem("pinkflowersHave");
    whiteflowersHave = getItem("whiteflowersHave");
    blueflowersHave = getItem("blueflowersHave");
    orangeflowerHave = getItem("orangeflowerHave");
    purpleflowerHave = getItem("purpleflowerHave");

    redseeds = getItem("redseeds");
    pinkseeds = getItem("pinkseeds");
    whiteseeds = getItem("whiteseeds");
    blueseeds = getItem("blueseeds");
    orangeseeds = getItem("orangeseeds");
    purpleseeds = getItem("purpleseeds");

    money = getItem("money");
    fertiziler = getItem("fertiziler");

    seeds = getItem("seeds");

    pots = getItem("pots");
  }
  
}

function save_data(){
  storeItem("redflowersHave", redflowersHave);
  storeItem("pinkflowersHave", pinkflowersHave);
  storeItem("whiteflowersHave", whiteflowersHave);
  storeItem("blueflowersHave", blueflowersHave);
  storeItem("orangeflowerHave", orangeflowerHave);
  storeItem("purpleflowerHave", purpleflowerHave);

  storeItem("redseeds", redseeds);
  storeItem("pinkseeds", pinkseeds);
  storeItem("whiteseeds", whiteseeds);
  storeItem("blueseeds", blueseeds);
  storeItem("purpleseeds", purpleseeds);
  storeItem("orangeseeds", orangeseeds);

  storeItem("money", money);
  storeItem("fertiziler", fertiziler);

  storeItem("seeds", seeds);

  storeItem("pots", pots);

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
