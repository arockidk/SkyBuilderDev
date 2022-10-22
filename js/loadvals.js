document.getElementById("copylink").onclick = function() { copy_build("copy") }
document.getElementById("copylink-sharing").onclick = function() { copy_build_sharing() }

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const build = urlParams.get('b')
const vers = urlParams.get('v')
if (build !== null) {
  console.log("build not null")
  if (vers == "1") {
    setTimeout(function() { decode_build_v1(build) }, 100);
  }
  if (vers == "2") {
    setTimeout(function() { decode_build_v2(build) }, 100);
  }
  if (vers == "3") {
    setTimeout(function() { decode_build_v3(build) }, 100);
  }
}

// stackoverflow https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard
function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  // to avoid breaking orgain page when copying more words
  // cant copy when adding below this code
  // dummy.style.display = 'none'
  document.body.appendChild(dummy);
  //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

function copy_build(setting) {
  console.log("copying build")
  let helmet = document.getElementById("helmet").value
  let helmet_modifiers = document.getElementById("helmet_modifiers").value
  let chestplate = document.getElementById("chestplate").value
  let chestplate_modifiers = document.getElementById("chestplate_modifiers").value
  let leggings = document.getElementById("leggings").value
  let leggings_modifiers = document.getElementById("leggings_modifiers").value
  let boots = document.getElementById("boots").value
  let boots_modifiers = document.getElementById("boots_modifiers").value
  let necklace = document.getElementById("necklace").value
  let cloak = document.getElementById("cloak").value
  let belt = document.getElementById("belt").value
  let gloves = document.getElementById("gloves").value
  let weapon = document.getElementById("weapon").value
  let weapon_modifiers = document.getElementById("weapon_modifiers").value
  let sbxp = document.getElementById("sbxp").value
  let skavg = document.getElementById("skavg").value
  let combatlv = document.getElementById("combatlv").value
  let mp = document.getElementById("magical_power").value
  let tp = document.getElementById("talisman_power").value

  let list = [helmet, helmet_modifiers, chestplate, chestplate_modifiers, leggings, leggings_modifiers, boots, boots_modifiers, necklace, cloak, belt, gloves, necklace_modifiers, cloak_modifiers, belt_modifiers, gloves_modifiers, weapon, weapon_modifiers, sbxp, skavg, combatlv, mp, tp]
  let text = list.join("|")
  let encoded = btoa(text)
  if (setting.includes("copy")) {
    copyToClipboard("https://skybuilder.endistic.repl.co/?v=3&b=" + encoded);

    // Alert the copied text
    alert("Copied build link!");
  } else {
    window.history.replaceState(null, document.title, "https://skybuilder.endistic.repl.co/?v=3&b=" + encoded)
  }

}

function copy_build_sharing() {
  console.log("copying build sharing")
  let helmet = document.getElementById("helmet").value
  let helmet_modifiers = document.getElementById("helmet_modifiers").value
  let chestplate = document.getElementById("chestplate").value
  let chestplate_modifiers = document.getElementById("chestplate_modifiers").value
  let leggings = document.getElementById("leggings").value
  let leggings_modifiers = document.getElementById("leggings_modifiers").value
  let boots = document.getElementById("boots").value
  let boots_modifiers = document.getElementById("boots_modifiers").value
  let necklace = document.getElementById("necklace").value
  let cloak = document.getElementById("cloak").value
  let belt = document.getElementById("belt").value
  let gloves = document.getElementById("gloves").value
  let necklace_modifiers = document.getElementById("necklace_modifiers").value
  let cloak_modifiers = document.getElementById("cloak_modifiers").value
  let belt_modifiers = document.getElementById("belt_modifiers").value
  let gloves_modifiers = document.getElementById("gloves_modifiers").value
  let weapon = document.getElementById("weapon").value
  let weapon_modifiers = document.getElementById("weapon_modifiers").value
  let sbxp = document.getElementById("sbxp").value
  let skavg = document.getElementById("skavg").value
  let combatlv = document.getElementById("combatlv").value
  let mp = document.getElementById("magical_power").value
  let tp = document.getElementById("talisman_power").value

  let list = [helmet, helmet_modifiers, chestplate, chestplate_modifiers, leggings, leggings_modifiers, boots, boots_modifiers, necklace, cloak, belt, gloves, necklace_modifiers, cloak_modifiers, belt_modifiers, gloves_modifiers, weapon, weapon_modifiers, sbxp, skavg, combatlv, mp, tp]
  let text = list.join("|")
  let encoded = btoa(text)
  copyToClipboard("https://skybuilder.endistic.repl.co/?v=3&b=" + encoded
    + "\n> " + helmet + "[" + helmet_modifiers + "]"
    + "\n> " + chestplate + "[" + chestplate_modifiers + "]"
    + "\n> " + leggings + "[" + leggings_modifiers + "]"
    + "\n> " + boots + "[" + boots_modifiers + "]"
    + "\n> " + necklace
    + "\n> " + cloak
    + "\n> " + belt
    + "\n> " + gloves
    + "\n> " + weapon + "[" + weapon_modifiers + "]");

  // Alert the copied text
  alert("Copied build link for sharing!");
}

