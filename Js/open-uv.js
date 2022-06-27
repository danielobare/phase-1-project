function openUv(){
	fetch(
		"https://aershov-openuv-global-real-time-uv-index-v1.p.rapidapi.com/api/v1/uv?lat=40&lng=90",
		{
		  headers: {
			'x-access-token': '86b89dffe3dde4c59668ee397ab9d088',
			"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
			"X-RapidAPI-Host": "aershov-openuv-global-real-time-uv-index-v1.p.rapidapi.com",
			"content-length": "899",
  			"content-type": "application/json; charset=utf-8"
		  }
	  }).then((response)=>{
		return response.text();
	}).then((data) => {
	setTimeout(() => {
	  console.log(data);
	}, "5000")
	})
}


async function openUvEvent(){
	document.getElementById('open-uv').innerHTML = openUv();
	document.getElementById('open-uv').innerHTML = openUv();
	document.getElementById('open-uv').innerHTML = openUv();
}

document.getElementById('btn5').addEventListener('click', openUvEvent());
//FREE


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