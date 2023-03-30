var lon = '67.00993879999999';
var lat = '24.8614622';
var apiKey = '78de97745b0139c2006fdcc849b4a29c';
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(apiKey);
function fetchWeatherData() {
    var tableBody = document.getElementById('weatherTableBody');
    fetch(apiUrl)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        if (data.cod !== 200) {
            throw new Error(data.message);
        }
        var weatherData = data;
        var row = tableBody.insertRow();
        var locationCell = row.insertCell();
        locationCell.innerText = "".concat(weatherData.name, ", ").concat(weatherData.sys.country);
        var temperatureCell = row.insertCell();
        temperatureCell.innerText = "".concat(weatherData.main.temp, "\u00B0C");
        var weatherDescriptionCell = row.insertCell();
        weatherDescriptionCell.innerText = weatherData.weather[0].description;
        var windSpeedCell = row.insertCell();
        windSpeedCell.innerText = "".concat(weatherData.wind.speed, " m/s");
    })
        .catch(function (error) {
        console.error(error);
        // Handle the error here
    });
}
fetchWeatherData();
