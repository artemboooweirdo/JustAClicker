// This is the script file for the Clicker Layout
// just some coding with much vibe
// NOT VIBECODING i mean coding with the flow
// console.log cannot be used because of school admin
// DevTools are banned
// effective barnacle...

    console.log("hi")

const defeat = new Audio('assets/audio/Defeat.mp3');
const clickSound = new Audio('assets/audio/click.mp3');

// Actual Displayed values
let clicks = 0;

let nullFragments = 0;
// Click Per Second Upgrades
let upgrade1Amount = 0;
let upgrade1Cost = 1;
let upgrade2Amount = 0;
let upgrade2Cost = 50;
let upgrade3Amount = 0;
let upgrade3Cost = 300;
let upgrade4Amount = 0;
let upgrade4Cost = 2000;

let clicksPerSecond = ((upgrade1Amount * 1) + (upgrade2Amount * 5) + (upgrade3Amount * 20) + (upgrade4Amount * 100));
const upgradeTree = [];
const storedData = JSON.parse(localStorage.getItem("clickerData"));

if (storedData) {
    
}
const data = {
    clicks: clicks,
    clicksPerSecond: clicksPerSecond,
    nullFragments: nullFragments,
    upgradeTree: upgradeTree,
    repeatableUpgrades: {
        upgrade1Amount: upgrade1Amount,
        upgrade1Cost: upgrade1Cost,
        upgrade2Amount: upgrade2Amount,
        upgrade2Cost: upgrade2Cost,
        upgrade3Amount: upgrade3Amount,
        upgrade3Cost: upgrade3Cost,
        upgrade4Amount: upgrade4Amount,
        upgrade4Cost: upgrade4Cost,
    },
    upgrades: {},
}

// DOM element references for buttons and displays

const upgrade1Button = document.getElementById("upgrade1Display");
const upgrade2Button = document.getElementById("upgrade2Display");
const upgrade3Button = document.getElementById("upgrade3Display");
const upgrade4Button = document.getElementById("upgrade4Display");

const upgrade1CostDisplay = document.getElementById("upgrade1Cost");
const upgrade2CostDisplay = document.getElementById("upgrade2Cost");
const upgrade3CostDisplay = document.getElementById("upgrade3Cost");
const upgrade4CostDisplay = document.getElementById("upgrade4Cost");

const clickerButton = document.getElementById("clickerButton");
const clickDisplay = document.getElementById("clickDisplay");
const cpsDisplay = document.getElementById("clicksPerSecond");
const nullFragmentsDisplay = document.getElementById("nullFragments");

const startSongButton = document.getElementById("startSong");
const stopSongButton = document.getElementById("stopSong");

const resetButton = document.getElementById("resetButton");
const saveDataButton = document.getElementById("saveData");

const nullifyButton = document.getElementById("nullify");
const nullTreeButton = document.getElementById("nulltree");





function resetStats() {
    clicks = 0;
    clicksPerSecond = 0;
    upgrade1Amount = 0;
    upgrade1Cost = 0;
    upgrade2Amount = 0;
    upgrade2Cost = 0;
    upgrade3Amount = 0;
    upgrade3Cost = 0;
    upgrade4Amount = 0;
    upgrade4Cost = 0;
}
function updateScreen() {
    clickDisplay.textContent = Math.floor(clicks);
    cpsDisplay.textContent = clicksPerSecond;
    upgrade1CostDisplay.textContent = Math.floor(upgrade1Cost);
    upgrade2CostDisplay.textContent = Math.floor(upgrade2Cost);
    upgrade3CostDisplay.textContent = Math.floor(upgrade3Cost);
    upgrade4CostDisplay.textContent = Math.floor(upgrade4Cost);
    nullFragmentsDisplay.textContent = nullFragments;
    console.log(clicksPerSecond)
}
startSongButton.addEventListener("click", () => {
    defeat.play();
});
stopSongButton.addEventListener("click", () => {
    defeat.pause();
    defeat.currentTime = 0;
});
upgrade1Button.addEventListener("click", () => {
    if (clicks >= upgrade1Cost) {
        clicks -= upgrade1Cost;
        upgrade1Amount++;
        upgrade1Cost *= 1.3;
        upgrade1CostDisplay.textContent = Math.floor(upgrade1Cost);
        clickDisplay.textContent = Math.floor(clicks);
    }
});
upgrade2Button.addEventListener("click", () => {
    if (clicks >= upgrade2Cost) {
        clicks -= upgrade2Cost;
        upgrade2Amount += 1;
        upgrade2Cost *= 1.3;
        updateScreen();
    }

});
upgrade3Button.addEventListener("click", () => {
    if (clicks >= upgrade3Cost) {
        clicks -= upgrade3Cost;
        upgrade3Amount += 1;
        upgrade3Cost *= 1.3;
        updateScreen();
    }

});
upgrade4Button.addEventListener("click", () => {
    if (clicks >= upgrade4Cost) {
        clicks -= upgrade4Cost;
        upgrade4Amount += 1;
        upgrade4Cost *= 1.3;
        updateScreen();
    }

});
clickerButton.addEventListener("mousedown", () => {
    clicks += 1;
    clickDisplay.textContent = Math.floor(clicks);
    clickerButton.style.transform = "scale(0.7)"; 
    clickerButton.style.transition = "transform 0.1s";
    clickerButton.style.filter = "opacity(0.4)";
    //this is where the mousedown click event is handled by the user
});
clickerButton.addEventListener("click", () => {
    clickDisplay.textContent = Math.floor(clicks);
    clickerButton.style.transform = "scale(0.7)"; 
    clickerButton.style.transition = "transform 0.1s";
    clickerButton.style.filter = "opacity(0.4)";
    setTimeout(() => { 
        clickerButton.style.transform = "scale(1)";
        clickerButton.style.filter = "brightness(1)";
    }, 100);
    clickSound.pause();
    clickSound.currentTime = 0;
    clickSound.play();
    //this is where the normal click event is handled by the user
})
clickerButton.addEventListener("mouseup", () => { 
    clickerButton.style.transform = "scale(1)";
    clickerButton.style.filter = "brightness(1)";
    //this is where the mouseup click event is handled by the user
});
saveDataButton.addEventListener("click", () => {
    localStorage.setItem("clickerData", JSON.stringify(data));
    // localStorage is working
    alert("Data saved!");
});
nullifyButton.addEventListener("click", () => {
    if (clicks >= 1000) {
        nullFragments += Math.floor(clicks / 1000);
        nullFragmentsDisplay.textContent = nullFragments;
        alert("You have nullified your progress and gained " + Math.floor(clicks / 1000) + " null fragments!");
        resetStats();
        updateScreen();
    }
});

setInterval(() => { //ONE SEC INTERVAL
    clicksPerSecond = ((upgrade1Amount * 1) + (upgrade2Amount * 5) + (upgrade3Amount * 20) + (upgrade4Amount * 100));
    clicks += clicksPerSecond;
    updateScreen();
}, 1000);
nullTreeButton.addEventListener("click", () => {
    localStorage.setItem("clickerData", JSON.stringify(data));
    window.location.href = "pages/nulltree.html";
});
resetButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset your progress? This cannot be undone.")) {
        localStorage.removeItem("clickerData");
        nullFragments = 0;
        resetStats();
        updateScreen();
        localStorage.setItem("clickerData", JSON.stringify(data));
    }
});






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
