import React, {Component} from 'react';

// data
import SAMPLE_GRAPH_DATASETS from '../commons/sample-datasets';

// graph.gl
import GraphGL, {JSONLoader, NODE_TYPE} from '../../src';
import ColaLayout from './cola-layout';

const DEFAULT_NODE_SIZE = 10;
const DEFAULT_COLOR = 'rgb(236, 81, 72)';

export default class ColaExample extends Component {
  render() {
    const graphData = SAMPLE_GRAPH_DATASETS[this.props.selectedDataset]();
    const graph = JSONLoader({json: graphData});

    if (!graph) {
      return null;
    }

    return (
      <GraphGL
        graph={graph}
        layout={new ColaLayout()}
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
