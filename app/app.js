import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./components/Main";
import List from "./components/List"

var buttonsarray = ["0","1","2","3","4","5","6","7","8","9"];

ReactDOM.render(<List buttons = {buttonsarray} />, document.getElementById("app"));




