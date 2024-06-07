const Api_key = "757e70353f767c3cf8643d2ddabf0eb8";
const form = document.querySelector("#my_form");
const input = document.querySelector("#city_input");
const temp = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const message = document.querySelector("#message");
const description = document.querySelector("#description");
const wind = document.querySelector("#wind");
const image = document.querySelector("#image");
// const city = document.querySelector("#cityName")
const feel = document.querySelector("#feel_like")
const maxTemp = document.querySelector("#temp_max")


const formHandler = async (event) =>{
  try {
    event.preventDefault();

    message.innerText = "loading...";
    temp.innerText = "";
    humidity.innerText = "";
    description.innerText = "";
    wind.innerText ="";
    image.src="";
    feel.innerText="";
    maxTemp.innerText="";
    
    const city = input.value;
    const response = await axios (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`);
    

    switch (response.data.weather[0].main){
       case 'Clear':
         image.src = 'image/clear-sky.png';
        break;
       case 'Clouds':
         image.src = 'image/clouds.png';
        break;
       case 'Rain':
         image.src = 'image/rain.png';
        break;
       case 'Snow':
         image.src = 'image/snow.png';
        break;
      case 'Mist':
          image.src = 'image/mist.png';
        break;
      case 'Haze':
          image.src = 'image/haze.png';
        break;
      case 'Thunderstorm':
          image.src = 'image/Thunderstorm.png';
        break;
      case 'Dust':
          image.src = 'image/Dust.png';
        break;
       default:
         image.src = '';
      }

      const roundedTemp = Math.round(response.data.main.temp);
      const roundMaxTemp = Math.round(response.data.main.temp_max)
    
    message.innerText = "";
    temp.innerText =  `${roundedTemp}°C`;
    feel.innerText= `Feels Like: ${response.data.main.feels_like}`
    humidity.innerText = `Humidity: ${response.data.main.humidity}%`;
    maxTemp.innerText = `Max Temp: ${roundMaxTemp}°C`
    description.innerText = ` ${response.data.weather[0].description}`
    wind.innerText = `Wind: ${response.data.wind.speed}Km/h`;
    // city.innerText = `${response.data.name};`

   
  console.log(response.data);
  } catch (error) {
        console.log(error);

    message.innerText = error?.response?.data?.message || "unknown error";
  }
}
form.addEventListener("submit", formHandler);