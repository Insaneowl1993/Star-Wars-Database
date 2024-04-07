// starship.js
document.addEventListener("DOMContentLoaded", function () {
    const starshipId = new URLSearchParams(window.location.search).get('id');

    // Check if a starship ID is provided
    if (starshipId) {
        // Fetch data from SWAPI for the specific starship
        fetch(`https://swapi.dev/api/starships/${starshipId}/`)
            .then(response => response.json())
            .then(starship => {
                // Display the starship details on the page
                const starshipDetailsElement = document.getElementById('starshipDetails');
                renderStarshipDetails(starshipDetailsElement, starship);
            })
            .catch(error => console.error('Error fetching starship details:', error));
    } else {
        console.error('No starship ID provided.');
    }

    // Helper function to render starship details
    function renderStarshipDetails(container, starship) {
        const html = `
            <h2>${starship.name}</h2>
            <p><strong>Model:</strong> ${starship.model}</p>
            <p><strong>Manufacturer:</strong> ${starship.manufacturer}</p>
            <p><strong>Starship Class:</strong> ${starship.starship_class}</p>
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