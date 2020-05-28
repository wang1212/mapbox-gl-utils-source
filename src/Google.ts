/**
 * Google map service -  谷歌地图服务
 *
 * 谷歌地图
 */
import { AnySourceData } from 'mapbox-gl'
import { SourceDefinition } from './index'

interface Params<T> {
	options: T
}

/**
 * Streets Map - 谷歌街道地图
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
// 		maxzoom: 20,
// 		tiles: ['0', '1', '2'].map<string>((sub) => `//mt${sub}.google.cn/vt/lyrs=m&x={x}&y={y}&z={z}`),
// 		...options,
// 	}
// }

/**
 * Streets Annotation - 谷歌街道注记
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
 * Streets Map with Annotation - 谷歌街道地图 + 注记
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
		maxzoom: 20,
		tiles: ['0', '1', '2'].map<string>((sub) => `//mt${sub}.google.cn/vt/lyrs=m&x={x}&y={y}&z={z}`),
		...options,
	}
}

/**
 * Satellite Map - 谷歌卫星地图
 *
 * @author wang1212
 * @param {Params<SourceDefinition>} { options = {} }
 * @returns {AnySourceData}
 */
function satelliteMap({ options = {} }: Params<SourceDefinition>): AnySourceData {
	return {
		type: 'raster',
		tileSize: 256,
		minzoom: 0,
		maxzoom: 20,
		tiles: ['0', '1', '2'].map<string>((sub) => `//mt${sub}.google.cn/vt/lyrs=s&x={x}&y={y}&z={z}`),
		...options,
	}
}

/**
 * Satellite Annotation - 谷歌卫星注记
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
	map: satelliteMap,
	// annotation: satelliteAnnotation,
}

export default {
	streets,
	satellite,
}
