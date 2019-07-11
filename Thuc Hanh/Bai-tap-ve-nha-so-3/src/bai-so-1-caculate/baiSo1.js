import React from 'react';
import '../bai-so-1/baiSo1.css';

import ButtomNum from '../bai-so-1/componentCalc/buttomKeyPad.js';
import ScreenResult from '../bai-so-1/componentCalc/screenResult.js';

class Caculator extends React.Component{


  render(){
    return(
      <div className="container">
        <div className="calc-body">
          <ScreenResult ketquaTinhtoan={this.state.ketquaTinhtoan}/>
          <ButtomNum suKienBamNut={this.suKienBamNut}/>
          <Toggle2/>
        </div>
      </div>
    )
  }
}


export default Caculator;


class Toggle2 extends React.Component {


  render() {
    return (
      <Toggle/>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
