const do_somethng = function(response){
    return response.json();
}

// default function

const handle_data = function(res){
    const user_arr = res.main;
    const user_weather = res.weather;
    const temp = document.getElementById('temp_container');
    const weather = document.getElementById('weather_container');
    const max = document.getElementById('max_temp');
    const min = document.getElementById('min_temp');
    const location = document.getElementById('location')
    const img = document.getElementById('img');
    const input = document.getElementById('txt_input');
    const feel_like = document.getElementById('temp')
    const location2 = document.getElementById('location2')
    const high = document.getElementById('high')
    const low = document.getElementById('low')
    const wind = document.getElementById('wind')
    const pressure = document.getElementById('pressure')
    const visibility = document.getElementById('visibility')
    visibility.innerText = res.visibility;
    pressure.innerText = `${user_arr.pressure} mb`
    wind.innerText = `${res.wind.speed}km/h`;
    low.innerHTML = `${user_arr.temp_min}&deg;` 
    high.innerHTML = ` ${user_arr.temp_max}&deg;`
    feel_like.innerHTML = `${user_arr.temp}&deg;`
    location2.innerText = `${res.name} ${res.sys.country}`
    input.value = res.name;
    if(user_weather[0].main == "Clear"){
        img.src = "./sunny.png";
    }
   else if(user_weather[0].main == "Haze"){
     img.src = "./haza.png";
 }
 else if(user_weather[0].main == "Smoke"){
     img.src = "./smoke.png";
 }
 else if(user_weather[0].main == "Clouds"){
     img.src = "./clouds.png";
 }
 else if(user_weather[0].main == "Mist"){
     img.src = "./mist.png";
 }
     else{
         img.src = "./sunny.png";
     }
    temp.innerHTML = `${user_arr.temp}&deg;`
    weather.innerText = user_weather[0].main
    max.innerHTML = `Max ${user_arr.temp_max}&deg;`
    min.innerHTML = `Min ${user_arr.temp_min}&deg;`
    location.innerText = `${res.name} ${res.sys.country}`
    console.log(user_weather)

}

// auto detect geolocatin 

const api_key ='2fd451fc1dc8157474eadd147680826c'
var lat;
var long;
if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(successFunction);
}
else 
{
    alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
}       

function successFunction(position) 
{
 var lat = position.coords.latitude;
 var long = position.coords.longitude;
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${api_key}`)
.then(do_somethng).then(handle_data);
}

// Handle search function

const handle_search = function(res){
    const user_arr = res.main;
    const user_weather = res.weather;
    const temp = document.getElementById('temp_container');
    const weather = document.getElementById('weather_container');
    const max = document.getElementById('max_temp');
    const min = document.getElementById('min_temp');
    const location = document.getElementById('location')
    const img = document.getElementById('img');
    const feel_like = document.getElementById('temp')
    const location2 = document.getElementById('location2')
    const high = document.getElementById('high')
    const low = document.getElementById('low')
    const wind = document.getElementById('wind')
    const pressure = document.getElementById('pressure')
    const visibility = document.getElementById('visibility')
    visibility.innerText = res.visibility;
    pressure.innerText = `${user_arr.pressure} mb`
    wind.innerText = `${res.wind.speed}km/h`;
    low.innerHTML = `${user_arr.temp_min}&deg;` 
    high.innerHTML = ` ${user_arr.temp_max}&deg;`
    feel_like.innerHTML = `${user_arr.temp}&deg;`
    location2.innerText = `${res.name} ${res.sys.country}`
   if(user_weather[0].main == "Clear"){
       img.src = "./sunny.png";
   }
  else if(user_weather[0].main == "Haze"){
    img.src = "./haza.png";
}
else if(user_weather[0].main == "Smoke"){
    img.src = "./smoke.png";
}
else if(user_weather[0].main == "Clouds"){
    img.src = "./clouds.png";
}
else if(user_weather[0].main == "Mist"){
    img.src = "./mist.png";
}
    else{
        img.src = "./sunny.png";
    }
    
    temp.innerHTML = `${user_arr.temp}&deg;`
    weather.innerText = user_weather[0].main
    max.innerHTML = `Max ${user_arr.temp_max}&deg;`
    min.innerHTML = `Min ${user_arr.temp_min}&deg;`
    location.innerText = `${res.name} ${res.sys.country}`

}
const search_fn = function(){
    const input = document.getElementById('txt_input');
    const city_name = input.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${api_key}`)
.then(do_somethng).then(handle_search);

}
const btn = document.getElementById('btn');
btn.addEventListener('click',search_fn)


   