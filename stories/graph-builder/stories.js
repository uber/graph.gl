import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {object, color, number, select} from '@storybook/addon-knobs';
import StoryContainer from '../commons/story-container';
import {fetchJSONFromS3} from '../../utils/io';

const stories = storiesOf('Demo', module);

// start to add examples
import BasicDoc from './README.md';
import GraphBuilder from './app';

function extractDataOptions(obj) {
  return Object.keys(obj).reduce((res, k) => {
    if (!k.toLocaleLowerCase().includes('uuid')) {
      res[k] = k;
    }
    return res;
  }, {});
}

fetchJSONFromS3(['complex.json']).then(
  ([complexGraph]) => {
    stories.addDecorator(StoryContainer).add(
      'GraphBuilder',
      () => {
        const groupDataInput = 'Data input';
        const nodeCustomizations = 'Node customizations';
        const edgeCustomizations = 'Edge customizations';

        // data input
        const newData = object('Data', complexGraph, groupDataInput);

        // node customizations
        const nodeOptions = extractDataOptions(newData.nodes[0]);
        const nodeSizeMapping = select(
          'Node Size Mapping',
          {
            Constant: 'Constant',
            ...nodeOptions,
          },
          'Constant',
          nodeCustomizations
        );
        const nodeSize =
          nodeSizeMapping === 'Constant'
            ? number(
                'Node size',
                30,
                {range: true, min: 1, max: 100},
                nodeCustomizations
              )
            : '0';

        // edge customizations
        const edgeOptions = extractDataOptions(newData.edges[0]);
        const edgeWidthMapping = select(
          'Edge Width Mapping',
          {
            Constant: 'Constant',
            ...edgeOptions,
          },
          'Constant',
          edgeCustomizations
        );
        const edgeWidth =
          edgeWidthMapping === 'Constant'
            ? number(
                'Edge width',
                3,
                {range: true, min: 1, max: 20},
                edgeCustomizations
              )
            : '0';

        return (
          <GraphBuilder
            data={newData}
            nodeSizeMapping={nodeSizeMapping}
            nodeSize={nodeSize}
            nodeColor={color('Node color', '#7743CE', nodeCustomizations)}
            edgeWidthMapping={edgeWidthMapping}
            edgeWidth={edgeWidth}
            edgeColor={color('Edge color', '#777777', edgeCustomizations)}
            onNodeClick={action('nodeClicked')}
            onEdgeClick={action('edgeClicked')}
          />
        );
      },
      {readme: {sidebar: BasicDoc}}
    );
  }
);
