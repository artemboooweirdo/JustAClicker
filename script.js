// This is the script file for the Clicker Layout
// just some coding with much vibe
// console.log cannot be used because of school admin
// DevTools are banned
let c = 0;
const audio = new Audio('Defeat.mp3');
const array = [1,2,"john"];

let u1 = 0;
let u1Cost = 1;
let autoU1 = 0;
let cps = 0;
let upgradeCPSCost = 1;
const data = {
    clicks: c,
    clicksPerSecond: cps,
    upgrades: {
        u1: u1,
        // object within an object?? coolio
    },
    CPSUpgrades: {
        autoU1: autoU1
    }
}

// DOM element references for buttons and displays
const upgrade1Button = document.getElementById("upgrade1");
const upgrade1CostDisplay = document.getElementById("upgrade1Cost");
const debugText = document.getElementById("debugText");
const clickerButton = document.getElementById("clickerButton");
const clickCountDisplay = document.getElementById("clickCount");
const cpsDisplay = document.getElementById("cps");
const cpsUpgrade1Button = document.getElementById("CPSUpgrade1");
const upgradeCPSCostDisplay = document.getElementById("upgradeCPSCost");
const startSongButton = document.getElementById("startSong");
const stopSongButton = document.getElementById("stopSong");
const saveDataButton = document.getElementById("saveData");




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
        u1Cost *= 2;
        upgrade1CostDisplay.textContent = u1Cost;
        clickCountDisplay.textContent = c;
    }
});

clickerButton.addEventListener("click", () => {
    c +=  1 + u1;
    data.clicks = c;
    clickCountDisplay.textContent = c;
    //this is where the click event is handled by the user
});
cpsUpgrade1Button.addEventListener("click", () => {
    if (c >= upgradeCPSCost) {
        c -= upgradeCPSCost;
        cps++;
        upgradeCPSCost *= 2;
        upgradeCPSCostDisplay.textContent = upgradeCPSCost;
        clickCountDisplay.textContent = c;
        cpsDisplay.textContent = cps;
    }
});
saveDataButton.addEventListener("click", () => {
    localStorage.setItem("clickerData", JSON.stringify(data));
    // localStorage is not working
    alert("Data saved!");
});





setInterval(() => {
    c += cps; // automatically add clicks based on the number of upgrades owned;
    clickCountDisplay.textContent = c;
    debugText.textContent = `${JSON.stringify(data)}`;
}, 1000);



debugText.textContent = `${JSON.stringify(data)}`;