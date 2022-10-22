// assign each dropdown to update the stats when changed
document.getElementById("helmet").onchange = function() { updateFieldsRequest() }
document.getElementById("chestplate").onchange = function() { updateFieldsRequest() }
document.getElementById("leggings").onchange = function() { updateFieldsRequest() }
document.getElementById("boots").onchange = function() { updateFieldsRequest() }
document.getElementById("helmet_modifiers").onchange = function() { updateFieldsRequest() }
document.getElementById("chestplate_modifiers").onchange = function() { updateFieldsRequest() }
document.getElementById("leggings_modifiers").onchange = function() { updateFieldsRequest() }
document.getElementById("boots_modifiers").onchange = function() { updateFieldsRequest() }
document.getElementById("necklace").onchange = function() { updateFieldsRequest() }
document.getElementById("cloak").onchange = function() { updateFieldsRequest() }
document.getElementById("belt").onchange = function() { updateFieldsRequest() }
document.getElementById("gloves").onchange = function() { updateFieldsRequest() }
document.getElementById("weapon").onchange = function() { updateFieldsRequest() }
document.getElementById("necklace_modifiers").onchange = function() { updateFieldsRequest() }
document.getElementById("cloak_modifiers").onchange = function() { updateFieldsRequest() }
document.getElementById("belt_modifiers").onchange = function() { updateFieldsRequest() }
document.getElementById("gloves_modifiers").onchange = function() { updateFieldsRequest() }
document.getElementById("weapon_modifiers").onchange = function() { updateFieldsRequest() }

// edit for commit testing
// convert an item name to an ID (unused)
function nameToID(name) {
  url = 'skyitems.json'
  fetch(url).then(response =>
    response.json().then(data => ({
      data: data,
      status: response.status
    })
    ).then(res => {
      for (let i = 0; i < res.data.items.length; i++) {
        if (res.data.items[i]["name"] == name) {
          return res.data.items[i]["id"]
        }
      }
    }));
  return undefined
}
// make api request and use that to calculate stats
function updateFieldsRequest() {
  console.log("Updating.")
  url = 'skyitems.json'
  fetch(url).then(response =>
    response.json().then(data => ({
      data: data,
      status: response.status
    })
    ).then(res => {
      updateFields(res.data.items)
    }));


}
// return item stats and add it to given stats
function returnItem(item, stats) {
  statsList = [
    "DAMAGE",
    "HEALTH",
    "DEFENSE",
    "STRENGTH",
    "INTELLIGENCE",
    "WALK_SPEED",
    "CRITICAL_CHANCE",
    "CRITICAL_DAMAGE",
    "ATTACK_SPEED",
    "WEAPON_ABILITY_DAMAGE",
    "TRUE_DEFENSE",
    "FEROCITY",
    "MAGIC_FIND",
    "PET_LUCK",
    "SEA_CREATURE_CHANCE",
    "MINING_SPEED",
    "MINING_FORTUNE",
    "ADDITIVE_DAMAGE",
    "COMBAT_DAMAGE"
  ]

  for (let i = 0; i < statsList.length; i++) {
    let statCheck = statsList[i]
    if (item["stats"] !== undefined) {

      if (item["stats"][statCheck] !== undefined) {
        stats[statCheck] += item["stats"][statCheck]
      }
    } else {
    }

  }

  return stats
}

