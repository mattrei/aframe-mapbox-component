# aframe-mapbox-component

A 3D street map entity & component for [A-Frame](https://aframe.io).


The component and idea was originally thankfully developed by [jesstelford](https://github.com/jesstelford). I forked and renamed the project accordingly and will continue to develop this component.

### Installation

#### Browser

Use directly from the unpkg CDN:

```html
<head>
  <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-mapbox-component/dist/aframe-mapbox-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-mapbox position="0 0 -5"></a-map>
    <a-camera></a-camera>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-mapbox-component
```

Then register and use.

```javascript
import 'aframe';
import 'aframe-mapbox-component';
```

### `mapbox` component

#### Schema

| attribute | type | default | description |
|---|---|---|---|
| pxToWorldRatio | number | 100 | The number of pixels per world unit to render the map on the plane. ie; when set to 100, will display 100 pixels per 1 meter in world space. (see [a note on fidelity](#a-note-on-fidelity)). However the resulting ratio is calculated from the widht and height of the material, which always needs to be in power of two. |
| accesstoken | string | | An optional access token if using Mapbox's style. Not needed if you use your own styling |
| style | string | '' | Either a standard Mapbox URL (like `mapbox://styles/mapbox/satellite-v8`) or a your custom style url created with [Mapbox Studio](https://www.mapbox.com/mapbox-studio/) |
| ... | | | All other options are passed directly to Mapbox GL |

##### A note on fidelity

The higher `pxToWorldRatio`, the more map area will be displayed per world
unit. That canvas has to be translated into a plane in world space. This is
combined with the width and height in world space (from geometry.width and
geometry.height on the entity) to set up the plane for rendering in 3D.

The map is rendered as a texture on a 3D plane. For best performance, texture
sizes should be kept to powers of 2. Keeping this in mind, you should work to
ensure `width * pxToWorldRatio` and `height * pxToWorldRatio` are powers of 2.

#### Events

| event name | data | description |
|---|---|---|
| `mapbox-loaded` | (none) | Fired on the first render of the map component |
| `mapbox-moveend` | (none) | Fired when zoom, center, bearing, or pitch are changed _after_ the initial render |
