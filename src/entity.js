const extendDeep = AFRAME.utils.extendDeep;
const meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive('a-mapbox', extendDeep({}, meshMixin, {
  defaultComponents: {
    geometry: {
      primitive: 'plane'
    },
    material: {
      color: '#ffffff',
      shader: 'flat',
      side: 'both',
      transparent: true
    },
    ['mapbox']: {}
  },

  mappings: {
    height: 'geometry.height',
    width: 'geometry.width'
  }
}));

