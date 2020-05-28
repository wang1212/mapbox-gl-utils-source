/**
 * OpenStreetMap map service -  OSM 地图服务
 *
 * OpenStreetMap see docs: https://operations.osmfoundation.org/policies/tiles/
 */
import { AnySourceData } from 'mapbox-gl'
import { SourceDefinition } from './index'

interface Params<T> {
	options: T
}

/**
 * Streets Map - OSM 街道地图
 *
 * @author wang1212
 * @param {Params<SourceDefinition>} { options = {} }
 * @returns {AnySourceData}
 */
// function streetsMap({ options = {} }: Params<SourceDefinition>): AnySourceData {
// 	return {
// 		type: 'raster',
// 		tileSize: 256,
// 		minzoom: 0,
// 		maxzoom: 18,
// 		tiles: ['0', '1', '2', '3', '4', '5', '6', '7'].map(
// 			(sub) =>
// 				`//t${sub}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${token}`
// 		),
// 		...options,
// 	}
// }

/**
 * Streets Annotation - OSM 街道注记
 *
 * @author wang1212
 * @param {Params<SourceDefinition>} { options = {} }
 * @returns {AnySourceData}
 */
// function streetsAnnotation({ options = {} }: Params<SourceDefinition>): AnySourceData {
// 	return {
// 		type: 'raster',
// 		tileSize: 256,
// 		minzoom: 0,
// 		maxzoom: 18,
// 		tiles: ['0', '1', '2', '3', '4', '5', '6', '7'].map(
// 			(sub) =>
// 				`//t${sub}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${token}`
// 		),
// 		...options,
// 	}
// }

/**
 * Streets Map with Annotation - OSM 街道地图 + 注记
 *
 * @author wang1212
 * @param {Params<SourceDefinition>} { options = {} }
 * @returns {AnySourceData}
 */
function streetsMapWithAnnotation({ options = {} }: Params<SourceDefinition>): AnySourceData {
	return {
		type: 'raster',
		tileSize: 256,
		minzoom: 0,
		maxzoom: 18,
		tiles: ['a', 'b', 'c'].map<string>((sub) => `//${sub}.tile.openstreetmap.org/{z}/{x}/{y}.png`),
		...options,
	}
}

/**
 * Satellite Map - OSM 卫星地图
 *
 * @author wang1212
 * @param {Params<SourceDefinition>} { options = {} }
 * @returns {AnySourceData}
 */
// function satelliteMap({ options = {} }: Params<SourceDefinition>): AnySourceData {
// 	return {
// 		type: 'raster',
// 		tileSize: 256,
// 		minzoom: 0,
// 		maxzoom: 18,
// 		tiles: ['0', '1', '2', '3', '4', '5', '6', '7'].map(
// 			(sub) =>
// 				`//t${sub}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${token}`
// 		),
// 		...options,
// 	}
// }

/**
 * Satellite Annotation - OSM 卫星注记
 *
 * @author wang1212
 * @param {Params<SourceDefinition>} { options = {} }
 * @returns {AnySourceData}
 */
// function satelliteAnnotation({ options = {} }: Params<SourceDefinition>): AnySourceData {
// 	return {
// 		type: 'raster',
// 		tileSize: 256,
// 		minzoom: 0,
// 		maxzoom: 18,
// 		tiles: ['0', '1', '2', '3', '4', '5', '6', '7'].map(
// 			(sub) =>
// 				`//t${sub}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${token}`
// 		),
// 		...options,
// 	}
// }

export const streets = {
	// map: streetsMap,
	// annotation: streetsAnnotation,
	mapWithAnnotation: streetsMapWithAnnotation,
}

export const satellite = {
	// map: satelliteMap,
	// annotation: satelliteAnnotation,
}

export default {
	streets,
	satellite,
}
