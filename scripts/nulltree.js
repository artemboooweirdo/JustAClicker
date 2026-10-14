// DOM element references for buttons and displays
const nullFragmentsDisplay = document.getElementById("nullFragmentsDisplay");
const storedData = JSON.parse(localStorage.getItem("clickerData"));
nullFragmentsDisplay.textContent = storedData.nullFragments;

// WORK ON THIS LATER LIKE THE PAGE