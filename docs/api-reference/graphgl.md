# GraphGL

## Usage

```
<GraphGL
  grpah
  layout
  nodeStyle
  nodeEvents
  edgeStyle
  edgeEvents
/>
```

## graph (Graph, required)

Example graph:
```

```

## layout (Layout, required)
Use one of the layouts provided by Graph.gl or create a new custom layout class by following the [instruction](/docs/advanced/custom-layout). Right now Graph.gl provides D3 and Simple layout for basic usage. There are more experimental layouts under `src/experimental-layouts`, please reference to the experimental layout [gallery](docs/experimental).

## nodeStyle (Array, required)

A node is made of a set of layers. nodeStyle is a set of style objects to describe the style for each layer.
For more detail, please see the explanation of nodeStyle at [here](/docs/node-style).

## nodeEvents (Object, required)
All events callbacks will be triggered with the following parameters:
```
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

## edgeStyle  (Object, required)

For more detail, please see the explanation of edgeStyle at [here](/docs/edge-style)

## edgeEvents (Object, required)
All events callbacks will be triggered with the following parameters:
```
info: {
  object:  The object that was picked.
  x: Mouse position x relative to the viewport.
  y: Mouse position y relative to the viewport.
  coordinate:  Mouse position in viewport coordinate system.  
}
```

 - onClick: This callback will be called when the mouse clicks on an edge. Default: `null`.
 - onHover: This callback will be called when the mouse hovers over an edge. Default: `null`.
