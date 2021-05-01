let WeatherImage = document.querySelector('.weather-image');
let WeatherText = document.querySelector('.weather-text');
let WeatherTempCurrent = document.querySelector('.weather-temp-current span');
let WeatherTempMin = document.querySelector('.weather-temp-minmax .min');
let WeatherTempMax = document.querySelector('.weather-temp-minmax .max');

fetch('https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=9b5ab4e1d0fae40ec42014df9531bfff')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        console.log(myJson.weather[0].main);
        console.log(myJson.weather[0].icon);
        console.log(myJson.main.temp - 273.15);
        console.log(myJson.main.temp_max - 273.15);
        console.log(myJson.main.temp_min - 273.15);

        WeatherImage.src = '../images/' + myJson.weather[0].icon + '01d@2x';
        WeatherText.innerHTML = myJson.weather[0].main;
        WeatherTempCurrent.innerHTML = myJson.main.temp - 273.15;
        WeatherTempMin.innerHTML = myJson.main.temp_max - 273.15;
        WeatherTempMax.innerHTML = myJson.main.temp_min - 273.15;
    });


