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

function updateDropdowns(element, items, category) {
  let array = ["None"]
  for (let i = 0; i < items.length; i++) {
    let name = items[i]["name"]
    if (items[i]["id"].includes("STARRED_")) {
      continue
    }
    if (category == "WEAPON") {
      if (items[i]["category"] == "SWORD") {
        array.push(name)
      }
      if (items[i]["category"] == "LONGSWORD") {
        array.push(name)
      }
      if (items[i]["category"] == "BOW") {
        array.push(name)
      }
    } else if (category == "4TH_EQUIP") {
      if (items[i]["category"] == "GLOVES") {
        array.push(name)
      }
      if (items[i]["category"] == "BRACELET") {
        array.push(name)
      }
    } else {
      if (items[i]["category"] == (category)) {
        array.push(name)
      }
    }

  }
  let optionsStr = ''
  for (let i = 0; i < array.length; i++) {
    optionsStr = optionsStr + '<option value="' + array[i] + '">';
  }
  element.innerHTML = optionsStr
}


// https://api.hypixel.net/resources/skyblock/items old url
function changeElement(element, category) {
  url = 'skyitems.json'
  fetch(url).then(response =>
    response.json().then(data => ({
      data: data,
      status: response.status
    })
    ).then(res => {
      updateDropdowns(element, res.data.items, category)
    }));
}

changeElement($("helmets"), "HELMET")
changeElement($("chestplates"), "CHESTPLATE")
changeElement($("leggingss"), "LEGGINGS")
changeElement($("bootss"), "BOOTS")
changeElement($("necklaces"), "NECKLACE")
changeElement($("cloaks"), "CLOAK")
changeElement($("belts"), "BELT")
changeElement($("glovess"), "4TH_EQUIP")
changeElement($("weapons"), "WEAPON")


