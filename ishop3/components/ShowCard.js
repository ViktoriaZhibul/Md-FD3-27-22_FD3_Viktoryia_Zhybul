import React from 'react';
import PropTypes from 'prop-types';

import './ShowCard.css';

class ShowCard extends React.Component {

  static propTypes = {
    item: PropTypes.shape({
      code: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  };
  
  render() {
    return (
      <div>
        <h2>Карточка товара</h2>
        <p>Внешний вид товара: {this.props.item.img}</p>
        <p>Наименование товара: {this.props.item.name}</p>
        <p>Стоимость товара: {this.props.item.price}</p>
        <p>Остаток товара: {this.props.item.count}</p>
      </div>
    )
  }
}

export default ShowCard;