// handle reforges manually
function handleReforges(modifiers, stats, item) {
  if (modifiers.includes("Necrotic")) {
    if (item["tier"] == "COMMON") { stats["INTELLIGENCE"] += 30 }
    if (item["tier"] == "UNCOMMON") { stats["INTELLIGENCE"] += 60 }
    if (item["tier"] == "RARE") { stats["INTELLIGENCE"] += 90 }
    if (item["tier"] == "EPIC") { stats["INTELLIGENCE"] += 120 }
    if (item["tier"] == "LEGENDARY") { stats["INTELLIGENCE"] += 150 }
    if (item["tier"] == "MYTHIC") { stats["INTELLIGENCE"] += 200 }
  }
  if (modifiers.includes("Ancient")) {
    if (item["tier"] == "COMMON") { stats["STRENGTH"] += 4; stats["CRITICAL_CHANCE"] += 3; stats["HEALTH"] += 7; stats["DEFENSE"] += 7; stats["INTELLIGENCE"] += 6; }
    if (item["tier"] == "UNCOMMON") { stats["STRENGTH"] += 8; stats["CRITICAL_CHANCE"] += 5; stats["HEALTH"] += 7; stats["DEFENSE"] += 7; stats["INTELLIGENCE"] += 9; }
    if (item["tier"] == "RARE") { stats["STRENGTH"] += 12; stats["CRITICAL_CHANCE"] += 7; stats["HEALTH"] += 7; stats["DEFENSE"] += 7; stats["INTELLIGENCE"] += 12; }
    if (item["tier"] == "EPIC") { stats["STRENGTH"] += 18; stats["CRITICAL_CHANCE"] += 9; stats["HEALTH"] += 7; stats["DEFENSE"] += 7; stats["INTELLIGENCE"] += 16; }
    if (item["tier"] == "LEGENDARY") { stats["STRENGTH"] += 25; stats["CRITICAL_CHANCE"] += 12; stats["HEALTH"] += 7; stats["DEFENSE"] += 7; stats["INTELLIGENCE"] += 20; }
    if (item["tier"] == "MYTHIC") { stats["STRENGTH"] += 35; stats["CRITICAL_CHANCE"] += 15; stats["HEALTH"] += 7; stats["DEFENSE"] += 7; stats["INTELLIGENCE"] += 25; }
  }
  return stats;
}

