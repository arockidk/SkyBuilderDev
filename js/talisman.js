function handleTalisman(stats) {
  let mult = parseInt(document.getElementById("magical_power"))
  let finalMult = 28.49 * Math.log(0.0019 * mult + 1) ^ 1.2
  let power = document.getElementById("talisman_power")
  if (power == "Silky") {
    stats["CRITICAL_DAMAGE"] += 22.8 * finalMult
  }
  if (power == "Scorching") {
    stats["STRENGTH"] += 8.4 * finalMult
    stats["CRITICAL_DAMAGE"] += 9.6 * finalMult
    stats["ATTACK_SPEED"] += 1.8 * finalMult
  }
  return stats
}