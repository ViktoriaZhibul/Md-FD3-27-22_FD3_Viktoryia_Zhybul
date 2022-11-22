import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {

  static propTypes = {
    code: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    selectedProductCode: PropTypes.number,
    selectedRow: PropTypes.func.isRequired,
    deletedProduct: PropTypes.func.isRequired,
    setEditRow: PropTypes.func.isRequired,
    iStartedEdit: PropTypes.bool.isRequired,
  };

  getSelectedRow = (event) => {
    this.props.selectedRow(this.props.code);
  }

  editRow = (event) => {
    event.stopPropagation()
    this.props.setEditRow(this.props.code);
  }

  deleteRow = (event)=> {
    event.stopPropagation()
    let isDeleteConfirm = window.confirm("Вы действительно хотите удалить этот продукт?");
    if (isDeleteConfirm)
        this.props.deletedProduct(this.props.code);
  }

  render() {
    return (
      <tr className={(this.props.selectedProductCode==this.props.code) ? "selected__row" : null}
      key={this.props.code}
      onClick={(!this.props.iStartedEdit) ? this.getSelectedRow : null}>
        <td className="table__td">
          <img className={"table__img"} src={this.props.img} alt={this.props.name}/>
        </td>
        <td className="table__td">{this.props.name}</td>
        <td className="table__td">{this.props.price} рублей/ед</td>
        <td className="table__td">{this.props.count}</td>
        <td className="table__td">
          <input className="table__btn" type="button" value="Edit" onClick={this.editRow} disabled={this.props.iStartedEdit}/>
          <input className="table__btn" type="button" value="Delete" onClick={this.deleteRow} disabled={this.props.iStartedEdit}/>
        </td>
      </tr>
    )}

}

export default Product;
