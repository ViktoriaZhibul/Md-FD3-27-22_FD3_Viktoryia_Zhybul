"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';

let shopName = "Green";
let productsArr = require("./productsList.json");

ReactDOM.render(
  <Shop shop = {shopName} products = {productsArr} />
  , document.getElementById("root") 
);

