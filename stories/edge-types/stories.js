import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryContainer from '../commons/story-container';

// graph.gl
import GraphGL, {
  D3ForceLayout,
  JSONLoader,
  NODE_TYPE,
  EDGE_DECORATOR_TYPE,
} from '../../src';
// data
import preLayoutGraph from '../__fixtures__/pre-layout-graph.json';

// create category
const stories = storiesOf('Edge types', module);
stories.addDecorator(StoryContainer);

import EdgeLabelDoc from './edge-label.md';
stories
  .add(
    'Label Decorator',
    () => (
      <GraphGL
        graph={JSONLoader({json: preLayoutGraph})}
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
          decorators: [
            {
              type: EDGE_DECORATOR_TYPE.LABEL,
              text: edge => edge.id,
              color: '#000',
              fontSize: 18,
            },
          ],
        }}
      />
    ),
    {readme: {sidebar: EdgeLabelDoc}}
  )
  .add('FlowPath Decorator', () => (
    <GraphGL
      graph={JSONLoader({json: preLayoutGraph})}
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
        decorators: [
          {
            type: EDGE_DECORATOR_TYPE.FLOW,
            color: '#00f',
            speed: 1,
            tailLength: 15,
            width: 5,
          },
        ],
      }}
    />
  ));
