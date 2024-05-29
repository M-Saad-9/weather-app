const Api_key = "757e70353f767c3cf8643d2ddabf0eb8";
const form = document.querySelector("#my_form");
const input = document.querySelector("#city_input");
const temp = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const message = document.querySelector("#message");
const description = document.querySelector("#description");
const wind = document.querySelector("#wind");

const formHandler = async (event) =>{
  try {
    event.preventDefault();

    message.innerText = "loading...";
    temp.innerText = "";
    humidity.innerText = "";
    description.innerText = "";
    wind.innerText ="";
    
    const city = input.value;
    const response = await axios 
    (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`);
    
  /*  switch (response.data.weather[0].main) {
        case 'Clear':
            Image.src = "image/clear.png";
            break;
         case 'Rain':
                Image.src = "image/rain.png";
            break;
         case 'Snow':
                Image.src = "image/snow.png";
            break;    
        case 'Clouds':
                Image.src = "image/cloud.png";
            break;
        case 'Mist':
                Image.src = "image/mist.png";
            break;
        case 'Haze':
                Image.src = "image/mist.png";
            break;
        default:
            Image.src = "";
    }*/

    message.innerText = "";
    temp.innerText = ` ${response.data.main.temp}°C`;
    humidity.innerText = `Humidity: ${response.data.main.humidity}%`;
    description.innerText = ` ${response.data.weather[0].description}`
    wind.innerText = `wind: ${response.data.wind.speed}Km/h`;

   console.log("🚀 ~ formHandler ~ response:", response.data);
  } catch (error) {
        console.log(error);

    message.innerText = error?.response?.data?.message || "unknown error";
  }
}
form.addEventListener("submit", formHandler);















/*document.getElementById('get-weather-btn').addEventListener('click', function() {
   
    
    const city = document.getElementById('city-input').value;
    
   
    const apiKey = '757e70353f767c3cf8643d2ddabf0eb8';  
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const cityName = data.name;
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                document.getElementById('city-name').innerText = `Weather in ${cityName}`;
                document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
                document.getElementById('description').innerText = `Description: ${description}`;
            } else {
                document.getElementById('city-name').innerText = 'City not found';
                document.getElementById('temperature').innerText = '';
                document.getElementById('description').innerText = '';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('city-name').innerText = 'Error fetching weather data';
            document.getElementById('temperature').innerText = '';
            document.getElementById('description').innerText = '';
        });
});*/
