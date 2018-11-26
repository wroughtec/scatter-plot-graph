// @flow
import React from 'react';
import { render } from 'react-dom';
import ReactChartkick from 'react-chartkick';
import Chart from 'chart.js';
import { App } from './client/App';

ReactChartkick.addAdapter(Chart);

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('No Valid html element with ID root');
}

render(<App />, rootElement);
