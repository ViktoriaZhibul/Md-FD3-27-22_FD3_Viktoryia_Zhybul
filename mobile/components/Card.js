import React from 'react';
import PropTypes from 'prop-types';

import { clickEvents } from './events';


class Card extends React.Component {

    static propTypes = {
        info: PropTypes.shape({
            id: PropTypes.number.isRequired,
            surname: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            secName: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
          }),
    };

    surNameFromInput = React.createRef();
    nameFromInput = React.createRef();
    secNameFromInput = React.createRef();
    balanceFromInput = React.createRef();

    cancel = (event) =>{
        clickEvents.emit('changeMode', 0);
      }

    saveEditOrNewClient = (event) =>{
        const clientInfo = {
            id: this.props.info.id,
            surname: this.surNameFromInput.current.value,
            name: this.nameFromInput.current.value,
            secName: this.secNameFromInput.current.value,
            balance: Number(this.balanceFromInput.current.value),
        }

        clickEvents.emit('saveEditOrNewClient', clientInfo);
    }

    render() {
        console.log("Card render");
        return (
            <div>
                <h2>Карточка клиента</h2>
                <p>Фамилия клиента:
                    <input type="text" defaultValue={this.props.info.surname} ref={this.surNameFromInput} />
                </p>
                <p>Имя клиента:
                    <input type="text" defaultValue={this.props.info.name} ref={this.nameFromInput} />
                </p>
                <p>Отчество клиента:
                    <input type="text" defaultValue={this.props.info.secName} ref={this.secNameFromInput} />
                </p>
                <p>Баланс клиента:
                    <input type="text" defaultValue={this.props.info.balance} ref={this.balanceFromInput} />
                </p>
                <input className="table__btn" type="button" value="Save" onClick={this.saveEditOrNewClient}/>
                <input className="table__btn" type="button" value="Cancel" onClick={this.cancel} />
            </div>
        )
    }
}

export default Card;
