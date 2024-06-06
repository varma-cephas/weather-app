const city_name_input = document.querySelector(".city-name-input");
const search_weather_container = document.querySelector(".search-weather-container");
const city_name = document.querySelector(".city-name");
const weather_icon = document.querySelector(".weather-icon");
const wind_percentage = document.querySelector(".wind-percentage");
const humidity_percentage = document.querySelector(".humidity-percentage");
const current_temperature = document.querySelector(".current-temperature");
let currentWeather, windSpeed, humidity, temperature;

async function fetchWeatherData(cityName){
    const responseGeolacation = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=586d47e17b7dd94ea91ef9f9e6785a3e`, {referrerPolicy: "unsafe-url"});
    const geolocationData = await responseGeolacation.json();
    const responseWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geolocationData[0].lat}&lon=${geolocationData[0].lon}&appid=586d47e17b7dd94ea91ef9f9e6785a3e`, {referrerPolicy: "unsafe-url"});
    const weatherData = await responseWeatherData.json();
    currentWeather = weatherData.weather[0].main.toLowerCase();
    windSpeed = weatherData.wind.speed;
    humidity = weatherData.main.humidity;
    temperature = weatherData.main.temp;
    console.log(weatherData)
}

fetchWeatherData("Monrovia")