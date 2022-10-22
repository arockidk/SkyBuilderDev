document.getElementById("helmet").onchange = function() { updateFieldsRequest() }
document.getElementById("chestplate").onchange = function() { updateFieldsRequest() }
document.getElementById("leggings").onchange = function() { updateFieldsRequest() }
document.getElementById("boots").onchange = function() { updateFieldsRequest() }
document.getElementById("necklace").onchange = function() { updateFieldsRequest() }
document.getElementById("cloak").onchange = function() { updateFieldsRequest() }
document.getElementById("belt").onchange = function() { updateFieldsRequest() }
document.getElementById("gloves").onchange = function() { updateFieldsRequest() }
document.getElementById("weapon").onchange = function() { updateFieldsRequest() }

// edit for commit testing

function nameToID(name) {
  url = 'https://api.hypixel.net/resources/skyblock/items'
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
function updateFieldsRequest() {
  console.log("Updating.")
  url = 'https://api.hypixel.net/resources/skyblock/items'
  fetch(url).then(response =>
    response.json().then(data => ({
      data: data,
      status: response.status
    })
    ).then(res => {
      updateFields(res.data.items)
    }));


}

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
    "ABILITY_DAMAGE",
    "TRUE_DEFENSE",
    "FEROCITY",
    "MAGIC_FIND",
    "PET_LUCK",
    "SEA_CREATURE_CHANCE"
  ]

  console.log(item["stats"])
  for (let i = 0; i < statsList.length; i++) {
    let statCheck = statsList[i]
    console.log(statCheck)
    if (item["stats"] !== undefined) {

      if (item["stats"][statCheck] !== undefined) {
        stats[statCheck] += item["stats"][statCheck]
        console.log("matched with " + statCheck + " and " + item["stats"][statCheck])
      }
    } else {
      console.log("Item undefined!" + item["name"])
    }

  }

  return stats
}

function returnModifiers(modifiers, stats, category) {
  if (category.includes("helmet") || category.includes("chestplate") || category.includes("leggings") || category.includes("boots")) {

  }
  return stats
}

function calcDamage(damage, strength, critical_damage, baseMult, postMult) {
  return (5 + damage) * (1 + (strength / 100)) * (1 + (critical_damage / 100))
}
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
  let weapon_matches = 0

  // Calculate items
  for (let i = 0; i < items.length; i++) {
    if (items[i]["id"].includes("STARRED_")) {
      continue
    }
    if (items[i].name.includes(helmet)) {
      helmet_item = items[i]
      helmet_matches += 1
    }
    if (items[i].name.includes(chestplate)) {
      chestplate_item = items[i]
      chestplate_matches += 1
    }
    if (items[i].name.includes(leggings)) {
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
  stats = {
    "DAMAGE": 0,
    "HEALTH": 0,
    "DEFENSE": 0,
    "STRENGTH": 0,
    "INTELLIGENCE": 0,
    "WALK_SPEED": 0,
    "CRITICAL_CHANCE": 0,
    "CRITICAL_DAMAGE": 0,
    "ATTACK_SPEED": 0,
    "ABILITY_DAMAGE": 0,
    "TRUE_DEFENSE": 0,
    "FEROCITY": 0,
    "MAGIC_FIND": 0,
    "PET_LUCK": 0,
    "SEA_CREATURE_CHANCE": 0
  }

  if (helmet_matches == 1) {
    stats = returnItem(helmet_item, stats)
    stats = returnModifiers(helmet_modifiers, stats, helmet_item["category"])
  }
  if (chestplate_matches == 1) {
    stats = returnItem(chestplate_item, stats)
    stats = returnModifiers(chestplate_modifiers, stats, chestplate_item["category"])
  }
  if (leggings_matches == 1) {
    stats = returnItem(leggings_item, stats)
    stats = returnModifiers(leggings_modifiers, stats, leggings_item["category"])
  }
  if (boots_matches == 1) {
    stats = returnItem(boots_item, stats)
    stats = returnModifiers(boots_modifiers, stats, boots_item["category"])
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

  document.getElementById("stats").innerHTML =
    "Health: " + stats["HEALTH"]
    + "<br> Defense: " + stats["DEFENSE"]
    + "<br> EHP: " + Math.round(stats["HEALTH"] * (1 + (stats["DEFENSE"] / 100)))
    + "<br>"
    + "<s>------------------------------------</s><br>"
    + "<br> Damage: " + stats["DAMAGE"]
    + "<br> Strength: " + stats["STRENGTH"]
    + "<br> Critical Damage: " + stats["CRITICAL_DAMAGE"]
    + "<br> Critical Chance: " + stats["CRITICAL_CHANCE"]
    + "<br> Melee Damage (with crit): " + calcDamage(stats["DAMAGE"], stats["STRENGTH"], stats["CRITICAL_DAMAGE"], 0, 0)
    + "<br><s>------------------------------------</s><br>"
}