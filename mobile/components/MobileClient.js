import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

import { clickEvents } from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info: PropTypes.shape({
      id: PropTypes.number.isRequired,
      surname: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      secName: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  editCliente = (event) => {
    clickEvents.emit('editCliente', this.props.info);
  }

  deleteCliente = (event) =>{
    console.log("Удален клиент " + this.props.info.id);
    clickEvents.emit('deleteCliente', this.props.info);
  }

  render() {

    console.log("MobileClient id=" + this.state.info.id + " render");

    return (
      <tr key={ this.props.info.id }>
        <td className='table__td'>{ this.props.info.surname }</td>
        <td className='table__td'>{ this.props.info.name }</td>
        <td className='table__td'>{ this.props.info.secName }</td>
        <td className='table__td'>{ this.props.info.balance }</td>
        <td className='table__td'>{ this.props.info.balance >= 0 ? "active" : "blocked" }</td>
        <td className='table__td'>
          <input type="button" value="Редактировать" onClick={this.editCliente}/>
        </td>
        <td className='table__td'>
          <input type="button" value="Удалить" onClick={this.deleteCliente}/>
        </td>
      </tr>
    );

  }

}

export default MobileClient;
