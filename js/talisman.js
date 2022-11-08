function handleTalisman(stats) {
  console.log(stats)
  let mult = parseInt(document.getElementById("magical_power").value)
  let finalMult = 28.49 * Math.log(0.0019 * mult + 1) ^ 1.2
  let power = document.getElementById("talisman_power").value
  console.log("finalMult " + mult + " " + finalMult)
  if (power.includes("Silky")) {
    stats["CRITICAL_DAMAGE"] += 22.8 * finalMult
  }
  if (power.includes("Itchy")) {
    stats["WALK_SPEED"] += 0.6 * finalMult;
    stats["STRENGTH"] += 7.2 * finalMult;
    stats["CRITICAL_DAMAGE"] += 8.4 * finalMult;
    stats["ATTACK_SPEED"] += 2.15 * finalMult;
  }
  if (power.includes("Scorching")) {
    stats["STRENGTH"] += 8.4 * finalMult
    stats["CRITICAL_DAMAGE"] += 9.6 * finalMult
    stats["ATTACK_SPEED"] += 1.8 * finalMult
    stats["FEROCITY"] += 7
  }
  if (power.includes("Healthy")) {
    stats["HEALTH"] += 33.6 * finalMult
    stats["HEALTH"] += 200
  }
  if (power.includes("Slender")) {
    stats["HEALTH"] += 8.4 * finalMult
    stats["DEFENSE"] += 6 * finalMult
    stats["WALK_SPEED"] += 0.6 * finalMult
    stats["STRENGTH"] += 6 * finalMult
    stats["INTELLIGENCE"] += 7.2 * finalMult
    stats["CRITICAL_DAMAGE"] += 6 * finalMult
    stats["ATTACK_SPEED"] += 1.1 * finalMult
  }
  if (power.includes("Strong")) {
    stats["STRENGTH"] += 12 * finalMult
    stats["CRITICAL_DAMAGE"] += 12 * finalMult
    stats["STRENGTH"] += 25
    stats["CRITICAL_DAMAGE"] += 25
  }
  if (power.includes("Bizarre")) {
    stats["STRENGTH"] += -2.4 * finalMult
    stats["INTELLIGENCE"] += 43 * finalMult
    stats["CRITICAL_DAMAGE"] += -2.4 * finalMult
  }
  if (power.includes("Demonic")) {
    stats["STRENGTH"] += 5.5 * finalMult
    stats["INTELLIGENCE"] += 27.725 * finalMult
  }
  if (power.includes("Hurtful")) {
    stats["STRENGTH"] += 4.8 * finalMult
    stats["CRITICAL_DAMAGE"] += 19.2 * finalMult
    stats["CRITICAL_DAMAGE"] += 50
  }
  if (power.includes("Pleasant")) {
    stats["HEALTH"] += 13.45 * finalMult
    stats["DEFENSE"] += 14.4 * finalMult
  }
  if (power.includes("Adept")) {
    stats["HEALTH"] += 16.8 * finalMult
    stats["HEALTH"] += 100
    stats["DEFENSE"] += 9.6 * finalMult
    stats["DEFENSE"] += 50
    stats["INTELLIGENCE"] += 3.6 * finalMult
  }
  if (power.includes("Bloody")) {
    stats["STRENGTH"] += 10.8 * finalMult
    stats["INTELLIGENCE"] += 3.6 * finalMult
    stats["CRITICAL_DAMAGE"] += 10.8 * finalMult
    stats["ATTACK_SPEED"] += 10
  }
  if (power.includes("Forceful")) {
    stats["HEALTH"] += 8.4 * finalMult
    stats["DEFENSE"] += 6 * finalMult
    stats["WALK_SPEED"] += 0.6 * finalMult
    stats["STRENGTH"] += 6 * finalMult
    stats["INTELLIGENCE"] += 7.2 * finalMult
    stats["CRITICAL_DAMAGE"] += 6 * finalMult
    stats["ATTACK_SPEED"] += 1.1 * finalMult
  }
  if (power.includes("Mythical")) {
    stats["HEALTH"] += 5.7 * finalMult
    stats["DEFENSE"] += 4.05 * finalMult
    stats["WALK_SPEED"] += 0.95 * finalMult
    stats["STRENGTH"] += 4.05 * finalMult
    stats["INTELLIGENCE"] += 6.1 * finalMult
    stats["CRITICAL_CHANCE"] += 1.65 * finalMult
    stats["CRITICAL_DAMAGE"] += 4.05 * finalMult
  }
  if (power.includes("Shaded")) {
    stats["WALK_SPEED"] += 0.6 * finalMult
    stats["STRENGTH"] += 4.8 * finalMult
    stats["CRITICAL_DAMAGE"] += 18 * finalMult
  }
  if (power.includes("Sighted")) {
    stats["INTELLIGENCE"] += 36 * finalMult
  }
  if (power.includes("Sweet")) {
    stats["HEALTH"] += 15.1 * finalMult
    stats["DEFENSE"] += 10.8 * finalMult
    stats["WALK_SPEED"] += 1.2 * finalMult
  }

  console.log(stats)
  return stats
}