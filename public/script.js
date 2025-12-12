const apiKey = "7b7ab558453a848230e01cf9184f513a";

async function getWeather() {

    const userCity = document.getElementById("cityInput").value; 


    const baseURL = "https://api.openweathermap.org/data/2.5/forecast";
    const url = `${baseURL}?q=${encodeURIComponent(userCity)}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data = await response.json();
     // an array of forecast data from weather API 

     //extracting weather from data array 
     const first = data.list[0];
     const weather = first.weather[0];

     document.querySelector(".weatherReport").innerHTML = `
            <h2>${data.city.name}, ${data.city.country}</h2>
            <p><strong>${first.dt_txt}</strong></p>
            <p>Temperature: ${first.main.temp}°C</p>
            <p>Feels Like: ${first.main.feels_like}°C</p>
            <p>Condition: ${weather.description}</p>
            <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png">
        `;

     document.querySelector(".weatherReport").classList.add("showBorder");

}


function cycleColors(){
    const colors = ["red", "blue", "green", "purple", "orange"];
    const title = document.getElementById("Heading");

    let index = 0;
    
    setInterval(() => {
        title.style.color = colors[index];
        index = (index + 1) % colors.length;

    }, 1000);
    

}

cycleColors();



