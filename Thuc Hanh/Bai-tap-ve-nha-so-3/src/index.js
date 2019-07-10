import React from 'react';
import ReactDOM from 'react-dom';

import BaiTapTrenLop2 from './bai-tap-tren-lop-10072019';
import * as serviceWorker from './serviceWorker';

let a = document.getElementById('root');
ReactDOM.render(
  <BaiTapTrenLop2
    srcImageNameCard="http://placehold.it/400/0000FF/?text=Avatar"
    atlImageNameCard="Anh avatar so 1"
    CountSubmittedTask="6"
    CountMadeTask="8"
    NameCard="Nguyen Anh Tuan"
    UrlNameCard="Tuansaske"
    LinkFacebook="#facebook"
    LinkGitHub="#github"
    LinkYoutube="#youtube"

  />,
a);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import BaiTapSo2 from './bai-so-2/baiSo2';
// import * as serviceWorker from './serviceWorker';
//
// let a = document.getElementById('root');
// ReactDOM.render(
//   <BaiTapSo2
//     srcImageNameCard="http://placehold.it/400/0000FF/?text=Avatar"
//     atlImageNameCard="Anh avatar so 1"
//     CountSubmittedTask="6"
//     CountMadeTask="8"
//     NameCard="Nguyen Anh Tuan"
//     UrlNameCard="Tuansaske"
//     LinkFacebook="#facebook"
//     LinkGitHub="#github"
//     LinkYoutube="#youtube"
//
//   />,
// a);
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import BaiTapSo1 from './bai-so-1/baiSo1';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<BaiTapSo1 />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// import Baitap from './bai-tap-tren-lop-08072019';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<Baitap num1="11" num2="10" num3="10"/>, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
