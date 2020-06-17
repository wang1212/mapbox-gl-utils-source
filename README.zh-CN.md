# Mapbox-GL utils - Source

![LICENSE](https://badgen.net/github/license/wang1212/mapbox-gl-utils-source)
[![NPM VERSION](https://badgen.net/npm/v/mapbox-gl-utils-source)](https://www.npmjs.com/package/mapbox-gl-utils-source)
![DOWNLOAD](https://badgen.net/npm/dt/mapbox-gl-utils-source)
![TYPES](https://badgen.net/npm/types/mapbox-gl-utils-source)
![LAST COMMIT](https://badgen.net/github/last-commit/wang1212/mapbox-gl-utils-source)
![MINI+GZIP SIZE](https://badgen.net/bundlephobia/minzip/mapbox-gl-utils-source)

这是 [Mapbox-GL](https://docs.mapbox.com/mapbox-gl-js/overview/) 的一个工具库。

该工具提供了日常使用的地图数据源（[Source](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/)）。

[Demo](./test/index.html)

[English](./README.md) | [简体中文](./README.zh-CN.md)

## 地图资源

包含以下的地图服务资源：

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

## 打包文件

提供了以下捆绑包文件:

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

同时也提供了对应的 **sourcemap** 文件。

## 用法

### 浏览器

在浏览器中，通过 `<script>` 标签引用：

```html
<script src="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.js"></script>
<!-- 引用该工具库 -->
<script src="../build/bundle.min.js"></script>
```

该工具库挂载在 `mapboxgl._utils.Source` 位置，所以你可以这样使用：

```js
const { TianDiTu, Google } = mapboxgl._utils.Source
```

**_如果你无法获取捆绑包文件, 你可以尝试 [自己构建](#build)._**

### Node.js

通过 npm 安装：

```bash
npm install mapbox-gl-utils-source
```

这样使用：

```js
// ES Module
import { TianDiTu, Google } from 'mapbox-gl-utils-source'

// CommonJS
const utilsSource = require('mapbox-gl-utils-source')
```

## 构建

出于你无法获取到 bundle 文件，或者想自己添加额外的地图服务资源等其它原因，你可以自己构建。

首先， `clone` 到本地

```bash
git clone https://github.com/wang1212/mapbox-gl-utils-source.git <dir>
cd <dir>/
npm install
```

然后，您可以自己修改 **src/** 中的文件，并在完成后运行以下命令：

```bash
npm run build
```

捆绑包文件将在 **build/** 文件夹中生成，包括 **sourcemap** 文件。

## 许可

[MIT](./LICENSE).
