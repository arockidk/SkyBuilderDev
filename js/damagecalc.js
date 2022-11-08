function calcDamage(stats, baseMult, postMult) {
  let damage = stats["DAMAGE"]
  let strength = stats["STRENGTH"]
  let critical_chance = stats["CRITICAL_CHANCE"]
  let critical_damage = stats["CRITICAL_DAMAGE"]
  let ferocity = stats["FEROCITY"]
  let ats = stats["ATTACK_SPEED"]

  let combat = $("combatlv").value
  return (((5 + damage) * (1 + (strength / 100)) * (1 + (baseMult / 100)) * combat * (1 + (critical_damage / 100)))) * (1 + (ferocity / 100)) * (1 / (0.5 - (ats * 0.0025)))
}

// for enchants https://hypixel-skyblock.fandom.com/wiki/Enchantments

