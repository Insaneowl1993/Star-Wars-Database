// film.js
document.addEventListener("DOMContentLoaded", function () {
    const filmId = new URLSearchParams(window.location.search).get('id');

    // Check if a film ID is provided
    if (filmId) {
        // Fetch data from SWAPI for the specific film
        fetch(`https://swapi.dev/api/films/${filmId}/`)
            .then(response => response.json())
            .then(film => {
                // Display the film's details on the page
                const filmDetailsElement = document.getElementById('filmDetails');
                renderFilmDetails(filmDetailsElement, film);
            })
            .catch(error => console.error('Error fetching film details:', error));
    } else {
        console.error('No film ID provided.');
    }

    // Helper function to render film details
    function renderFilmDetails(container, film) {
        const html = `
            <h2>${film.title}</h2>
            <p><strong>Director:</strong> ${film.director}</p>
            <p><strong>Producer:</strong> ${film.producer}</p>
            <p><strong>Release Date:</strong> ${film.release_date}</p>
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