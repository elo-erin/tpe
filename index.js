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
function initMaps()
{
	// Define coordinates
	centerMont = new google.maps.LatLng(48.636017,-1.511114);
	centerJapan = new google.maps.LatLng(37.902552,139.023095);

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

	// Create maps
	var mapMont = new google.maps.Map(document.getElementById("mapMont"), optionsMont);
	var mapJapan = new google.maps.Map(document.getElementById("mapJapan"), optionsJapan);

	// Add markers
	var markerMont = new google.maps.Marker({
		position: centerMont,
	});
	markerMont.setMap(mapMont);
	var markerJapan = new google.maps.Marker({
		position: centerJapan,
	});
	markerJapan.setMap(mapJapan);
}