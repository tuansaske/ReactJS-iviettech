import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Baitap from './bai-tap-tren-lop-08072019';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Baitap num1="11" num2="10" num3="10"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