function handleEnchants(modifiers, stats, item) {
  let category = item["category"]
  if (category.includes("HELMET") || category.includes("CHESTPLATE") || category.includes("LEGGINGS") || category.includes("BOOTS")) {
    if (modifiers.includes("t5")) {
      stats["HEALTH"] += 75;
      stats["DEFENSE"] += 15;
    }
    if (modifiers.includes("t6")) {
      stats["HEALTH"] += 90;
      stats["DEFENSE"] += 18;
    }
    if (modifiers.includes("t7")) {
      stats["HEALTH"] += 105;
      stats["DEFENSE"] += 21;
    }
    if (modifiers.includes("hpb")) {
      stats["HEALTH"] += 40;
      stats["DEFENSE"] += 20;
    }
    if (modifiers.includes("fpb")) {
      stats["HEALTH"] += 60;
      stats["DEFENSE"] += 30;
    }
  }
  if (category.includes("SWORD") || category.includes("LONGSWORD")) {
    if (modifiers.includes("t5")) {
      stats["ADDITIVE_DAMAGE"] += 30 + 30;
      stats["CRITICAL_DAMAGE"] += 50;
    }
    if (modifiers.includes("t6")) {
      stats["ADDITIVE_DAMAGE"] += 45 + 45;
      stats["CRITICAL_DAMAGE"] += 70;
    }
    if (modifiers.includes("t7")) {
      stats["ADDITIVE_DAMAGE"] += 65 + 65;
      stats["CRITICAL_DAMAGE"] += 100;
    }
    if (modifiers.includes("ofa")) {
      stats["ADDITIVE_DAMAGE"] += 500;
    }
    if (modifiers.includes("hpb")) {
      stats["DAMAGE"] += 20;
      stats["STRENGTH"] += 20;
    }
    if (modifiers.includes("fpb")) {
      stats["DAMAGE"] += 30;
      stats["STRENGTH"] += 30;
    }
  }
  return stats
}
// return modifiers such as "necrotic t6 hpb"
function returnModifiers(modifiers, stats, item) {
  stats = handleReforges(modifiers, stats, item)
  stats = handleEnchants(modifiers, stats, item)
  return stats
}
// calculate melee damage using given values
function calcDamage(stats, baseMult, postMult) {
  let damage = stats["DAMAGE"]
  let strength = stats["STRENGTH"]
  let critical_damage = stats["CRITICAL_DAMAGE"]
  let ferocity = stats["FEROCITY"]

  return ((5 + damage) * (1 + (strength / 100)) * (1 + (critical_damage / 100)) * (1 + (baseMult / 100)) * (1 + (postMult / 100))) * (1 + (ferocity / 100))
}
// update stats fields based on equipment and armor and modifiers given
function updateFields(items) {
  console.log("Updating fields.")
  // Armor
  let helmet_item = null
  let helmet = document.getElementById("helmet").value
  let helmet_modifiers = document.getElementById("helmet_modifiers").value
  let helmet_matches = 0
  let chestplate_item = null
  let chestplate = document.getElementById("chestplate").value
  let chestplate_modifiers = document.getElementById("chestplate_modifiers").value
  let chestplate_matches = 0
  let leggings_item = null
  let leggings = document.getElementById("leggings").value
  let leggings_modifiers = document.getElementById("leggings_modifiers").value
  let leggings_matches = 0
  let boots_item = null
  let boots = document.getElementById("boots").value
  let boots_modifiers = document.getElementById("boots_modifiers").value
  let boots_matches = 0

  // Equipment
  let necklace_item = null
  let necklace = document.getElementById("necklace").value
  let necklace_matches = 0
  let cloak_item = null
  let cloak = document.getElementById("cloak").value
  let cloak_matches = 0
  let belt_item = null
  let belt = document.getElementById("belt").value
  let belt_matches = 0
  let gloves_item = null
  let gloves = document.getElementById("gloves").value
  let gloves_matches = 0

  // Weapon
  let weapon_item = null
  let weapon = document.getElementById("weapon").value
  let weapon_modifiers = document.getElementById("weapon_modifiers").value
  let weapon_matches = 0

  // Calculate items
  for (let i = 0; i < items.length; i++) {
    if (items[i]["id"].includes("STARRED_")) {
      continue
    }
    if (items[i].name == helmet) {
      helmet_item = items[i]
      helmet_matches += 1
    }
    if (items[i].name == chestplate) {
      chestplate_item = items[i]
      chestplate_matches += 1
    }
    if (items[i].name == leggings) {
      leggings_item = items[i]
      leggings_matches += 1
    }
    if (items[i].name.includes(boots)) {
      boots_item = items[i]
      boots_matches += 1
    }
    if (items[i].name.includes(necklace)) {
      necklace_item = items[i]
      necklace_matches += 1
    }
    if (items[i].name.includes(cloak)) {
      cloak_item = items[i]
      cloak_matches += 1
    }
    if (items[i].name.includes(belt)) {
      belt_item = items[i]
      belt_matches += 1
    }
    if (items[i].name.includes(gloves)) {
      gloves_item = items[i]
      gloves_matches += 1
    }
    if (items[i].name.includes(weapon)) {
      weapon_item = items[i]
      weapon_matches += 1
    }
  }
  // stats json
  stats = {
    "DAMAGE": 0,
    "HEALTH": 100,
    "DEFENSE": 0,
    "STRENGTH": 0,
    "INTELLIGENCE": 0,
    "WALK_SPEED": 100,
    "CRITICAL_CHANCE": 30,
    "CRITICAL_DAMAGE": 0,
    "ATTACK_SPEED": 0,
    "WEAPON_ABILITY_DAMAGE": 0,
    "TRUE_DEFENSE": 0,
    "FEROCITY": 0,
    "MAGIC_FIND": 0,
    "PET_LUCK": 0,
    "SEA_CREATURE_CHANCE": 0,
    "MINING_SPEED": 0,
    "MINING_FORTUNE": 0,
    "ADDITIVE_DAMAGE": 0,
    "COMBAT_DAMAGE": 0
  }
  // check for item matches, and if it matches correctly, return the item
  // if statements are intentionally duplicated
  if (helmet_matches == 1) {
    stats = returnItem(helmet_item, stats)
  }
  if (chestplate_matches == 1) {
    stats = returnItem(chestplate_item, stats)
  }
  if (leggings_matches == 1) {
    stats = returnItem(leggings_item, stats)
  }
  if (boots_matches == 1) {
    stats = returnItem(boots_item, stats)
  }
  if (necklace_matches == 1) {
    stats = returnItem(necklace_item, stats)
  }
  if (cloak_matches == 1) {
    stats = returnItem(cloak_item, stats)
  }
  if (belt_matches == 1) {
    stats = returnItem(belt_item, stats)
  }
  if (gloves_matches == 1) {
    stats = returnItem(gloves_item, stats)
  }
  if (weapon_matches == 1) {
    stats = returnItem(weapon_item, stats)
  }

  // enchants
  if (helmet_matches == 1) {
    stats = handleEnchants(helmet_modifiers, stats, helmet_item)
  }
  if (chestplate_matches == 1) {
    stats = handleEnchants(chestplate_modifiers, stats, helmet_item)
  }
  if (leggings_matches == 1) {
    stats = handleEnchants(leggings_modifiers, stats, helmet_item)
  }
  if (boots_matches == 1) {
    stats = handleEnchants(boots_modifiers, stats, helmet_item)
  }
  // reforges
  if (helmet_matches == 1) {
    stats = handleReforges(helmet_modifiers, stats, helmet_item)
  }
  if (chestplate_matches == 1) {
    stats = handleReforges(chestplate_modifiers, stats, helmet_item)
  }
  if (leggings_matches == 1) {
    stats = handleReforges(leggings_modifiers, stats, helmet_item)
  }
  if (boots_matches == 1) {
    stats = handleReforges(boots_modifiers, stats, helmet_item)
  }

  // weapon
  if (weapon_matches == 1) {
    stats = handleEnchants(weapon_modifiers, stats, weapon_item)
  }

  let sbxp = document.getElementById("sbxp").value
  let skavg = document.getElementById("skavg").value
  let skcmbt = document.getElementById("combatlv").value
  stats["HEALTH"] += Math.round(parseInt(sbxp / 100)) * 5 + (skavg * 8)
  stats["STRENGTH"] += Math.round(parseInt(sbxp / 500)) * 1 + (skavg * 2)
  stats["CRITICAL_CHANCE"] += (skavg * 2)
  stats["HEALTH"] += Math.round(parseInt(sbxp / 1000)) * 10
  stats["ADDITIVE_DAMAGE"] += (skcmbt * 4)

  if (helmet_item !== undefined && helmet_item !== null) {
    if (helmet_item["name"].includes("Warden Helmet")) {
      stats["WALK_SPEED"] = stats["WALK_SPEED"] / 2
      stats["DAMAGE"] = Math.round(stats["DAMAGE"] * (1 + (0.2 * (stats["WALK_SPEED"] / 25))))
    }
  }
  getStatsText(stats, weapon_item)
}

