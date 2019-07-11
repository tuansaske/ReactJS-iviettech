import React from 'react';

class ScreenResult extends React.Component{

  render(){
    let {ketquaTinhtoan} = this.props;
    return(
      <div className="calc-screen">
        <div className="calc-operation">2536 + 419 + </div>
        <div className="calc-typed">{ketquaTinhtoan}<span id="blinkerId" className="blink-me">_</span></div>
      </div>
    )
  }
}

export default ScreenResult;
