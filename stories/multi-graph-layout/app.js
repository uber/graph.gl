import React, {Component} from 'react';
import Color from 'color';

// data
import sampleGraph from './sample-graph.json';

// graph.gl
import GraphGL, {
  EDGE_DECORATOR_TYPE,
  JSONLoader,
  MultiGraphLayout,
  NODE_TYPE,
} from '../../src';

const DEFAULT_NODE_SIZE = 30;
const DEFAULT_NODE_PLACEHOLDER_SIZE = 40;
const DEFAULT_NODE_PLACEHOLDER_COLOR = 'rgb(240, 240, 240)';

export default class MultiGraphExample extends Component {
  render() {
    return (
      <GraphGL
        graph={JSONLoader({json: sampleGraph})}
        layout={
          new MultiGraphLayout({
            nBodyStrength: -8000,
          })
        }
        nodeStyle={[
          this.props.showNodePlaceholder && {
            type: NODE_TYPE.CIRCLE,
            radius: DEFAULT_NODE_PLACEHOLDER_SIZE,
            fill: DEFAULT_NODE_PLACEHOLDER_COLOR,
          },
          this.props.showNodeCircle && {
            type: NODE_TYPE.CIRCLE,
            radius: DEFAULT_NODE_SIZE,
            fill: this.props.nodeColor,
          },
          {
            type: NODE_TYPE.CIRCLE,
            radius: node => (node.getPropertyValue('star') ? 6 : 0),
            fill: [255, 255, 0],
            offset: [18, -18],
          },
          this.props.showNodeLabel && {
            type: NODE_TYPE.LABEL,
            text: node => node.getId(),
            color: Color(this.props.nodeLabelColor).array(),
            fontSize: this.props.nodeLabelSize,
          },
        ]}
        edgeStyle={{
          stroke: this.props.edgeColor,
          strokeWidth: this.props.edgeWidth,
          decorators: [
            this.props.showEdgeLabel && {
              type: EDGE_DECORATOR_TYPE.LABEL,
              text: edge => edge.getPropertyValue('type'),
              color: Color(this.props.edgeLabelColor).array(),
              fontSize: this.props.edgeLabelSize,
            },
          ],
        }}
      />
    );
  }
}