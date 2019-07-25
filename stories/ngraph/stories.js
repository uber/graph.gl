import React from 'react';
import {storiesOf} from '@storybook/react';
import {select} from '@storybook/addon-knobs';
import StoryContainer from '../commons/story-container';

// data
import SAMPLE_GRAPH_DATASETS from '../commons/sample-datasets';

const stories = storiesOf('Experimental Layouts', module);
stories.addDecorator(StoryContainer);

// start to add examples
import BasicDoc from './README.md';
import NGraphExample from './app';

stories.add(
  'NGraph',
  () => {
    const selectedDataset = select(
      'Dataset',
      Object.keys(SAMPLE_GRAPH_DATASETS).reduce((res, k) => {
        res[k] = k;
        return res;
      }, {}),
      'Les Miserable',
      'Interactive controls'
    );
    return <NGraphExample selectedDataset={selectedDataset} />;
  },
  {readme: {sidebar: BasicDoc}}
);
