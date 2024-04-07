// person.js
document.addEventListener("DOMContentLoaded", function () {
    const personId = new URLSearchParams(window.location.search).get('id');

    // Check if a person ID is provided
    if (personId) {
        // Fetch data from SWAPI for the specific person
        fetch(`https://swapi.dev/api/people/${personId}/`)
            .then(response => response.json())
            .then(person => {
                // Display the person's details on the page
                const personDetailsElement = document.getElementById('personDetails');
                renderPersonDetails(personDetailsElement, person);
            })
            .catch(error => console.error('Error fetching person details:', error));
    } else {
        console.error('No person ID provided.');
    }

    // Helper function to render person details
    function renderPersonDetails(container, person) {
        const html = `
            <h2>${person.name}</h2>
            <p><strong>Birth Year:</strong> ${person.birth_year}</p>
            <p><strong>Height:</strong> ${person.height} cm</p>
            <p><strong>Mass:</strong> ${person.mass} kg</p>         
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