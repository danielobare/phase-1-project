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
