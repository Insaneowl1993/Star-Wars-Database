// vehicle.js
document.addEventListener("DOMContentLoaded", function () {
    const vehicleId = new URLSearchParams(window.location.search).get('id');

    // Check if a vehicle ID is provided
    if (vehicleId) {
        // Fetch data from SWAPI for the specific vehicle
        fetch(`https://swapi.dev/api/vehicles/${vehicleId}/`)
            .then(response => response.json())
            .then(vehicle => {
                // Display the vehicle details on the page
                const vehicleDetailsElement = document.getElementById('vehicleDetails');
                renderVehicleDetails(vehicleDetailsElement, vehicle);
            })
            .catch(error => console.error('Error fetching vehicle details:', error));
    } else {
        console.error('No vehicle ID provided.');
    }

    // Helper function to render vehicle details
    function renderVehicleDetails(container, vehicle) {
        const html = `
            <h2>${vehicle.name}</h2>
            <p><strong>Model:</strong> ${vehicle.model}</p>
            <p><strong>Manufacturer:</strong> ${vehicle.manufacturer}</p>
            <p><strong>Vehicle Class:</strong> ${vehicle.vehicle_class}</p>
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