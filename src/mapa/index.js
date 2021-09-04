let map
let valueRoute
let initialPoint = { lat: -15.7620871, lng: -47.9331125 }
let zoom = 20

function getValueSelect() {
  var select = document.getElementById('selectRoute')
  value = select.options[select.selectedIndex].value
  valueRoute = null
  if (value == 'abc') {
    valueRoute = abc
    initialPoint = { lat: -15.9606191, lng: -47.8139624 }
    zoom = 15
  } else if (value == 'aguaFria') {
    valueRoute = aguaFria
    initialPoint = { lat: -14.9810414, lng: -47.7817135 }
    zoom = 15
  } else if (value == 'alexaniaCocalzinho') {
    valueRoute = alexaniaCocalzinho
    initialPoint = { lat: -15.7799827, lng: -48.777528 }
    zoom = 15
  } else if (value == 'brasilia') {
    valueRoute = brasilia
    initialPoint = { lat: -15.8108427, lng: -47.8777927 }
    zoom = 13
  } else if (value == 'buritis') {
    valueRoute = buritis
    initialPoint = { lat: -15.6288053, lng: -46.438609 }
    zoom = 15
  } else if (value == 'camposBelos') {
    valueRoute = camposBelos
    initialPoint = { lat: -13.0370624, lng: -46.7810544 }
    zoom = 15
  } else if (value == 'corumba') {
    valueRoute = corumba
    initialPoint = { lat: -15.9244979, lng: -48.8156906 }
    zoom = 15
  } else if (value == 'cristalina') {
    valueRoute = cristalina
    initialPoint = { lat: -16.7725692, lng: -47.629815 }
    zoom = 14
  } else if (value == 'formosa') {
    valueRoute = formosa
    initialPoint = { lat: -15.5455007, lng: -47.3354505 }
    zoom = 14
  } else if (value == 'iaciara') {
    valueRoute = iaciara
    initialPoint = { lat: -14.1017103, lng: -46.6409794 }
    zoom = 15
  } else if (value == 'luziania') {
    valueRoute = luziania
    initialPoint = { lat: -16.2403782, lng: -47.9139437 }
    zoom = 14
  } else if (value == 'paddf') {
    valueRoute = paddf
    initialPoint = { lat: -16.0023219, lng: -47.5624318 }
    zoom = 15
  } else if (value == 'padreBernardo') {
    valueRoute = padreBernardo
    initialPoint = { lat: -15.1727799, lng: -48.2977044 }
    zoom = 15
  } else if (value == 'sobradinho') {
    valueRoute = sobradinho
    initialPoint = { lat: -15.6505997, lng: -47.7839185 }
    zoom = 14
  } else if (value == 'tocantins') {
    valueRoute = tocantins
    initialPoint = { lat: -11.4082699, lng: -48.8093843 }
    zoom = 9
  } else if (value == 'unai') {
    valueRoute = unai
    initialPoint = { lat: -16.3647554, lng: -46.8910415 }
    zoom = 15
  } else if (value == 'base') {
    initialPoint = { lat: -15.7620871, lng: -47.9331125 }
    zoom = 20
  }
  initMap()
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    //center: { lat: -15.7620871, lng: -47.9331125 },
    center: initialPoint,
    zoom: zoom,
    mapTypeId: 'satellite'
  })

  var locations = valueRoute

  const infoWindow = new google.maps.InfoWindow()

  var directionsService = new google.maps.DirectionsService()

  var directionsDispla = new google.maps.DirectionsRenderer()

  let baseGenetica = { lat: -15.7619153, lng: -47.933133 }
  new google.maps.Marker({
    position: baseGenetica,
    map,
    title: 'Base Genética',
    label: { text: 'Base Genética', fontWeight: 'bold', fontSize: "12px" },
    optimized: false
  })


  locations?.forEach(([position, nomeCliente], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${nomeCliente}`,
      label: { text: `${nomeCliente}`, fontWeight: "bold", fontSize: "15px" },
      optimized: false,
    });

    const contentWindow =
      `<div>
        <h4>${nomeCliente}</h4>
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