// v1 first version of exporter to account for legacy builds
function decode_build_v1(build) {
  let decoded = atob(build)
  console.log(decoded)
  let array = decoded.split(";d;")
  document.getElementById("helmet").value = array[0]
  document.getElementById("helmet_modifiers").value = array[1]
  document.getElementById("chestplate").value = array[2]
  document.getElementById("chestplate_modifiers").value = array[3]
  document.getElementById("leggings").value = array[4]
  document.getElementById("leggings_modifiers").value = array[5]
  document.getElementById("boots").value = array[6]
  document.getElementById("boots_modifiers").value = array[7]
  document.getElementById("necklace").value = array[8]
  document.getElementById("cloak").value = array[9]
  document.getElementById("belt").value = array[10]
  document.getElementById("gloves").value = array[11]
  document.getElementById("weapon").value = array[12]
  document.getElementById("weapon_modifiers").value = array[13]
  document.getElementById("sbxp").value = array[14]
  document.getElementById("skavg").value = array[15]
  document.getElementById("combatlv").value = array[16]
  document.getElementById("magical_power").value = array[17]
  document.getElementById("talisman_power").value = array[18]
  updateFieldsRequest()
}

// v2 first version of exporter to account for legacy builds
function decode_build_v2(build) {
  console.log("attempting to decode in vers2")
  let decoded = atob(build)
  console.log(decoded)
  let array = decoded.split(";d;")
  document.getElementById("helmet").value = array[0]
  document.getElementById("helmet_modifiers").value = array[1]
  document.getElementById("chestplate").value = array[2]
  document.getElementById("chestplate_modifiers").value = array[3]
  document.getElementById("leggings").value = array[4]
  document.getElementById("leggings_modifiers").value = array[5]
  document.getElementById("boots").value = array[6]
  document.getElementById("boots_modifiers").value = array[7]
  document.getElementById("necklace").value = array[8]
  document.getElementById("cloak").value = array[9]
  document.getElementById("belt").value = array[10]
  document.getElementById("gloves").value = array[11]
  document.getElementById("weapon_modifiers").value = array[12]
  document.getElementById("cloak_modifiers").value = array[13]
  document.getElementById("belt_modifiers").value = array[14]
  document.getElementById("gloves_modifiers").value = array[15]
  document.getElementById("weapon").value = array[16]
  document.getElementById("weapon_modifiers").value = array[17]
  document.getElementById("sbxp").value = array[18]
  document.getElementById("skavg").value = array[19]
  document.getElementById("combatlv").value = array[20]
  document.getElementById("magical_power").value = array[17]
  document.getElementById("talisman_power").value = array[18]
  updateFieldsRequest()
}

// v3 first version of exporter to account for legacy builds
function decode_build_v3(build) {
  console.log("attempting to decode in vers3")
  let decoded = atob(build)
  console.log(decoded)
  let array = decoded.split("|")
  document.getElementById("helmet").value = array[0]
  document.getElementById("helmet_modifiers").value = array[1]
  document.getElementById("chestplate").value = array[2]
  document.getElementById("chestplate_modifiers").value = array[3]
  document.getElementById("leggings").value = array[4]
  document.getElementById("leggings_modifiers").value = array[5]
  document.getElementById("boots").value = array[6]
  document.getElementById("boots_modifiers").value = array[7]
  document.getElementById("necklace").value = array[8]
  document.getElementById("cloak").value = array[9]
  document.getElementById("belt").value = array[10]
  document.getElementById("gloves").value = array[11]
  document.getElementById("weapon_modifiers").value = array[12]
  document.getElementById("cloak_modifiers").value = array[13]
  document.getElementById("belt_modifiers").value = array[14]
  document.getElementById("gloves_modifiers").value = array[15]
  document.getElementById("weapon").value = array[16]
  document.getElementById("weapon_modifiers").value = array[17]
  document.getElementById("sbxp").value = array[18]
  document.getElementById("skavg").value = array[19]
  document.getElementById("combatlv").value = array[20]
  document.getElementById("magical_power").value = array[17]
  document.getElementById("talisman_power").value = array[18]
  updateFieldsRequest()
}


// refresh window
// 