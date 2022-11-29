import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let clientsArr=[ 
  {id:101, surname: "Иванов", name: "Иван", secName:"Иванович", balance:200}, 
  {id:105, surname: "Сидоров", name: "Сидор", secName:"Сидорович", balance:250}, 
  {id:110, surname: "Петров", name: "Петр", secName:"Петрович", balance:180},
  {id:120, surname: "Григорьев", name: "Григорий", secName:"Григорьевич", balance:-220},
];

let tableHead=["Фамилия", "Имя", "Отчество", "Баланс", "Статус", "Редактировать", "Удалить"];

ReactDOM.render(
  <MobileCompany 
    tableHead={tableHead}
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