function getStatsText(stats, weapon) {
  text =
    "<br><h2>Defensive Stats</h2>"
    + "Health: " + stats["HEALTH"]
    + "<br> Defense: " + stats["DEFENSE"]
    + "<br> EHP: " + Math.round(stats["HEALTH"] * (1 + (stats["DEFENSE"] / 100)))
    + "<br>"
    + "<s>------------------------------------</s><br>"
    + "<br><h2>Melee Stats</h2>"
    + "<br> Damage: " + stats["DAMAGE"]
    + "<br> Strength: " + stats["STRENGTH"]
    + "<br> Critical Damage: " + stats["CRITICAL_DAMAGE"] + "%"
    + "<br> Critical Chance: " + stats["CRITICAL_CHANCE"] + "%"
    + "<br> Estimate Average Melee DPS (with crit): " + (Math.round(calcDamage(stats, 0, (stats["ADDITIVE_DAMAGE"] / 100))) * (1 + (stats["ATTACK_SPEED"] * 0.05)))
    + "<br><s>------------------------------------</s><br>"
    + "<br><h2>Misc. Stats</h2>"
    + "<br>Walk Speed: " + stats["WALK_SPEED"] + "%"
    + "<br>Intelligence: " + stats["INTELLIGENCE"]
  if (stats["WEAPON_ABILITY_DAMAGE"] > 0) {
    text = text
      + "<br><s>------------------------------------</s><br>"
      + "<br><h2>Magic Stats</h2>"
      + "<br>Ability Damage Base: " + stats["WEAPON_ABILITY_DAMAGE"]
      + "<br>Ability Damage Scaling: " + weapon["ability_damage_scaling"]
      + "<br>Estimate Final Ability Damage: " + Math.round(stats["WEAPON_ABILITY_DAMAGE"] * (1 + (stats["INTELLIGENCE"] / 100)) * 1 * 1)
  }
  if (stats["MINING_SPEED"] > 0) {
    text = text
      + "<br>Mining Speed: " + stats["MINING_SPEED"]
      + "<br>Mining Fortune: " + stats["MINING_FORTUNE"]
  }
  document.getElementById("stats").innerHTML = text
}