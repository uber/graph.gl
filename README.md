<p align="right">
  <a href="https://travis-ci.com/uber/graph.gl">
    <img src="https://travis-ci.com/uber/graph.gl.svg" alt="build" />
  </a>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fuber%2Fgraph.gl?ref=badge_shield" alt="FOSSA Status">
    <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fuber%2Fgraph.gl.svg?type=shield"/>
  </a>
</p>

<p align="center">
  <img src="https://i.imgur.com/BF9aOEu.png" height="400" />
</p>

# Graph.gl

<p align="center">:warning: This project is no longer being actively developed or maintained due to priority changes. :warning:</p>

## Abstract
Graph.gl is a React component for visualizing large graphs with several utility functions. It can build a highly customizable graph visualization through its composable API. The rendering is powered by deck.gl which is a WebGL based visualization framework.  With Graph.gl, users are enabled to build various type of graph/network applications with minimum efforts while having the capability to extend the existing styles and layouts.

## Motivation
Uber started to build its own knowledge graph since two years ago, and uGraph, the knowledge graph exploration tool was created since then. With the capability of querying large graph data and different ways to explore graph, it’s getting more urgent to produce more produce more different graph visualization applications.
To quickly build a graph visualization, we start to extract the code from uGraph and build a reusable React component for graph visualization, Graph.gl, which equipped advanced Deck.gl rendering capability and several useful graph algorithms and operations. Although there are a great number of commercial graph visualization tools, only a few of them allow users to extend the layout and customization. With Graph.gl, developers are allowed to create graph visualization with minimum efforts while having the capability to override anything they want in the library.

## Goal
We plan to open source this library that can help the community to create their own solutions for the graph. Open source helps promoting the brand of visualization team at Uber, which could help with recruiting. Once Graph.gl is mature and stable enough, we will start to integrate it with several Uber internal tools, such as Jupyter notebook and Querybuilder as a graph visualization tool.

## Roadmap

Phase 1 - 2019 Q3
 - Customization: easily change the appearance of nodes and links.
 - Flexibility: able to extend and create new graph layout algorithms.
 - Compatible with deck.gl: allows complex visualizations to be constructed by composing deck.gl layers, and makes it easy to package and share new graph visualizations as reusable layers.
 - Interaction: support clicking detection, viewport manipulation.
 - Speed / Performance: able to draw medium(5000+ nodes) to large (10,000+ nodes) sized graphs quickly with interactive speed.
 - Testability: able to test each module easily.
 - Well documentation and a gallery of examples.
 - Modular architecture: clean interface between the renderer, layout-engine, and the graph attribute calculation. Users can choose to use our solution as a whole, or to switch out either module if they need to use their own.

Phase 2 - 2019 Q4 - 2020 Q1
 - Support dynamic graph - streaming data.
 - Leverage GPU computation power to get high performance rendering and layout calculation.
 - Pre/Post graph calculation modules, ex: shortest path, pagerank, community detection, HITS
 - 2D / 3D rendering
 - Client/Server side rendering
 - Support arrow data and some other popular graph data format.
 - Multiple Modules: each layout/computation module should be published as separated modules so we can reduce the code size.
 - Pure JavaScript Support

## Get Started
```js
import GraphGL, {
  JSONLoader,
  NODE_TYPE,
  D3ForceLayout
} from 'graph.gl';

const App = ({data}) => {
  const graph = JSONLoader({
    json: data,
    nodeParser: node => ({id: node.id}),
    edgeParser: edge => ({
      id: edge.id,
      sourceId: edge.sourceId,
      targetId: edge.targetId,
      directed: true,
    }),
  });
  return (
    <GraphGL
      graph={graph}
      layout={new D3ForceLayout()}
      nodeStyle={[
        {
          type: NODE_TYPE.CIRCLE,
          radius: 10,
          fill: 'blue',
          opacity: 1,
        },
      ]}
      edgeStyle={{
        stroke: 'black',
        strokeWidth: 2,
      }}
      enableDragging
    />
  );
}
````


## Setup Dev Environment

#### Clone the repo:

```
git clone git@github.com:uber/graph.gl.git
```

#### Install yarn

```
brew update
brew install yarn
```

#### Install dependencies

```
yarn install
```

#### Local Development

You can write a story and open it in the storybook:
```
yarn storybook
```
Please create a new story in stories.js in one of the existing folder or make new folder if necessary.
Each folder should have a readme file to explain what your story does.


#### Testing

```
yarn test
```

To get coverage information, use:

```
yarn cover
```

#### Documentation

You can add your documentation (markdown) in `docs/` folder and the new chapter in `docs/table-of-contents.json`.
Open the local website:
```
yarn website
```

#### Contributing

PRs and bug reports are welcome. Note that you once your PR is
about to be merged, you will be asked to register as a contributor
by filling in a short form.
