function openWeatherMap(){
	fetch(
		"https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml",
		{
		  headers: {
			"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
			"X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
			"access-control-allow-credentials": "true",
			"access-control-allow-methods": "GET, POST",
			"access-control-allow-origin": "*",
			"connection": "keep-alive",
			"content-length": "476",
			"content-type": "text/plain; charset=utf-8",
			"date": "Thu, 23 Jun 2022 20:28:04 GMT",
			"server": "RapidAPI-1.2.8",
			"x-cache-key": "/data/2.5/weather?callback=test&id=2172797&lang=null&lat=0&lon=0&mode=xml&q=london%2cuk&units=imperial",
			"x-rapidapi-region": "AWS - eu-central-1",
			"x-rapidapi-version": "1.2.8",
			"x-ratelimit-basic-limit": "500",
			"x-ratelimit-basic-remaining": "494",
			"x-ratelimit-basic-reset": "2560596"
		  }
	  }).then((data) => {
		setTimeout(() => {
		  console.log(data);
		}, "5000")
		})
}

async function openWeatherMapEvent(){
	document.getElementById('open-weather-map').innerHTML = openWeatherMap();
	document.getElementById('open-weather-map').innerHTML = openWeatherMap();
	document.getElementById('open-weather-map').innerHTML = openWeatherMap();
}

document.getElementById('btn6').addEventListener('click', openWeatherMapEvent());

//freemium

function flightRadar(){
	fetch('https://flight-radar1.p.rapidapi.com/airports/list', {
	"method": 'GET',
	"headers": {
		"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
		"X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
		"access-control-allow-credentials": "true",
		"access-control-allow-headers": "ver",
		"access-control-allow-methods": "GET, POST",
		"access-control-allow-origin": "",
		"connection": "keep-alive",
		"content-type": "application/json",
		"date": "Thu, 23 Jun 2022 20:22:05 GMT",
		"server": "RapidAPI-1.2.8",
		"transfer-encoding": "chunked",
		"x-rapidapi-region": "AWS - eu-central-1",
		"x-rapidapi-version": "1.2.8",
		"x-ratelimit-requests-limit": "500",
		"x-ratelimit-requests-remaining": "492",
		"x-ratelimit-requests-reset": "2560361",
  },
})
    .then(result => result.json())
    .then(data => {
        console.log("data",data);
    });
}

function flightRadarEvent(){
	document.getElementById('flight-radar').innerText = flightRadar();
}


document.getElementById('Submit1').addEventListener('click', () => flightRadarEvent());