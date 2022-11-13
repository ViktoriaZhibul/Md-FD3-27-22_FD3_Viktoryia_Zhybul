import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import DoubleButton from './components/DoubleButton';
import { withRainbowFrame } from './components/withRainbowFrame';

const caption1="Кнопка 1";
const caption2="Кнопка 2";
const text = "Я текст между кнопками";
let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];

class App extends React.Component {

  render() {
      let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);
      return (
        <Fragment>
          <DoubleButton caption1={caption1} caption2={caption2}>
          {text}
          </DoubleButton>
          <FramedDoubleButton caption1={caption1} caption2={caption2}>
          {text}
          </FramedDoubleButton>
        </Fragment>
      );
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('container')
);

export default App;


