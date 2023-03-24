var baseURL = "https://api.openweathermap.org/data/2.5";
var apiKey = "d3fbc180b7f896f22cfd6ccc7b079e29";

var currentUrl = baseURL + "/weather?appid=" + apiKey + "&units=imperial";
var forecastUrl = baseURL + "/forecast?appid=" + apiKey + "&units=imperial";
var currentWeatherEl = $("#current-weather");

var day2 = $("#day2")

var getDay = dayjs();
var addDay = getDay.add(1, "d").format(" MM/DD/YY");



var trentonButton = document.querySelector("#trenton");

trentonButton.addEventListener("click", displayCurrentWeatherTrenton);

function getCurrentWeatherTrenton(currentWeatherData) {
    var city = currentWeatherData.name;
    console.log(currentWeatherData)
        currentWeatherEl.html(`<h1>${city}${dayjs().format(" (MM/DD/YY)")}</h1>`);
    // var currentTemp = data.main;
    //     currentWeather.append(`<h1>${"Temp: " + currentTemp.temp + " F"}</h1>`)
    // var wind = data.wind
    //     currentWeather.append(`<h1>${"Wind: " + wind.speed + " MPH"}</h1>`)
    // var humidity = data.main
    //     currentWeather.append(`<h1>${"Humidity: " + humidity.humidity + "%"} </h1>`)

}

function displayCurrentWeatherTrenton() {
    $.get(currentUrl + "&q=trenton").then(getCurrentWeatherTrenton);
    $.get(forecastUrl + "&q=trenton").then(getDay2Weather);
}

function getDay2Weather(data) {
    day2.append(`<h1>${addDay}</h1>`)
    var day2Temp = data.list[0].main;
        day2.append(`<h1>${"Temp: " + day2Temp.temp}</h1>`);
}

