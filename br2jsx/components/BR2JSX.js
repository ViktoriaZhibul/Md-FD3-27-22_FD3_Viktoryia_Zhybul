import React from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render() {
    const regexp = /<br\s?\/?>/;
    const textArray = this.props.text.split(regexp);

    let result = [];

    for (let i=0; i<textArray.length; i++) {
      result.push(textArray[i]);
      if(i != textArray.length-1) {
        result.push(<br key={10+i}/>);
      }
    }
    return (
      <div className="br2jsx">{result}</div>
    );
  }
}

export default BR2JSX;
