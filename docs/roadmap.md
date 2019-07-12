# Infovis Roadmap

## Composable Base Layers

### Axis Layer

2D/3D
Scales, ticks etc.

### Grid Layer

Match axis layer with scales ticks etc.

* We should replace the axes and grid in the 3D surface explorer with these general ones. http://deck.gl/#/examples/custom-layers/3d-surface-explorer
* Consider moving surface explorer into graph.gl


### Orthographic Controller

Flat zoom and pan, fit bounds.


### Controller Requirements

Infovis apps tend to need detailed control over interaction.

* More props (zoom speed etc)
* Ability to customize or completely rewrite the controller.
* Simplify API, move the State class into controller class?
* Better view/controller docs? (pointers to issues with current doc would be helpful)


### ScreenSpace Requirements

Some layers like `AxisLayer` want to layout in screen space

* `Layer.shouldUpdateState() { return true; }`
* `Layer.updateState({changeFlags}) { if (changeFlags.viewportChanged) { this.context.viewport... }}`
* `COORDINATE_SYSTEM.SCREEN_SPACE`
    * Does such a coordinate system make sense?
    * Screen is 0-1, 0-1?
    * Aspect ratio preserved?
* Screen space fit bounds in controller?
