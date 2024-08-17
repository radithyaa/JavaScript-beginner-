const weatherForm = document.querySelector(`.weatherForm`);
const cityInput = document.querySelector(`.cityInput`);
const card = document.querySelector(`.card`);
const apikey = `6771a2b94e8522040836975335bcef34`;
const errorDisplay = document.querySelector(`.errorDisplay`);

weatherForm.addEventListener(`submit`, async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      console.log("weatherData: ", weatherData);
      displayWeatherInfo(weatherData);
    } catch (error) {
      displayError(error);
    }
  } else {
    displayError(`Please enter a city`);
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Could not get weather data`);
  }
  return await response.json();
}
function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.style.display = `flex`;
  const cityDisplay = document.querySelector(`.cityDisplay`);
  const tempDisplay = document.querySelector(`.tempDisplay`);
  const humidityDisplay = document.querySelector(`.humidityDisplay`);
  const descDisplay = document.querySelector(`.descDisplay`);
  const weatherEmoji = document.querySelector(`.weatherEmoji`);

  cityDisplay.style.display = `flex`;
  tempDisplay.style.display = `flex`;
  humidityDisplay.style.display = `flex`;
  descDisplay.style.display = `flex`;
  weatherEmoji.style.display = `flex`;
  errorDisplay.style.display = `none`;

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  humidityDisplay.textContent = `humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);
}
function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return `⛈️`;
    case weatherId >= 300 && weatherId < 400:
      return `🌦️`;
    case weatherId >= 500 && weatherId < 600:
      return `🌧️`;
    case weatherId >= 600 && weatherId < 700:
      return `❄️`;
    case weatherId >= 700 && weatherId < 800:
      return `💨`;
    case weatherId === 800:
      return `☀️`;
    case weatherId >= 801 && weatherId < 810:
      return `☁️`;
    default:
      return `❓`;
  }
}
function displayError(message) {
  errorDisplay.style.display = `block`;
  errorDisplay.textContent = message;
}
