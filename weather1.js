const weather = document.querySelector(".js-weather");

const COORDS_LS = "coords";
const API_KEY = //dotenv... 
function init(){
    loadGeo()
}
init();

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const name = json.name;
        weather.innerText = `${temp} @ ${name}`;
    })
}

function handleGeoSucces(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
    getWeather(latitude,longitude);
}

function handleError(){
    console.log("errorororo")
}
function loadGeo(){
    const currentCoords = localStorage.getItem(COORDS_LS);
    if(currentCoords === null){
        navigator.geolocation.getCurrentPosition(handleGeoSucces, handleError)
    }
    else{
        const parsedCoords = JSON.parse(currentCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}