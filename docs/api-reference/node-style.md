# Node Style

Node accessors control the way how users want to render nodes. Layers provide the flexibility that users can add several visual layers to represent a node, such as adding circles, icons, and text labels.

## usage
Example of nodeStyle:
```js
nodeStyle={[
  {
    type: NODE_TYPE.CIRCLE,
    radius: object => this.getNodeSize(d),
    color: '#f00'
  },
]}
```

#### `type` (String, required)

- `Type` can only be `CIRCLE`, `MARKER`, `RECTANGLE`, or `LABEL`.
- Different type of layer may requires different properties. See more details of each layer type below.

#### `offset` (null | Array, optional)
- Default: `null`
- The offset distance from the position of the object.

#### `scaleWithZoom` (Boolean, optional)
- Default: `true`
- If `scaleWithZoom` is true, the size of the element will be scaled according to the zoom level.


## CIRCLE type:

TBD - pic

#### `fill` (String | Array | Function, optional)
- Default: `#fff`
- The value can be hex code, color name, or color array `[r, g, b, a]` (each component is in the 0 - 255 range).
If a color value (hex code, color name, or array) is provided, it is used as the global color for all objects.
If a function is provided, it is called on each rectangle to retrieve its color.

#### `radius` (Number | Function, optional)
- Default: `1`
- If a number is provided for `radius`, all the circles will have the same radius.
If an accessor function is provided, the function will be called to retrieve the radius of each circle.

#### `stroke` (String | Array | Function, optional)
- Default: `[0, 0, 0, 255]`
- The value can be hex code, color name, or color array `[r, g, b, a]` (each component is in the 0 - 255 range).
- If a color value (hex code, color name, or array) is provided, it is used as the global color for all objects.
- If a function is provided, it is called on each rectangle to retrieve its color.

#### `strokeWidth` (Number | Function, optional)
- Default: `0`
- The width of the outline of each rectangle.
- If a number is provided, it is used as the outline width for all rectangles.
- If a function is provided, it is called on each rectangle to retrieve its outline width.


## RECTANGLE type:

TBD - pic

#### `width` (Number | Function, required)
- The width of the rectancle.
- If a number is provided, it is used as the width for all objects.
- If a function is provided, it is called on each object to retrieve its width.

#### `height` (Number | Function, required)
- The height of the rectangle.
- If a number is provided, it is used as the height for all objects.
- If a function is provided, it is called on each object to retrieve its height.

#### `fill` (String | Array | Function, optional)
- Default: `[0, 0, 0, 255]`
- The value can be hex code, color name, or color array `[r, g, b, a]` (each component is in the 0 - 255 range).
If a color value (hex code, color name, or array) is provided, it is used as the global color for all objects.
- If a function is provided, it is called on each object to retrieve its color.

#### `stroke` (String | Array | Function, optional)
- Default: `[0, 0, 0, 255]`
- The value can be hex code, color name, or color array `[r, g, b, a]` (each component is in the 0 - 255 range).
- If a color value (hex code, color name, or array) is provided, it is used as the global color for all objects.
- If a function is provided, it is called on each rectangle to retrieve its color.

#### `strokeWidth` (Number | Function, optional)
- Default: `0`
The width of the outline of each rectangle.
If a number is provided, it is used as the outline width for all rectangles.
If a function is provided, it is called on each rectangle to retrieve its outline width.

## MARKER type:

TBD - pic

#### `marker` (String | Function, required)
- Marker can be one of the following types:
```js
"location-marker-filled", "bell-filled", "bookmark-filled", "bookmark", "cd-filled", "cd", "checkmark", "circle-check-filled", "circle-check", "circle-filled", "circle-i-filled", "circle-i", "circle-minus-filled", "circle-minus", "circle-plus-filled", "circle-plus", "circle-questionmark-filled", "circle-questionmark", "circle-slash-filled", "circle-slash", "circle-x-filled", "circle-x", "circle", "diamond-filled", "diamond", "flag-filled", "flag", "gear", "heart-filled", "heart", "bell", "location-marker", "octagonal-star-filled", "octagonal-star", "person-filled", "person", "pin-filled", "pin", "plus-small", "plus", "rectangle-filled", "rectangle", "star-filled", "star", "tag-filled", "tag", "thumb-down-filled", "thumb-down", "thumb-up", "thumb_up-filled", "triangle-down-filled", "triangle-down", "triangle-left-filled", "triangle-left", "triangle-right-filled", "triangle-right", "triangle-up-filled", "triangle-up", "x-small", "x"
```
- If a string is provided for `marker`, all the objects will use the same marker.
- If an accessor function is provided, the function will be called to retrieve the marker of each marker.

#### `size` (Number | Function, optional)
- Default: `12`
- If a number is provided for `size`, all the markers will have the same size.
- If an accessor function is provided, the function will be called to retrieve the size of each marker.

#### `fill` (String | Array | Function, optional)
- Default: `[0, 0, 0, 255]`
- The value can be hex code, color name, or color array `[r, g, b, a]` (each component is in the 0 - 255 range).
If a color value (hex code, color name, or array) is provided, it is used as the global color for all objects.
- If a function is provided, it is called on each object to retrieve its color.

## LABEL type:

TBD - pic

#### `text` (String | Function, required)
- The text of the label.
- If a string is provided for `text`, all the objects will have the same text.
- If an accessor function is provided, the function will be called to retrieve the text of each object.

#### `color` (String | Array | Function, optional)
- Default: `[0, 0, 0, 255]`
- The value can be hex code, color name, or color array `[r, g, b, a]` (each component is in the 0 - 255 range).
- If a color value (hex code, color name, or array) is provided, it is used as the global color for all objects.
- If a function is provided, it is called on each object to retrieve its color.

#### `fontSize` (Number | Function, optional)
- Default: `12`
- If a number is provided for `fontSize`, all the labels will have the same font size.
- If an accessor function is provided, the function will be called to retrieve the font size of each label.

#### `textAnchor` (String | Function, optional)
- Default: `middle`
- The text anchor. Available options include 'start', 'middle' and 'end'.

- If a string is provided, it is used as the text anchor for all objects.
- If a function is provided, it is called on each object to retrieve its text anchor.

#### `alignmentBaseline` (String | Function, optional)
- Default: `center`
The alignment baseline. Available options include 'top', 'center' and 'bottom'.
- If a string is provided, it is used as the alignment baseline for all objects.
- If a function is provided, it is called on each object to retrieve its alignment baseline.

#### `angle` (Number | Function, optional)
- Default: `0`
- The rotating angle of each text label, in degrees.
- If a number is provided, it is used as the angle for all objects.
- If a function is provided, it is called on each object to retrieve its angle.
