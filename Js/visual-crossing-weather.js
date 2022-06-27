function visualCrossingWeather(){
	fetch(
		"https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0",
		{
		  headers: {
			"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
			"X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
			"access-control-allow-credentials": "true",
			"access-control-allow-headers": "X-Requested-With, Content-Type, X-Codingpedia",
			"access-control-allow-methods": "GET, POST, DELETE, PUT",
			"access-control-allow-origin": "*",
			"cache-control": "no-cache,no-transform",
			"connection": "keep-alive",
			"content-length": "3238",
			"content-type": "text/plain; charset=UTF-8",
			"date": "Thu, 23 Jun 2022 20:28:59 GMT",
			"server": "RapidAPI-1.2.8",
			"x-powered-by": "Visual Crossing Weather",
			"x-rapidapi-region": "AWS - eu-central-1",
			"x-rapidapi-version": "1.2.8",
			"x-ratelimit-requests-limit": "500",
			"x-ratelimit-requests-remaining": "496",
			"x-ratelimit-requests-reset": "2560268"
		  }
	  }).then((response)=>{
		return response.text();
	}).then((data) => {
	setTimeout(() => {
	  console.log(data);
	}, "5000")
	})
}
async function visualCrossingWeatherEvent(){
	document.getElementById('visual-crossing-weather').innerHTML = visualCrossingWeather();
	document.getElementById('visual-crossing-weather').innerHTML = visualCrossingWeather();
	document.getElementById('visual-crossing-weather').innerHTML = visualCrossingWeather();
	document.getElementById('visual-crossing-weather').innerHTML = visualCrossingWeather();
	document.getElementById('visual-crossing-weather').innerHTML = visualCrossingWeather();
}

document.getElementById('btn7').addEventListener('click', visualCrossingWeatherEvent());
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