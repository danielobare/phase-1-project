function googleFlightSearch(){
	fetch('https://google-flights-search.p.rapidapi.com/search?departure_airport_code=SFO&arrival_airport_code=LAX&flight_class=Economy', {
	"method": 'GET',
	"headers": {
		"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
		"X-RapidAPI-Host": "google-flights-search.p.rapidapi.com",
		"access-control-allow-credentials": "true",
		"access-control-allow-origin": "#",
		"access-control-expose-headers": "x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, access-control-allow-origin, accept-ranges, age, allow, cache-control, connection, content-encoding, content-language, content-length, content-location, content-md5, content-disposition, content-range, content-type, date, etag, expires, last-modified, link, location, p3p, pragma, proxy-authenticate, refresh, retry-after, server, set-cookie, status, strict-transport-security, trailer, transfer-encoding, upgrade, vary, via, warning, www-authenticate, x-frame-options, public-key-pins, x-xss-protection, content-security-policy, x-content-security-policy, x-webkit-csp, x-content-type-options, x-powered-by, x-ua-compatible, X-RateLimit-Requests-Limit, X-RateLimit-Requests-Remaining, X-RateLimit-Requests-Reset, x-rapidapi-region, x-rapidapi-proxy-response, x-rapidapi-version, access-control-allow-credentials, x-ratelimit-requests-reset, x-ratelimit-requests-limit, x-ratelimit-requests-remaining, access-control-expose-headers",
		"connection": "keep-alive",
		"content-length": "226",
		"content-type": "application/json",
		"date": "Thu, 23 Jun 2022 20:25:51 GMT",
		"server": "RapidAPI-1.2.8",
		"x-rapidapi-proxy-response": "true",
		"x-rapidapi-region": "AWS - eu-central-1",
		"x-rapidapi-version": "1.2.8",
		"x-ratelimit-requests-limit": "50",
		"x-ratelimit-requests-remaining": "49",
		"x-ratelimit-requests-reset": "2559008"
  },
})
    .then(result => result.json())
    .then(data => {
        console.log("data",data);
    });
}

function googleFlightSearchEvent(){
	document.getElementById('google-flight-search').innerText = googleFlightSearch();
}

document.addEventListener('DOMContentLoaded', () => {
	let btn =document.getElementById('Submit3');
	btn.addEventListener('click', () => {
		googleFlightSearchEvent();
	})
})



//freemium
//slow

