

var mymap = L.map('mapid').setView([33.3617, 126.5292], 12);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
}).addTo(mymap);

var markerA = L.marker([33.460218, 126.831445]).addTo(mymap);
markerA.bindPopup('<a href="yongnuni.html">Yongnuni Oreum Volcanic Cone</a>').openPopup();

var markerB = L.marker([33.241929, 126.313361]).addTo(mymap);
markerB.bindPopup('<a href="sanbangsan.html">Mt.Sanbang/Sanbangulsa Temple</a>').openPopup();

var markerC = L.marker([33.239589, 126.319326]).addTo(mymap);
markerC.bindPopup('<a href="oneandonlycafe.html">One and Only Cafe</a>').openPopup();

var markerD = L.marker([33.232098, 126.314662]).addTo(mymap);
markerD.bindPopup('<a href="yongmeori.html">Yongmeori(Dragon Head) Coast</a>').openPopup();

var markerE = L.marker([33.518606, 126.519156]).addTo(mymap);
markerE.bindPopup('<a href="hotel.html">Ramada Plaza Jeju</a>').openPopup();

var markerF = L.marker([33.510673, 126.491396]).addTo(mymap);
markerF.bindPopup('<a>Jeju Airport</a>').openPopup();

var markerF = L.marker([33.510673, 126.491396]).addTo(mymap);
markerF.bindPopup('<a>Jeju Airport</a>').openPopup();

var markerG = L.marker([33.3617,126.5292]).addTo(mymap);
markerG.bindPopup('<a>Hallasan</a>').openPopup();