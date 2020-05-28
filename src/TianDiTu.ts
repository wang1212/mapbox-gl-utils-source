/**
 * TianDiTu map service -  天地图地图服务
 *
 * 天地图 see docs: http://lbs.tianditu.gov.cn/server/MapService.html
 */
import { AnySourceData } from 'mapbox-gl'
import { SourceDefinition } from './index'

interface Params<T> {
	token: string
	options: T
}

/**
 * Streets Map - 天地图街道地图
 *
 * @author wang1212
 * @param {Params<SourceDefinition>} { token, options = {} }
 * @returns {AnySourceData}
 */
function streetsMap({ token, options = {} }: Params<SourceDefinition>): AnySourceData {
	return {
		type: 'raster',
		tileSize: 256,
		minzoom: 0,
		maxzoom: 18,
		tiles: ['0', '1', '2', '3', '4', '5', '6', '7'].map(
			(sub) =>
				`//t${sub}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${token}`
		),
		...options,
	}
}

/**
 * Streets Annotation - 天地图街道注记
 *
 * @author wang1212
 * @param {Params<SourceDefinition>} { token, options = {} }
 * @returns {AnySourceData}
 */
function streetsAnnotation({ token, options = {} }: Params<SourceDefinition>): AnySourceData {
	return {
		type: 'raster',
		tileSize: 256,
		minzoom: 0,
		maxzoom: 18,
		tiles: ['0', '1', '2', '3', '4', '5', '6', '7'].map(
			(sub) =>
				`//t${sub}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${token}`
		),
		...options,
	}
}

/**
 * Satellite Map - 天地图卫星地图
 *
 * @author wang1212
 * @param {Params<SourceDefinition>} { token, options = {} }
 * @returns {AnySourceData}
 */
function satelliteMap({ token, options = {} }: Params<SourceDefinition>): AnySourceData {
	return {
		type: 'raster',
		tileSize: 256,
		minzoom: 0,
		maxzoom: 18,
		tiles: ['0', '1', '2', '3', '4', '5', '6', '7'].map(
			(sub) =>
				`//t${sub}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${token}`
		),
		...options,
	}
}

/**
 * Satellite Annotation - 天地图卫星注记
 *
 * @author wang1212
 * @param {Params<SourceDefinition>} { token, options = {} }
 * @returns {AnySourceData}
 */
function satelliteAnnotation({ token, options = {} }: Params<SourceDefinition>): AnySourceData {
	return {
		type: 'raster',
		tileSize: 256,
		minzoom: 0,
		maxzoom: 18,
		tiles: ['0', '1', '2', '3', '4', '5', '6', '7'].map(
			(sub) =>
				`//t${sub}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${token}`
		),
		...options,
	}
}

export const streets = {
	map: streetsMap,
	annotation: streetsAnnotation,
}

export const satellite = {
	map: satelliteMap,
	annotation: satelliteAnnotation,
}

export default {
	streets,
	satellite,
}
