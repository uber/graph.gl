import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryContainer from '../commons/story-container';

// graph.gl
import GraphGL, {
  JSONLoader,
  NODE_TYPE,
  D3ForceLayout,
  SimpleLayout,
} from '../../src';

// data
import preLayoutGraph from '../__fixtures__/pre-layout-graph.json';
import {fetchJSONFromS3} from '../../utils/io';

const stories = storiesOf('Basic Layouts', module);
stories.addDecorator(StoryContainer);

// start to add examples
import SimpleDoc from './simple.md';
import D3Doc from './d3.md';

stories.add(
  'Simple',
  () => (
    <GraphGL
      graph={JSONLoader({json: preLayoutGraph})}
      layout={new SimpleLayout()}
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
  ),
  {readme: {sidebar: SimpleDoc}}
);

fetchJSONFromS3(['complex.json']).then(
  ([complexGraph]) => {
    stories.add(
  'D3',
  () => {
    const graph = JSONLoader({
      json: complexGraph,
      nodeParser: node => ({id: node.id}),
      edgeParser: edge => ({
        id: Math.random() * 10000,
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
  },
  {readme: {sidebar: D3Doc}}
);


  }
)
