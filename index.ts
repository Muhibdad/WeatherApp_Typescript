export {};
interface WeatherData {
    name: string;
    sys: {
      country: string;
    };
    main: {
      temp: number;
    };
    weather: {
      description: string;
    }[];
    wind: {
      speed: number;
    };
  }
  
  let lon='67.00993879999999';
  let lat='24.8614622';
  const apiKey = '78de97745b0139c2006fdcc849b4a29c';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
  function fetchWeatherData(): void {
    const tableBody = document.getElementById('weatherTableBody') as HTMLTableSectionElement;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== 200) {
          throw new Error(data.message);
        }
        const weatherData: WeatherData = data;
        const row = tableBody.insertRow();
        const locationCell = row.insertCell();
        locationCell.innerText = `${weatherData.name}, ${weatherData.sys.country}`;
        const temperatureCell = row.insertCell();
        temperatureCell.innerText = `${weatherData.main.temp}°C`;
        const weatherDescriptionCell = row.insertCell();
        weatherDescriptionCell.innerText = weatherData.weather[0].description;
        const windSpeedCell = row.insertCell();
        windSpeedCell.innerText = `${weatherData.wind.speed} m/s`;
      })
      .catch((error) => {
        console.error(error);
        // Handle the error here
      });
  }
  
  fetchWeatherData();
  