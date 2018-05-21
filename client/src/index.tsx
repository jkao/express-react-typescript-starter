import * as React from 'react';
import * as ReactDOM from 'react-dom';

const root: HTMLElement = document.getElementById('root') as HTMLElement;
const renderedHTML = (
  <div>Root</div>
);

ReactDOM.render(renderedHTML, root);
