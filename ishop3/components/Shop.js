import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Product from './Product';
import ShowCard from './ShowCard';
import EditCard from './EditCard';

class Shop extends React.Component {

  static propTypes = {
    shop: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        count: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
      })
    )
  }

  state = {
    currentProducts: this.props.products,
    selectedProductCode: null,
    mode: 0,   //0-ничего не отображается, 1- карточка товара, 2 - редактировать товар, 3- создать новый товар;
    isStartedEdit: false,
    lastProductCode: null,
  }

  setSelectedRow = (code) => {
    this.setState(
      {
        selectedProductCode: code,
        mode: 1,
      }
    );
  }

  setEditRow = (code) => {
    this.setState(
      {
        selectedProductCode: code,
        mode: 2,
      }
    );
  }

  deleteProduct = (code) => {
    let newArr = this.state.currentProducts.filter((el) => el.code != code);
    this.setState({ currentProducts: newArr });
  }

  saveEditItem = (item) => {
    const arr = this.state.currentProducts;
    if (this.state.mode === 2) {
      let index = arr.findIndex((el) => el.code === item.code);
      let editCard = arr.splice(index, 1, item);
    }
    if (this.state.mode === 3) {
      arr.push(item);
    }
    this.setState(
      { 
        currentProducts: arr,
        mode: 0,
        isStartedEdit: false,
      }
    );
  }

  changeMode = () => {
    this.setState(
      {
        mode: 0,
        isStartedEdit: false,
      }
    );
  }

  setDisabled = () => {
    if ((this.state.mode === 2)||(this.state.mode === 3)) {
      this.setState(
        {
          isStartedEdit: true,
        }
      );
    }
  }

  cteateNewProduct = () => {
    const arr = this.state.currentProducts;
    let productCode = arr.reduce((first, next) => first.code > next.code ? first.code : next.code);
    productCode++;
    this.setState(
      {
        mode: 3,
        lastProductCode: productCode,
      }
    );
  }

  render() {
    let currentProductsArr = this.state.currentProducts.map((v) =>
      <Product key={v.code}
        selectedProductCode={this.state.selectedProductCode}
        selectedRow={this.setSelectedRow}
        deletedProduct={this.deleteProduct}
        name={v.name}
        count={v.count}
        code={v.code}
        img={v.img}
        price={v.price}
        setEditRow={this.setEditRow}
        iStartedEdit={this.state.isStartedEdit}>
      </Product>
    )

    const theadArr = ["Описание товара", "Наименование товара", "Цена", "Количество", "Редактировать/Удалить товар"].map((instance) => {
      return <td key={instance}>{instance}</td>;
    })

    return (
      <div>
        <table className="table">
          <caption className="table__caption">{this.props.shop}</caption>
          <thead className="table__head">
            <tr>{theadArr}</tr>
          </thead>
          <tbody>{currentProductsArr}</tbody>
        </table>
        <div>
          <input className="table__btn" type="button" value="New product" disabled={this.state.isStartedEdit} onClick={this.cteateNewProduct}/>
        </div>
        {
          (this.state.mode === 1) && (<ShowCard saveEditItem={this.saveEditItem} item={this.state.currentProducts.find((el) => el.code === this.state.selectedProductCode)}/>)
        }
        {
          (this.state.mode === 2) && (<EditCard key={this.state.selectedProductCode} saveEditItem={this.saveEditItem} changeMode={this.changeMode} item={this.state.currentProducts.find((el) => el.code === this.state.selectedProductCode)} setDisabled={this.setDisabled}/>)
        }
        {
          (this.state.mode === 3) && (<EditCard key={this.state.lastProductCode + 100} saveEditItem={this.saveEditItem} changeMode={this.changeMode} item={{code: this.state.lastProductCode + 100, name: "", count: "", img: "", price: ""}} setDisabled={this.setDisabled}/>)
        }
      </div>
    )
  }
}

export default Shop;
