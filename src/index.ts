/**
 * mapbox-gl source utils - Provide common data sources
 *
 * see docs: https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/, https://docs.mapbox.com/mapbox-gl-js/api/#sources
 */
import * as TianDiTu from './TianDiTu'
import * as Google from './Google'
import * as OSM from './OpenStreetMap'

/**
 * see docs: https://www.mapbox.com/mapbox-gl-style-spec/#sources
 *
 * @author wang1212
 * @interface SourceDefinition
 */
export interface SourceDefinition {
	[propName: string]: unknown
}

export { default as TianDiTu } from './TianDiTu'
export { default as Google } from './Google'
export { default as OSM } from './OpenStreetMap'
