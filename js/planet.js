// planet.js
document.addEventListener("DOMContentLoaded", function () {
    const planetId = new URLSearchParams(window.location.search).get('id');

    // Check if a planet ID is provided
    if (planetId) {
        // Fetch data from SWAPI for the specific planet
        fetch(`https://swapi.dev/api/planets/${planetId}/`)
            .then(response => response.json())
            .then(planet => {
                // Display the planet's details on the page
                const planetDetailsElement = document.getElementById('planetDetails');
                renderPlanetDetails(planetDetailsElement, planet);
            })
            .catch(error => console.error('Error fetching planet details:', error));
    } else {
        console.error('No planet ID provided.');
    }

    // Helper function to render planet details
    function renderPlanetDetails(container, planet) {
        const html = `
            <h2>${planet.name}</h2>
            <p><strong>Climate:</strong> ${planet.climate}</p>
            <p><strong>Terrain:</strong> ${planet.terrain}</p>
            <p><strong>Population:</strong> ${planet.population}</p>
            <!-- Add more details as needed -->
        `;
        container.innerHTML = html;
    }
});

var createStars = function(){
    var star_rotation = 'move_right;';
    for(var i=0; i<number_of_star; i++){
      rot= (star_rotation=='move_right;'?'move_left;':'move_right;');
      var star_top = random_number(0,document.documentElement.clientHeight);
      var star_left = random_number(0,document.documentElement.clientWidth);
      var star_radius = random_number(0,4);
      var  star_duration= random_number(6,16);
  
      document.body.innerHTML += "<div class='star' style='top: "+star_top+"px; left: "+star_left+"px; width: "+star_radius+"px; height: "+star_radius+"px; "+
      "animation-name:"+star_rotation+"; animation-duration: "+star_duration+"s;'></div>";
    }
  };
  
  createStars();