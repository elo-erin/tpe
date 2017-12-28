// Used to toggle the menu on small screens when clicking on the menu button
function toggleNavMenu() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Create all Google maps and add associated markers
function initMaps() {
	// Define coordinates
	centerMont = new google.maps.LatLng(48.636017,-1.511114);
	centerJapan = new google.maps.LatLng(37.902552,139.023095);
	centerRoquebillière = new google.maps.LatLng(44.012749,7.307727);

	// Define map options
	var optionsMont = {
		center: centerMont,
		zoom:12, scrollwheel: false, draggable: false,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var optionsJapan = {
		center: centerJapan,
		zoom:12, scrollwheel: false, draggable: false,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var optionsRoquebillière = {
		center: centerRoquebillière,
		zoom:12, scrollwheel: false, draggable: false,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

	// Create maps
	var mapMont = new google.maps.Map(document.getElementById("mapMont"), optionsMont);
	var mapJapan = new google.maps.Map(document.getElementById("mapJapan"), optionsJapan);
	var mapRoquebillière = new google.maps.Map(document.getElementById("mapRoquebillière"), optionsRoquebillière);

	// Add markers
	var markerMont = new google.maps.Marker({
		position: centerMont,
	});
	markerMont.setMap(mapMont);

	var markerJapan = new google.maps.Marker({
		position: centerJapan,
	});
	markerJapan.setMap(mapJapan);

	var markerRoquebillière = new google.maps.Marker({
		position: centerRoquebillière,
	});
	markerRoquebillière.setMap(mapRoquebillière);
}

// Scroll to the given ashe during the given time (ms)
function runAnimatedScroll(hash, time) {
  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  console.log('called');
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, time, () => {
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
}




// Main code
// C'est ce qui sera executé quand la page aura chargée

// On attrape la navbar
var $navbar = $('#navbar');

// Pour chaque lien dans la navbar, quand on clic dessus on scroll jusqu'à la cible
$navbar.find('a').on('click', function(event) {
	console.log('clicked');
    // Make sure this.hash has a value before overriding default behavior
    if (event.target.hash && event.target.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();
      runAnimatedScroll(event.target.hash, 1000);
    }
});




// --------------- Exemples de fonctions

// Object (qui est défini par une classe, implicite ici)
let erin = {
	// Attribut (Champ)
	nom: "Erin",
	age: 16,

	// Methode (fonction de classe)
	sayHello: function() {
		console.log("Hello! Je m'appelle " + this.nom + " et j'ai " + this.age + " ans.")
	}
}

// On appelle la méthode sayHello
erin.sayHello();	

// Une fonction (une moulinette qui fait des trucs)
function add2or3(nombre) {
	var result = 0;
	// Une condition: Si nombre est divisible par 2 (pair)
	if(nombre % 2 == 0) {
		result = nombre + 2;
	// Sinon si c'est impair
	} else {
		result = nombre + 3;
	}
	return result;
}

// Une boucle for
for(var i = 0; i <= 10; i++) {
	console.log(i);
}

// Une variable (qui n'est pas un objet)
var i = 10;

// Une boucle while
while(i > 0) {
	console.log(i);
	i-=2;
}


// Des tests...
var test = add2or3(7);
console.log("test = ", test);
var test2 = add2or3(test);
console.log("test2 = ", test2);
