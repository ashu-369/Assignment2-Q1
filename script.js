const apiKey = 'aa108d45b8627fa5d5a9243842764943';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

function fetchWeather() {
  const url = `${apiUrl}?q=Calgary&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
      descriptionElement.textContent = `Description: ${data.weather[0].description}`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

fetchWeather();