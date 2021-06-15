const API_KEY = "515755659e20de54c042c0554ea59569";
const weatherContainer = document.getElementById("weather");
const spanLocal = weatherContainer.querySelector("span:first-child");
const spanWeather = weatherContainer.querySelector("span:last-child");


function onGeo(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response  => response.json())
    .then(data =>{
        spanLocal.innerText = data.name;
        spanWeather.innerText = `${data.main.temp}°C  /${data.weather[0].main} `

    });

}
function onGeoError(){
    alert ("I can't find you");
}

navigator.geolocation.getCurrentPosition(onGeo,onGeoError);
