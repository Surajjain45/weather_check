const apikey = "1ca0aa7685mshfa6321e9374473bp1a21f4jsne54dba950c76"
const apiurl = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle&appid=1ca0aa7685mshfa6321e9374473bp1a21f4jsne54dba950c76"
async function checkweather(){
    const Response = await fetch(apiurl, {method: "get", mode: 'no-cors',
    headers: {
        "Content-Type": "application/json"
   },})
    var data = await Response.json()

    console.log(data)
}

console.log("suraj")
checkweather();