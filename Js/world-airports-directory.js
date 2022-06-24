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
//works
