document.getElementById("copylink").onclick = function() { copy_build() }

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const build = urlParams.get('b')
const vers = urlParams.get('v')
if (build !== null) {
  if (vers == "1") {
    setTimeout(function() { decode_build_v1(build) }, 2000);
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

function copy_build() {
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

  let list = [helmet, helmet_modifiers, chestplate, chestplate_modifiers, leggings, leggings_modifiers, boots, boots_modifiers, necklace, cloak, belt, gloves, weapon, weapon_modifiers, sbxp, skavg, combatlv, mp, tp]
  let text = list.join(";d;")
  let encoded = btoa(text)
  copyToClipboard("https://skybuilder.endistic.repl.co/?v=1&b=" + encoded);

  // Alert the copied text
  alert("Copied build link!");
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
}