import React from 'react';


class ButtomNum extends React.Component{
  constructor(){
    super();

    this.state = { ketquaTinhtoan : ""};
    this.suKienBamNut = this.suKienBamNut.bind(this);
  }


  suKienBamNut = function() {
    console.log(eval('3 * 2'));
  }

  render(){
    return(
      <>
      <div className="calc-button-row">
        <Buttomcalc value="C" className="button c" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="#" className="button l" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="%" className="button l" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="/"className="button l" suKienBamNut={this.suKienBamNut}></Buttomcalc>
      </div>
      <div className="calc-button-row">
        <Buttomcalc value="7" className="button" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="8" className="button" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="9" className="button" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="x"className="button l" suKienBamNut={this.suKienBamNut}></Buttomcalc>
      </div>
      <div className="calc-button-row">
        <Buttomcalc value="4" className="button" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="5" className="button" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="6" className="button" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="-"className="button l" suKienBamNut={this.suKienBamNut}></Buttomcalc>
      </div>
      <div className="calc-button-row">
        <Buttomcalc value="3" className="button" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="2" className="button" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="1" className="button" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="+"className="button l" suKienBamNut={this.suKienBamNut}></Buttomcalc>
      </div>
      <div className="calc-button-row">
        <Buttomcalc value="."  className="button l" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="0" className="button" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="&lt;" className="button l" suKienBamNut={this.suKienBamNut}></Buttomcalc>
        <Buttomcalc value="=" className="button l" suKienBamNut={this.suKienBamNut}
        ></Buttomcalc>
      </div>
      </>
    )
  }
}

export default ButtomNum;

class Buttomcalc extends React.Component{
  render(){
    return(
      <div className={this.props.className}
           onClick={this.props.suKienBamNut}
          value={this.props.value}
      >{this.props.value}</div>
    )
  }
}
