// Flower shop game
// Faith
// june 19th, 2023
//
// Extra for Experts:
// I finished my needs to have list

let hasData = false;

// Display variables
let backgroundWidth;
let backgroundHeight;
let border;

// Inventory variables
let redflowersHave = 0;
let pinkflowersHave = 0;
let whiteflowersHave = 0;
let blueflowersHave = 0;
let orangeflowerHave = 0;
let purpleflowerHave = 0;

let money = 6;
let fertiziler = 0;
let seeds;

// gameplay variables
let pots = [];
let arrangement = [];
let orders = [];

let room = 0;
let currentSeed = "";
let flowerbeingdragged = "none";
let currentOrder = "";

// backgrounds and other images
let greenhouse, arrangingroom, startScreenNormal, startScreenhoverd, openJournal, shopBackground;
let journal, storebackground, storeseedbutton, storebackbutton, storeAmountDisplayBig, storeAmountDisplaySmall, basketIcon, coinIcon, shopTextbox, Shopsellbutton, storeButton, hoveredStorebutton, sellButton;
let greenhousebutton, hoveredgreenhousebutton, arrangingroombutton, hoveredarrangingroombutton, shopButton, hoveredShopButton;
let emptypotImg, plantedpotImg, budImg, sproutImg, unboughtPot, blueflowerinpotImg, orangeflowerinpotImg, pinkflowerinpotImg, purpleflowerinpotImg, redflowerinpotimg, whiteflowerinpotImg, blueFlower, orangeflower, pinkFlower, purpleFlower, redFlower, whiteFlower;
let blueSeedpack, orangeSeedpack, pinkSeedpack, purpleSeedpack, redSeedpack, whiteSeedpack, fertilizerBag;

// flowers used to display the vase
let blueinVase1, blueinVase2, blueinVase3, blueinVase4, blueinVase5;
let orangeinVase1, orangeinVase2, orangeinVase3, orangeinVase4, orangeinVase5;
let pinkinVase1, pinkinVase2, pinkinVase3, pinkinVase4, pinkinVase5;
let purpleinVase1, purpleinVase2, purpleinVase3, purpleinVase4, purpleinVase5;
let redinVase1, redinVase2, redinVase3, redinVase4, redinVase5;
let whiteinVase1, whiteinVase2, whiteinVase3, whiteinVase4, whiteinVase5;
let emptyVase;

function preload(){
  //all the images are loaded in the preload funtion

  //backgrounds
  greenhouse = loadImage("pictures/greenhouseUNFINISHED.png");
  arrangingroom = loadImage("pictures/arranging room.png");
  startScreenNormal = loadImage("pictures/startscreennothovered.png");
  startScreenhoverd = loadImage("pictures/startscreenhovered.png");
  openJournal = loadImage("pictures/openJournal.png");
  shopBackground = loadImage("pictures/Shopbackground.png");

  //icons, buttons, and other
  greenhousebutton = loadImage("pictures/greenhousebutton.png");
  hoveredgreenhousebutton = loadImage("pictures/hoveredgreenhousebutton.png");
  arrangingroombutton = loadImage("pictures/arrangingroombutton.png");
  hoveredarrangingroombutton = loadImage("pictures/hoveredarrangingroombutton.png");
  shopButton = loadImage("pictures/shopbuttonunhovered.png");
  hoveredShopButton = loadImage("pictures/shopbuttonhovered.png");
  journal = loadImage("pictures/journal.png");
  shopTextbox = loadImage("pictures/shoptextblock.png");
  Shopsellbutton = loadImage("pictures/shopSellbutton.png");
  storebackground = loadImage("pictures/StoreBackground.png");
  storeseedbutton = loadImage("pictures/StoreSeedbutton.png");
  storebackbutton = loadImage("pictures/StoreBackButton.png");
  storeAmountDisplayBig = loadImage("pictures/storeAmountdisplayBig.png");
  storeAmountDisplaySmall = loadImage("pictures/storeAmountdisplaySmall.png");
  basketIcon = loadImage("pictures/Basket.png");
  coinIcon = loadImage("pictures/coins icon.png");
  sellButton = loadImage("pictures/Sellbutton.png");
  storeButton = loadImage("pictures/storeButtonunhovered.png");
  hoveredStorebutton = loadImage("pictures/storeButtonhovered.png");

  // pot images
  emptypotImg = loadImage("pictures/empty pot.png");
  plantedpotImg = loadImage("pictures/planted pot.png");
  budImg = loadImage("pictures/bud.png");
  sproutImg = loadImage("pictures/sprout.png");
  unboughtPot = loadImage("pictures/unbought pot.png");

  blueflowerinpotImg = loadImage("pictures/blue flower in pot.png");
  orangeflowerinpotImg = loadImage("pictures/orange flower in pot.png");
  pinkflowerinpotImg = loadImage("pictures/pink flower in pot.png");
  purpleflowerinpotImg = loadImage("pictures/purple flower in pot.png");
  redflowerinpotimg = loadImage("pictures/red flower in pot.png");
  whiteflowerinpotImg = loadImage("pictures/white flower in pot.png");

  //flower and seeds
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
  fertilizerBag = loadImage("pictures/fertilizer.png");
  
  //vase images
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

  emptyVase = loadImage("pictures/vase.png");
}

function setup() {
  // set up canvas and background
  createCanvas(windowWidth, windowHeight);
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

  // set modes
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  
  // create pots and seeds
  createpots();
  create_orders();

  seeds = new Map();
  set_seeds();

  // get_data();
}

