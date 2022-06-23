function flightRadar() {
	fetch(
		"https://flight-radar1.p.rapidapi.com/airports/list", {
			headers: {
				"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
				"X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
				"access-control-allow-credentials": "true",
				"access-control-allow-headers": "ver",
				"access-control-allow-methods": "GET, POST",
				"access-control-allow-origin": "*",
				"connection": "keep-alive",
				"content-type": "application/json",
				"date": "Thu, 23 Jun 2022 20:22:05 GMT",
				"server": "RapidAPI-1.2.8",
				"transfer-encoding": "chunked",
				"x-rapidapi-region": "AWS - eu-central-1",
				"x-rapidapi-version": "1.2.8",
				"x-ratelimit-requests-limit": "500",
				"x-ratelimit-requests-remaining": "492",
				"x-ratelimit-requests-reset": "2560361"
			}
		}).then((response) => {
		return response.text();
	}).then((data) => {
		console.log(data)
	  });
}

flightRadar();

//freemium