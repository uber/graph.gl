// @noflow
import React from 'react';

// To expand the container to the entire page.
const StoryContainer = story => (
  <div style={{width: '100vw', height: '100vh'}}>{story()}</div>
);

export default StoryContainer;
