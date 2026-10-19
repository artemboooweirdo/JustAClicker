const nullFragmentsDisplay = document.getElementById("nullFragmentsDisplay");
const upgrades = {
  null1: { cost: 1, bonus: "2x manual clicks", parent: null },
  null2: { cost: 5, bonus: "2x passive clicks", parent: "null1" },
  null3: { cost: 10, bonus: "2x null fragments", parent: "null2" },
  null4: { cost: 50, bonus: "2x manual clicks", parent: "null3" },
  null5: { cost: 1000, bonus: "2x passive clicks", parent: "null3" },
  null6: { cost: 250, bonus: "2x null fragments", parent: "null3" },
};
const connectorByUpgrade = {
  null1: "fromUpgrade1",
  null2: "fromUpgrade2",
  null3: "fromUpgrade3",
};
const treeUpgrades = document.getElementsByClassName("item");
const storedData = JSON.parse(localStorage.getItem("clickerData")) ?? {};
let nullFragments = storedData.nullFragments ?? 0;
const ownedUpgrades = storedData.ownedUpgrades ?? ["none"];

function saveData() {
  storedData.nullFragments = nullFragments;
  storedData.ownedUpgrades = ownedUpgrades;
  localStorage.setItem("clickerData", JSON.stringify(storedData));
}

function updateTree() {
  nullFragmentsDisplay.textContent = nullFragments;

  Object.entries(upgrades).forEach(([upgradeId, upgrade]) => {
    const element = document.getElementById(upgradeId);
    const isOwned = ownedUpgrades.includes(upgradeId);
    const isUnlocked =
      !upgrade.parent || ownedUpgrades.includes(upgrade.parent);

    element.querySelector("[data-cost]").textContent = upgrade.cost;
    element.querySelector("[data-bonus]").textContent = upgrade.bonus;
    element.classList.toggle("hidden", !isUnlocked);
    element.classList.toggle("upgBought", isOwned);
    element.classList.toggle("unaffordable", nullFragments < upgrade.cost);
    element.disabled = isOwned;
    element.inert = !isUnlocked;
  });

  Object.entries(connectorByUpgrade).forEach(([upgradeId, connectorClass]) => {
    Array.from(document.getElementsByClassName(connectorClass)).forEach(
      (connector) => {
        connector.classList.toggle(
          "hidden",
          !ownedUpgrades.includes(upgradeId),
        );
      },
    );
  });
}

Array.from(treeUpgrades).forEach((element) => {
  element.addEventListener("click", (event) => {
    const upgradeId = event.currentTarget.id;
    const upgrade = upgrades[upgradeId];

    if (ownedUpgrades.includes(upgradeId)) return;
    if (upgrade.parent && !ownedUpgrades.includes(upgrade.parent)) {
      window.alert("Unlock the previous upgrade first.");
      return;
    }
    if (nullFragments < upgrade.cost) {
      window.alert("You need more null fragments for this upgrade.");
      return;
    }

    nullFragments -= upgrade.cost;
    ownedUpgrades.push(upgradeId);
    saveData();
    updateTree();
  });
});

updateTree();
saveData();
