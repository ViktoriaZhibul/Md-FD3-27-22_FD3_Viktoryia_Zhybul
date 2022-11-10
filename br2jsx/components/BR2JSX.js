import React from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render() {
    const regexp = /<br\s?\/?>/;
    const textArray = this.props.text.split(regexp);

    textArray.map((el, item)=>{textArray.splice(item*2+1, 0, <br key={el+item} />)});
    textArray.splice(-1, 1);

    return (
      <div className="br2jsx">{textArray}</div>
    );
  }
}

export default BR2JSX;
