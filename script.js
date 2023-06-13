const url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';

async function weather_update(city){
    const Response = await fetch(`${url}&q=${city}&appid=9b656a44a8fab3b3ec9e1e0eb66bfacb`)

    if(Response.status == 404){
        document.querySelector(".error").style.display = "flex"
        document.querySelector(".weather").style.display = "none";
     document.querySelector(".update").style.display = "none"
        
        return;
    }

    var data = await Response.json()

    console.log(data);
    var image_des = document.querySelector(".img_des")
    image_des.innerHTML = data.weather[0].main;

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C"
    document.querySelector(".humi").innerHTML = data.main.humidity+ " %"
    document.querySelector(".wind_speed").innerHTML = data.wind.speed + " Km/hr"

    const weather_icon = document.querySelector(".weather_icon")
    

    if(data.weather[0].main == "Clouds"){    
          weather_icon.src = "assests/clouds.png"
       }

       else if(data.weather[0].main == "Rain"){    
        weather_icon.src = "assests/rain.png"
     }

     else if(data.weather[0].main == "Drizzle"){    
        weather_icon.src = "assests/drizzle.png"
     }

     else if(data.weather[0].main == "Mist"){    
        weather_icon.src = "assests/mist.png"
     }

     else if(data.weather[0].main == "Clear"){    
        weather_icon.src = "assests/clear.png"
     }

     document.querySelector(".weather").style.display = "block";
     document.querySelector(".update").style.display = "flex"
     document.querySelector(".error").style.display = "none"


}

var search_input= document.getElementById("search_btn")
var search = document.getElementById("search_icon")

search.addEventListener("click",()=>{
   weather_update(search_input.value)  
})


