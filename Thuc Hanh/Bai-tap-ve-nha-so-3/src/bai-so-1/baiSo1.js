import React from 'react';
import '../bai-so-1/baiSo1.css';

import ButtomNum from '../bai-so-1/componentCalc/buttomKeyPad.js';
import ScreenResult from '../bai-so-1/componentCalc/screenResult.js';

class Caculator extends React.Component{

  render(){
    return(
      <div className="container">
        <div className="calc-body">
          <ScreenResult/>
          <ButtomNum/>
        </div>
      </div>
    )
  }
}


export default Caculator;
