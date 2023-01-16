/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

const getWeatherData = (city) => {
    const URL = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2fa5784288msh153caa3f716b61fp15dd72jsn5e953fe445ad',
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
      }
    };

    return fetch(URL, options)
    .then(response => response.json()) // the response => response.json() callback is used to parse the Response object as JSON.
    .then(data => data) // This callback function simply returns the data, which is then passed to the next .then method in the chain.
    .catch(err => console.error(err));
}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const data = await getWeatherData(city)
  showWeatherData(data)
  // The await expression causes searchCity to pause execution until the getWeatherData promise resolves. This is useful because it allows the program to do other things while it is waiting for the getWeatherData function to finish executing.

  // If you don't do async the showWeatherData() will run first without the getWeatherData() being called first to display data
  
}


const showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.location.city;
    document.getElementById("weather-type").innerText = weatherData.current_observation.condition.text;
    document.getElementById("temp").innerText = weatherData.current_observation.condition.temperature;
    document.getElementById("sun-rise").innerText = weatherData.current_observation.astronomy.sunrise;
    document.getElementById("sun-set").innerText = weatherData.current_observation.astronomy.sunset;
  }
