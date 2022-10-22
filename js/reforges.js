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

    if (modifiers.includes("ofa")) {
      stats["ADDITIVE_DAMAGE"] += 500;
    } else {
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
    }

    if (modifiers.includes("fpb")) {
      stats["DAMAGE"] += 30;
      stats["STRENGTH"] += 30;
    } else {
      if (modifiers.includes("hpb")) {
        stats["DAMAGE"] += 20;
        stats["STRENGTH"] += 20;
      }
    }
  }
  return stats
}