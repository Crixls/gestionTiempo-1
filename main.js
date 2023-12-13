const searchInput= document.querySelector('.search input');
const searchButton= document.querySelector('.search button');
const weatherIcon = document.querySelector('.weatherIcon');

async function getWeather(city){
  try {
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09e16b8cf249c4538e01612a94f46a3d&units=metric`)
    if(response.status==404){
      document.querySelector('.error').style.display = "block";
    }else{
      document.querySelector('.error').style.display = "none";

    }
    const data = await response.json();
    document.querySelector('.celsius').innerHTML=Math.round(data.main.temp) + "ºC";
    document.querySelector('.city').innerHTML=data.name ;
    document.querySelector('.humedadPorcentaje').innerHTML=Math.round(data.main.humidity) + "%";
    document.querySelector('.velocidadViento').innerHTML=Math.round(data.wind.speed) + "km/h";


    let iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    weatherIcon.src = iconUrl;


  } catch (error) {
    console.error("Ha habido un error:", error);
  }
}


searchButton.addEventListener('click',()=>{
  getWeather(searchInput.value);
  weatherIcon.style.display='block';
})


