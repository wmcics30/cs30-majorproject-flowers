// Flower shop game
// Faith
// june 19th, 2023
//
// Extra for Experts:
// I finished my nice to have list, and i was able to use local storage to save the game. 

// Display variables
let backgroundWidth;
let backgroundHeight;
let border;

// Inventory variables
let redFlowersHave = 0;
let pinkFlowersHave = 0;
let whiteFlowersHave = 0;
let blueFlowersHave = 0;
let orangeFlowerHave = 0;
let purpleFlowerHave = 0;

let money = 6;
let fertiziler = 0;
let seeds;

// gameplay variables
let pots = [];
let arrangement = [];
let orders = [];
let hasData = false;

let room = 0;
let oldRoom = 0;
let currentSeed = "";
let flowerBeingDragged = "none";
let currentOrder = "";

// backgrounds and other images
let greenhouse, arrangingRoom, startScreenNormal, startScreenhoverd, openJournal, shopBackground, settings, instructions;
let journal, storeBackground, storeSeedButton, storeBackButton, storeAmountDisplayBig, storeAmountDisplaySmall, basketIcon, coinIcon, shopTextbox, shopSellButton, storeButton, hoveredStorebutton, sellButton;
let greenhouseButton, hoveredGreenhouseButton, arrangingRoomButton, hoveredArrangingRoomButton, shopButton, hoveredShopButton, settingsButton, hoveredSettingButton,hoveredInstructionButton, notHoveredInstructionButton, settingsBackButton, settingsBackButtonHovered, settingsSaveButton, settingsResetButton, settingsSaveButtonHovered, settingsResetButtonHovered;
let emptyPotImg, plantedPotImg, budImg, sproutImg, unboughtPot, blueFlowerInPotImg, orangeFlowerInPotImg, pinkFlowerInPotImg, purpleFlowerInPotImg, redFlowerInPotimg, whiteFlowerInPotImg, blueFlower, orangeFlower, pinkFlower, purpleFlower, redFlower, whiteFlower, bigWhiteDisplay, smallWhiteDisplay;
let blueSeedPack, orangeSeedPack, pinkSeedPack, purpleSeedPack, redSeedPack, whiteSeedPack, fertilizerBag;

// flowers used to display the vase
let blueInVase1, blueInVase2, blueInVase3, blueInVase4, blueInVase5;
let orangeInVase1, orangeInVase2, orangeInVase3, orangeInVase4, orangeInVase5;
let pinkInVase1, pinkInVase2, pinkInVase3, pinkInVase4, pinkInVase5;
let purpleInVase1, purpleInVase2, purpleInVase3, purpleInVase4, purpleInVase5;
let redInVase1, redInVase2, redInVase3, redInVase4, redInVase5;
let whiteInVase1, whiteInVase2, whiteInVase3, whiteInVase4, whiteInVase5;
let emptyVase, shadow;

//sounds
let backgroundMusic;
let cashRegisterSound;
let plantingSound;
let clickSound;
let fertilizeSound;

function preload(){
  //all the images are loaded in the preload funtion

  //backgrounds
  greenhouse = loadImage("pictures/greenhouse.png");
  arrangingRoom = loadImage("pictures/arranging room.png");
  startScreenNormal = loadImage("pictures/startscreennothovered.png");
  startScreenhoverd = loadImage("pictures/startscreenhovered.png");
  openJournal = loadImage("pictures/openJournal.png");
  shopBackground = loadImage("pictures/Shopbackground.png");
  settings = loadImage("pictures/Settingsbackground.png");
  instructions = loadImage("pictures/instructions.png");

  //icons, buttons, and other
  greenhouseButton = loadImage("pictures/greenhousebutton.png");
  hoveredGreenhouseButton = loadImage("pictures/hoveredgreenhousebutton.png");
  arrangingRoomButton = loadImage("pictures/arrangingroombutton.png");
  hoveredArrangingRoomButton = loadImage("pictures/hoveredarrangingroombutton.png");
  shopButton = loadImage("pictures/shopbuttonunhovered.png");
  hoveredShopButton = loadImage("pictures/shopbuttonhovered.png");
  settingsButton = loadImage("pictures/settingsbuttonnormal.png");
  hoveredSettingButton = loadImage("pictures/settingsbuttonhovered.png");
  hoveredInstructionButton = loadImage("pictures/hoveredInstructionbutton.png");
  notHoveredInstructionButton = loadImage("pictures/notHoveredInstructionbutton.png");
  journal = loadImage("pictures/journal.png");
  shopTextbox = loadImage("pictures/shoptextblock.png");
  shopSellButton = loadImage("pictures/shopSellbutton.png");
  storeBackground = loadImage("pictures/StoreBackground.png");
  storeSeedButton = loadImage("pictures/StoreSeedbutton.png");
  storeBackButton = loadImage("pictures/StoreBackButton.png");
  storeAmountDisplayBig = loadImage("pictures/storeAmountdisplayBig.png");
  storeAmountDisplaySmall = loadImage("pictures/storeAmountdisplaySmall.png");
  bigWhiteDisplay = loadImage("pictures/displayBigWhite.png");
  smallWhiteDisplay = loadImage("pictures/displaySmallWhite.png");
  basketIcon = loadImage("pictures/Basket.png");
  coinIcon = loadImage("pictures/coins icon.png");
  sellButton = loadImage("pictures/Sellbutton.png");
  storeButton = loadImage("pictures/storeButtonunhovered.png");
  hoveredStorebutton = loadImage("pictures/storeButtonhovered.png");
  settingsBackButton = loadImage("pictures/settingsbackbuttonunhovered.png");
  settingsBackButtonHovered = loadImage("pictures/settingsbackbuttonhovered.png");
  settingsResetButton = loadImage("pictures/settingsrestartbuttonunhovered.png");
  settingsResetButtonHovered = loadImage("pictures/settingsrestartbuttonhovered.png");
  settingsSaveButton = loadImage("pictures/settingssavebuttonunhovered.png");
  settingsSaveButtonHovered = loadImage("pictures/settingssavebuttonhovered.png");

  // pot images
  emptyPotImg = loadImage("pictures/empty pot.png");
  plantedPotImg = loadImage("pictures/planted pot.png");
  budImg = loadImage("pictures/bud.png");
  sproutImg = loadImage("pictures/sprout.png");
  unboughtPot = loadImage("pictures/unbought pot.png");

  blueFlowerInPotImg = loadImage("pictures/blue flower in pot.png");
  orangeFlowerInPotImg = loadImage("pictures/orange flower in pot.png");
  pinkFlowerInPotImg = loadImage("pictures/pink flower in pot.png");
  purpleFlowerInPotImg = loadImage("pictures/purple flower in pot.png");
  redFlowerInPotimg = loadImage("pictures/red flower in pot.png");
  whiteFlowerInPotImg = loadImage("pictures/white flower in pot.png");

  //flower and seeds
  blueFlower = loadImage("pictures/blue flower.png");
  orangeFlower = loadImage("pictures/orange flower.png");
  pinkFlower = loadImage("pictures/pink flower.png");
  purpleFlower = loadImage("pictures/purple flower.png");
  redFlower = loadImage("pictures/red flower.png");
  whiteFlower = loadImage("pictures/white flower.png");

  blueSeedPack = loadImage("pictures/blueSeeds.png");
  orangeSeedPack = loadImage("pictures/orangeSeeds.png");
  pinkSeedPack = loadImage("pictures/pinkSeeds.png");
  purpleSeedPack = loadImage("pictures/purpleSeeds.png");
  redSeedPack = loadImage("pictures/redSeeds.png");
  whiteSeedPack = loadImage("pictures/whiteSeeds.png");
  fertilizerBag = loadImage("pictures/fertilizer.png");
  
  //vase images
  blueInVase1 = loadImage("pictures/vaseBlue1st.png");
  blueInVase2 = loadImage("pictures/vaseBlue2nd.png");
  blueInVase3 = loadImage("pictures/vaseBlue3rd.png");
  blueInVase4 = loadImage("pictures/vaseBlue4th.png");
  blueInVase5 = loadImage("pictures/vaseBlue5th.png");

  orangeInVase1 = loadImage("pictures/vaseOrange1st.png");
  orangeInVase2 = loadImage("pictures/vaseOrange2nd.png");
  orangeInVase3 = loadImage("pictures/vaseOrange3rd.png");
  orangeInVase4 = loadImage("pictures/vaseOrange4th.png");
  orangeInVase5 = loadImage("pictures/vaseOrange5th.png");

  pinkInVase1 = loadImage("pictures/vasePink1st.png");
  pinkInVase2 = loadImage("pictures/vasePink2nd.png");
  pinkInVase3 = loadImage("pictures/vasePink3rd.png");
  pinkInVase4 = loadImage("pictures/vasePink4th.png");
  pinkInVase5 = loadImage("pictures/vasePink5th.png");

  purpleInVase1 = loadImage("pictures/vasePurple1st.png");
  purpleInVase2 = loadImage("pictures/vasePurple2nd.png");
  purpleInVase3 = loadImage("pictures/vasePurple3rd.png");
  purpleInVase4 = loadImage("pictures/vasePurple4th.png");
  purpleInVase5 = loadImage("pictures/vasePurple5th.png");

  redInVase1 = loadImage("pictures/vaseRed1st.png");
  redInVase2 = loadImage("pictures/vaseRed2nd.png");
  redInVase3 = loadImage("pictures/vaseRed3rd.png");
  redInVase4 = loadImage("pictures/vaseRed4th.png");
  redInVase5 = loadImage("pictures/vaseRed5th.png");

  whiteInVase1 = loadImage("pictures/vaseWhite1st.png");
  whiteInVase2 = loadImage("pictures/vaseWhite2nd.png");
  whiteInVase3 = loadImage("pictures/vaseWhite3rd.png");
  whiteInVase4 = loadImage("pictures/vaseWhite4th.png");
  whiteInVase5 = loadImage("pictures/vaseWhite5th.png");

  emptyVase = loadImage("pictures/vase.png");
  shadow = loadImage("pictures/vaseshadow.png");

  //load the audiofiles
  backgroundMusic = loadSound("sounds/backgroundMusic.ogg");
  cashRegisterSound = loadSound("sounds/cashregisterSound.mp3");
  plantingSound = loadSound("sounds/plantedSound.mp3");
  clickSound = loadSound("sounds/clcikSound.mp3");
  fertilizeSound = loadSound("sounds/fertilizingsound.mp3");
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
  textSize(backgroundWidth*(30/1500));
  
  // create pots and seeds
  createpots();
  create_orders();

  seeds = new Map();
  set_seeds();

  backgroundMusic.setVolume(0.5);
  cashRegisterSound.setVolume(0.3);
  plantingSound.setVolume(0.3);
  clickSound.setVolume(0.3);
  fertilizeSound.setVolume(0.3);

  get_data();
}

