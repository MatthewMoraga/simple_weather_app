var baseURL = "https://api.openweathermap.org/data/2.5/";
var apiKey = "d3fbc180b7f896f22cfd6ccc7b079e29";

var url = baseURL + "/weather?appid=" + apiKey + "&units=imperial";
var currentWeather = $("#current-weather");

var trentonButton = document.querySelector("#trenton");

trentonButton.addEventListener("click", displayCurrentWeatherTrenton);

function getCurrentWeatherTrenton(data) {
    var city = data.name;
        currentWeather.append(`<h1>${city}${dayjs().format(" (MM/DD/YY)")}</h1>`);
        console.log(data)
    var currentTemp = data.main;
        currentWeather.append(`<h1>${"Temp: " + currentTemp.temp + " F"}</h1>`)
    var wind = data.wind
        currentWeather.append(`<h1>${"Wind: " + wind.speed + " MPH"}</h1>`)
    var humidity = data.main
        currentWeather.append(`<h1>${"Humidity: " + humidity.humidity + "%"} </h1>`)
}

function displayCurrentWeatherTrenton() {
    $.get(url + "&q=trenton").then(getCurrentWeatherTrenton);
}

