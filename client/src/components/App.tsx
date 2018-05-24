import * as React from 'react';
import { TextArea } from '@blueprintjs/core';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <h1>APP</h1>
        <TextArea>This is a text box</TextArea>
      </div>
    );
  }
}

export default App;
