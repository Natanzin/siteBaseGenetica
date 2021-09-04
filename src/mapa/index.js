let map
var valueRoute

var abc = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "abc"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "abc"]
];
var aguaFria = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "agua fria"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "agua fria"]
];
var alexaniaCocalzinho = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "alexania"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "cocalzinho"]
];
var brasilia = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "brasilia"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "brasilia"]
];
var buritis = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "Buritis"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "Buritis"]
];
var camposBelos = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "campos Belos"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "campos belos "]
];
var corumba = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "corumbá"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "corumbá "]
];
var cristalina = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "cristalina"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "cristalina"]
];
var formosa = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "formosa"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "formosa"]
];
var iaciara = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "iaciara"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "iaciara"]
];
var luziania = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "luziania"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "luziania"]
];
var paddf = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "Pad-df"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "Pad-df"]
];
var padreBernardo = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "Padre Bernardo"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "Padre Bernardo"]
];
var sobradinho = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "Sobradinho"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "Sobradinho"]
];
var tocantins = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "Tocantins"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "Tocantins"]
];
var unai = [
  [{ lat: -15.8373048, lng: -48.1183911 }, "Unaí"],
  [{ lat: -15.8468551, lng: -48.1114824 }, "Unaí"]
];

function getValueSelect() {
  var select = document.getElementById('selectRoute')
  value = select.options[select.selectedIndex].value
  valueRoute = null
  if (value == 'abc') {
    valueRoute = abc
  } else if (value == 'aguaFria') {
    valueRoute = aguaFria
  } else if (value == 'alexaniaCocalzinho') {
    valueRoute = alexaniaCocalzinho
  } else if (value == 'brasilia') {
    valueRoute = brasilia
  }else if(value == 'buritis'){
    valueRoute = buritis
  } else if (value == 'camposBelos') {
    valueRoute = camposBelos
  } else if (value == 'corumba') {
    valueRoute = corumba
  } else if (value == 'cristalina') {
    valueRoute = cristalina
  } else if (value == 'formosa') {
    valueRoute = formosa
  } else if (value == 'iaciara') {
    valueRoute = iaciara
  } else if (value == 'luziania') {
    valueRoute = luziania
  } else if (value == 'paddf') {
    valueRoute = paddf
  } else if (value == 'padreBernardo') {
    valueRoute = padreBernardo
  } else if (value == 'sobradinho') {
    valueRoute = sobradinho
  } else if (value == 'tocantins') {
    valueRoute = tocantins
  } else if (value == 'tocantins') {
    valueRoute = tocantins
  } else if (value == 'unai') {
    valueRoute = unai
  }
  initMap()
  console.log(valueRoute ? {valueRoute} : value)
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    //center: { lat: -15.7620871, lng: -47.9331125 },
    center: { lat: -15.8430001, lng: -48.1101395 },
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  })

  var locations = valueRoute

  const infoWindow = new google.maps.InfoWindow()

  var directionsService = new google.maps.DirectionsService()

  var directionsDispla = new google.maps.DirectionsRenderer()


  locations?.forEach(([position, title], i) => {
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