function initMap() {
	//create center marker at ucsd
	var ucsd_ltlng = {lat:32.879162, lng:-117.235971};

	//create a map obj and specify elemtnt
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "UCSD"
	});
}