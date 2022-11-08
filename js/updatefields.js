// assign each dropdown to update the stats when changed
document.querySelectorAll('.refresher').forEach(item => {
  item.addEventListener('click', event => {
    updateFieldsRequest();
  })
  item.addEventListener('change', event => {
    updateFieldsRequest();
  })
})

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

// handle reforges manually

// return modifiers such as "necrotic t6 hpb"
function returnModifiers(modifiers, stats, item) {
  stats = handleReforges(modifiers, stats, item)
  stats = handleEnchants(modifiers, stats, item)
  return stats
}
// calculate melee damage using given values

// update stats fields based on equipment and armor and modifiers given
function updateFields(items) {
  console.log("Updating fields.")
  // Armor
  let helmet_item = null
  let helmet = $("helmet").value
  let helmet_modifiers = $("helmet_modifiers").value
  let helmet_matches = 0
  let chestplate_item = null
  let chestplate = $("chestplate").value
  let chestplate_modifiers = $("chestplate_modifiers").value
  let chestplate_matches = 0
  let leggings_item = null
  let leggings = $("leggings").value
  let leggings_modifiers = $("leggings_modifiers").value
  let leggings_matches = 0
  let boots_item = null
  let boots = $("boots").value
  let boots_modifiers = $("boots_modifiers").value
  let boots_matches = 0

  // Equipment
  let necklace_item = null
  let necklace = $("necklace").value
  let necklace_matches = 0
  let cloak_item = null
  let cloak = $("cloak").value
  let cloak_matches = 0
  let belt_item = null
  let belt = $("belt").value
  let belt_matches = 0
  let gloves_item = null
  let gloves = $("gloves").value
  let gloves_matches = 0

  // Weapon
  let weapon_item = null
  let weapon = $("weapon").value
  let weapon_modifiers = $("weapon_modifiers").value
  let weapon_matches = 0

  // Calculate items
  for (let i = 0; i < items.length; i++) {
    if (items[i]["name"].includes("Tiger")) {
      console.log(items[i])
      console.log("above is tiger?")
    }
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
    "COMBAT_DAMAGE": 0,
    "ABILITY_DAMAGE_PERCENT": 0
  }
  // check for item matches, and if it matches correctly, return the item
  // if statements are intentionally duplicated
  if (helmet_matches == 1) {
    stats = returnItem(helmet_item, stats, "helmet")
  }
  if (chestplate_matches == 1) {
    stats = returnItem(chestplate_item, stats, "chestplate")
  }
  if (leggings_matches == 1) {
    stats = returnItem(leggings_item, stats, "leggings")
  }
  if (boots_matches == 1) {
    stats = returnItem(boots_item, stats, "boots")
  }
  if (necklace_matches == 1) {
    stats = returnItem(necklace_item, stats, "necklace")
  }
  if (cloak_matches == 1) {
    stats = returnItem(cloak_item, stats, "cloak")
  }
  if (belt_matches == 1) {
    stats = returnItem(belt_item, stats, "belt")
  }
  if (gloves_matches == 1) {
    stats = returnItem(gloves_item, stats, "gloves")
  }
  if (weapon_matches == 1) {
    stats = returnItem(weapon_item, stats, "weapon")
  }

  // enchants
  /* if (helmet_matches == 1) {
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
  } */

  // weapon
  /* if (weapon_matches == 1) {
    stats = handleEnchants(weapon_modifiers, stats, weapon_item)
  } */

  stats = handleTalisman(stats)
  let sbxp = $("sbxp").value
  let skavg = $("skavg").value
  let skcmbt = $("combatlv").value
  stats["HEALTH"] += (Math.round(parseInt(sbxp / 100)) * 5) + (skavg * 8)
  stats["STRENGTH"] += Math.round(parseInt(sbxp / 500)) * 1 + (skavg * 2)
  stats["CRITICAL_CHANCE"] += (skavg * 2)
  stats["HEALTH"] += Math.round(parseInt(sbxp / 1000)) * 10

  if (helmet_item !== undefined && helmet_item !== null) {
    if (helmet_item["name"].includes("Warden Helmet")) {
      stats["WALK_SPEED"] = stats["WALK_SPEED"] / 2
      stats["DAMAGE"] = Math.round(stats["DAMAGE"] * (1 + (0.2 * (stats["WALK_SPEED"] / 25))))
    }
  }
  if ($("god_pot_buff").checked) {
    stats["HEALTH"] += 100
    stats["DEFENSE"] += 66
    stats["WALK_SPEED"] += 228
    stats["STRENGTH"] += 99
    stats["INTELLIGENCE"] += 100
    stats["CRITICAL_CHANCE"] += 25
    stats["CRITICAL_DAMAGE"] += 80
    stats["MAGIC_FIND"] += 88
    stats["PET_LUCK"] += 20
    stats["TRUE_DEFENSE"] += 20
    stats["FEROCITY"] += 2
    stats["MINING_FORTUNE"] += 25
    stats["HEALTH_REGEN"] += 63
  }
  if ($("crochet_tiger_buff").checked) {
    stats["ATTACK_SPEED"] += 35
  }
  if (weapon_item["name"].includes("Terminator")) {
    stats["CRITICAL_CHANCE"] = stats["CRITICAL_CHANCE"] / 4;
  }
  let tuning = $("tuning_points").value
  stats[tuning] += ($("magical_power").value / 10) * 0.3
  getStatsText(stats, weapon_item)
  copy_build("url")
}



