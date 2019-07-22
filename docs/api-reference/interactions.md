# Interactions

## nodeEvents (Object, required)
All events callbacks will be triggered with the following parameters:
```js
info: {
  object:  The object that was picked.
  x: Mouse position x relative to the viewport.
  y: Mouse position y relative to the viewport.
  coordinate:  Mouse position in viewport coordinate system.
}
```

 - onClick: This callback will be called when the mouse clicks on an node. Default: `null`.
 - onMouseEnter: This callback will be called when the mouse enter an node. Default: `null`.
 - onHover: This callback will be called when the mouse hovers over an node. Default: `null`.
 - onMouseLeave: This callback will be called when the mouse leaves an node. Default: `null`.


## edgeEvents (Object, required)
All events callbacks will be triggered with the following parameters:
```js
info: {
  object:  The object that was picked.
  x: Mouse position x relative to the viewport.
  y: Mouse position y relative to the viewport.
  coordinate:  Mouse position in viewport coordinate system.
}
```

 - onClick: This callback will be called when the mouse clicks on an edge. Default: `null`.
 - onHover: This callback will be called when the mouse hovers over an edge. Default: `null`.


## wheelSensitivity: PropTypes.number,
Changes the scroll wheel sensitivity when zooming. This is a multiplicative modifier.
So, a value between 0 and 1 reduces the sensitivity (zooms slower),
and a value greater than 1 increases the sensitivity (zooms faster)

## enableZooming: PropTypes.bool,
Whether zooming the graph is enabled

## enablePanning: PropTypes.bool,
Whether panning the graph is enabled

## enableDragging: PropTypes.bool,
Whether dragging the node is enabled

## resumeLayoutAfterDragging: PropTypes.bool,
Resume layout calculation after dragging a node
