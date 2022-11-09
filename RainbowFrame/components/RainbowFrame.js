import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  
  render() {
    const getReduce = (children, current) => {
        return (
            <div style={{ border: "solid 10px " + current, padding: "5px" }}>
                {children}
            </div>
        );
    }

    const rainbowFrame = this.props.colors.reduce(getReduce, this.props.children);

    return (
        <div style={{ width: 800, textAlign: 'center', margin: 'auto' }}>
            {rainbowFrame}
        </div>
    );
}

}

export default RainbowFrame;
