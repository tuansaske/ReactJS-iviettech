import React from 'react';


class ButtomNum extends React.Component{

  render(){
    return(
      <>
      <div className="calc-button-row">
          <div className="button c l">C</div>
          <div className="button l">≠</div>
          <div className="button l">%</div>
          <div className="button l">/</div>
        </div>
        <div className="calc-button-row">
          <div className="button">7</div>
          <div className="button">8</div>
          <div className="button">9</div>
          <div className="button l">x</div>
        </div>
        <div className="calc-button-row">
          <div className="button">4</div>
          <div className="button">5</div>
          <div className="button">6</div>
          <div className="button l">−</div>
        </div>
        <div className="calc-button-row">
          <div className="button">1</div>
          <div className="button">2</div>
          <div className="button">3</div>
          <div className="button l">+</div>
        </div>
        <div className="calc-button-row">
          <div className="button l">.</div>
          <div className="button">0</div>
          <div className="button l">&lt;</div>
          <div className="button l" style={{background: '#D95D4E'}}>=</div>
        </div>
        </>
    )
  }
}

export default ButtomNum;
