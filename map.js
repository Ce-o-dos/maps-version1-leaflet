var mymap = L.map('mapid').setView([-12.0464, -77.0428], 13);

    //Configuraciones básicas del map de leaflet
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 19,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/satellite-v9',
		tileSize: 512,
		zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
	}).addTo(mymap);

    mymap.doubleClickZoom.disable()


    let iconmarker = L.icon({
        iconUrl: './Marcadores-iconos/gps.png',
        iconSize: [60, 60],
        iconAnchor: [30, 60],
    });

    let marker2 = L.marker([51.51, -0.09],{icon: iconmarker}).addTo(mymap)

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            const {coords} = pos
            console.log(coords)
            L.marker([coords.latitude, coords.longitude], {icon: iconmarker}).addTo(mymap)
        },
        (err) => {
            console.log(err)
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge:0,
        }
    )

