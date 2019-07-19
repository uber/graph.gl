import React, {Component} from 'react';

// data
import SAMPLE_GRAPH_DATASETS from '../__fixtures__/sample-datasets';

// graph.gl
import GraphGL, {JSONLoader, NODE_TYPE} from '../../src';
import NGraphLayout from './ngraph-layout';

const DEFAULT_NODE_SIZE = 10;
const DEFAULT_COLOR = 'rgb(236, 81, 72)';

export default class NGraphExample extends Component {
  render() {
    const graphData = SAMPLE_GRAPH_DATASETS[this.props.selectedDataset]();
    return (
      <GraphGL
        graph={JSONLoader({json: graphData})}
        layout={new NGraphLayout()}
        nodeStyle={[
          {
            type: NODE_TYPE.CIRCLE,
            radius: DEFAULT_NODE_SIZE,
            fill: DEFAULT_COLOR,
          },
        ]}
        edgeStyle={{
          stroke: DEFAULT_COLOR,
          strokeWidth: 2,
        }}
      />
    );
  }
}
