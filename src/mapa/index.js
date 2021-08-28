let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -15.7620871, lng: -47.9331125 },
    zoom: 20,
  })

  var locations = [
    [{ lat: -15.8373048, lng: -48.1183911 }, "Natan Silva"],
    [{ lat: -15.8468551, lng: -48.1114824 }, "Zé Maria"]
  ];

  const infoWindow = new google.maps.InfoWindow()



  locations.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: { text: `${title}`, fontWeight: "bold", fontSize: "15px" },
      optimized: false,
    });

    const contentWindow =
      `<div>
        <h4>${title}</h4>
        <p>Telefone: </p>
        <p>Caseiro: </p>
      <div>`

    marker.addListener("click", () => {
      infoWindow.close()
      infoWindow.setContent(contentWindow)
      infoWindow.open(marker.getMap(), marker)
    })
  })

}