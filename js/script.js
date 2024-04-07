//Set up Nav html page with JS
$.get('/html/header.html', function (data) {
  if($('.logout').length) {
    localStorage.clear();
  }
  $("#nav-placeholder").replaceWith(data);
  if(localStorage.getItem('user') === null) {
    $('.accountNav').html(
      '<li class="nav-item"><a class="nav-link text-white" href="/login.html">Log In</a></li>'
      );
  } else{
    $('.accountNav').html(
      '<li class="nav-item"><a class="nav-link text-white" href="/logout.html">Log Out</a></li><li class="nav-item"><a class="nav-link text-white" href="/account.html">Account</a></li>'
      );
  }
});

const APP = {
  //call the APP.urls.base to see the contents of APP.urls
  urls: {
    base: 'https://swapi.dev/api/',
    people: 'people/',
    planets: 'planets/',
    films: 'films/',
    species: 'species/',
    vehicles: 'vehicles/',
    starships: 'starships/',
  },

  getExternalImageUrl: (item) => {
    // Derive the category from the item URL
    const category = item.url.split('/').slice(-3, -2)[0]; // Extract category from the URL
    // Construct the image URL using SWAPI Visual Guide URLs
    let imageUrl = `https://starwars-visualguide.com/assets/img/${category}/${item.url.split('/').slice(-2)[0]}.jpg`;
    return imageUrl;
},

  init: () => {
    APP.addListeners();
    APP.buildNav();
  },
  addListeners: () => {
    let nav = document.getElementById('nav');
    nav.addEventListener('click', APP.getData);
    footer.addEventListener('click', APP.getData);
  },
  buildNav: () => {
    let df = new DocumentFragment();
    for (let nm in APP.urls) {
        if (nm != 'base') {
            let link = document.createElement('a');
            link.href = `${APP.urls.base}${APP.urls[nm]}`;
            link.textContent = nm;
            link.setAttribute('data-link', `${APP.urls.base}${APP.urls[nm]}`);
            link.setAttribute('data-category', nm); // Add this line
            df.append(link);
        }
    }
    document.getElementById('nav').append(df);
},
  getData: (ev) => {
    if (ev) ev.preventDefault();
    // show overlay / loader
    document.querySelector('.overlay').classList.add('active');
    // get the url
    let link = ev.target;
    let category = link.getAttribute('data-category');
    let url = link.getAttribute('data-link');
    // fetch the data
    fetch(url)
        .then((resp) => {
            if (!resp.ok) throw new Error(resp.statusText);
            return resp.json();
        })
        .then((data) => APP.buildList(data, category)) // Pass the category to buildList
        .catch((err) => {
            console.error(err);
            document.querySelector('.overlay').classList.remove('active');
        });
    // call the build function
},
buildList: (data, category) => {
  let m = document.getElementById('main');
  console.log(data);
  // hide the overlay / loader
  document.querySelector('.overlay').classList.remove('active');
  // add the data
  m.innerHTML = data.results
      .map((item) => {
          let nm = item.name || item.title;
          let url = `${category}.html?id=${item.url.split('/').slice(-2)[0]}`; // Construct the URL for each item
          return `<p><a href="${url}" data-link="${url}">${nm}</a></p>`
          ;
      })
      .join(' ');
  // add the prev/next navigation
  let footer = document.getElementById('footer');
  footer.innerHTML = '';

  if (data.previous) {
      // previous link
      let prev = document.createElement('a');
      prev.href = data.previous;
      let url = new URL(data.previous);
      let labels = url.pathname.split('/');
      let label = labels[labels.length - 2];
      prev.textContent = `<< Previous ${label}`;
      prev.setAttribute('data-link', data.previous);
      footer.append(prev);
  }
  if (data.next) {
      // next link
      let next = document.createElement('a');
      next.href = data.next;
      let url = new URL(data.next);
      let labels = url.pathname.split('/');
      let label = labels[labels.length - 2];
      next.textContent = `Next ${label} >>`;
      next.setAttribute('data-link', data.next);
      footer.append(next);
  }
},
};


document.addEventListener('DOMContentLoaded', APP.init);

var number_of_star = 150;

var random_number = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var createStars = function() {
  var star_rotation = 'twinkling'; // Use the new twinkling animation
  for (var i = 0; i < number_of_star; i++) {
    var star_top = random_number(0, document.documentElement.clientHeight);
    var star_left = random_number(0, document.documentElement.clientWidth);
    var star_radius = random_number(0, 4);
    var star_duration = random_number(6, 16);

    document.body.innerHTML += "<div class='star' style='top: " + star_top + "px; left: " + star_left + "px; width: " + star_radius + "px; height: " + star_radius + "px; " +
      "animation-name:" + star_rotation + "; animation-duration: " + star_duration + "s;'></div>";
  }
};

createStars();