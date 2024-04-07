// species.js
document.addEventListener("DOMContentLoaded", function () {
    const speciesId = new URLSearchParams(window.location.search).get('id');

    // Check if a species ID is provided
    if (speciesId) {
        // Fetch data from SWAPI for the specific species
        fetch(`https://swapi.dev/api/species/${speciesId}/`)
            .then(response => response.json())
            .then(species => {
                // Display the species details on the page
                const speciesDetailsElement = document.getElementById('speciesDetails');
                renderSpeciesDetails(speciesDetailsElement, species);
            })
            .catch(error => console.error('Error fetching species details:', error));
    } else {
        console.error('No species ID provided.');
    }

    // Helper function to render species details
    function renderSpeciesDetails(container, species) {
        const html = `
            <h2>${species.name}</h2>
            <p><strong>Classification:</strong> ${species.classification}</p>
            <p><strong>Designation:</strong> ${species.designation}</p>
            <p><strong>Average Height:</strong> ${species.average_height} cm</p>
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