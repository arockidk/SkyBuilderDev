console.log("reforges js is DETEDCTEDjhbsahjds")

function handleReforges(modifiers, stats, item) {
  if (item["category"].includes("HELMET") || item["category"].includes("CHESTPLATE") || item["category"].includes("LEGGINGS") || item["category"].includes("BOOTS")) {
    if (modifiers.includes("Necrotic")) {
      if (item["tier"] == "COMMON") { stats["INTELLIGENCE"] += 30 }
      if (item["tier"] == "UNCOMMON") { stats["INTELLIGENCE"] += 60 }
      if (item["tier"] == "RARE") { stats["INTELLIGENCE"] += 90 }
      if (item["tier"] == "EPIC") { stats["INTELLIGENCE"] += 120 }
      if (item["tier"] == "LEGENDARY") { stats["INTELLIGENCE"] += 150 }
      if (item["tier"] == "MYTHIC") { stats["INTELLIGENCE"] += 200 }
    }
    else if (modifiers.includes("Ancient")) {
      if (item["tier"] == "COMMON") { stats["STRENGTH"] += 4; stats["CRITICAL_CHANCE"] += 3; stats["HEALTH"] += 7; stats["DEFENSE"] += 7; stats["INTELLIGENCE"] += 6; }
      if (item["tier"] == "UNCOMMON") { stats["STRENGTH"] += 8; stats["CRITICAL_CHANCE"] += 5; stats["HEALTH"] += 7; stats["DEFENSE"] += 7; stats["INTELLIGENCE"] += 9; }
      if (item["tier"] == "RARE") { stats["STRENGTH"] += 12; stats["CRITICAL_CHANCE"] += 7; stats["HEALTH"] += 7; stats["DEFENSE"] += 7; stats["INTELLIGENCE"] += 12; }
      if (item["tier"] == "EPIC") { stats["STRENGTH"] += 18; stats["CRITICAL_CHANCE"] += 9; stats["HEALTH"] += 7; stats["DEFENSE"] += 7; stats["INTELLIGENCE"] += 16; }
      if (item["tier"] == "LEGENDARY") { stats["STRENGTH"] += 25; stats["CRITICAL_CHANCE"] += 12; stats["HEALTH"] += 7; stats["DEFENSE"] += 7; stats["INTELLIGENCE"] += 20; }
      if (item["tier"] == "MYTHIC") { stats["STRENGTH"] += 35; stats["CRITICAL_CHANCE"] += 15; stats["HEALTH"] += 7; stats["DEFENSE"] += 7; stats["INTELLIGENCE"] += 25; }
    }
    else if (modifiers.includes("Giant")) {
      if (item["tier"] == "COMMON") { stats["HEALTH"] += 50; }
      if (item["tier"] == "UNCOMMON") { stats["HEALTH"] += 60; }
      if (item["tier"] == "RARE") { stats["HEALTH"] += 80; }
      if (item["tier"] == "EPIC") { stats["HEALTH"] += 120; }
      if (item["tier"] == "LEGENDARY") { stats["HEALTH"] += 180; }
      if (item["tier"] == "MYTHIC") { stats["HEALTH"] += 240; }
    }
    else if (modifiers.includes("Loving")) {
      if (item["tier"] == "COMMON") { stats["HEALTH"] += 4; stats["DEFENSE"] += 4; stats["INTELLIGENCE"] += 20; }
      if (item["tier"] == "UNCOMMON") { stats["HEALTH"] += 5; stats["DEFENSE"] += 5; stats["INTELLIGENCE"] += 40; }
      if (item["tier"] == "RARE") { stats["HEALTH"] += 6; stats["DEFENSE"] += 6; stats["INTELLIGENCE"] += 60; }
      if (item["tier"] == "EPIC") { stats["HEALTH"] += 8; stats["DEFENSE"] += 7; stats["INTELLIGENCE"] += 80; }
      if (item["tier"] == "LEGENDARY") { stats["HEALTH"] += 10; stats["DEFENSE"] += 10; stats["INTELLIGENCE"] += 100; }
      if (item["tier"] == "MYTHIC") { stats["HEALTH"] += 14; stats["DEFENSE"] += 14; stats["INTELLIGENCE"] += 120; }
    }
    else if (modifiers.includes("Renowned")) {
      if (item["tier"] == "COMMON") { stats["STRENGTH"] += 3; stats["CRITICAL_CHANCE"] += 2; stats["CRITICAL_DAMAGE"] += 3; stats["ATTACK_SPEED"] += 1; stats["HEALTH"] += 2; stats["DEFENSE"] += 2; stats["WALK_SPEED"] += 1; stats["INTELLIGENCE"] += 3; }
      if (item["tier"] == "UNCOMMON") { stats["STRENGTH"] += 4; stats["CRITICAL_CHANCE"] += 4; stats["CRITICAL_DAMAGE"] += 4; stats["ATTACK_SPEED"] += 1; stats["HEALTH"] += 3; stats["DEFENSE"] += 3; stats["WALK_SPEED"] += 1; stats["INTELLIGENCE"] += 4; }
      if (item["tier"] == "RARE") { stats["STRENGTH"] += 6; stats["CRITICAL_CHANCE"] += 6; stats["CRITICAL_DAMAGE"] += 6; stats["ATTACK_SPEED"] += 2; stats["HEALTH"] += 4; stats["DEFENSE"] += 4; stats["WALK_SPEED"] += 1; stats["INTELLIGENCE"] += 6; }
      if (item["tier"] == "EPIC") { stats["STRENGTH"] += 8; stats["CRITICAL_CHANCE"] += 8; stats["CRITICAL_DAMAGE"] += 8; stats["ATTACK_SPEED"] += 3; stats["HEALTH"] += 6; stats["DEFENSE"] += 6; stats["WALK_SPEED"] += 1; stats["INTELLIGENCE"] += 8; }
      if (item["tier"] == "LEGENDARY") { stats["STRENGTH"] += 10; stats["CRITICAL_CHANCE"] += 10; stats["CRITICAL_DAMAGE"] += 10; stats["ATTACK_SPEED"] += 4; stats["HEALTH"] += 8; stats["DEFENSE"] += 10; stats["WALK_SPEED"] += 1; stats["INTELLIGENCE"] += 10; }
      if (item["tier"] == "MYTHIC") { stats["STRENGTH"] += 12; stats["CRITICAL_CHANCE"] += 12; stats["CRITICAL_DAMAGE"] += 12; stats["ATTACK_SPEED"] += 5; stats["HEALTH"] += 10; stats["DEFENSE"] += 10; stats["WALK_SPEED"] += 1; stats["INTELLIGENCE"] += 12; }
    }
  }
  if (item["category"].includes("SWORD") || item["category"].includes("LONGSWORD")) {
    if (modifiers.includes("Withered")) {
      if (item["tier"] == "COMMON") { stats["STRENGTH"] += 60 }
      if (item["tier"] == "UNCOMMON") { stats["STRENGTH"] += 75 }
      if (item["tier"] == "RARE") { stats["STRENGTH"] += 90 }
      if (item["tier"] == "EPIC") { stats["STRENGTH"] += 110 }
      if (item["tier"] == "LEGENDARY") { stats["STRENGTH"] += 135 }
      if (item["tier"] == "MYTHIC") { stats["STRENGTH"] += 170 }
    }
    if (modifiers.includes("Fabled")) {
      if (item["tier"] == "COMMON") { stats["STRENGTH"] += 30; stats["CRITICAL_DAMAGE"] += 15; }
      if (item["tier"] == "UNCOMMON") { stats["STRENGTH"] += 35; stats["CRITICAL_DAMAGE"] += 20; }
      if (item["tier"] == "RARE") { stats["STRENGTH"] += 40; stats["CRITICAL_DAMAGE"] += 25; }
      if (item["tier"] == "EPIC") { stats["STRENGTH"] += 50; stats["CRITICAL_DAMAGE"] += 32; }
      if (item["tier"] == "LEGENDARY") { stats["STRENGTH"] += 60; stats["CRITICAL_DAMAGE"] += 40; }
      if (item["tier"] == "MYTHIC") { stats["STRENGTH"] += 75; stats["CRITICAL_DAMAGE"] += 50; }
    }
  }
  if (item["category"].includes("BOW") || item["category"].includes("SHORTBOW")) {
    if (modifiers.includes("Spiritual")) {
      if (item["tier"] == "COMMON") { stats["STRENGTH"] += 4; stats["CRITICAL_CHANCE"] += 7; stats["CRITICAL_DAMAGE"] += 10; }
      if (item["tier"] == "UNCOMMON") { stats["STRENGTH"] += 8; stats["CRITICAL_CHANCE"] += 8; stats["CRITICAL_DAMAGE"] += 15; }
      if (item["tier"] == "RARE") { stats["STRENGTH"] += 14; stats["CRITICAL_CHANCE"] += 9; stats["CRITICAL_DAMAGE"] += 23; }
      if (item["tier"] == "EPIC") { stats["STRENGTH"] += 20; stats["CRITICAL_CHANCE"] += 10; stats["CRITICAL_DAMAGE"] += 37; }
      if (item["tier"] == "LEGENDARY") { stats["STRENGTH"] += 28; stats["CRITICAL_CHANCE"] += 12; stats["CRITICAL_DAMAGE"] += 55; }
      if (item["tier"] == "MYTHIC") { stats["STRENGTH"] += 38; stats["CRITICAL_CHANCE"] += 14; stats["CRITICAL_DAMAGE"] += 75; }
    }
    if (modifiers.includes("Precise")) {
      if (item["tier"] == "COMMON") { stats["STRENGTH"] += 3; stats["CRITICAL_CHANCE"] += 8; stats["CRITICAL_DAMAGE"] += 5; }
      if (item["tier"] == "UNCOMMON") { stats["STRENGTH"] += 7; stats["CRITICAL_CHANCE"] += 9; stats["CRITICAL_DAMAGE"] += 10; }
      if (item["tier"] == "RARE") { stats["STRENGTH"] += 12; stats["CRITICAL_CHANCE"] += 10; stats["CRITICAL_DAMAGE"] += 18; }
      if (item["tier"] == "EPIC") { stats["STRENGTH"] += 18; stats["CRITICAL_CHANCE"] += 11; stats["CRITICAL_DAMAGE"] += 32; }
      if (item["tier"] == "LEGENDARY") { stats["STRENGTH"] += 25; stats["CRITICAL_CHANCE"] += 13; stats["CRITICAL_DAMAGE"] += 50; }
      if (item["tier"] == "MYTHIC") { stats["STRENGTH"] += 34; stats["CRITICAL_CHANCE"] += 15; stats["CRITICAL_DAMAGE"] += 70; }
    }
    if (modifiers.includes("Hasty")) {
      if (item["tier"] == "COMMON") { stats["STRENGTH"] += 3; stats["CRITICAL_CHANCE"] += 20; }
      if (item["tier"] == "UNCOMMON") { stats["STRENGTH"] += 5; stats["CRITICAL_CHANCE"] += 25; }
      if (item["tier"] == "RARE") { stats["STRENGTH"] += 7; stats["CRITICAL_CHANCE"] += 30; }
      if (item["tier"] == "EPIC") { stats["STRENGTH"] += 10; stats["CRITICAL_CHANCE"] += 40; }
      if (item["tier"] == "LEGENDARY") { stats["STRENGTH"] += 15; stats["CRITICAL_CHANCE"] += 50; }
      if (item["tier"] == "MYTHIC") { stats["STRENGTH"] += 20; stats["CRITICAL_CHANCE"] += 60; }
    }
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
  if (category.includes("BOW")) {
    if (modifiers.includes("t5")) {
      stats["ADDITIVE_DAMAGE"] += 40
    }
    if (modifiers.includes("t6")) {
      stats["ADDITIVE_DAMAGE"] += 50
    }
    if (modifiers.includes("t7")) {
      stats["ADDITIVE_DAMAGE"] += 65
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
