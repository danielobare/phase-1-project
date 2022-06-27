function worldAirportsDirectory(){
	fetch(
		"https://world-airports-directory.p.rapidapi.com/v1/airports/dub?page=1&limit=20&sortBy=AirportName%3Aasc",
		{
		  headers: {
			"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
			"X-RapidAPI-Host": "world-airports-directory.p.rapidapi.com",
			"access-control-allow-credentials": "true",
			"access-control-allow-origin": "*",
			"connection": "keep-alive",
			"content-length": "2625",
			"content-security-policy": "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
			"content-type": "application/json; charset=utf-8",
			"date": "Thu, 23 Jun 2022 20:30:23 GMT",
			"etag": "W/\"a41-l+WvAdG4VBgLGxcGqf99gZzcmRA\"",
			"expect-ct": "max-age=0",
			"referrer-policy": "no-referrer",
			"server": "RapidAPI-1.2.8",
			"strict-transport-security": "max-age=15552000; includeSubDomains",
			"vary": "Accept-Encoding",
			"via": "1.1 vegur",
			"x-content-type-options": "nosniff",
			"x-dns-prefetch-control": "off",
			"x-download-options": "noopen",
			"x-frame-options": "SAMEORIGIN",
			"x-permitted-cross-domain-policies": "none",
			"x-rapidapi-region": "AWS - eu-central-1",
			"x-rapidapi-version": "1.2.8",
			"x-ratelimit-requests-limit": "500",
			"x-ratelimit-requests-remaining": "491",
			"x-ratelimit-requests-reset": "52025",
			"x-xss-protection": "0",
		  }
	  }).then((response)=>{
		return response.json();
	}).then((data) => {
	setTimeout(() => {
	  console.log(data);
	}, "5000")
	})
}

async function worldAirportsDirectoryEvent(){
	setTimeout(() => {
		document.getElementById('world-airports-directory').innerHTML = worldAirportsDirectory();
	}, "5000")
	document.getElementById('world-airports-directory').innerHTML = worldAirportsDirectory();
	document.getElementById('world-airports-directory').innerHTML = worldAirportsDirectory();
	document.getElementById('world-airports-directory').innerHTML = worldAirportsDirectory();
	document.getElementById('world-airports-directory').innerHTML = worldAirportsDirectory();
	document.getElementById('world-airports-directory').innerHTML = worldAirportsDirectory();
	document.getElementById('world-airports-directory').innerHTML = worldAirportsDirectory();
}

document.getElementById('btn8').addEventListener('click', worldAirportsDirectoryEvent());

//freemium
//works


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