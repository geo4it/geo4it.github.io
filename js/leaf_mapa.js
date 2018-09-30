/*console.log(concatenar);
var palabra = "token ";

var concate = palabra+concatenar;
var Auth = "Auth";*/

var map = L.map( 'map', {
    center: [20.0, 5.0],
    //crs: L.CRS.EPSG4326,
    minZoom: 2,
    zoom: 2
});

/*var drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);

        var drawControl = new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        });*/
//var urlCity ='https://gist.githubusercontent.com/geo4aguilares/5b86c107174a6d8b4414947ff0ae8f1d/raw/e78257e78317f981f2842c40e402808b3bac591d/ingenios.geojson';

var urlCity = 'https://raw.githubusercontent.com/geo4aguilares/Repositorio/master/ingenios.geojson';
//var urlCity = 'https://gitlab.com/javiarch/Repositorios/raw/master/aguilares.geojson';
//var urlCity = 'https://glcdn.githack.com/javiarch/Repositorios/raw/master/aguilares.geojson';

var xhr = new XMLHttpRequest();
xhr.open('GET', urlCity);
xhr.onload = function(e) {
  var data = JSON.parse(this.response);
  console.log(data);

	var geojsonMarkerOptions = {
    radius: 5,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

/*var filename = "firstfile.txt";
var filemessage = "uploading a file";
var filecontent = "The data of the file."
var basecontent = btoa(filecontent);
var apiurl = contents_url.replace('{+path}',filename);
var filedata = '{"message":"'+filemessage+'","content":"'+basecontent+'"}';*/


//CREA UN REPOSITORIO VACIO *****************************************************************************
/*var data1 = '{"scopes":["repo"],"name":"repo_prueba","note":"create repo with ajax"}';
//var contentdata = JSON.stringify(data1);
var url_repo =  'https://api.github.com/user/repos';
var request_repo = new XMLHttpRequest();
request_repo.open('POST', url_repo);
request_repo.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
request_repo.setRequestHeader("Authorization", concate);
request_repo.send(data1);
//************************************************************************************************

//Crear GIST**********************************************************************
//var contentArgs = "updated content from Ajax";
//console.log(contentArgs);
var contentArgs = '{"type": "FeatureCollection","generator": "overpass-ide","copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.","timestamp": "2017-10-30T22:07:02Z","features": [{"type": "Feature","properties": {"@id": "node/1493828545","barrier": "toll_booth","fee": "yes","name": "Berazategui"},"geometry": {"type": "Point","coordinates": [-58.1899137,-34.7536574]},"id": "node/1493828545"}]}';

var content = JSON.stringify(contentArgs);

var filedata = '{"description":"Edit gist","files":{"nuevo_gist.geojson":{"content":'+content+'}}}';

var urlGist = "https://api.github.com/gists/3352062de5199ff13e577df849bfbabe";

var request = new XMLHttpRequest();
request.open('POST', urlGist);

request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
request.setRequestHeader("Authorization", "token 2de1fc5ab1b04d60f0bd21b1e823e06bce7ff2da");
request.send(filedata);

//***********************************************************************************

//CREAR archivo en repositorio Github*****************************************************************************
//var contentArgs = "updated content from Ajax";
//console.log(contentArgs);
function utf8_to_b64( str ) {
  return window.btoa(unescape(encodeURIComponent( str )));
}

var contentGitHub = '{"type": "FeatureCollection","generator": "overpass-ide","copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.","timestamp": "2017-10-30T22:07:02Z","features": [{"type": "Feature","properties": {"@id": "node/1493828545","barrier": "toll_booth","fee": "yes","name": "Berazategui"},"geometry": {"type": "Point","coordinates": [-58.1899137,-34.7536574]},"id": "node/1493828545"}]}';

var contentG = JSON.stringify(contentGitHub);

var basecontent = btoa(encodeURIComponent(contentG));

var content_btoa = utf8_to_b64(contentGitHub);

var filedataG = '{"message":"prueba geojson","committer":{"name":"Javier", "email": "javidiaz1977+idetr@gmail.com"},"content":"'+content_btoa+'"}';

var urlGit = "https://api.github.com/repos/transporte17/repo01/contents/geoAguilares.geojson";
var requestG = new XMLHttpRequest();
requestG.open('PUT', urlGit);

requestG.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
var palabra = "token ";
var cadena_s = "2de1fc5ab1b04d60f0bd21b1e823e06bce7ff2da";
var concatenar = palabra+cadena_s;
var Auth = "Auth";
requestG.setRequestHeader(Auth+"orization", concatenar);

requestG.send(filedataG);*/
//****************************************************************************
L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);
}
xhr.send();


L.tileLayer( 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap'
}).addTo( map );

//var wmsTopoIcgc = L.tileLayer.wms('http://geoserveis.icgc.cat/icc_mapesbase/wms/service?', {
var wmsTopoIcgc = L.tileLayer.wms('http://ide.transporte.gob.ar/geoserver/observ/wms?', {
  //layers: 'mtc5m',
  layers: '_3.2.3.1.subte_red_usig_ont_a_view',
  crs: L.CRS.EPSG4326,
  format: 'image/png',
  transparent: true
}).addTo(map);

/*map.addControl(drawControl);

map.on('draw:created', function (e) {
            var type = e.layerType,
                layer = e.layer;
            drawnItems.addLayer(layer);
        });*/
