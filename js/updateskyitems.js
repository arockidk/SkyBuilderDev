// this function will call the api and get the newest skyitems
function updateSkyItems() {
  url = 'https://api.hypixel.net/resources/skyblock/items'
  fetch(url).then(response =>
    response.json().then(data => ({
      data: data,
      status: response.status
    })
    ).then(res => {
      var newJson = JSON.stringify(res.data.items, undefined, 4);
      var txtFile = new File("skyitems.json");
      txtFile.writeln(newJson);
      txtFile.close();
    }));
}
}