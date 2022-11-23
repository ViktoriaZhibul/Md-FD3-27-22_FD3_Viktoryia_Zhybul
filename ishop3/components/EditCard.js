import React from 'react';
import PropTypes from 'prop-types';

import './EditCard.css';

class EditCard extends React.Component {

    static propTypes = {
        saveEditItem: PropTypes.func.isRequired,
        changeMode: PropTypes.func.isRequired,
        setDisabled: PropTypes.func.isRequired,
        item: PropTypes.shape({
            code: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            count: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        })
    };

    state = {
        code: this.props.item.code,
        name: this.props.item.name,
        count: this.props.item.count,
        img: this.props.item.img,
        price: this.props.item.price,
        imgError: "",
        nameError: "",
        priceError: "",
        countError: "",
    };

    validForm = () => {

        const imgError = this.state.img.includes("https") ? null : "Неверно внесен путь к фото продукта";
        const nameError = this.state.name.length ? null : "Введите наименование продукта";
        const priceError = (isNaN(this.state.price)) || (this.state.price === "") ? "Введите корректную стоимость товара" : null;
        const countError = (isNaN(this.state.count)) || (this.state.count === "") ? "Введите корректную стоимость товара" : null;

        this.setState({ imgError, nameError, priceError, countError })

    }

    editImg = (event) => {
        this.props.setDisabled();
        this.setState({ img: event.target.value }, this.validForm);
    }

    editName = (event) => {
        this.props.setDisabled();
        this.setState({ name: event.target.value }, this.validForm);
    }

    editPrice = (event) => {
        this.props.setDisabled();
        this.setState({ price: event.target.value }, this.validForm);
    }

    editCount = (event) => {
        this.props.setDisabled();
        this.setState({ count: event.target.value }, this.validForm);
    }

    render() {
        return (
            <div className="wrapper__card">
                <h2>Карточка товара</h2>
                <p>Внешний вид товара:
                    <input type="text" value={this.state.img} onChange={this.editImg} />
                    <span>{this.state.imgError}</span>
                </p>
                <p>Наименование товара:
                    <input type="text" value={this.state.name} onChange={this.editName} />
                    <span>{this.state.nameError}</span>
                </p>
                <p>Стоимость товара:
                    <input type="text" value={this.state.price} onChange={this.editPrice} />
                    <span>{this.state.priceError}</span>
                </p>
                <p>Остаток товара:
                    <input type="text" value={this.state.count} onChange={this.editCount} />
                    <span>{this.state.countError}</span>
                </p>
                <input className="table__btn" type="button" value="Save" disabled={(!!(this.state.imgError || this.state.nameError || this.state.priceError || this.state.countError||this.state.imgError==="" || this.state.nameError==="" || this.state.priceError==="" || this.state.countError===""))} onClick={() => this.props.saveEditItem({
                    code: this.state.code,
                    name: this.state.name,
                    count: this.state.count,
                    img: this.state.img,
                    price: this.state.price,
                })} />
                <input className="table__btn" type="button" value="Cancel" onClick={() => this.props.changeMode()} />
            </div>
        )
    }
}

export default EditCard;
