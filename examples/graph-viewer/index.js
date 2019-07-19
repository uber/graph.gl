import React, {Component} from 'react';
import NgraphGenerators from 'ngraph.generators';

// graph.gl
import GraphGL, {
  D3ForceLayout,
  JSONLoader,
  NODE_TYPE,
  randomGraphGenerator,
} from 'graph.gl';

const DEFAULT_NODE_SIZE = 5;

const FORCE_DIRECTED_LAYOUTS = {
  D3Force: 'D3Force',
};

const FORCE_DIRECTED_LAYOUT_ENGINES = {
  [FORCE_DIRECTED_LAYOUTS.D3Force]: D3ForceLayout,
};

const convertNgraphDataset = ngraph => {
  const nodes = [];
  const edges = [];
  ngraph.forEachNode(n => {
    nodes.push({id: n.id});
  });
  ngraph.forEachLink(link => {
    edges.push({
      id: link.id,
      sourceId: link.fromId,
      targetId: link.toId,
    });
  });
  return {nodes, edges};
};

const GRAPH_DATASETS = {
  'Random (20, 40)': () => randomGraphGenerator(20, 40),
  'Random (100, 200)': () => randomGraphGenerator(100, 200),
  'Random (1000, 2000)': () => randomGraphGenerator(1000, 2000),
  'Random (5000, 3000)': () => randomGraphGenerator(5000, 3000),
  'Ladder (10)': () => convertNgraphDataset(NgraphGenerators.ladder(10)),
  'BalancedBinTree (5)': () =>
    convertNgraphDataset(NgraphGenerators.balancedBinTree(5)),
  'BalancedBinTree (8)': () =>
    convertNgraphDataset(NgraphGenerators.balancedBinTree(8)),
  'Grid (10, 10)': () => convertNgraphDataset(NgraphGenerators.grid(10, 10)),
  'WattsStrogatz (100, 10, 0.06)': () =>
    convertNgraphDataset(NgraphGenerators.wattsStrogatz(100, 10, 0.06)),
};

const DEFAULT_LAYOUT = FORCE_DIRECTED_LAYOUTS.D3Force;
const DEFAULT_DATASET = 'Random (20, 40)';

class Root extends Component {
  state = {
    selectedLayout: DEFAULT_LAYOUT,
    selectedDataset: DEFAULT_DATASET,
  };

  handleChangeLayout = ({target: {value}}) =>
    this.setState({selectedLayout: value});

  handleChangeGraph = ({target: {value}}) =>
    this.setState({selectedDataset: value});

  render() {
    const {selectedDataset, selectedLayout} = this.state;
    const graphData = GRAPH_DATASETS[selectedDataset]();
    const Layout = FORCE_DIRECTED_LAYOUT_ENGINES[selectedLayout];
    const graph = JSONLoader({json: graphData});

    return (
      <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <div style={{width: '100%', zIndex: 999}}>
          <div>
            Layout:
            <select
              value={this.state.selectedLayout}
              onChange={this.handleChangeLayout}
            >
              {Object.keys(FORCE_DIRECTED_LAYOUTS).map(layout => (
                <option key={layout} value={layout}>
                  {layout}
                </option>
              ))}
            </select>
          </div>
          <div>
            Dataset:
            <select
              value={this.state.selectedDataset}
              onChange={this.handleChangeGraph}
            >
              {Object.keys(GRAPH_DATASETS).map(data => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div style={{width: '100%', flex: 1}}>
          <GraphGL
            graph={graph}
            layout={new Layout()}
            nodeStyle={[
              {
                type: NODE_TYPE.CIRCLE,
                radius: DEFAULT_NODE_SIZE,
                fill: 'red',
              },
            ]}
            edgeStyle={{
              stroke: '#000',
              strokeWidth: 1,
            }}
          />
        </div>
      </div>
    );
  }
}

export default Root;
