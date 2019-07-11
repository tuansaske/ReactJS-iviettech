import React from 'react';
import '../bai-so-1/baiSo1.css';

import ButtomNum from '../bai-so-1/componentCalc/buttomKeyPad.js';
import ScreenResult from '../bai-so-1/componentCalc/screenResult.js';

class Caculator extends React.Component{

  constructor(props){
    super(props);

    this.state = { ketquaTinhtoan : ""};
    this.suKienBamNut = this.suKienBamNut.bind(this);
  }


  suKienBamNut = function(value) {
    console.log(`Hello, my name is ${value}`);
  }


  render(){
    return(
      <div className="container">
        <div className="calc-body">
          <ScreenResult/>
        <ButtomNum suKienBamNut={this.suKienBamNut}/>
        </div>
      </div>
    )
  }
}


export default Caculator;
