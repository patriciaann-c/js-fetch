const url = "https://api.open-meteo.com/v1/forecast?latitude=5.46427&longitude=9.18951&current_weather=true"

fetch(url).then(res => res.json()).then(data => {
    console.log(data);

    const temperature = document.querySelector("#temperature");
    const windSpeed = document.querySelector("#wind-speed");

    temperature.textContent += " " + data.current_weather.temperature + " " + data.current_weather_units.temperature
    windSpeed.textContent += " " + data.current_weather.windspeed + " " + data.current_weather_units.windspeed

})