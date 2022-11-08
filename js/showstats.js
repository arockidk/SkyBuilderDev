function getStatsText(stats, weapon) {
  text =
    "<br><b>Defensive Stats</b>"
    + "<br>Health: " + Math.round(stats["HEALTH"])
    + "<br> Defense: " + Math.round(stats["DEFENSE"])
    + "<br> EHP: " + Math.round(stats["HEALTH"] * (1 + (stats["DEFENSE"] / 100)))
    + "<br>"
    + "<s>------------------------------------</s><br>"
    + "<br><b>Melee Stats</b>"
    + "<br> Damage: " + Math.round(stats["DAMAGE"])
    + "<br> Strength: " + Math.round(stats["STRENGTH"])
    + "<br> Critical Damage: " + Math.round(stats["CRITICAL_DAMAGE"]) + "%"
    + "<br> Critical Chance: " + Math.round(stats["CRITICAL_CHANCE"]) + "%"
    + "<br> Attack Speed: " + Math.round(stats["ATTACK_SPEED"]) + "%"
    + "<br> Estimate Average Melee DPS: " + Math.round((Math.round(calcDamage(stats, 0, (stats["ADDITIVE_DAMAGE"] / 100)))))
    + "<br><s>------------------------------------</s><br>"
    + "<br><b>Misc. Stats</b>"
    + "<br>Walk Speed: " + Math.round(stats["WALK_SPEED"]) + "%"
    + "<br>Intelligence: " + Math.round(stats["INTELLIGENCE"])
  if (stats["WEAPON_ABILITY_DAMAGE"] > 0) {
    text = text
      + "<br><s>------------------------------------</s><br>"
      + "<br><b>Magic Stats</b>"
      + "<br>Ability Damage Base: " + Math.round(stats["WEAPON_ABILITY_DAMAGE"])
      + "<br>Ability Damage Scaling: " + weapon["ability_damage_scaling"]
      + "<br>Estimate Final Ability Damage: " + Math.round(((stats["WEAPON_ABILITY_DAMAGE"] * 1 + (stats["ABILITY_DAMAGE_PERCENT"] / 100)) * ((1 + (stats["INTELLIGENCE"] / 100)) * weapon["ability_damage_scaling"]) * 1 * 1))
    console.log(weapon["ability_damage_scaling"] + " scaling")
  }
  if (stats["MINING_SPEED"] > 0) {
    text = text
      + "<br>Mining Speed: " + Math.round(stats["MINING_SPEED"])
      + "<br>Mining Fortune: " + Math.round(stats["MINING_FORTUNE"])
  }
  text = text
    + "<br>"
    + "Wither Impact"
    + "<br>"
    + "Total Damage: " + Math.round(10000 * ((1 + (stats["INTELLIGENCE"] / 100) * 0.3) * 1 * 1)) + "<br>"
    + "Total Shield: " + "Coming Soon"
  document.getElementById("stats").innerHTML = text
}
