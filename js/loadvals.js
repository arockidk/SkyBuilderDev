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
  if (vers == "4") {
    setTimeout(function() { decode_build_v4(build) }, 100);
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
  let hs = document.getElementById("helmet_stars").value
  let cs = document.getElementById("chestplate_stars").value
  let ls = document.getElementById("leggings_stars").value
  let bs = document.getElementById("boots_stars").value
  let ns = document.getElementById("necklace_stars").value
  let cls = document.getElementById("cloak_stars").value
  let bes = document.getElementById("belt_stars").value
  let gs = document.getElementById("gloves_stars").value
  let ws = document.getElementById("helmet_stars").value
  let he = document.getElementById("helmet_enchants").value
  let ce = document.getElementById("chestplate_enchants").value
  let le = document.getElementById("leggings_enchants").value
  let be = document.getElementById("boots_enchants").value

  let list = [helmet, helmet_modifiers, chestplate, chestplate_modifiers, leggings, leggings_modifiers, boots, boots_modifiers, necklace, cloak, belt, gloves, necklace_modifiers, cloak_modifiers, belt_modifiers, gloves_modifiers, weapon, weapon_modifiers, sbxp, skavg, combatlv, mp, tp, hs, cs, ls, bs, ns, cls, bes, gs, ws, he, ce, le, be]
  let text = list.join("|")
  let encoded = btoa(text)
  if (setting.includes("copy")) {
    copyToClipboard("https://skybuilder.endistic.repl.co/?v=4&b=" + encoded);

    // Alert the copied text
    alert("Copied build link!");
  } else {
    try {
      window.history.replaceState(null, document.title, "https://skybuilder.endistic.repl.co/?v=4&b=" + encoded)
    } catch (error) {

    }

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
  let hs = document.getElementById("helmet_stars").value
  let cs = document.getElementById("chestplate_stars").value
  let ls = document.getElementById("leggings_stars").value
  let bs = document.getElementById("boots_stars").value
  let ns = document.getElementById("necklace_stars").value
  let cls = document.getElementById("cloak_stars").value
  let bes = document.getElementById("belt_stars").value
  let gs = document.getElementById("gloves_stars").value
  let ws = document.getElementById("helmet_stars").value
  let he = document.getElementById("helmet_enchants").value
  let ce = document.getElementById("chestplate_enchants").value
  let le = document.getElementById("leggings_enchants").value
  let be = document.getElementById("boots_enchants").value

  let list = [helmet, helmet_modifiers, chestplate, chestplate_modifiers, leggings, leggings_modifiers, boots, boots_modifiers, necklace, cloak, belt, gloves, necklace_modifiers, cloak_modifiers, belt_modifiers, gloves_modifiers, weapon, weapon_modifiers, sbxp, skavg, combatlv, mp, tp, hs, cs, ls, bs, ns, cls, bes, gs, ws, he, ce, le, be]

  let text = list.join("|")
  let encoded = btoa(text)
  copyToClipboard("https://skybuilder.endistic.repl.co/?v=4&b=" + encoded
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

// v2 adds support for equipment modifiers
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
  document.getElementById("cloak_modifiers").value = array[12]
  document.getElementById("belt_modifiers").value = array[13]
  document.getElementById("gloves_modifiers").value = array[14]
  document.getElementById("weapon").value = array[15]
  document.getElementById("weapon_modifiers").value = array[16]
  document.getElementById("sbxp").value = array[17]
  document.getElementById("skavg").value = array[18]
  document.getElementById("combatlv").value = array[19]
  document.getElementById("magical_power").value = array[20]
  document.getElementById("talisman_power").value = array[21]
  updateFieldsRequest()
}

// v3 changes delimiter to "|"
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
  document.getElementById("necklace_modifiers").value = array[12]
  document.getElementById("cloak_modifiers").value = array[13]
  document.getElementById("belt_modifiers").value = array[14]
  document.getElementById("gloves_modifiers").value = array[15]
  document.getElementById("weapon").value = array[16]
  document.getElementById("weapon_modifiers").value = array[17]
  document.getElementById("sbxp").value = array[18]
  document.getElementById("skavg").value = array[19]
  document.getElementById("combatlv").value = array[20]
  document.getElementById("magical_power").value = array[21]
  document.getElementById("talisman_power").value = array[22]
}

// v4 adds support for stars field
function decode_build_v4(build) {
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
  document.getElementById("necklace_modifiers").value = array[12]
  document.getElementById("cloak_modifiers").value = array[13]
  document.getElementById("belt_modifiers").value = array[14]
  document.getElementById("gloves_modifiers").value = array[15]
  document.getElementById("weapon").value = array[16]
  document.getElementById("weapon_modifiers").value = array[17]
  document.getElementById("sbxp").value = array[18]
  document.getElementById("skavg").value = array[19]
  document.getElementById("combatlv").value = array[20]
  document.getElementById("magical_power").value = array[21]
  document.getElementById("talisman_power").value = array[22]
  document.getElementById("helmet_stars").value = array[23]
  document.getElementById("chestplate_stars").value = array[24]
  document.getElementById("leggings_stars").value = array[25]
  document.getElementById("boots_stars").value = array[26]
  document.getElementById("necklace_stars").value = array[27]
  document.getElementById("cloak_stars").value = array[28]
  document.getElementById("belt_stars").value = array[29]
  document.getElementById("gloves_stars").value = array[30]
  document.getElementById("weapon_stars").value = array[31]
  document.getElementById("helmet_enchants").value = array[32]
  document.getElementById("chestplate_enchants").value = array[33]
  document.getElementById("leggings_enchants").value = array[34]
  document.getElementById("boots_enchants").value = array[35]

}

// refresh window
// 