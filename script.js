//Variables globales
let map;
let marker;

//Geolocalización
let watchID;
let geoLoc




function iniciarMap(){
    var coord = {lat: -14.0464,lng:-77.0428}

    //Caracteristicas básicas del mapa
    map = new google.maps.Map(document.getElementById("map"),{
        mapTypeId: 'satellite',
        zoom: 19,
        center: coord,
        gestureHandling: "cooperative",
    
        //Desabilita la interfaz
        disableDefaultUI: true,

        //Desabilita el zoom(Creo)
        zoomControl: false,
        //Esta wea si no sé que hace xd
        scaleControl: true,


    });


    //Todos los puntos de los tachos de basura
    const puntosMarcadores = [
        {
            lat:-12.0467095, lng:-77.0423816,
            type: "parking",
           
        },

        {
            lat:-12.0496095, lng:-77.0443816,
           
        },

        {
            lat:-12.0437095, lng:-77.0471816,
            
        },
        
        {
            lat:-12.0427095, lng:-77.0451816,
            
        },

        {
            lat:-12.0465095, lng:-77.0420816,
            
        },

        {
            lat:-12.0469195, lng:-77.0323816,
            
        },

        {
            lat:-12.0461495, lng:-77.0422816,
            
        },

        {
            lat:-12.0463495, lng:-77.0431816,
            
        },

        {
            lat:-12.0466495, lng:-77.0427816,
           
        },

        {
            lat:-12.0465475, lng:-77.0429816,
            
        },

        {
            lat:-12.0465695, lng:-77.0423816,
            
        }
    ]

    
    //Añadir colisionadores
    const markers = puntosMarcadores.map((location) => {
        return new google.maps.Marker({
        position: location,
        title: "Tachito de basura uwu",
        icon: "./Marcadores-iconos/tacho-basura.png"
        });
    });

    // Añade la imagen de los colicionadores
    new MarkerClusterer(map, markers, {
        imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });

    




    //Creación del marcador del usuario
    let imagen = "./Marcadores-iconos/gps.png" 
    marker = new google.maps.Marker({
        position: coord,
        map,
        title: "Posición usuario",
        icon: imagen,

    })


    
    
    //geopocicionamiento del usuario

     

    getPosition();

    function getPosition(){
        if(navigator.geolocation){
            //Ejecutate cada 30000 milisegundos (45s)
            var option = {timeout:30000};
            geoLoc = navigator.geolocation;
            watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler); 
        }
        else{
            alert("Lo siento mucho, tu navegador no soporta la geolocalización :(")
        }
  
    }
    
    function showLocationOnMap(position) {
        var latitud = position.coords.latitude;
        var longitud = position.coords.longitude;
        console.log("latitud: " + latitud + " longitud: " + longitud);
        

        const coord = { lat: latitud, lng: longitud};
        marker.setPosition(coord);
        map.setCenter(coord)
    }


// Si es que no funciona la geolocalización
    function errorHandler(err){
        if(err.code == 1){
            alert("Error: Acceso denegado (Prueba prendiendo tu gps)")
        }

        else if(err.code == 2){
            alert("Error: Posisión no encontrada o no existente")
        }
    }}