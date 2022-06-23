const options = {
	method: 'GET',
	headers: {
		'x-access-token': 'undefined',
		'X-RapidAPI-Key': '68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f',
		'X-RapidAPI-Host': 'aershov-openuv-global-real-time-uv-index-v1.p.rapidapi.com'
	}
};

fetch('https://aershov-openuv-global-real-time-uv-index-v1.p.rapidapi.com/api/v1/uv?lat=latitude%2C%20from%20-90.00%20to%2090.00&lng=longitude%2C%20from%20-180.00%20to%20180.00', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//FREE