function index(){
    fetch ('db.json')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log)
}

function indexEvent(){
	document.getElementById('name-address').innerText = index();
}

// document.getElementById('Submit1').addEventListener('click', () => flightRadarEvent());
document.addEventListener('DOMContentLoaded', () => {
	let btn = document.getElementById('Submit9');
	btn.addEventListener('click', () => {
		indexEvent();
	})
})