// ⇓ and ⇑

function toggleLevels() {
  var elem = document.getElementById("levels_toggle");
  var button = document.getElementByid("levels_button")
  console.log(elem.style.display)
  if (elem.style.display === "none") {
    elem.style.display = "block";
    button.value = "Show Levels ⇓"
  } else {
    elem.style.display = "none";
    button.value = "Hide Levels ⇑"
  }
}

function toggleTalismans() {
  var elem = document.getElementById("talismans_toggle");
  console.log(elem.style.display)
  if (elem.style.display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function togglePetConfigs() {
  var elem = document.getElementById("pet_config_toggle");
  console.log(elem.style.display)
  if (elem.style.display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function toggleBuffs() {
  var elem = document.getElementById("buffs_div");
  console.log(elem.style.display)
  if (elem.style.display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function toggleExtraModifiers() {
  var elem = document.getElementById("extra_modifiers");
  console.log(elem.style.display)
  if (elem.style.display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}