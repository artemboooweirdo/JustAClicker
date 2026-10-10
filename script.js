// This is the script file for the Clicker Layout
// just some coding with much vibe
// console.log cannot be used because of school admin
// DevTools are banned
let c = 0;
const audio = new Audio('Defeat.mp3');
const array = [1,2,"john"];
let u1 = 0;
let u1Cost = 1;
const data = {
    clicks: c
}
console.log(array);
console.log(c);
const upgrade1Button = document.getElementById("upgrade1");
const upgrade1CostDisplay = document.getElementById("upgrade1Cost");
upgrade1Button.addEventListener("click", () => {
    if (c >= u1Cost) {
        c -= u1Cost;
        u1++;
        u1Cost *= 2;
        upgrade1CostDisplay.textContent = u1Cost;
        clickCountDisplay.textContent = c;
        debugText.textContent = `${data.clicks}`;
    }
});
const debugText = document.getElementById("debugText");
const clickerButton = document.getElementById("clickerButton");
const clickCountDisplay = document.getElementById("clickCount");
clickerButton.addEventListener("click", () => {
    c +=  1 + u1;
    data.clicks = c;
    clickCountDisplay.textContent = c;
    debugText.textContent = `${data.clicks}`;
    audio.play();
    //this is where the click event is handled
});

debugText.textContent = `${data.clicks}`;

alert(`You have ${c} clicks!`);