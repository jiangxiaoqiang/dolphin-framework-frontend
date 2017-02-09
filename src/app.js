import React from "react";
import ReactDOM from "react-dom";
import routes from './routes/';


// var func = str => {
//   console.log(str);
// };
//
// func('我现在在使用Babel!');
// document.querySelector('#app').innerHTML = 'Hello World!';

ReactDOM.render(
    routes,
    document.getElementById('root')
);
