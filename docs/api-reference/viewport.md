# Viewport

## initialViewState (optional)

```js
initialViewState={{
  target: [0, 0],
  zoom: 1,
}}
```
 - target ([x: Number, y: Number], optional):  The target origin to the center of the view.
 - zoom (Number, optional): The zoom level of the view.

## minZoom: PropTypes.number
A minimum scale factor for zoom level of the graph.

## maxZoom: PropTypes.number,
A maximum scale factor for zoom level of the graph.

## viewportPadding: PropTypes.number,
Padding for fitting entire graph in the screen. (pixel)
