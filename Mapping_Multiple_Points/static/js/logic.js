// Console log to check working code
console.log("working");

// Create map object with center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 4);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create a marker for each city
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString()+ "</h3>")
    .addTo(map);
});

// Add marker for Los Angeles
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add circle marker
// let circleMarker = L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: '#ffffa1'
// }).addTo(map);

// Add circle
// let circle = L.circle([34.0522, -118.2437], {
//     radius: 100
// }).addTo(map);

//Create tile layer for background
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/streets-v11',
    //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);