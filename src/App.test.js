import React from 'react';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // eslint-disable-next-line no-undef
  ReactDOM.render(<App />, div);
});