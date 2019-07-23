# Versioning Policy

Please visit the [release history](https://github.com/uber/graph.gl/releases). This log includes a list of bug fixes and new features, as well as breaking changes and migration guides.

The project follows [SemVer](https://semver.org/), with a few flavours. We do not bump major versions for the following changes:

- Any component or function that's prefixed with Unstable_ / unstable_ may change or be removed without notice.
- Visual changes, like colors and sizes, or any changes in CSS.
- Change in undocumented APIs and internal data structures.
- Development builds of Graph.gl include many helpful warnings.

In the event of a future breaking change, we will add warnings which indicate the feature is scheduled for deprecation and will provide migration instructions. Deprecation warnings may be added in a minor version. Following major versions will remove the deprecated feature.
