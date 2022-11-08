// This exists as a sample for how getting the Item API works.

// From StackOverflow but I'm not sure where.
function itemAPI() {

}
/* url = 'https://api.hypixel.net/resources/skyblock/items'
fetch(url).then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })
).then(res => {
    for (let i = 0; i < res.data.items.length; i++) {
      /* if(res.data.items[i].name.includes("Saving")) {
        console.log(res.data.items[i])
      } 
      
    }
})); */

// return item stats and add it to given stats
function returnItem(item, stats, modif_name) {
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
    "ABILITY_DAMAGE_PERCENT",
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

  let statMult = 1
  let modifiers = parseInt(document.getElementById(modif_name + "_stars").value)
  if (modifiers > 1) {
    statMult += (modifiers * 0.02)
  }
  console.log(modifiers)


  // get stats
  for (let i = 0; i < statsList.length; i++) {
    let statCheck = statsList[i]
    if (item["stats"] !== undefined) {
      if (item["stats"][statCheck] !== undefined) {
        stats[statCheck] += item["stats"][statCheck]
      }
    } else {

    }
    stats[statCheck] *= statMult
    // edit for stars
  }
  console.log(item)



  stats = handleEnchants(document.getElementById(modif_name + "_enchants").value, stats, item)
  stats = handleReforges(document.getElementById(modif_name + "_modifiers").value, stats, item)


  return stats
}
