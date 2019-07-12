import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryContainer from '../commons/story-container';

const stories = storiesOf('Experimental Layouts', module);
stories.addDecorator(StoryContainer);

// start to add examples
import BasicDoc from './README.md';
import BasicRadialExample from './app';

stories.add('Radial Layout', () => <BasicRadialExample />, {
  readme: {sidebar: BasicDoc},
});
