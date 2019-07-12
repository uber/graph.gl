import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryContainer from '../commons/story-container';

const stories = storiesOf('Traffic Flow', module);
stories.addDecorator(StoryContainer);

import TrafficFlow from './app';

stories.add('Traffic Flow', () => <TrafficFlow />, {
  options: {
    showPanel: false,
  },
});
