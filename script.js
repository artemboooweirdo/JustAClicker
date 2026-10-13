// This is the script file for the Clicker Layout
// just some coding with much vibe
// console.log cannot be used because of school admin
// DevTools are banned
// effective barnacle...
let c = 0;
const audio = new Audio('Defeat.mp3');
const array = [1,2,"john"];

let u1 = 0;
let u1Cost = 1;
let autoU1 = 0;
let cps = 0;
let upgradeCPSCost = 1;
let nullFragments = 0;
let upgrade2Cost = 100;
let upgrade2CPSCost = 100;
const data = {
    clicks: c,
    clicksPerSecond: cps,
    nullFragments: nullFragments,
    upgrades: {
        u1: u1,
        // object within an object?? coolio
    },
    CPSUpgrades: {
        autoU1: autoU1
    }
}

// DOM element references for buttons and displays
const upgrade1Button = document.getElementById("bigger-clicks");
const upgrade1CostDisplay = document.getElementById("upgrade1Cost");
const debugText = document.getElementById("debugText");
const clickerButton = document.getElementById("clickerButton");
const clickCountDisplay = document.getElementById("clickCount");
const cpsDisplay = document.getElementById("cps");
const cpsUpgrade1Button = document.getElementById("clicker-workers");
const upgradeCPSCostDisplay = document.getElementById("upgrade1CPSCost");
const startSongButton = document.getElementById("startSong");
const stopSongButton = document.getElementById("stopSong");
const saveDataButton = document.getElementById("saveData");
const nullifyButton = document.getElementById("nullify");
const upgrade2Button = document.getElementById("badder-clicks");
const upgrade2CostDisplay = document.getElementById("upgrade2Cost");
const upgrade2CPSButton = document.getElementById("autoclicker");
const upgrade2CPSCostDisplay = document.getElementById("upgrade2CPSCost");
const nullFragmentsDisplay = document.getElementById("nullFragments");


function resetStats() {
    c = 0;
    u1 = 0;
    u1Cost = 1;
    autoU1 = 0;
    cps = 0;
    upgradeCPSCost = 1;
    upgrade1CostDisplay.textContent = u1Cost;
    upgradeCPSCostDisplay.textContent = upgradeCPSCost;
    cpsDisplay.textContent = cps;
    clickCountDisplay.textContent = c;
    nullFragmentsDisplay.textContent = nullFragments;
}

startSongButton.addEventListener("click", () => {
    audio.play();
});
stopSongButton.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
});
upgrade1Button.addEventListener("click", () => {
    if (c >= u1Cost) {
        c -= u1Cost;
        u1++;
        u1Cost *= 1.3;
        upgrade1CostDisplay.textContent = Math.floor(u1Cost);
        clickCountDisplay.textContent = Math.floor(c);
    }
});
clickerButton.addEventListener("mousedown", () => {
    c +=  1 + u1;
    clickCountDisplay.textContent = Math.floor(c);
    clickerButton.style.transform = "scale(0.8)"; 
    clickerButton.style.transition = "transform 0.05s";
    clickerButton.style.filter = "brightness(0.8)";
    //this is where the mousedown click event is handled by the user
});
clickerButton.addEventListener("click", () => { 
    clickCountDisplay.textContent = Math.floor(c);
    clickerButton.style.transform = "scale(0.8)"; 
    clickerButton.style.transition = "transform 0.05s";
    clickerButton.style.filter = "brightness(0.8)";
    setTimeout(() => { 
        clickerButton.style.transform = "scale(1)";
        clickerButton.style.filter = "brightness(1)";
    }, 100);
    //this is where the normal click event is handled by the user
})
clickerButton.addEventListener("mouseup", () => { 
    clickerButton.style.transform = "scale(1)";
    clickerButton.style.filter = "brightness(1)";
    //this is where the mouseup click event is handled by the user
});
cpsUpgrade1Button.addEventListener("click", () => {
    if (c >= upgradeCPSCost) {
        c -= upgradeCPSCost;
        cps++;
        upgradeCPSCost *= 1.3;
        upgradeCPSCostDisplay.textContent = Math.floor(upgradeCPSCost);
        clickCountDisplay.textContent = Math.floor(c);
        cpsDisplay.textContent = cps;
    }
});
saveDataButton.addEventListener("click", () => {
    localStorage.setItem("clickerData", JSON.stringify(data));
    // localStorage is not working
    alert("Data saved!");
});
nullifyButton.addEventListener("click", () => {
    if (c >= 1000) {
        c = 0;
        nullFragments++;
        nullFragmentsDisplay.textContent = nullFragments;
        resetStats();
        upgrade1CostDisplay.textContent = u1Cost;
        upgradeCPSCostDisplay.textContent = upgradeCPSCost;
        cpsDisplay.textContent = cps;
        clickCountDisplay.textContent = c;
    }
});
upgrade2Button.addEventListener("click", () => {
    if (c >= upgrade2Cost) {
        c -= upgrade2Cost;
        u1 += 10;
        upgrade2Cost *= 2;
        upgrade2CostDisplay.textContent = upgrade2Cost;
        clickCountDisplay.textContent = Math.floor(c);
    }

});
upgrade2CPSButton.addEventListener("click", () => {
    if (c >= upgrade2CPSCost) {
        c -= upgrade2CPSCost;
        autoU1 += 10;
        upgrade2CPSCost *= 2;
        upgrade2CPSCostDisplay.textContent = upgrade2CPSCost;
        clickCountDisplay.textContent = Math.floor(c);
    }
});
setInterval(() => { //ONE SEC INTERVAL
    c += cps; // automatically add clicks based on the number of upgrades owned;
    clickCountDisplay.textContent = Math.floor(c);
    data.clicks = c;
    data.clicksPerSecond = cps;
    data.upgrades.u1 = u1;
    data.CPSUpgrades.autoU1 = autoU1;
    data.nullFragments = nullFragments;
    debugText.textContent = `${JSON.stringify(data)}`;
}, 1000);





// TEST

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("sliding-menu");
  const toggleBtn = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("menu-close");
  const overlay = document.getElementById("menu-overlay");

  // Function to open/close menu
  const toggleMenu = () => {
    menu.classList.toggle("open");
    overlay.classList.toggle("open");
  };

  // Event Listeners
  toggleBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu); // Closes menu when clicking outside
});

// TEST

debugText.textContent = `${JSON.stringify(data)}`;