function nameToID(name) {
  url = 'https://api.hypixel.net/resources/skyblock/items'
  fetch(url).then(response =>
    response.json().then(data => ({
      data: data,
      status: response.status
    })
    ).then(res => {
      for (let i = 0; i < res.data.items.length; i++) {
        if(res.data.items[i]["name"] == name) {
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
  for (let i = 0; i < array.length; i++) {
    element.options[element.options.length] = new Option(array[i], array[i]);
  }
}

function changeElement(element, category) {
  url = 'https://api.hypixel.net/resources/skyblock/items'
  fetch(url).then(response =>
    response.json().then(data => ({
      data: data,
      status: response.status
    })
    ).then(res => {
      updateDropdowns(element, res.data.items, category)
    }));
}

changeElement(document.getElementById("helmet"), "HELMET")
changeElement(document.getElementById("chestplate"), "CHESTPLATE")
changeElement(document.getElementById("leggings"), "LEGGINGS")
changeElement(document.getElementById("boots"), "BOOTS")
changeElement(document.getElementById("necklace"), "NECKLACE")
changeElement(document.getElementById("cloak"), "CLOAK")
changeElement(document.getElementById("belt"), "BELT")
changeElement(document.getElementById("gloves"), "4TH_EQUIP")
changeElement(document.getElementById("weapon"), "WEAPON")


