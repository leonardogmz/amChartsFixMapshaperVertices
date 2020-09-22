/**
 * Fix to be able to use the generated maps 
 * with the online maps editor https://mapshaper.org/ with the amCharts library.
 *
 * geoJsonMap its equals a geojson object extracted from mapshaper. 
 * 
 * Note: presicion of the map must be 0.00001 for amCharts. See https://www.amcharts.com/docs/v4/tutorials/creating-custom-maps/
 *
 */


function fixGeojsonMap(geoJsonMap) {
	geoJsonMap.features.forEach(function (region) {
		if (region.geometry.type === "Polygon") {
			region.geometry.coordinates[0].reverse();
		} else if (region.geometry.type === "MultiPolygon") {
			region.geometry.coordinates.forEach(function (poligon, key) {
				region.geometry.coordinates[key][0].reverse();
			});
		}
	});
};