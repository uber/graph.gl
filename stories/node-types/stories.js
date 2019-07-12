import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryContainer from '../commons/story-container';

// graph.gl
import GraphGL, {
  D3ForceLayout,
  JSONLoader,
  NODE_TYPE,
  MARKER_TYPE,
} from '../../src';
// data
import SAMPLE_GRAPH_DATASETS from '../__fixtures__/sample-datasets';
const graph = JSONLoader({json: SAMPLE_GRAPH_DATASETS['Random (20, 40)']()});

// create category
const stories = storiesOf('Node types', module);
stories.addDecorator(StoryContainer);

// constants
const DEFAULT_COLOR = 'rgb(236, 81, 72)';

const shareProps = {
  graph,
  layout: new D3ForceLayout(),
  edgeStyle: {
    stroke: '#000',
    strokeWidth: 1,
  },
};

stories.add('Circle', () => (
  <GraphGL
    {...shareProps}
    nodeStyle={[
      {
        type: NODE_TYPE.CIRCLE,
        radius: 10,
        fill: DEFAULT_COLOR,
      },
    ]}
  />
));

stories.add('Rectangle', () => (
  <GraphGL
    {...shareProps}
    nodeStyle={[
      {
        type: NODE_TYPE.RECTANGLE,
        width: 12,
        height: 12,
        fill: DEFAULT_COLOR,
      },
    ]}
  />
));

stories.add('Label', () => (
  <GraphGL
    {...shareProps}
    nodeStyle={[
      {
        type: NODE_TYPE.LABEL,
        text: 'node',
        color: DEFAULT_COLOR,
        fontSize: 20,
      },
    ]}
  />
));

// get the markers 'xxx-filled'
const markerList = Object.values(MARKER_TYPE).filter(name =>
  name.includes('-filled')
);
const markerLength = markerList.length;
stories.add('Marker', () => (
  <GraphGL
    {...shareProps}
    nodeStyle={[
      {
        type: NODE_TYPE.MARKER,
        marker: node => markerList[node.id % markerLength],
        fill: DEFAULT_COLOR,
        size: 30,
      },
    ]}
  />
));

stories.add('Composite', () => (
  <GraphGL
    {...shareProps}
    nodeStyle={[
      {
        type: NODE_TYPE.CIRCLE,
        radius: 10,
        fill: DEFAULT_COLOR,
      },
      {
        type: NODE_TYPE.MARKER,
        marker: node => markerList[node.id % markerLength],
        fill: 'white',
        size: 20,
      },
      {
        type: NODE_TYPE.LABEL,
        text: node => markerList[node.id % markerLength],
        color: DEFAULT_COLOR,
        fontSize: 10,
        offset: [0, 15],
      },
    ]}
  />
));
