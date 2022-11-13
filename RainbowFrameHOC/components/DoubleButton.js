import React from 'react';
import PropTypes from 'prop-types';

class DoubleButton extends React.Component {

  static propTypes = {
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
  };

  cbPressed = (event) => {
    let buttonClickValue = event.target.value;
    alert(buttonClickValue);
  };

  render() {

    return (
      <div >
          <input type='button' value={this.props.caption1} onClick={this.cbPressed} />
          {this.props.children}
          <input type='button' value={this.props.caption2} onClick={this.cbPressed} />
      </div>
    );

  }

}

export default DoubleButton;
