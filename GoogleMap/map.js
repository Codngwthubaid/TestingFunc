navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position);
    setUpMap(position.coords.longitude, position.coords.latitude)
}

function errorLocation() {
    setUpMap([78.9629, 20.5937])
}

function setUpMap(center) {
    mapboxgl.accessToken = 'pk.eyJ1IjoibHVsbGFob29ubWFpbiIsImEiOiJjbTI1Z29temcwOG9nMmlzNnI2ZXliemEwIn0.QfWCthiJyT_Kor6epHkzeQ';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 1.8,
        center: center
    });

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });
    map.addControl(directions, "top-left")
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav, "top-right")
}

setUpMap()