function draw() {
  // the draw function displays a background over the whole canvas, then displays the right "room". The pots are updated here too
  background(200);
  update_pots();

  // displays the right room
  if (room === 0){
    display_startScreen();
  }

  else if (room === 1){
    display_greenhouse();
  }

  else if (room === 2){
    display_arraingingRoom();
    drag_flower();
  }

  else if (room === 3){
    display_store();
  }

  else if (room === 4){
    if (currentOrder === ""){
      pick_order();
    }
    display_shop();
  }

  else if (room === 5){
    display_journal();
  }
}

function display_startScreen(){
  //displays the startscreen, and the version with the "hovered" start button if the mouse if over it
  if (mouseX > backgroundWidth*(2/15)+ border && mouseX < backgroundWidth*(13/15)+ border && mouseY > backgroundHeight*(131/200) && mouseY < backgroundHeight*(37/40)){
    image(startScreenhoverd, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight );
  }
  else{
    image(startScreenNormal, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  }
}

function display_store(){
  // displays the store

  //Base store
  image(storebackground, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  image(storebackbutton, backgroundWidth*(1300/1500)+border, backgroundHeight*(110/1000), backgroundWidth*(274/1500), backgroundHeight*(135/1000));
  image(storeseedbutton, backgroundWidth*(160/1500)+ border, backgroundHeight*(110/1000), backgroundWidth*(274/1500), backgroundHeight*(135/1000));

  // Seeds
  image(redSeedpack, backgroundWidth*(375/1500)+border, backgroundHeight*(400/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(pinkSeedpack, backgroundWidth*(375/1500)+border, backgroundHeight*(800/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(whiteSeedpack, backgroundWidth*(750/1500)+border, backgroundHeight*(400/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(blueSeedpack, backgroundWidth*(750/1500)+border, backgroundHeight*(800/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(purpleSeedpack, backgroundWidth*(1125/1500)+ border, backgroundHeight*(400/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(orangeSeedpack, backgroundWidth*(1125/1500)+ border, backgroundHeight*(800/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(fertilizerBag, backgroundWidth*(1400/1500)+ border, backgroundHeight/2, backgroundWidth*(124/1500), backgroundHeight*(145/1000));

  // displays how much the seed costs and the spot for the amount in the inventory
  for (let i = 1; i < 4; i++){
    //displays
    image(storeAmountDisplaySmall, backgroundWidth*(375*i/1500)+ border, backgroundHeight*(528/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));
    image(storeAmountDisplayBig, backgroundWidth*(375*i/1500)+ border, backgroundHeight*(571/1000), backgroundWidth*(162/1500), backgroundHeight*(43/1000) );
    // cost
    text("1", backgroundWidth*((375*i + 30)/1500)+ border, backgroundHeight*(530/1000));
    // icons
    image(basketIcon, backgroundWidth*((375*i - 50)/1500)+ border, backgroundHeight*(571/1000), backgroundWidth*(32/1500), backgroundHeight*(33/1000));
    image(coinIcon, backgroundWidth*((375*i - 20)/1500)+ border, backgroundHeight*(530/1000), backgroundWidth*(58/1500), backgroundHeight*(27/1000) );
  }

  for (let i = 1; i < 4; i++){
    //displays
    image(storeAmountDisplaySmall, backgroundWidth*(375*i/1500)+ border, backgroundHeight*(927/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));
    image(storeAmountDisplayBig, backgroundWidth*(375*i/1500)+ border, backgroundHeight*(970/1000), backgroundWidth*(162/1500), backgroundHeight*(43/1000) );
    //cost
    text("1", backgroundWidth*((375*i+30)/1500)+ border, backgroundHeight*(929/1000));
    // icons
    image(coinIcon, backgroundWidth*((375*i - 20)/1500)+ border, backgroundHeight*(929/1000), backgroundWidth*(58/1500), backgroundHeight*(27/1000) );
    image(basketIcon, backgroundWidth*((375*i - 50)/1500)+ border, backgroundHeight*(970/1000), backgroundWidth*(32/1500), backgroundHeight*(33/1000));
  }

  // displays the same thing as above for the fertilizer
  image(storeAmountDisplaySmall, backgroundWidth*(1400/1500) + border, backgroundHeight*(590/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));
  image(storeAmountDisplayBig, backgroundWidth*(1400/1500) + border, backgroundHeight*(633/1000), backgroundWidth*(162/1500), backgroundHeight*(43/1000));
  
  text("2", backgroundWidth*(1430/1500) + border, backgroundHeight*(592/1000));

  image(basketIcon, backgroundWidth*(1350/1500)+ border, backgroundHeight*(633/1000), backgroundWidth*(32/1500), backgroundHeight*(33/1000));
  image(coinIcon, backgroundWidth*((1400 - 20)/1500)+ border, backgroundHeight*(592/1000), backgroundWidth*(58/1500), backgroundHeight*(27/1000) );

  // displays amount if seeds in the inventory
  display_seed_amounts_store();

  // displays how much money you have
  image(storeAmountDisplayBig, backgroundWidth*(160/1500)+ border, backgroundHeight*(250/1000), backgroundWidth*(162/1500), backgroundHeight*(43/1000));
  text(str(money),  backgroundWidth*((160 + 10)/1500)+ border, backgroundHeight*(254/1000));
  image(coinIcon, backgroundWidth*((160 - 40)/1500)+ border, backgroundHeight*(250/1000), backgroundWidth*(58/1500), backgroundHeight*(27/1000) );
}

function display_greenhouse(){
  // this function displays the greenhouse
  // display background, pots, and other base things
  image(greenhouse, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  draw_pots();
  display_seeds();
  diplaybuttons();
  image(fertilizerBag, backgroundWidth*(1335/1500) + border, backgroundHeight *(750/1000), backgroundWidth*(106/1500) , backgroundHeight*(130/1000));
  image(storeAmountDisplaySmall, backgroundWidth*(1335/1500) + border, backgroundHeight*(836/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));
  display_seed_amouts_greenhouse();

  // displays the store button, and the hovered version if the mouse if over it
  if (mouseX > backgroundWidth*(1227/1500) + border && mouseX < backgroundWidth*(1443/1500) + border && mouseY > backgroundHeight*(859/1000) && mouseY < backgroundHeight*(982/1000) && room !== 5){
    image(hoveredStorebutton, backgroundWidth*(1335/1500) + border, backgroundHeight*(920/1000), backgroundWidth*(216/1500), backgroundHeight*(1/8));
  }
  else{
    image(storeButton, backgroundWidth*(1335/1500) + border, backgroundHeight*(920/1000), backgroundWidth*(216/1500), backgroundHeight*(1/8));
  }

  //displays the journal icon, unless the journal is open
  if (room !== 5){
    image(journal, backgroundWidth*(90/1500)+ border, backgroundHeight*(90/1000), backgroundWidth*(117/1500), backgroundHeight*(144/1000));
  }

}

function display_arraingingRoom(){
  // this function displays the arrainging room
  image(arrangingroom, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  diplaybuttons();
  display_vase(625, 443, 400, 600, 600, 197, 277);
  display_flowersAmount();

  // displays a flower if a flower is being dragged into the vase
  if (!flowerbeingdragged === "none"){
    if (mouseIsPressed){
      grab_flower(flowerbeingdragged);
    }
  }
}

function display_shop(){
  // displays the shop
  image(shopBackground, backgroundWidth/2 + border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  image(shopTextbox, backgroundWidth*(400/1500) + border, backgroundHeight*(700/1000), backgroundWidth*(681/1500), backgroundHeight*(326/1000));
  image(Shopsellbutton, backgroundWidth*(1273/1500)+ border, backgroundHeight*(900/1000), backgroundWidth*(312/1500), backgroundHeight*(147/1000));
  diplaybuttons();

  // displays the order in the text box
  for (let i = 0; i < currentOrder.get("text").length; i++){
    let row = currentOrder.get("text")[i];
    text(row, backgroundWidth*(400/1500) + border, backgroundHeight*((650 + i * 30)/1000));
  }
  
  // displays the arraingment
  display_vase(925, 600, 200, 300, 679, 99, 139);
}

function display_journal(){
  display_greenhouse();

  image(openJournal, backgroundWidth/2 + border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  image(storebackbutton, backgroundWidth*(1300/1500)+border, backgroundHeight*(932.5/1000), backgroundWidth*(274/1500), backgroundHeight*(135/1000));
}

function diplaybuttons(){
  // this function displays the buttons to get to the diffrent rooms, and displays the hovered version if the mouse is hovering over it
  // hovering over greenhouse
  if (mouseX > backgroundWidth*(1/125) + border && mouseX < backgroundWidth*(17/150)+border && mouseY > backgroundHeight*(171/200) && mouseY < backgroundHeight){
    image(hoveredgreenhousebutton, backgroundWidth*(100/1500)+ border, backgroundHeight*(189/200), backgroundWidth*(157/1500), backgroundHeight*(111/1000));
    image(arrangingroombutton, backgroundWidth*(275/1500) + border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(shopButton, backgroundWidth*(450/1500) +border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
  }

  // hovering over arrainging room
  else if (mouseX > backgroundWidth*(2/15)+border && mouseX < backgroundWidth*(7/30) + border && mouseY > backgroundHeight*(9/10) && mouseY < backgroundHeight){
    image(hoveredarrangingroombutton, backgroundWidth*(11/60)+ border, backgroundHeight*(189/200), backgroundWidth*(157/1500), backgroundHeight*(111/1000) );
    image(greenhousebutton, backgroundWidth*(1/15) + border ,backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(shopButton, backgroundWidth*(450/1500) +border, backgroundHeight*(24/25), backgroundWidth*(159/1500), backgroundHeight*(81/1000));
  }

  // hovering over the shop
  else if (mouseX > backgroundWidth*(371/1500)+ border && mouseX < backgroundWidth*(530/1500)+ border && mouseY >  backgroundHeight*(171/200) && mouseY < backgroundHeight){
    image(arrangingroombutton, backgroundWidth*(275/1500) + border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(greenhousebutton, backgroundWidth*(1/15) + border ,backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(hoveredShopButton, backgroundWidth*(450/1500) + border,backgroundHeight*(189/200), backgroundWidth*(157/1500), backgroundHeight*(111/1000));
  }

  //not hovering over any
  else{
    image(greenhousebutton, backgroundWidth*(1/15)+ border ,backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(arrangingroombutton, backgroundWidth*(11/60)+border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(shopButton, backgroundWidth*(450/1500) +border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
  }
}

function display_seeds(){
  // this function displays the seeds and the square for the amounts to be displayed on
  
  image(redSeedpack, backgroundWidth*(1260/1500)+border, backgroundHeight*(215/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(storeAmountDisplaySmall, backgroundWidth*(1260/1500) + border, backgroundHeight*(301/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));
  
  image(pinkSeedpack, backgroundWidth*(1410/1500)+border, backgroundHeight*(215/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(storeAmountDisplaySmall, backgroundWidth*(1410/1500) + border, backgroundHeight*(301/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));

  image(whiteSeedpack, backgroundWidth*(1260/1500)+border, backgroundHeight*(400/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(storeAmountDisplaySmall, backgroundWidth*(1260/1500) + border, backgroundHeight*(486/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));
  
  image(blueSeedpack, backgroundWidth*(1410/1500)+border, backgroundHeight*(400/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(storeAmountDisplaySmall, backgroundWidth*(1410/1500) + border, backgroundHeight*(486/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));

  image(purpleSeedpack, backgroundWidth*(1260/1500)+ border, backgroundHeight*(585/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(storeAmountDisplaySmall, backgroundWidth*(1260/1500) + border, backgroundHeight*(671/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));
  
  image(orangeSeedpack, backgroundWidth*(1410/1500)+ border, backgroundHeight*(585/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(storeAmountDisplaySmall, backgroundWidth*(1410/1500) + border, backgroundHeight*(671/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));

}

function display_seed_amouts_greenhouse(){
  // this function displays the amount of seeds in the inventory in the greenhouse
  textSize(backgroundWidth*(30/1500));

  let amountofred = str(seeds.get("red"));
  text(amountofred, backgroundWidth*(1260/1500) + border, backgroundHeight*(301/1000));
  
  let amountofpink = str(seeds.get("pink"));
  text(amountofpink, backgroundWidth*(1410/1500) + border, backgroundHeight*(301/1000));
  
  let amountofwhite = str(seeds.get("white"));
  text(amountofwhite, backgroundWidth*(1260/1500) + border, backgroundHeight*(486/1000));
  
  let amountofblue = str(seeds.get("blue"));
  text(amountofblue, backgroundWidth*(1410/1500) + border, backgroundHeight*(486/1000));
  
  let amountofpurple = str(seeds.get("purple"));
  text(amountofpurple, backgroundWidth*(1260/1500) + border, backgroundHeight*(671/1000));

  let amountoforange = str(seeds.get("orange"));
  text(amountoforange, backgroundWidth*(1410/1500) + border, backgroundHeight*(671/1000));

  let amountoffertiziler = str(fertiziler);
  text(amountoffertiziler, backgroundWidth*(1335/1500) + border, backgroundHeight*(836/1000));
}

function draw_pots(){
  // this funtion displays the pots in the greenhouse
  for (let i = 0; i < pots.length; i++){
    if (pots[i].image === unboughtPot){
      image(pots[i].image, backgroundWidth*(140/1500) + backgroundWidth*(185/1500)*i + border, backgroundHeight*(670/1000), backgroundWidth*(235/1500), backgroundHeight*(135/1000));
    }

    else{
      image(pots[i].image, backgroundWidth*(125/1500) + backgroundWidth*(185/1500)*i + border, backgroundHeight*(3/5), backgroundWidth*(8/75), backgroundHeight*(39/125));
    }
  }
}

function display_seed_amounts_store(){
  // this funtion displays the amount of seeds in the inventory in the store
  textSize(backgroundWidth*(30/1500));

  text(str(seeds.get("red")), backgroundWidth*(405/1500) + border, backgroundHeight*(575/1000));
  text(str(seeds.get("pink")), backgroundWidth*(405/1500) + border, backgroundHeight*(974/1000));
  text(str(seeds.get("white")), backgroundWidth*(780/1500) + border, backgroundHeight*(575/1000));
  text(str(seeds.get("purple")), backgroundWidth*(1155/1500) + border, backgroundHeight*(575/1000));
  text(str(seeds.get("blue")), backgroundWidth*(780/1500) + border, backgroundHeight*(974/1000));
  text(str(seeds.get("orange")), backgroundWidth*(1155/1500) + border, backgroundHeight*(974/1000));
  text(str(fertiziler), backgroundWidth*(1430/1500) + border, backgroundHeight*(637/1000));
}

function display_flowersAmount(){
  // This function displays how many flowers you have under the flowers in the arrainging room
  textSize(backgroundWidth*(30/1500));

  text(str(redflowersHave), backgroundWidth*(1418/1500)+ border, backgroundHeight*(910/1000));
  text(str(whiteflowersHave), backgroundWidth*(1276/1500)+ border, backgroundHeight*(910/1000));
  text(str(orangeflowerHave), backgroundWidth*(1282/1500) + border, backgroundHeight*(639/1000));
  text(str(blueflowersHave), backgroundWidth*(1427/1500) + border, backgroundHeight*(639/1000));
  text(str(purpleflowerHave), backgroundWidth*(1256/1500)+ border, backgroundHeight*(395/1000));
  text(str(pinkflowersHave), backgroundWidth*(1424/1500)+ border, backgroundHeight*(395/1000));
}

function set_seeds(){
  // This function adds each seedtype to the seed map
  seeds.set("red", 0);
  seeds.set("pink", 0);
  seeds.set("orange", 0);
  seeds.set("white", 0);
  seeds.set("purple", 0);
  seeds.set("blue", 0);
}

function plant_seed(pot, seedtype){
  // this function plants a flower in whichever pot was clicked, with whichever seedtype was used

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
  // this function fertilizes the plant in whichever pot was clicked
  pots[pot].plantState = "done";
  fertiziler --;
}

function mousePressed(){
  // this function does what needs to be done based on where the mouse was pressed, and which "room" it is

  // Startscreen
  if (room === 0){
    // changes the room when the start button is clicked
    if (mouseX > backgroundWidth*(2/15)+ border && mouseX < backgroundWidth*(13/15)+ border && mouseY > backgroundHeight*(131/200) && mouseY < backgroundHeight*(37/40)){
      room = 1;
    }
  }

  // greenhouse
  else if (room === 1){
    // Interacts with whichever pot was clicked based on if the pot already has a plant, if the pot has been bought, the seedtype selected, and the state of the plant in the pot
    let pot = "";

    // first pot
    if (mouseX > backgroundWidth*(3/100)+border && mouseX < backgroundWidth*(13/100)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "one";

      if (pots[0].hasplant === false && currentSeed !== "" && seeds.get(currentSeed) > 0 && pots[0].bought === true){
        // plants seed
        plant_seed(pot, currentSeed);
        seeds.set(currentSeed, seeds.get(currentSeed)-1);
      }

      else if (pots[0].bought === false && money >= 5){
        // buys pot
        pots[0].bought = true;
        money -= 5;
      }

      else if (pots[0].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0){
        // fertilizes plant
        fertilize_plant(0);
      }

      else if (pots[0].hasplant === true && pots[0].plantState === "done"){
        // picks flower
        pick_flower(pot, pots[0].flowerColor);
      }
    }
    // this is repeated for every pot

    //pot two
    else if (mouseX > backgroundWidth*(3/20)+border && mouseX < backgroundWidth*(1/4)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "two";

      if (pots[1].hasplant === false && currentSeed !== "" && seeds.get(currentSeed) > 0 && pots[1].bought === true){
        plant_seed(pot, currentSeed);
        seeds.set(currentSeed, seeds.get(currentSeed)-1);
      }

      else if (pots[1].bought === false && money >= 5){
        pots[1].bought = true;
        money -= 5;
      }

      else if (pots[1].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0){
        fertilize_plant(1);
      }

      else if (pots[1].hasplant === true && pots[1].plantState === "done"){
        pick_flower(pot, pots[1].flowerColor);
      }
    }

    // pot three
    else if (mouseX > backgroundWidth*(7/25)+border && mouseX < backgroundWidth*(28/75)+ border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "three";
      
      if (pots[2].hasplant === false && currentSeed !== "" && seeds.get(currentSeed) > 0 && pots[2].bought === true){
        plant_seed(pot, currentSeed);
        seeds.set(currentSeed, seeds.get(currentSeed)-1);
      }

      else if (pots[2].bought === false && money >= 5){
        pots[2].bought = true;
        money -= 5;
      }

      else if (pots[2].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0){
        fertilize_plant(2);
      }

      else if (pots[2].hasplant === true && pots[2].plantState === "done"){
        pick_flower(pot, pots[2].flowerColor);
      }
    }

    // pot four
    else if (mouseX >  backgroundWidth*(121/300)+ border && mouseX < backgroundWidth*(149/300)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "four";
      
      if (pots[3].hasplant === false && currentSeed !== "" && seeds.get(currentSeed) > 0 && pots[3].bought === true){
        plant_seed(pot, currentSeed);
        seeds.set(currentSeed, seeds.get(currentSeed)-1);
      }

      else if (pots[3].bought === false && money >= 5){
        pots[3].bought = true;
        money -= 5;
      }

      else if (pots[3].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0){
        fertilize_plant(3);
      }

      else if (pots[3].hasplant === true && pots[3].plantState === "done"){
        pick_flower(pot, pots[3].flowerColor);
      }
    }

    // pot five
    else if (mouseX > backgroundWidth*(79/150)+ border && mouseX < backgroundWidth*(187/300)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "five";

      if (pots[4].hasplant === false && currentSeed !== "" && seeds.get(currentSeed) > 0 && pots[4].bought === true){
        plant_seed(pot, currentSeed);
        seeds.set(currentSeed, seeds.get(currentSeed)-1);
      }

      else if (pots[4].bought === false && money >= 5){
        pots[4].bought = true;
        money -= 5;
      }

      else if (pots[4].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0 ){
        fertilize_plant(4);
      }

      else if (pots[4].hasplant === true && pots[4].plantState === "done"){
        pick_flower(pot, pots[4].flowerColor);
      }
    }

    //pot six
    else if (mouseX > backgroundWidth*(13/20)+border && mouseX < backgroundWidth*(56/75)+border && mouseY > backgroundHeight*(3/5) && mouseY < backgroundHeight*(147/200)){
      pot = "six";

      if (pots[5].hasplant === false && currentSeed !== "" && seeds.get(currentSeed) > 0 && pots[5].bought === true){
        plant_seed(pot, currentSeed);
        seeds.set(currentSeed, seeds.get(currentSeed)-1);
      }

      else if (pots[5].bought === false && money >= 5){
        pots[5].bought = true;
        money -= 5;
      }

      else if (pots[5].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0){
        fertilize_plant(5);
      }

      else if (pots[5].hasplant === true && pots[5].plantState === "done"){
        pick_flower(pot, pots[5].flowerColor);
      }
    }


    // this changed the current seed if a seedtype is clicked
    if (mouseX > backgroundWidth*(1202/1500) + border && mouseX < backgroundWidth*(1318/1500)+ border && mouseY > backgroundHeight*(147/1000) && mouseY < backgroundHeight*(284/1000)){
      currentSeed = "red";
    }

    else if (mouseX > backgroundWidth*(1352/1500) + border && mouseX < backgroundWidth*(1468/1500) + border && mouseY > backgroundHeight*(147/1000) && mouseY < backgroundHeight*(284/1000)){
      currentSeed = "pink";
    }

    else if (mouseX > backgroundWidth*(1202/1500) + border && mouseX < backgroundWidth*(1318/1500)+ border && mouseY > backgroundHeight*(332/1000) && mouseY < backgroundHeight*(469/1000)){
      currentSeed = "white";
    }

    else if (mouseX >  backgroundWidth*(1352/1500) + border && mouseX < backgroundWidth*(1468/1500) + border && mouseY > backgroundHeight*(332/1000) && mouseY < backgroundHeight*(469/1000)){
      currentSeed = "blue";
    }

    else if (mouseX > backgroundWidth*(1202/1500) + border && mouseX < backgroundWidth*(1318/1500)+ border && mouseY > backgroundHeight*(517/1000) && mouseY < backgroundHeight*(654/1000)){
      currentSeed = "purple";
    }

    else if (mouseX >  backgroundWidth*(1352/1500) + border && mouseX < backgroundWidth*(1468/1500) + border && mouseY > backgroundHeight*(517/1000) && mouseY < backgroundHeight*(654/1000)){
      currentSeed = "orange";
    }

    else if (mouseX > backgroundWidth*(1282/1500)+ border && mouseX < backgroundWidth*(1388/1500)+border && mouseY > backgroundHeight*(668/1000) && mouseY < backgroundHeight*(798/1000)){
      currentSeed = "fertilizer";
    }
    
    // this changed the room if the store button or journal is pressed
    if (mouseX > backgroundWidth*(1227/1500) + border && mouseX < backgroundWidth*(1443/1500) + border && mouseY > backgroundHeight*(859/1000) && mouseY < backgroundHeight*(982/1000)){
      //store
      room = 3;
    }

    if (mouseX > backgroundWidth*(32/1500) + border && mouseX < backgroundWidth*(149/1500) + border && mouseY > backgroundHeight*(18/1000) && mouseY < backgroundHeight*(162/1000)){
      // journal
      room = 5;
    }
  }

  // arrainging room
  else if (room === 2){
    //starts dragging a flower when it is clicked

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
  }

  //store
  else if (room === 3){
    // adds seeds to the inventory if its clicked, and takes away from the money for each seed color
    if (mouseX > backgroundWidth*(288/1500)+border && mouseX < backgroundWidth*(462/1500) +border && mouseY > backgroundHeight*(279/1000) && mouseY < backgroundHeight*(503/1000) && money > 0){
      seeds.set("red", seeds.get("red")+ 1);
      money --;
    }

    else if (mouseX > backgroundWidth*(288/1500)+border && mouseX < backgroundWidth*(462/1500) +border && mouseY > backgroundHeight*(679/1000) && mouseY < backgroundHeight*(903/1000)  && money > 0){
      seeds.set("pink", seeds.get("pink")+ 1);
      money --;
    }

    else if (mouseX > backgroundWidth*(663/1500) + border && mouseX < backgroundWidth *(837/1500)+border && mouseY > backgroundHeight*(279/1000) && mouseY < backgroundHeight*(503/1000) && money > 0){
      seeds.set("white", seeds.get("white")+ 1);
      money --;
    }

    else if (mouseX > backgroundWidth*(663/1500) + border && mouseX < backgroundWidth *(837/1500)+border && mouseY > backgroundHeight*(679/1000) && mouseY < backgroundHeight*(903/1000) && money > 0){
      seeds.set("blue", seeds.get("blue")+ 1);
      money --;
    }

    else if (mouseX > backgroundWidth*(1038/1500) + border && mouseX < backgroundWidth *(1212/1500)+border && mouseY > backgroundHeight*(279/1000) && mouseY < backgroundHeight*(503/1000) && money > 0){
      seeds.set("purple", seeds.get("purple")+ 1);
      money --;
    }

    else if (mouseX > backgroundWidth*(1038/1500) + border && mouseX < backgroundWidth*(1212/1500)+border && mouseY > backgroundHeight*(679/1000) && mouseY < backgroundHeight*(903/1000) && money > 1){
      seeds.set("orange", seeds.get("orange")+ 1);
      money --;
    }

    // adds fertilizer to the inventory and takes away from money if the fertilizer is pressed
    else if (mouseX > backgroundWidth*(1375/1500) + border && mouseX < backgroundWidth*(1425/1500) +border && mouseY > backgroundHeight*(463/1000) && mouseY < backgroundHeight*(538/1000)  && money > 0){
      fertiziler ++;
      money -= 2;
    }

    // changes the room back to the greenhouse when the back button is pressed
    else if (mouseX > backgroundWidth*(1163/1500) + border && mouseX < backgroundWidth*(1437/1500) + border && mouseY > backgroundHeight*(43/1000) && mouseY < backgroundHeight*(178/1000)){
      room = 1;
    }
  }

  //shop
  else if (room === 4){
    //sells the arraingment if the sell button is pressed
    if (mouseX > backgroundWidth*(1117/1500)+ border&& mouseX < backgroundWidth*(1429/1500)+ border && mouseY > backgroundHeight*(827/1000) && mouseY < backgroundHeight*(974/1000)){
      sell_arrangement();
    }
  }

  // journal
  else if (room === 5){
    //closed the journal if the back button is pressed
    if (mouseX > backgroundWidth*(1163/1500)+ border&& mouseX < backgroundWidth*(1437/1500)+ border && mouseY > backgroundHeight*(865/1000) && mouseY < backgroundHeight){
      room = 1;
    }
  }

  // Changes the room using the buttons at the bottom, in the rooms they are in
  if (room === 1 || room === 2 || room === 4){
    //greenhouse
    if (mouseX > backgroundWidth*(1/125) + border && mouseX < backgroundWidth*(17/150)+border && mouseY > backgroundHeight*(171/200) && mouseY < backgroundHeight){
      room = 1;
    }

    //arrainging room
    else if (mouseX > backgroundWidth*(2/15)+border && mouseX < backgroundWidth*(7/30) + border && mouseY > backgroundHeight*(9/10) && mouseY < backgroundHeight){
      room = 2;
    }

    //shop
    else if (mouseX > backgroundWidth*(371/1500)+ border && mouseX < backgroundWidth*(530/1500)+ border && mouseY >  backgroundHeight*(171/200) && mouseY < backgroundHeight){
      room = 4;
    }
  }
}

function createpots(){
  // this function creates the arrray of pots, and sets two of them to be bought already
  for (let i =0; i < 6; i++){
    let pot = {
      hasplant: false,
      flowerColor: "",
      millisplanted: 0,
      plantState: "none",
      image: emptypotImg,
      bought: false,
    };
    pots.push(pot);

    if (i <2 ){
      pots[i].bought = true;
    }
  }
}

function update_pots(){
  // this function checks each pot to see what image should be displaying, and if the flower is done growing
  for (let i = 0; i < 6; i++){
    // checks if the pot has been bought
    if (pots[i].bought === false){
      pots[i].image = unboughtPot;
    }

    // checks if the pot is empty
    else if (pots[i].bought === true && pots[i].hasplant === false){
      pots[i].image = emptypotImg;
    }

    // checks if it has a flower
    else {
      if (pots[i].hasplant === true){

        // checks what state the flower should be depending on the time since it was planted, and selects the image thats the right color
        // plant has grown
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

        // plant was planted more then 30 seconds ago
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

        // plant was planted more then 20 seconds ago but not 30, so its a bud
        else if (millis() - pots[i].millisplanted > 20000){
          pots[i].plantState = "bud";
          pots[i].image = budImg;
        }

        // plant was planted less then 10 seconds ago, so its a sprout
        else if (millis() - pots[i].millisplanted > 10000){
          pots[i].plantState = "sprout";
          pots[i].image = sproutImg;
          
        }
      }
    }
  }
}

function add_flower(color){
  // this function "buys" the flowers, and changes the variable that keeps track of how many flowers you have
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
  // this flower removes a flower from the stored amount of flowers
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
  // this function picks the flowers, adding them to the inventory and emptying the pot
  // adds three flowers to the inventory
  for (let i = 0; i< 3; i++){
    add_flower(color);
  }

  // resets the pots
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
  // this function creates the empty arraingment
  arrangement = [];
}

function is_liked_or_disliked(color, flowerArray){
  // this function checks if the flower color is liked or unliked from the order
  for (let i = 0; i < flowerArray.length; i++){
    if (color === flowerArray[i]){
      return true;
    }
  }
  return false;
}

function sell_arrangement(){
  // this function sells the arraingment
  // sets the variables used
  let value = 0;
  let liked = 0;
  let disliked = 0;
  let neither = 0;

  //iterates throught each flower in the vase, and checks if its liked, unliked, or neither
  for (let i = 0; i < arrangement.length; i++){
    if (currentOrder.has("likedColors") && is_liked_or_disliked(arrangement[i], currentOrder.get("likedColors")) === true){
      liked += 2;
    } 

    else if (currentOrder.has("dislikedColors") && is_liked_or_disliked(arrangement[i], currentOrder.get("dislikedColors")) === true){
      disliked ++;
    }

    else{
      neither ++;
    }
  }
  
  // calculates the value, without the disliked flowers
  value = neither + liked - disliked;

  // subtracts one from the value for every disliked flowers, as long as the value isnt already 0
  for (let i = disliked; i < 0; i++){
    if (value > 0){
      value --;
    }
  }

  // adds the value to the money, then resets the arraingment and the order
  money += value;
  create_vase();
  currentOrder = "";
}

function display_vase(x, y, w, h, y2, w2, h2){  
  // displays the arraignment

  // 5th flower
  if (arrangement.length > 4){
    if (arrangement[4] === "red"){
      image(redinVase5, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[4] === "white"){
      image(whiteinVase5, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[4] === "pink"){
      image(pinkinVase5, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if ( arrangement[4] === "blue"){
      image(blueinVase5, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[4] === "orange"){
      image(orangeinVase5, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[4] === "purple"){
      image(purpleinVase5, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }
  }

  // 4th flower
  if (arrangement.length > 3){
    if (arrangement[3] === "red"){
      image(redinVase4, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[3] === "white"){
      image(whiteinVase4, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[3] === "pink"){
      image(pinkinVase4, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if ( arrangement[3] === "blue"){
      image(blueinVase4, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[3] === "orange"){
      image(orangeinVase4, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[3] === "purple"){
      image(purpleinVase4, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

  }

  // 3rd flower
  if (arrangement.length > 2){
    if (arrangement[2] === "red"){
      image(redinVase3, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[2] === "white"){
      image(whiteinVase3, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[2] === "pink"){
      image(pinkinVase3, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if ( arrangement[2] === "blue"){
      image(blueinVase3, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[2] === "orange"){
      image(orangeinVase3, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[2] === "purple"){
      image(purpleinVase3, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }
  }

  // 2nd flower
  if (arrangement.length > 1){
    if (arrangement[1] === "red"){
      image(redinVase2, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[1] === "white"){
      image(whiteinVase2, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[1] === "pink"){
      image(pinkinVase2, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if ( arrangement[1] === "blue"){
      image(blueinVase2, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[1] === "orange"){
      image(orangeinVase2, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[1] === "purple"){
      image(purpleinVase2, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }
  }

  // 1st flower
  if (arrangement.length > 0){
    if (arrangement[0] === "red"){
      image(redinVase1, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[0] === "white"){
      image(whiteinVase1, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[0] === "pink"){
      image(pinkinVase1, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if ( arrangement[0] === "blue"){
      image(blueinVase1, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[0] === "orange"){
      image(orangeinVase1, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[0] === "purple"){
      image(purpleinVase1, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }
  }

  //empty vase
  else{
    image(emptyVase, backgroundWidth*(x/1500) + border, backgroundHeight*(y2/1000), backgroundWidth*(w2/1500), backgroundHeight*(h2/1000));
  }
}


// function display_vase(x, y, w, h,){  
//   if (arrangement.length > 4){
//     if (arrangement[4] === redFlower){
//       image(redinVase5, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[4] === whiteFlower){
//       image(whiteinVase5, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[4] === pinkFlower){
//       image(pinkinVase5, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if ( arrangement[4] === blueFlower){
//       image(blueinVase5, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[4] === orangeflower){
//       image(orangeinVase5, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[4] === purpleFlower){
//       image(purpleinVase5, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//   }
//   if (arrangement.length > 3){
//     if (arrangement[3] === redFlower){
//       image(redinVase4, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[3] === whiteFlower){
//       image(whiteinVase4, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[3] === pinkFlower){
//       image(pinkinVase4, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if ( arrangement[3] === blueFlower){
//       image(blueinVase4, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[3] === orangeflower){
//       image(orangeinVase4, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[3] === purpleFlower){
//       image(purpleinVase4, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//   }
//   if (arrangement.length > 2){
//     if (arrangement[2] === redFlower){
//       image(redinVase3, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[2] === whiteFlower){
//       image(whiteinVase3, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[2] === pinkFlower){
//       image(pinkinVase3, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if ( arrangement[2] === blueFlower){
//       image(blueinVase3, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[2] === orangeflower){
//       image(orangeinVase3, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[2] === purpleFlower){
//       image(purpleinVase3, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//   }
//   if (arrangement.length > 1){
//     if (arrangement[1] === redFlower){
//       image(redinVase2, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[1] === whiteFlower){
//       image(whiteinVase2, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[1] === pinkFlower){
//       image(pinkinVase2, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if ( arrangement[1] === blueFlower){
//       image(blueinVase2, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[1] === orangeflower){
//       image(orangeinVase2, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[1] === purpleFlower){
//       image(purpleinVase2, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//   }
//   if (arrangement.length > 0){
//     if (arrangement[0] === redFlower){
//       image(redinVase1, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[0] === whiteFlower){
//       image(whiteinVase1, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[0] === pinkFlower){
//       image(pinkinVase1, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if ( arrangement[0] === blueFlower){
//       image(blueinVase1, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[0] === orangeflower){
//       image(orangeinVase1, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//     else if (arrangement[0] === purpleFlower){
//       image(purpleinVase1, backgroundWidth*(623/1500) + border, backgroundHeight*(443/1000), backgroundWidth*(400/1500), backgroundHeight*(600/1000));
//     }
//   }
//   else{
//     image(emptyVase, backgroundWidth*(5/12) + border, backgroundHeight*(3/5), backgroundWidth*(197/1500), backgroundHeight*(277/1000));

//   }

  
// }


function grab_flower(flowerimage){
  // displays the flower being dragged
  image(flowerimage, mouseX, mouseY, backgroundWidth*(17/250), backgroundHeight*(167/1000));
}

function drag_flower(){
  // if there is a flower being dragged, this function checks that the mouse is still pressed, and if its not, it puts it in the arraingment if the mouse is over the vase
  if (flowerbeingdragged !== "none"){
    if (mouseIsPressed){
      grab_flower(flowerbeingdragged);
    }

    else {
      //mouse over vase
      if (mouseX > backgroundWidth*(536/1500) + border && mouseX < backgroundWidth*(724/1500) + border && mouseY > backgroundHeight*(465/1000) && mouseY < backgroundHeight*(736/1000)){
        add_to_arrangement(flowerbeingdragged);
        
        use_flower(flowerbeingdragged);
        flowerbeingdragged = "none";
      }

      //mouse not over vase
      else{
        flowerbeingdragged = "none";
      }
    }
  }
  
}

function add_to_arrangement(color){
  // adds the flower to the arraingment
  if (color === redFlower){
    arrangement.push("red");
  }

  else if (color === blueFlower){
    arrangement.push("blue");
  }

  else if (color === purpleFlower){
    arrangement.push("purple");
  }

  else if (color === pinkFlower){
    arrangement.push("pink");
  }

  else if (color === whiteFlower){
    arrangement.push("white");
  }

  else if (color === orangeflower){
    arrangement.push("orange");
  }
}

function create_orders(){
  // creates the array of orders
  orders = [{text: ["I want to buy flowers for my wife. She ", "loves pink, but doesnt like blue."], likedColors: ["pink"], dislikedColors: ["blue"],}, {text: ["I need flowers for my mom. She doesnt like red."], likedColors: [], dislikedColors: ["red"],}, {text: ["i need blue flowers. Only blue"], likedColors: ["blue"], dislikedColors: ["white", "red", "purple", "pink", "orange"]}];
}

function pick_order(){
  // randomly picks an order from the order array to be the current order
  currentOrder = new Map();
  
  //picks a number
  let choice = Math.floor(random(orders.length));
  
  // sets the values of that order into the map
  currentOrder.set("text", orders[choice].text);
  
  if (orders[choice].likedColors.length > 0 ){
    currentOrder.set("likedColors", orders[choice].likedColors);
  }

  if (orders[choice].dislikedColors.length > 0){
    currentOrder.set("dislikedColors", orders[choice].dislikedColors);
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

  storeItem("money", money);
  storeItem("fertiziler", fertiziler);

  storeItem("seeds", seeds);
  let seedtypes = ["red", "pink", "orange", "blue", "purple", "white"];
  for (let i = 0; i < seedtypes.length; i++){
    storeItem(seedtypes[i], seeds.get(seedtypes[i]));
  }

  storeItem("pots", pots);

}

function windowResized() {
  //this function resized the canvas and the image when the window is resized
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
