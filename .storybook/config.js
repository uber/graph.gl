import {configure, addDecorator, addParameters, storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withKnobs} from '@storybook/addon-knobs';
import {addReadme} from 'storybook-readme';
import '@babel/polyfill';

import Theme from './theme';

import StoryContainer from '../stories/commons/story-container';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// See all options for withOptions:
// https://www.npmjs.com/package/@storybook/addon-options
addParameters({
  options: {
    theme: Theme,
    panelPosition: 'right',
    showSearchBox: false,
    showPanel: true,
    selectedAddonPanel: 'README',
    sortStoriesByKind: true,
  },
});

addDecorator(addReadme);

// See all options for withInfo:
// https://github.com/storybooks/storybook/tree/master/addons/info#options-and-defaults
addDecorator(
  withInfo({
    maxPropArrayLength: 3,
    propTablesExclude: [StoryContainer],
    source: false,
  })
);

// See all options for withKnobs:
// https://www.npmjs.com/package/@storybook/addon-knobs#withknobs-options
addDecorator(withKnobs);

configure(loadStories, module);
