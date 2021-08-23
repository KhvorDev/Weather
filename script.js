// Массив с сайтом погоды и ключом для получения данных
const param = {
    'url': 'https://api.openweathermap.org/data/2.5/',
    'appid': '9f94691136df82fd98ba8983de7386f9',
}
const cityName = document.querySelector('.city-name');

function getWeatherByCityName() {
    fetch(`${param.url}weather?q=${cityName.value}&appid=${param.appid}`)
        .then(resp => resp.json())
        .then(resp => showWeather(resp))
}
cityName.onchange = getWeatherByCityName;

// Функция выводит погодные днные на страницу
function showWeather(resp) {
    const temp = document.querySelector('#temp');
    const pressure = document.querySelector('#pressure');
    const humidity = document.querySelector('#humidity');
    const wind = document.querySelector('#wind');
    const visibility = document.querySelector('#visibility');
    const weatherIcon = document.querySelector('.weather-icon');

    temp.innerHTML = Math.floor(resp.main.temp - 273) + '&deg';
    pressure.innerHTML = resp.main.pressure + ' мм';
    humidity.innerHTML = resp.main.humidity + ' %';
    visibility.innerHTML = (resp.visibility / 1000) + ' км';
    wind.innerHTML = resp.wind.speed + ' м/с';
    weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${resp.weather[0].icon}@2x.png">`;

}



