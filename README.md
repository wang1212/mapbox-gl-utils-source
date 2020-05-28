# Mapbox-GL utils - Source

This is a utils of [Mapbox-GL](https://docs.mapbox.com/mapbox-gl-js/overview/).

The tool provides a data [Source](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/) for daily use.

[Demo](./test/index.html)

[English](./README.md) | [简体中文](./README.zh-CN.md)

## Content

Including the following map services:

-   TianDiTu

    -   TianDiTu.satellite.map
    -   TianDiTu.satellite.annotation
    -   TianDiTu.streets.map
    -   TianDiTu.streets.annotation

-   Google

    -   Google.satellite.Map
    -   Google.streets.mapWithAnnotation

-   OpenStreetMap

    -   OSM.streets.mapWithAnnotation

## Bundle

The following bundles are provided:

    types/
    build/
    ├── bundle.js
    ├── bundle.min.js
    ├── bundle.esm.js
    ├── bundle.esm.min.js
    ├── bundle.cjs.js
    ├── bundle.cjs.min.js
    ├── bundle.umd.js
    └── bundle.umd.min.js

It also provides the corresponding **sourcemap** file.

## Usage

### Browser

In the browser, referenced by the `<script>` tag:

```html
<script src="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.js"></script>
<!-- Reference the utils library -->
<script src="../build/bundle.min.js"></script>
```

It is mounted at `mapboxgl._utils.Source`, so you can use it like this:

```js
const { TianDiTu, Google } = mapboxgl._utils.Source
```

**_If you can't get the bundle file, you can try to [build it yourself](#build)._**

### Node.js

Install via npm:

```bash
npm install mapbox-gl-utils-source
```

Use it like this:

```js
// ES Module
import { TianDiTu, Google } from 'mapbox-gl-utils-source'

// CommonJS
const utilsSource = require('mapbox-gl-utils-source')
```

## Build

If you cannot get the bundle file, or you want to add additional map service resources and other reasons, you can build your own.

First, `clone` to local

```bash
git clone https://github.com/wang1212/mapbox-gl-utils-source.git <dir>
cd <dir>/
npm install
```

Then you can modify the files in **src/** by yourself, and run the following command when finished:

```bash
npm run build
```

The bundle file will be generated in the **build/** folder, include **sourcemap** file.

## License

[MIT](./LICENSE).
