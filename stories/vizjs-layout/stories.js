import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {boolean, select, object} from '@storybook/addon-knobs';
import StoryContainer from '../commons/story-container';

import {fetchJSONFromS3} from '../../utils/io';

const stories = storiesOf('Experimental Layouts', module);
stories.addDecorator(StoryContainer);

// start to add examples
import BasicDoc from './README.md';
import VizJSExample from './app';

fetchJSONFromS3(['les-miserable.json']).then(
  ([sampleGraph]) => {
    stories.add(
      'Viz.js',
      () => {
        const controlGroup = 'Interactive control';
        const selectedEngine = select(
          'Engine',
          {
            circo: 'circo',
            dot: 'dot',
            fdp: 'fdp',
            neato: 'neato',
            osage: 'osage',
            twopi: 'twopi',
          },
          'dot',
          controlGroup
        );
        return (
          <VizJSExample
            onNodeClick={action('nodeClicked')}
            data={object('Data', sampleGraph, 'Data Input')}
            selectedEngine={selectedEngine}
            orthogonal={boolean('Orthogonal layout', true, controlGroup)}
            leftToRight={boolean('Left to Right', true, controlGroup)}
          />
        );
      },
      {readme: {sidebar: BasicDoc}}
    );
  }
);