function draw() {
  // the draw function displays a background over the whole canvas, then displays the right "room". The pots are updated here too
  background(200);
  update_pots();
  if (currentOrder === ""){
    pick_order();
  }

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
    display_shop();
  }

  else if (room === 5){
    display_journal();
  }

  else if (room === 6){
    display_settings();
  }
  else if (room === 7){
    display_instructions();
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
  push();
  fill(230, 227, 222);
  //Base store
  image(storeBackground, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  image(storeBackButton, backgroundWidth*(1300/1500)+border, backgroundHeight*(110/1000), backgroundWidth*(274/1500), backgroundHeight*(135/1000));
  image(storeSeedButton, backgroundWidth*(160/1500)+ border, backgroundHeight*(110/1000), backgroundWidth*(274/1500), backgroundHeight*(135/1000));

  // Seeds
  image(redSeedPack, backgroundWidth*(375/1500)+border, backgroundHeight*(400/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(pinkSeedPack, backgroundWidth*(375/1500)+border, backgroundHeight*(800/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(whiteSeedPack, backgroundWidth*(750/1500)+border, backgroundHeight*(400/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(blueSeedPack, backgroundWidth*(750/1500)+border, backgroundHeight*(800/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(purpleSeedPack, backgroundWidth*(1125/1500)+ border, backgroundHeight*(400/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
  image(orangeSeedPack, backgroundWidth*(1125/1500)+ border, backgroundHeight*(800/1000), backgroundWidth*(116/1500)*(3/2), backgroundHeight*(137/1000)*(3/2));
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
  pop();
}

function display_greenhouse(){
  // this function displays the greenhouse
  // display background, pots, and other base things
  image(greenhouse, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  draw_pots();
  display_seeds();
  diplaybuttons();
  image(fertilizerBag, backgroundWidth*(1335/1500) + border, backgroundHeight *(750/1000), backgroundWidth*(106/1500) , backgroundHeight*(130/1000));
  image(smallWhiteDisplay, backgroundWidth*(1335/1500) + border, backgroundHeight*(836/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));
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

  push();
  textSize(backgroundHeight*(25/1000));
  fill(230, 227, 222);
  image(storeAmountDisplaySmall, backgroundWidth*(92/1500)+ border, backgroundHeight*(180/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));
  image(coinIcon, backgroundWidth*(65/1500)+ border, backgroundHeight*(180/1000), backgroundWidth*(52/1500), backgroundHeight*(27/1000));
  text(str(money), backgroundWidth*(115/1500)+ border, backgroundHeight*(183/1000));
  pop();
}

function display_arraingingRoom(){
  // this function displays the arrainging room
  push();
  fill(230, 227, 222);
  image(arrangingRoom, backgroundWidth/2 +border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  diplaybuttons();
  display_vase(625, 443, 400, 600, 600, 197, 277);
  display_flowersAmount();

  // displays a flower if a flower is being dragged into the vase
  if (!flowerBeingDragged === "none"){
    if (mouseIsPressed){
      grab_flower(flowerBeingDragged);
    }
  }

  pop();
}

function display_shop(){
  // displays the shop
  image(shopBackground, backgroundWidth/2 + border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  image(shopTextbox, backgroundWidth*(400/1500) + border, backgroundHeight*(700/1000), backgroundWidth*(681/1500), backgroundHeight*(326/1000));
  image(shopSellButton, backgroundWidth*(1273/1500)+ border, backgroundHeight*(900/1000), backgroundWidth*(312/1500), backgroundHeight*(147/1000));
  diplaybuttons();

  // displays the order in the text box
  for (let i = 0; i < currentOrder.get("text").length; i++){
    let row = currentOrder.get("text")[i];
    text(row, backgroundWidth*(400/1500) + border, backgroundHeight*((650 + i * 30)/1000));
  }
  
  // displays the arraingment
  image(shadow, backgroundWidth*(920/1500)+ border, backgroundHeight*(740/1000), backgroundWidth*(110/1500), backgroundHeight*(37/1000));
  display_vase(925, 600, 200, 300, 679, 99, 139);
  display_price();

  push();
  image(bigWhiteDisplay, backgroundWidth*(100/1500)+ border, backgroundHeight*(50/1000), backgroundWidth*(162/1500), backgroundHeight*(43/1000));
  image(coinIcon, backgroundWidth*(70/1500)+border, backgroundHeight*(50/1000), backgroundWidth*(70/1500), backgroundHeight*(37/1000));
  fill(167, 126, 181);
  text(str(money), backgroundWidth*(125/1500)+ border, backgroundHeight*(52/1000));

  pop();
}

function display_journal(){
  //this function displays the journal
  display_greenhouse();

  image(openJournal, backgroundWidth/2 + border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  image(storeBackButton, backgroundWidth*(1300/1500)+border, backgroundHeight*(932.5/1000), backgroundWidth*(274/1500), backgroundHeight*(135/1000));
}

function display_settings(){
  // this function displays the setting background, and all three buttons. if the mouse is over any of the button, it displays the hovered version
  image(settings, backgroundWidth/2 + border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  
  //hovered backbutton
  if (mouseX > backgroundWidth*(350/1500)+border && mouseX < backgroundWidth*(1150/1500)+ border && mouseY > backgroundHeight*(717/1000) && mouseY < backgroundHeight*(883/1000)){
    image(settingsResetButton, backgroundWidth/2 + border, backgroundHeight*(610/1000), backgroundWidth*(802/1500), backgroundHeight*(117/1000));
    image(settingsSaveButton, backgroundWidth/2 + border, backgroundHeight*(450/1000), backgroundWidth*(802/1500), backgroundHeight*(117/1000));
    image(settingsBackButtonHovered, backgroundWidth/2 + border, backgroundHeight*(800/1000), backgroundWidth*(800/1500), backgroundHeight*(166/1000));
  }

  //hovered reset button
  else if(mouseX > backgroundWidth*(349/1500)+border && mouseX < backgroundWidth*(1151/1500)+ border && mouseY > backgroundHeight*(552/1000) && mouseY < backgroundHeight*(669/1000)){
    image(settingsBackButton, backgroundWidth/2 + border, backgroundHeight*(800/1000), backgroundWidth*(800/1500), backgroundHeight*(166/1000));
    image(settingsResetButtonHovered, backgroundWidth/2 + border, backgroundHeight*(610/1000), backgroundWidth*(802/1500), backgroundHeight*(117/1000));
    image(settingsSaveButton, backgroundWidth/2 + border, backgroundHeight*(450/1000), backgroundWidth*(802/1500), backgroundHeight*(117/1000));
  }

  //hovered save button
  else if (mouseX > backgroundWidth*(349/1500)+border && mouseX < backgroundWidth*(1151/1500)+ border && mouseY > backgroundHeight*(392/1000) && mouseY < backgroundHeight*(509/1000)){
    image(settingsBackButton, backgroundWidth/2 + border, backgroundHeight*(800/1000), backgroundWidth*(800/1500), backgroundHeight*(166/1000));
    image(settingsResetButton, backgroundWidth/2 + border, backgroundHeight*(610/1000), backgroundWidth*(802/1500), backgroundHeight*(117/1000));
    image(settingsSaveButtonHovered, backgroundWidth/2 + border, backgroundHeight*(450/1000), backgroundWidth*(802/1500), backgroundHeight*(117/1000));
  }

  //no hovered buttons
  else{
    image(settingsBackButton, backgroundWidth/2 + border, backgroundHeight*(800/1000), backgroundWidth*(800/1500), backgroundHeight*(166/1000));
    image(settingsResetButton, backgroundWidth/2 + border, backgroundHeight*(610/1000), backgroundWidth*(802/1500), backgroundHeight*(117/1000));
    image(settingsSaveButton, backgroundWidth/2 + border, backgroundHeight*(450/1000), backgroundWidth*(802/1500), backgroundHeight*(117/1000));
  }
}

function display_instructions(){
  image(instructions, backgroundWidth/2 + border, backgroundHeight/2, backgroundWidth, backgroundHeight);
  diplaybuttons();
}

function diplaybuttons(){
  // this function displays the buttons to get to the diffrent rooms, and displays the hovered version if the mouse is hovering over it
  // hovering over greenhouse
  if (mouseX > backgroundWidth*(1/125) + border && mouseX < backgroundWidth*(17/150)+border && mouseY > backgroundHeight*(171/200) && mouseY < backgroundHeight){
    image(hoveredGreenhouseButton, backgroundWidth*(100/1500)+ border, backgroundHeight*(189/200), backgroundWidth*(157/1500), backgroundHeight*(111/1000));
    image(arrangingRoomButton, backgroundWidth*(275/1500) + border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(shopButton, backgroundWidth*(450/1500) +border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(notHoveredInstructionButton, backgroundWidth*(800/1500)+ border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(settingsButton, backgroundWidth*(625/1500)+ border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
  }

  // hovering over arrainging room
  else if (mouseX > backgroundWidth*(2/15)+border && mouseX < backgroundWidth*(7/30) + border && mouseY > backgroundHeight*(9/10) && mouseY < backgroundHeight){
    image(hoveredArrangingRoomButton, backgroundWidth*(11/60)+ border, backgroundHeight*(189/200), backgroundWidth*(157/1500), backgroundHeight*(111/1000));
    image(greenhouseButton, backgroundWidth*(1/15) + border ,backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(notHoveredInstructionButton, backgroundWidth*(800/1500)+ border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(shopButton, backgroundWidth*(450/1500) +border, backgroundHeight*(24/25), backgroundWidth*(159/1500), backgroundHeight*(81/1000));
    image(settingsButton, backgroundWidth*(625/1500)+ border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
  }

  // hovering over the shop
  else if (mouseX > backgroundWidth*(371/1500)+ border && mouseX < backgroundWidth*(530/1500)+ border && mouseY >  backgroundHeight*(171/200) && mouseY < backgroundHeight){
    image(arrangingRoomButton, backgroundWidth*(275/1500) + border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(notHoveredInstructionButton, backgroundWidth*(800/1500)+ border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(greenhouseButton, backgroundWidth*(1/15) + border ,backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(hoveredShopButton, backgroundWidth*(450/1500) + border,backgroundHeight*(189/200), backgroundWidth*(157/1500), backgroundHeight*(111/1000));
    image(settingsButton, backgroundWidth*(625/1500)+ border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
  }

  //hovering over settings
  else if (mouseX > backgroundWidth*(546/1500)+ border && mouseX < backgroundWidth*(705/1500)+ border && mouseY >  backgroundHeight*(171/200) && mouseY < backgroundHeight){
    image(notHoveredInstructionButton, backgroundWidth*(800/1500)+ border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(greenhouseButton, backgroundWidth*(1/15)+ border ,backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(arrangingRoomButton, backgroundWidth*(11/60)+border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(shopButton, backgroundWidth*(450/1500) +border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(hoveredSettingButton, backgroundWidth*(625/1500)+border, backgroundHeight*(189/200),backgroundWidth*(157/1500), backgroundHeight*(111/1000));
  }
  
  //hovering over instructions
  else if(mouseX > backgroundWidth*(722/1500)+ border && mouseX < backgroundWidth*(879/1500)+ border && mouseY >  backgroundHeight*(171/200) && mouseY < backgroundHeight){
    image(hoveredInstructionButton, backgroundWidth*(800/1500)+ border, backgroundHeight*(189/200), backgroundWidth*(157/1500), backgroundHeight*(111/1000));
    image(greenhouseButton, backgroundWidth*(1/15)+ border ,backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(arrangingRoomButton, backgroundWidth*(11/60)+border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(shopButton, backgroundWidth*(450/1500) +border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(settingsButton, backgroundWidth*(625/1500)+ border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
  }
  //not hovering over any
  else{
    image(notHoveredInstructionButton, backgroundWidth*(800/1500)+ border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(greenhouseButton, backgroundWidth*(1/15)+ border ,backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(arrangingRoomButton, backgroundWidth*(11/60)+border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(shopButton, backgroundWidth*(450/1500) +border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
    image(settingsButton, backgroundWidth*(625/1500)+ border, backgroundHeight*(24/25), backgroundWidth*(53/500), backgroundHeight*(81/1000));
  }
}

function display_seeds(){
  // this function displays the seeds and the square for the amounts to be displayed on
  
  image(redSeedPack, backgroundWidth*(1260/1500)+border, backgroundHeight*(215/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(smallWhiteDisplay, backgroundWidth*(1260/1500) + border, backgroundHeight*(301/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));
  
  image(pinkSeedPack, backgroundWidth*(1410/1500)+border, backgroundHeight*(215/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(smallWhiteDisplay, backgroundWidth*(1410/1500) + border, backgroundHeight*(301/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));

  image(whiteSeedPack, backgroundWidth*(1260/1500)+border, backgroundHeight*(400/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(smallWhiteDisplay, backgroundWidth*(1260/1500) + border, backgroundHeight*(486/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));
  
  image(blueSeedPack, backgroundWidth*(1410/1500)+border, backgroundHeight*(400/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(smallWhiteDisplay, backgroundWidth*(1410/1500) + border, backgroundHeight*(486/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));

  image(purpleSeedPack, backgroundWidth*(1260/1500)+ border, backgroundHeight*(585/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(smallWhiteDisplay, backgroundWidth*(1260/1500) + border, backgroundHeight*(671/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));
  
  image(orangeSeedPack, backgroundWidth*(1410/1500)+ border, backgroundHeight*(585/1000), backgroundWidth*(116/1500), backgroundHeight*(137/1000));
  image(smallWhiteDisplay, backgroundWidth*(1410/1500) + border, backgroundHeight*(671/1000), backgroundWidth*(128/1500), backgroundHeight*(35/1000));

}

function display_seed_amouts_greenhouse(){
  // this function displays the amount of seeds in the inventory in the greenhouse
  push();
  fill(198, 136, 178);
  textSize(backgroundWidth*(30/1500));

  let amountOfRed = str(seeds.get("red"));
  text(amountOfRed, backgroundWidth*(1260/1500) + border, backgroundHeight*(303/1000));
  
  let amountOfPink = str(seeds.get("pink"));
  text(amountOfPink, backgroundWidth*(1410/1500) + border, backgroundHeight*(303/1000));
  
  let amountOfWhite = str(seeds.get("white"));
  text(amountOfWhite, backgroundWidth*(1260/1500) + border, backgroundHeight*(488/1000));
  
  let amountOfBlue = str(seeds.get("blue"));
  text(amountOfBlue, backgroundWidth*(1410/1500) + border, backgroundHeight*(488/1000));
  
  let amountOfPurple = str(seeds.get("purple"));
  text(amountOfPurple, backgroundWidth*(1260/1500) + border, backgroundHeight*(673/1000));

  let amountOfOrange = str(seeds.get("orange"));
  text(amountOfOrange, backgroundWidth*(1410/1500) + border, backgroundHeight*(673/1000));

  let amountOfFertilizer = str(fertiziler);
  text(amountOfFertilizer, backgroundWidth*(1335/1500) + border, backgroundHeight*(838/1000));
  pop();
}

function display_price(){
  // calculates the value of the arraignment and displays it in the cash register
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
  
  // displays
  fill("white");
  text(str(value), backgroundWidth*(1320/1500)+border, backgroundHeight*(558/1000));
  fill("black");
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

  text(str(redFlowersHave), backgroundWidth*(1418/1500)+ border, backgroundHeight*(910/1000));
  text(str(whiteFlowersHave), backgroundWidth*(1276/1500)+ border, backgroundHeight*(910/1000));
  text(str(orangeFlowerHave), backgroundWidth*(1282/1500) + border, backgroundHeight*(639/1000));
  text(str(blueFlowersHave), backgroundWidth*(1427/1500) + border, backgroundHeight*(639/1000));
  text(str(purpleFlowerHave), backgroundWidth*(1256/1500)+ border, backgroundHeight*(395/1000));
  text(str(pinkFlowersHave), backgroundWidth*(1424/1500)+ border, backgroundHeight*(395/1000));
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
  
  plantingSound.play();

  if (pot === "one"){
    if (pots[0].hasplant === false && seedtype !== ""){
      pots[0].hasplant = true;
      pots[0].plantState = "dirt";
      pots[0].millisplanted = millis();
      pots[0].flowerColor = seedtype;
      pots[0].image = plantedPotImg;
    }
  }

  if (pot === "two"){
    if (pots[1].hasplant === false && seedtype !== ""){
      pots[1].hasplant = true;
      pots[1].plantState = "dirt";
      pots[1].millisplanted = millis();
      pots[1].flowerColor = seedtype;
      pots[1].image = plantedPotImg;
    }
  }

  if (pot === "three"){
    if (pots[2].hasplant === false && seedtype !== ""){
      pots[2].hasplant = true;
      pots[2].plantState = "dirt";
      pots[2].millisplanted = millis();
      pots[2].flowerColor = seedtype;
      pots[2].image = plantedPotImg;
    }
  }

  if (pot === "four"){
    if (pots[3].hasplant === false && seedtype !== ""){
      pots[3].hasplant = true;
      pots[3].plantState = "dirt";
      pots[3].millisplanted = millis();
      pots[3].flowerColor = seedtype;
      pots[3].image = plantedPotImg;
    }
  }

  if (pot === "five"){
    if (pots[4].hasplant === false && seedtype !== ""){
      pots[4].hasplant = true;
      pots[4].plantState = "dirt";
      pots[4].millisplanted = millis();
      pots[4].flowerColor = seedtype;
      pots[4].image = plantedPotImg;
    }
  }

  if (pot === "six"){
    if (pots[5].hasplant === false && seedtype !== ""){
      pots[5].hasplant = true;
      pots[5].plantState = "dirt";
      pots[5].millisplanted = millis();
      pots[5].flowerColor = seedtype;
      pots[5].image = plantedPotImg;
    }
  }
}

function fertilize_plant(pot){
  // this function fertilizes the plant in whichever pot was clicked
  fertilizeSound.play();
  if (pots[pot].plantState !== "done"){
    pots[pot].plantState = "done";
    fertiziler --;
  }
}

function mousePressed(){
  // this function does what needs to be done based on where the mouse was pressed, and which "room" it is

  if (!backgroundMusic.isPlaying()){
    backgroundMusic.setVolume(0.5);
    backgroundMusic.play();
    backgroundMusic.setLoop(true);
  }

  // Startscreen
  if (room === 0){
    // changes the room when the start button is clicked
    if (mouseX > backgroundWidth*(2/15)+ border && mouseX < backgroundWidth*(13/15)+ border && mouseY > backgroundHeight*(131/200) && mouseY < backgroundHeight*(37/40)){
      clickSound.play();
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

      else if (pots[0].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0 && pots[0].plantState !== "done"){
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

      else if (pots[1].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0 && pots[1].plantState !== "done"){
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

      else if (pots[2].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0 && pots[2].plantState !== "done"){
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

      else if (pots[3].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0 && pots[3].plantState !== "done"){
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

      else if (pots[4].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0 && pots[4].plantState !== "done" ){
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

      else if (pots[5].hasplant === true && currentSeed === "fertilizer" && fertiziler > 0 && pots[5].plantState !== "done"){
        fertilize_plant(5);
      }

      else if (pots[5].hasplant === true && pots[5].plantState === "done"){
        pick_flower(pot, pots[5].flowerColor);
      }
    }


    // this changed the current seed if a seedtype is clicked
    if (mouseX > backgroundWidth*(1202/1500) + border && mouseX < backgroundWidth*(1318/1500)+ border && mouseY > backgroundHeight*(147/1000) && mouseY < backgroundHeight*(284/1000)){
      clickSound.play();
      currentSeed = "red";
    }

    else if (mouseX > backgroundWidth*(1352/1500) + border && mouseX < backgroundWidth*(1468/1500) + border && mouseY > backgroundHeight*(147/1000) && mouseY < backgroundHeight*(284/1000)){
      clickSound.play();
      currentSeed = "pink";
    }

    else if (mouseX > backgroundWidth*(1202/1500) + border && mouseX < backgroundWidth*(1318/1500)+ border && mouseY > backgroundHeight*(332/1000) && mouseY < backgroundHeight*(469/1000)){
      clickSound.play();
      currentSeed = "white";
    }

    else if (mouseX >  backgroundWidth*(1352/1500) + border && mouseX < backgroundWidth*(1468/1500) + border && mouseY > backgroundHeight*(332/1000) && mouseY < backgroundHeight*(469/1000)){
      clickSound.play();
      currentSeed = "blue";
    }

    else if (mouseX > backgroundWidth*(1202/1500) + border && mouseX < backgroundWidth*(1318/1500)+ border && mouseY > backgroundHeight*(517/1000) && mouseY < backgroundHeight*(654/1000)){
      clickSound.play();
      currentSeed = "purple";
    }

    else if (mouseX >  backgroundWidth*(1352/1500) + border && mouseX < backgroundWidth*(1468/1500) + border && mouseY > backgroundHeight*(517/1000) && mouseY < backgroundHeight*(654/1000)){
      clickSound.play();
      currentSeed = "orange";
    }

    else if (mouseX > backgroundWidth*(1282/1500)+ border && mouseX < backgroundWidth*(1388/1500)+border && mouseY > backgroundHeight*(668/1000) && mouseY < backgroundHeight*(798/1000)){
      clickSound.play();
      currentSeed = "fertilizer";
    }
    
    // this changed the room if the store button or journal is pressed
    if (mouseX > backgroundWidth*(1227/1500) + border && mouseX < backgroundWidth*(1443/1500) + border && mouseY > backgroundHeight*(859/1000) && mouseY < backgroundHeight*(982/1000)){
      //store
      clickSound.play();
      room = 3;
    }

    if (mouseX > backgroundWidth*(32/1500) + border && mouseX < backgroundWidth*(149/1500) + border && mouseY > backgroundHeight*(18/1000) && mouseY < backgroundHeight*(162/1000)){
      // journal
      clickSound.play();
      room = 5;
    }
  }

  // arrainging room
  else if (room === 2){
    //starts dragging a flower when it is clicked

    if (mouseX > backgroundWidth*(1207/1500) + border && mouseX < backgroundWidth*(1305/1500) + border && mouseY > backgroundHeight*(210/1000) && mouseY < backgroundHeight*(378/1000) && purpleFlowerHave > 0){
      flowerBeingDragged = purpleFlower;
    }

    else if (mouseX > backgroundWidth*(1235/1500) + border && mouseX < backgroundWidth*(1332/1500) + border && mouseY > backgroundHeight*(458/1000) && mouseY< backgroundHeight*(620/1000) && orangeFlowerHave > 0){
      flowerBeingDragged = orangeFlower;
    }

    else if (mouseX > backgroundWidth*(1230/1500) + border && mouseX < backgroundWidth*(1325/1500) + border && mouseY > backgroundHeight*(721/1000) && mouseY< backgroundHeight*(890/1000) && whiteFlowersHave > 0){
      flowerBeingDragged = whiteFlower;
    }

    else if (mouseX > backgroundWidth*(1373/1500) + border && mouseX < backgroundWidth*(1468/1500) + border && mouseY > backgroundHeight*(213/1000) && mouseY< backgroundHeight*(375/1000) && pinkFlowersHave > 0){
      flowerBeingDragged = pinkFlower;
    }

    else if (mouseX > backgroundWidth*(1384/1500) + border && mouseX < backgroundWidth*(1478/1500) + border && mouseY > backgroundHeight*(461/1000) && mouseY< backgroundHeight*(621/1000) && blueFlowersHave > 0){
      flowerBeingDragged = blueFlower;
    }

    else if (mouseX > backgroundWidth*(1370/1500) + border && mouseX < backgroundWidth*(1467/1500) + border && mouseY > backgroundHeight*(722/1000) && mouseY< backgroundHeight*(889/1000) && redFlowersHave > 0){
      flowerBeingDragged = redFlower;
    }
  }

  //store
  else if (room === 3){
    // adds seeds to the inventory if its clicked, and takes away from the money for each seed color
    if (mouseX > backgroundWidth*(288/1500)+border && mouseX < backgroundWidth*(462/1500) +border && mouseY > backgroundHeight*(279/1000) && mouseY < backgroundHeight*(503/1000) && money > 0){
      clickSound.play();
      seeds.set("red", seeds.get("red")+ 1);
      money --;
    }

    else if (mouseX > backgroundWidth*(288/1500)+border && mouseX < backgroundWidth*(462/1500) +border && mouseY > backgroundHeight*(679/1000) && mouseY < backgroundHeight*(903/1000)  && money > 0){
      clickSound.play();
      seeds.set("pink", seeds.get("pink")+ 1);
      money --;
    }

    else if (mouseX > backgroundWidth*(663/1500) + border && mouseX < backgroundWidth *(837/1500)+border && mouseY > backgroundHeight*(279/1000) && mouseY < backgroundHeight*(503/1000) && money > 0){
      clickSound.play();
      seeds.set("white", seeds.get("white")+ 1);
      money --;
    }

    else if (mouseX > backgroundWidth*(663/1500) + border && mouseX < backgroundWidth *(837/1500)+border && mouseY > backgroundHeight*(679/1000) && mouseY < backgroundHeight*(903/1000) && money > 0){
      clickSound.play();
      seeds.set("blue", seeds.get("blue")+ 1);
      money --;
    }

    else if (mouseX > backgroundWidth*(1038/1500) + border && mouseX < backgroundWidth *(1212/1500)+border && mouseY > backgroundHeight*(279/1000) && mouseY < backgroundHeight*(503/1000) && money > 0){
      clickSound.play();
      seeds.set("purple", seeds.get("purple")+ 1);
      money --;
    }

    else if (mouseX > backgroundWidth*(1038/1500) + border && mouseX < backgroundWidth*(1212/1500)+border && mouseY > backgroundHeight*(679/1000) && mouseY < backgroundHeight*(903/1000) && money > 1){
      clickSound.play();
      seeds.set("orange", seeds.get("orange")+ 1);
      money --;
    }

    // adds fertilizer to the inventory and takes away from money if the fertilizer is pressed
    else if (mouseX > backgroundWidth*(1375/1500) + border && mouseX < backgroundWidth*(1425/1500) +border && mouseY > backgroundHeight*(463/1000) && mouseY < backgroundHeight*(538/1000)  && money > 0){
      clickSound.play();
      fertiziler ++;
      money -= 2;
    }

    // changes the room back to the greenhouse when the back button is pressed
    else if (mouseX > backgroundWidth*(1163/1500) + border && mouseX < backgroundWidth*(1437/1500) + border && mouseY > backgroundHeight*(43/1000) && mouseY < backgroundHeight*(178/1000)){
      clickSound.play();
      room = 1;
    }
  }

  //shop
  else if (room === 4){
    //sells the arraingment if the sell button is pressed
    if (mouseX > backgroundWidth*(1117/1500)+ border&& mouseX < backgroundWidth*(1429/1500)+ border && mouseY > backgroundHeight*(827/1000) && mouseY < backgroundHeight*(974/1000) && arrangement.length > 0){
      sell_arrangement();
    }
  }

  // journal
  else if (room === 5){
    //closed the journal if the back button is pressed
    if (mouseX > backgroundWidth*(1163/1500)+ border&& mouseX < backgroundWidth*(1437/1500)+ border && mouseY > backgroundHeight*(865/1000) && mouseY < backgroundHeight){
      clickSound.play();
      room = 1;
    }
  }

  //settings
  else if (room === 6){
    // goes back to the room you went to the settings from
    if (mouseX > backgroundWidth*(350/1500)+border && mouseX < backgroundWidth*(1150/1500)+ border && mouseY > backgroundHeight*(717/1000) && mouseY < backgroundHeight*(883/1000)){
      clickSound.play();
      room = oldRoom;
      oldRoom = 0;
    }

    //reset button was click, clear storage and reset button
    else if(mouseX > backgroundWidth*(349/1500)+border && mouseX < backgroundWidth*(1151/1500)+ border && mouseY > backgroundHeight*(552/1000) && mouseY < backgroundHeight*(669/1000)){
      clickSound.play();
      clearStorage();
      resetGame();
    }

    // saved button was clicked, save the game
    else if (mouseX > backgroundWidth*(349/1500)+border && mouseX < backgroundWidth*(1151/1500)+ border && mouseY > backgroundHeight*(392/1000) && mouseY < backgroundHeight*(509/1000)){
      clickSound.play();
      save_data();
    }
  }

  // Changes the room using the buttons at the bottom, in the rooms they are in
  if (room === 1 || room === 2 || room === 4 || room === 7){
    //greenhouse
    if (mouseX > backgroundWidth*(1/125) + border && mouseX < backgroundWidth*(17/150)+border && mouseY > backgroundHeight*(171/200) && mouseY < backgroundHeight){
      clickSound.play();
      room = 1;
    }

    //arrainging room
    else if (mouseX > backgroundWidth*(2/15)+border && mouseX < backgroundWidth*(7/30) + border && mouseY > backgroundHeight*(9/10) && mouseY < backgroundHeight){
      clickSound.play();
      room = 2;
    }

    //shop
    else if (mouseX > backgroundWidth*(371/1500)+ border && mouseX < backgroundWidth*(530/1500)+ border && mouseY >  backgroundHeight*(171/200) && mouseY < backgroundHeight){
      clickSound.play();
      room = 4;
    }

    //settings
    else if (mouseX > backgroundWidth*(546/1500)+ border && mouseX < backgroundWidth*(705/1500)+ border && mouseY >  backgroundHeight*(171/200) && mouseY < backgroundHeight){
      clickSound.play();
      oldRoom = room;
      room = 6;
    }
    // instructions
    else if (mouseX > backgroundWidth*(722/1500)+ border && mouseX < backgroundWidth*(879/1500)+ border && mouseY >  backgroundHeight*(171/200) && mouseY < backgroundHeight){
      clickSound.play();
      room = 7;
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
      image: emptyPotImg,
      bought: false,
      oldmillis : 0,
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
      pots[i].image = emptyPotImg;
    }

    // checks if it has a flower
    else {
      if (pots[i].hasplant === true){

        // checks what state the flower should be depending on the time since it was planted, and selects the image thats the right color
        // plant has grown
        if (pots[i].plantState === "done"){
          if (pots[i].flowerColor === "white"){
            pots[i].image = whiteFlowerInPotImg;
          }
          else if (pots[i].flowerColor === "pink"){
            pots[i].image = pinkFlowerInPotImg;
          }
          else if (pots[i].flowerColor === "blue"){
            pots[i].image = blueFlowerInPotImg;
          }
          else if (pots[i].flowerColor === "orange"){
            pots[i].image = orangeFlowerInPotImg;
          }
          else if (pots[i].flowerColor === "purple"){
            pots[i].image = purpleFlowerInPotImg;
          }
          else if (pots[i].flowerColor === "red"){
            pots[i].image = redFlowerInPotimg;
          }
        }

        // plant was planted more then 30 seconds ago
        else if (millis() - pots[i].millisplanted + pots[i].oldmillis > 30000){
          pots[i].plantState = "done";
          if (pots[i].flowerColor === "white"){
            pots[i].image = whiteFlowerInPotImg;
          }
          else if (pots[i].flowerColor === "pink"){
            pots[i].image = pinkFlowerInPotImg;
          }
          else if (pots[i].flowerColor === "blue"){
            pots[i].image = blueFlowerInPotImg;
          }
          else if (pots[i].flowerColor === "orange"){
            pots[i].image = orangeFlowerInPotImg;
          }
          else if (pots[i].flowerColor === "purple"){
            pots[i].image = purpleFlowerInPotImg;
          }
          else if (pots[i].flowerColor === "red"){
            pots[i].image = redFlowerInPotimg;
          }
        }

        // plant was planted more then 20 seconds ago but not 30, so its a bud
        else if (millis() - pots[i].millisplanted + pots[i].oldmillis > 20000){
          pots[i].plantState = "bud";
          pots[i].image = budImg;
        }

        // plant was planted less then 10 seconds ago, so its a sprout
        else if (millis() - pots[i].millisplanted + pots[i].oldmillis> 10000){
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
    whiteFlowersHave ++;
  }

  else if (color === "red"){
    redFlowersHave ++;
  }

  else if (color === "pink"){
    pinkFlowersHave ++;
  }

  else if (color === "blue"){
    blueFlowersHave ++;
  }

  else if (color === "orange"){
    orangeFlowerHave ++;
  }

  else if (color === "purple"){
    purpleFlowerHave ++;
  }
}

function use_flower(color){
  // this flower removes a flower from the stored amount of flowers
  if (color === whiteFlower){
    whiteFlowersHave -= 1;
  }

  else if (color === redFlower){
    redFlowersHave -= 1;
  }

  else if (color === pinkFlower){
    pinkFlowersHave -= 1;
  }

  else if (color === blueFlower){
    blueFlowersHave -= 1;
  }

  else if (color === orangeFlower){
    orangeFlowerHave -= 1;
  }

  else if (color === purpleFlower){
    purpleFlowerHave -= 1;
  }
}

function pick_flower(pot, color){
  // this function picks the flowers, adding them to the inventory and emptying the pot
  // adds three flowers to the inventory
  fertilizeSound.play();
  for (let i = 0; i< 3; i++){
    add_flower(color);
  }

  // resets the pots
  if (pot === "one"){
    pots[0].hasplant = false;
    pots[0].plantState = "none";
    pots[0].flowerColor = "";
    pots[0].millisplanted = 0;
    pots[0].image = emptyPotImg;
    pots[0].oldmillis = 0;
  }

  else if (pot === "two"){
    pots[1].hasplant = false;
    pots[1].plantState = "none";
    pots[1].flowerColor = "";
    pots[1].millisplanted = 0;
    pots[1].image = emptyPotImg;
    pots[1].oldmillis = 0;
  }

  else if (pot === "three"){
    pots[2].hasplant = false;
    pots[2].plantState = "none";
    pots[2].flowerColor = "";
    pots[2].millisplanted = 0;
    pots[2].image = emptyPotImg;
    pots[2].oldmillis = 0;
  }

  else if (pot === "four"){
    pots[3].hasplant = false;
    pots[3].plantState = "none";
    pots[3].flowerColor = "";
    pots[3].millisplanted = 0;
    pots[3].image = emptyPotImg;
    pots[3].oldmillis = 0;
  }

  else if (pot === "five"){
    pots[4].hasplant = false;
    pots[4].plantState = "none";
    pots[4].flowerColor = "";
    pots[4].millisplanted = 0;
    pots[4].image = emptyPotImg;
    pots[4].oldmillis = 0;
  }
  
  else if (pot === "six"){
    pots[5].hasplant = false;
    pots[5].plantState = "none";
    pots[5].flowerColor = "";
    pots[5].millisplanted = 0;
    pots[5].image = emptyPotImg;
    pots[5].oldmillis = 0;
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
  cashRegisterSound.play();
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
      image(redInVase5, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[4] === "white"){
      image(whiteInVase5, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[4] === "pink"){
      image(pinkInVase5, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if ( arrangement[4] === "blue"){
      image(blueInVase5, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[4] === "orange"){
      image(orangeInVase5, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[4] === "purple"){
      image(purpleInVase5, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }
  }

  // 4th flower
  if (arrangement.length > 3){
    if (arrangement[3] === "red"){
      image(redInVase4, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[3] === "white"){
      image(whiteInVase4, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[3] === "pink"){
      image(pinkInVase4, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if ( arrangement[3] === "blue"){
      image(blueInVase4, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[3] === "orange"){
      image(orangeInVase4, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[3] === "purple"){
      image(purpleInVase4, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

  }

  // 3rd flower
  if (arrangement.length > 2){
    if (arrangement[2] === "red"){
      image(redInVase3, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[2] === "white"){
      image(whiteInVase3, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[2] === "pink"){
      image(pinkInVase3, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if ( arrangement[2] === "blue"){
      image(blueInVase3, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[2] === "orange"){
      image(orangeInVase3, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[2] === "purple"){
      image(purpleInVase3, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }
  }

  // 2nd flower
  if (arrangement.length > 1){
    if (arrangement[1] === "red"){
      image(redInVase2, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[1] === "white"){
      image(whiteInVase2, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[1] === "pink"){
      image(pinkInVase2, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if ( arrangement[1] === "blue"){
      image(blueInVase2, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[1] === "orange"){
      image(orangeInVase2, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[1] === "purple"){
      image(purpleInVase2, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }
  }

  // 1st flower
  if (arrangement.length > 0){
    if (arrangement[0] === "red"){
      image(redInVase1, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[0] === "white"){
      image(whiteInVase1, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[0] === "pink"){
      image(pinkInVase1, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if ( arrangement[0] === "blue"){
      image(blueInVase1, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[0] === "orange"){
      image(orangeInVase1, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }

    else if (arrangement[0] === "purple"){
      image(purpleInVase1, backgroundWidth*(x/1500) + border, backgroundHeight*(y/1000), backgroundWidth*(w/1500), backgroundHeight*(h/1000));
    }
  }

  //empty vase
  else{
    image(emptyVase, backgroundWidth*(x/1500) + border, backgroundHeight*(y2/1000), backgroundWidth*(w2/1500), backgroundHeight*(h2/1000));
  }
}

function grab_flower(flowerimage){
  // displays the flower being dragged
  image(flowerimage, mouseX, mouseY, backgroundWidth*(17/250), backgroundHeight*(167/1000));
}

function drag_flower(){
  // if there is a flower being dragged, this function checks that the mouse is still pressed, and if its not, it puts it in the arraingment if the mouse is over the vase
  if (flowerBeingDragged !== "none"){
    if (mouseIsPressed){
      grab_flower(flowerBeingDragged);
    }

    else {
      //mouse over vase
      if (mouseX > backgroundWidth*(536/1500) + border && mouseX < backgroundWidth*(724/1500) + border && mouseY > backgroundHeight*(465/1000) && mouseY < backgroundHeight*(736/1000)){
        add_to_arrangement(flowerBeingDragged);
        
        use_flower(flowerBeingDragged);
        flowerBeingDragged = "none";
      }

      //mouse not over vase
      else{
        flowerBeingDragged = "none";
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

  else if (color === orangeFlower){
    arrangement.push("orange");
  }
}

function create_orders(){
  // creates the array of orders
  orders = [{text: ["I want to buy flowers for my wife. She ", "loves pink, but doesnt like blue."], likedColors: ["pink"], dislikedColors: ["blue"],}, {text: ["I need flowers for my mom. She ","doesnt like red."], likedColors: [], dislikedColors: ["red"],}, {text: ["I need blue flowers. Only blue"], likedColors: ["blue"], dislikedColors: ["white", "red", "purple", "pink", "orange"],}, {text: ["I need red, pink, and white flowers"], likedColors: ["red", "pink", "white"], dislikedColors: [],}, {text: ["I hate red"], likedColors: [], dislikedColors: ["red"], }, {text: ["Could i have pink flowers please?"], likedColors: ["pink"], dislikedColors: []}, {text: ["I need flowers for my cats birthday. He", "likes purple and blue, but doesnt care", "for orange."], likedColors: ["purple", "blue"], dislikedColors: ["orange"],}, {text: ["I want any color except orange."], likedColors: [], dislikedColors: ["orange"],}, {text: ["Its my husbands birthday, i need", "flowers for him. He really loves","red flowers."], likedColors: ["red"], dislikedColors: [],}, {text: ["I need flowers bring to my grandson's concert.", "He likes purple and blue, but not white."], likedColors: ["purple","blue"], dislikedColors: ["white"], }, {text: ["Purple please"], likedColors: ["purple"], dislikedColors: [], },  {text: ["I'm visiting my grandpa, can I get some", "flowers for him? He likes white and blue."], likedColors: ["white", "blue"], dislikedColors: [],}, {text: ["Do you have anything pink?"], likedColors: ["pink"], dislikedColors: [],}, {text: ["Can I have only purple and blue flowers?"], likedColors: ["purple", "blue"], dislikedColors: ["white", "red", "orange", "pink"],}];
}

function pick_order(){
  // randomly picks an order from the order array to be the current order
  currentOrder = new Map();
  
  //picks a number
  let choice = Math.floor(random(orders.length));
  
  // sets the values of that order into the map
  currentOrder.set("text", orders[choice].text);

  currentOrder.set("index", choice);
  
  if (orders[choice].likedColors.length > 0 ){
    currentOrder.set("likedColors", orders[choice].likedColors);
  }

  if (orders[choice].dislikedColors.length > 0){
    currentOrder.set("dislikedColors", orders[choice].dislikedColors);
  }
}

function resetGame(){
  // this function resets the game, then changes the room back to the startscreen
  pots = [];
  arrangement = [];
  orders = [];
  oldRoom = 0;
  currentSeed = "";
  flowerBeingDragged = "none";
  currentOrder = "";
  redFlowersHave = 0;
  pinkFlowersHave = 0;
  whiteFlowersHave = 0;
  blueFlowersHave = 0;
  orangeFlowerHave = 0;
  purpleFlowerHave = 0;

  money = 6;
  fertiziler = 0;
  seeds = 0;

  createpots();
  create_orders();
  seeds = new Map();
  set_seeds();

  room = 0;
}

function getOrder(){
  // this function sets the current order to be the order that is was before the game saved/reset
  let order = currentOrder;
  currentOrder = new Map();
  
  // sets the values of that order into the map
  currentOrder.set("text", orders[order].text);
  currentOrder.set("index", order);
  
  if (orders[order].likedColors.length > 0 ){
    currentOrder.set("likedColors", orders[order].likedColors);
  }

  if (orders[order].dislikedColors.length > 0){
    currentOrder.set("dislikedColors", orders[order].dislikedColors);
  }
}

function getImage(pot){
  // this function set the image of the pot to be whichever one it needs to be based on what stage the plant was when it was saved
  if (pot.bought === false){
    pot.image = unboughtPot;
  }
  // checks if the pot is empty
  else if (pot.bought === true && pot.hasplant === false){
    pot.image = emptyPotImg;
  }

  // checks if it has a flower, and what state it is, and sets the image and the time to be correct
  else {
    if (pot.hasplant === true){
      if (pot.plantState === "done"){
        pot.oldmillis = 31000;
        if (pot.flowerColor === "white"){
          pot.image = whiteFlowerInPotImg;
        }
        else if (pot.flowerColor === "pink"){
          pots.image = pinkFlowerInPotImg;
        }
        else if (pot.flowerColor === "blue"){
          pot.image = blueFlowerInPotImg;
        }
        else if (pot.flowerColor === "orange"){
          pot.image = orangeFlowerInPotImg;
        }
        else if (pot.flowerColor === "purple"){
          pot.image = purpleFlowerInPotImg;
        }
        else if (pot.flowerColor === "red"){
          pot.image = redFlowerInPotimg;
        }
      }
      else if (pot.plantState === "bud" ){
        pot.oldmillis = 20000;
        pot.image = budImg;
      }
      else if (pot.plantState === "sprout"){
        pot.oldmillis = 10000;
        pot.image = sproutImg;
      }
      else{
        pot.image = plantedPotImg;
        pot.oldmillis = 0;
      }
    }
  }

  return pot;
  
}

function get_data(){
  //this function gets the data from local storage if it exitst
  hasData = getItem("hasData");
  if (hasData !== null || hasData === true){
    // "normal" variable types
    redFlowersHave = getItem("redflowersHave");
    pinkFlowersHave = getItem("pinkflowersHave");
    whiteFlowersHave = getItem("whiteflowersHave");
    blueFlowersHave = getItem("blueflowersHave");
    orangeFlowerHave = getItem("orangeflowerHave");
    purpleFlowerHave = getItem("purpleflowerHave");
    money = getItem("money");
    fertiziler = getItem("fertiziler");

    // gets the arraingment
    arrangement = [];
    let arraingmentPlaces = ["arraingmentOne", "arraingmentTwo", "arraingmentThree", "arraingmentFour","arraingmentFive"];
    let arraignmentLength = getItem("arraingmentlength");

    for (let i = 0; i < arraignmentLength; i++){
      let theFlower = getItem(arraingmentPlaces[i]);
      arrangement.push(theFlower);
    }

    // gets the order
    let order = getItem("order");
    if (order < 14){
      currentOrder = order;
      getOrder();
    }
    else{
      pick_order();
    }

    // gets the seeds
    let seedTypes = ["red", "pink", "orange", "blue", "purple", "white"];
    for (let i = 0; i <seedTypes.length; i++){
      seeds.set(seedTypes[i], getItem(seedTypes[i]));
    }

    /// gets the pots
    let potsarray = ["one", "two", "three", "four", "five", "six"];
    pots = [];

    for (let i = 0; i < potsarray.length; i++){
      let pot = {
        hasplant: getItem(potsarray[i] + "hasplant"),
        flowerColor: getItem(potsarray[i] + "flowercolor"),
        plantState: getItem(potsarray[i] + "state"),
        image: emptyPotImg,
        bought: getItem(potsarray[i] + "bought"),
        millisplanted: millis(),

      };
      pots.push(getImage(pot));
    }
    update_pots();
  }
}

function save_data(){
  // function saves data to the local storage
  //clears storage
  clearStorage();

  // stores "normal" variables
  storeItem("redflowersHave", redFlowersHave);
  storeItem("pinkflowersHave", pinkFlowersHave);
  storeItem("whiteflowersHave", whiteFlowersHave);
  storeItem("blueflowersHave", blueFlowersHave);
  storeItem("orangeflowerHave", orangeFlowerHave);
  storeItem("purpleflowerHave", purpleFlowerHave);
  storeItem("order", currentOrder.get("index"));
  storeItem("money", money);
  storeItem("fertiziler", fertiziler);

  // stores the arraingment array
  storeItem("arraingmentlength", arrangement.length);
  let arraingmentPlaces = ["arraingmentOne", "arraingmentTwo", "arraingmentThree", "arraingmentFour","arraingmentFive"];

  for (let i = 0; i < arrangement.length; i++){
    storeItem(arraingmentPlaces[i], arrangement[i]);
  }

  // stores the seed map
  let seedTypes = ["red", "pink", "orange", "blue", "purple", "white"];
  for (let i = 0; i < seedTypes.length; i++){
    storeItem(seedTypes[i], seeds.get(seedTypes[i]));
  }

  //stores the pot array/objects
  let potsarray = ["one", "two", "three", "four", "five", "six"];
  for (let i = 0; i < potsarray.length; i++){
    storeItem(potsarray[i] + "hasplant", pots[i].hasplant);
    storeItem(potsarray[i] + "flowercolor", pots[i].flowerColor);
    storeItem(potsarray[i] + "oldmillis" , millis() - pots[i].millisplanted + pots[i].oldmillis);
    storeItem(potsarray[i] + "state", pots[i].plantState);
    storeItem(potsarray[i] + "bought", pots[i].bought);
  }

  //stores hasData
  hasData = true;
  storeItem("hasData", hasData);
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

  textSize(backgroundWidth*(30/1500));
}