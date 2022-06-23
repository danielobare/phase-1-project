const options = {
	method: 'GET',
	headers: {
		'x-access-token': '86b89dffe3dde4c59668ee397ab9d088',
		'X-RapidAPI-Key': '68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f',
		'X-RapidAPI-Host': 'aershov-openuv-global-real-time-uv-index-v1.p.rapidapi.com'
	}
};

fetch('https://aershov-openuv-global-real-time-uv-index-v1.p.rapidapi.com/api/v1/uv?lat=40&lng=70', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//FREE