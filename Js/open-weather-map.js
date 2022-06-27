function openWeatherMap() {
	fetch(
			"https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml", {
				method: "GET",
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
				},
			}
		)
		.then((result) => result.json())
		.then(text => {
			// console.log("data",data);
			let main = document.getElementById('open-weather-map')
			main.innerHTML = text;
		});
}

// function openWeatherMapEvent() {
// 	document.getElementById("open-weather-map").innerText = openWeatherMap();
// }

document.addEventListener("DOMContentLoaded", () => {
	let btn = document.getElementById("Submit6");
	btn.addEventListener("click", () => {
		openWeatherMap();
	});
});

//freemium
