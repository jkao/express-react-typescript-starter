import * as React from 'react';
import { TextArea } from '@blueprintjs/core';

import './App.css';

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className='app'>
        <h1>APP</h1>
        <TextArea>This is a text box</TextArea>
      </div>
    );
  }
}
