var app=angular.module("App",["ngRoute","ngAnimate","ngMaps"]).config(["$locationProvider","$routeProvider",function($locationProvider,$routeProvider){$routeProvider.when("/",{templateUrl:"templates/main.html"}).when("/setup",{templateUrl:"templates/setup.html"}).when("/examples",{templateUrl:"templates/examples.html"}).when("/documentation",{templateUrl:"templates/documentation.html"}).when("/test",{templateUrl:"templates/test.html"}).otherwise({redirectTo:"/"})}]);angular.module("App").controller("circles",["$scope",function($scope){$scope.map={center:[39,-121],options:function(){return{streetViewControl:!1,scrollwheel:!1}}},$scope.circles={geometries:[{center:[39,-121],radius:1e4},{center:[39,-121],radius:5e4},{center:[39,-121],radius:1e5}],options:function(geometry,properties,map,i){var opacity=1/(i+1);return{fillOpacity:opacity,fillColor:"#e67e22",strokeColor:"#d35400"}}}}]),angular.module("App").controller("control",["$scope",function($scope){$scope.map={center:[47.5,-122.5],options:function(){return{streetViewControl:!1,scrollwheel:!1}}},$scope.click=function(){alert($scope.marker.position)},$scope.marker={position:[47.5,-122.5],decimals:4,options:function(){return{draggable:!0}}}}]),angular.module("App").controller("geopoints",["$scope",function($scope){$scope.map={center:[39,-121],options:function(){return{streetViewControl:!1,scrollwheel:!1}}},$scope.stations={url:"data/AirNow_Sites_PM2.5.geojson",options:function(geometry,properties,map,i){var draggable=i%2===0;return{draggable:draggable}},events:{click:function(e,marker){var lat=e.latLng.lat(),lng=e.latLng.lng(),name=marker.getProperty("siteName");alert(lat+" "+lng+" "+name)}},onInit:function(markers){console.log(markers)}}}]),angular.module("App").controller("geopolygons",["$scope",function($scope){$scope.map={center:[40,-100],options:function(){return{zoom:4,streetViewControl:!1,scrollwheel:!1}}},$scope.states={url:"data/states.geojson",options:function(){return{fillColor:"#4DAF7C",strokeWeight:1,strokeColor:"#43896E"}},events:{mouseover:function(e,p){p.setOptions({strokeWeight:4,zIndex:900})},mouseout:function(e,p){p.setOptions({strokeWeight:1,zIndex:0})},click:function(e,p){var opacity=Math.random();p.setOptions({fillOpacity:opacity})}},onInit:function(polygons){console.log(polygons)}}}]),angular.module("App").controller("infowindow",["$scope",function($scope){$scope.map={center:[47.5,-122.5],options:function(){return{streetViewControl:!1,scrollwheel:!1}},events:{click:function(e){$scope.infowindow.position=e.latLng,$scope.$apply()}}},$scope.infowindow={position:[47.6,-122.5]}}]),angular.module("App").controller("kml",["$scope",function($scope){$scope.map={center:[39,-100],options:function(){return{zoom:4,streetViewControl:!1,scrollwheel:!1}}},$scope.kml={url:"http://www.epa.gov/airnow/today/airnow_conditions.kml",visible:!0}}]),angular.module("App").controller("Main",["$scope","$location",function($scope){$scope.template=function(){return"templates/"+$scope.selected+".html"},$scope.selected="map",$scope.click=function(item){$scope.selected=item},$scope.titleMap={center:[50,10],options:function(){return{zoom:5,streetViewControl:!1,scrollwheel:!1}}},$scope.options=["map","marker","points","geopoints","polygons","geopolygons","polylines","circles","rectangles","kml","overlay","control","infowindow"]}]),angular.module("App").controller("map",["$scope",function($scope){$scope.map={center:[39,-121],options:function(){return{streetViewControl:!1,scrollwheel:!1}},events:{click:function(e){alert(e.latLng.lat()+" "+e.latLng.lng())}}}}]),angular.module("App").controller("marker",["$scope",function($scope){$scope.map={center:[39,-121],options:function(){return{streetViewControl:!1,scrollwheel:!1}}},$scope.marker={position:[39,-121],decimals:4,options:function(){return{draggable:!0}}}}]),angular.module("App").controller("overlay",["$scope",function($scope){$scope.map={center:[39,-100],options:function(){return{zoom:4,streetViewControl:!1,scrollwheel:!1}}},$scope.overlay={url:"data/overlays/Apr_00Z_H.png",bounds:{SW:[23.02083,-124.9792],NE:[50.97917,-65.02084]}}}]),angular.module("App").controller("points",["$scope",function($scope){$scope.map={center:[47.5,-122.5],options:function(){return{streetViewControl:!1,scrollwheel:!1}}},$scope.points={coords:[[47,-122],[48,-123],[47,-123],[48,-122]],options:function(){return{draggable:!0}},events:{click:function(e,point){alert(point)}},decimals:3}}]),angular.module("App").controller("polygons",["$scope",function($scope){$scope.map={center:[25,-70],options:function(){return{zoom:5,streetViewControl:!1,scrollwheel:!1}}},$scope.polygons={coords:[[[[25.774252,-80.190262],[18.466465,-66.118292],[32.321384,-64.75737],[25.774252,-80.190262]]],[[[26.774252,-79.190262],[19.466465,-65.118292],[33.321384,-64.75737],[26.774252,-79.190262]]]],options:function(){return{fillColor:"#e67e22",strokeColor:"#d35400"}},opacity:50}}]),angular.module("App").controller("polylines",["$scope",function($scope){$scope.map={center:[25,-70],options:function(){return{zoom:5,streetViewControl:!1,scrollwheel:!1}}},$scope.polylines={coords:[[[25.774252,-80.190262],[18.466465,-66.118292],[32.321384,-64.75737],[25.774252,-80.190262]],[[26.774252,-79.190262],[19.466465,-65.118292],[33.321384,-64.75737],[26.774252,-79.190262]]],options:function(){return{strokeColor:"#d35400"}}}}]),angular.module("App").controller("rectangles",["$scope",function($scope){$scope.map={center:[39,-121],options:function(){return{zoom:8,streetViewControl:!1,scrollwheel:!1}}},$scope.rect={bounds:[{SW:[38,-122],NE:[39,-121]},{SW:[38.5,-121.5],NE:[39.5,-120.5]}],options:function(c,p,map,i){var edit=0===i;return{editable:edit,fillColor:"#e67e22",strokeColor:"#d35400"}}}}]),angular.module("App").controller("Test",["$scope",function($scope){$scope.map={center:[0,102],options:function(){return{zoom:5,streetViewControl:!1,scrollwheel:!1}}},$scope.P1={geojson:{type:"Feature",geometry:{type:"Point",coordinates:[101,1]},properties:{prop0:"value0"}},options:function(){return{draggable:!0}},events:{click:function(){console.log(a,b)}},onInit:function(){console.log(a,b)},visible:!0},$scope.P2={lon:103,lat:0,properties:{a:1,b:2},visible:!0},$scope.Poly={geojson:{type:"Feature",geometry:{type:"Polygon",coordinates:[[[100,0],[101,0],[101,1],[100,1],[100,0]]]},properties:{foo:[1,2,3,4,5],bar:{name:"Frank"}}},options:function(){return{}},events:{click:function(){}},opacity:.5,onInit:function(){}},$scope.FC={options:{Point:function(){return{draggable:!0}}},events:{Point:{click:function(){}},Polygon:{click:function(){}}},opacity:.2,visible:!0,url:"data/collection.geojson",onInit:function(){},geojson:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[102,.5]},properties:{prop0:"value0"}},{type:"Feature",geometry:{type:"LineString",coordinates:[[102,0],[103,1],[104,0],[105,1]]},properties:{prop0:"value0",prop1:0}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[100,0],[101,0],[101,1],[100,1],[100,0]]]},properties:{prop0:"value0",prop1:{"this":"that"}}}]}}}]);