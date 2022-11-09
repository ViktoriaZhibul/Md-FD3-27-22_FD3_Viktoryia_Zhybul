"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

class App extends React.Component {

  render() {
      let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
      return (
          <RainbowFrame colors={colors}>
              Hello!
          </RainbowFrame>
      );
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('container')
);

export default App;

