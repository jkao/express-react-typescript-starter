import * as React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        APP
        <div>
          <Link to="/">Root</Link>
          <Link to="/test">Test</Link>
        </div>
      </div>
    );
  }
}

export default App;
