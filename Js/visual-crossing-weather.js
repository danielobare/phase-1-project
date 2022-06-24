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
async function geoServicesEvent(){
	document.getElementById('geo-services').innerHTML = geoServices();
}

document.getElementById('btn2').addEventListener('click', geoServicesEvent());
//freemium