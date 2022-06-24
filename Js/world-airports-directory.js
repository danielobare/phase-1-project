const worldAirportsDirectory = async () => {
  try {
    const res = await fetch(
      "https://world-airports-directory.p.rapidapi.com/v1/airports/dub?page=1&limit=20&sortBy=AirportName%3Aasc", 
	  {
		headers: {
			"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
			"X-RapidAPI-Host": "world-airports-directory.p.rapidapi.com",
		  }
	  }
    );
    if (!res.ok) {
      console.log("status: ", res.status);
      await getJoke();
    }
	const json = await res.json();
    setTimeout(() => {
		console.log(Promise.resolve(json));
	}, 6000)
  } catch (error) {
    console.log("catch error", error);
    await worldAirportsDirectory();
  }
};

// worldAirportsDirectory()

async function worldAirportsDirectoryEvent(){
	document.getElementById('world-airports-directory').innerHTML = worldAirportsDirectory();
	document.getElementById('world-airports-directory-2').innerHTML = worldAirportsDirectory();
	document.getElementById('world-airports-directory-3').innerHTML = worldAirportsDirectory();
	document.getElementById('world-airports-directory-4').innerHTML = worldAirportsDirectory();
	document.getElementById('world-airports-directory-5').innerHTML = worldAirportsDirectory();
	document.getElementById('world-airports-directory-6').innerHTML = worldAirportsDirectory();
}

document.getElementById('btn8').addEventListener('click', worldAirportsDirectoryEvent());

//freemium
//works
