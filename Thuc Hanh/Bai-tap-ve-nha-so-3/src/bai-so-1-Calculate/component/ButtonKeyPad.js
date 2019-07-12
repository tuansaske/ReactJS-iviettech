import React from 'react';


class ButtonNum extends React.Component{
  constructor(){
    super();

    this.state = { ketquaTinhtoan : 0};
    this.suKienBamNut = this.suKienBamNut.bind(this);
  }


  suKienBamNut = function() {
    console.log(eval('3 * 2'));
  }

  suKienBamNut = Buttoncalc =>{

    this.hamTinhtoan()
    // if(Buttoncalc === "="){
    //     this.hamTinhtoan()
    // }
    //
    // else if(Buttoncalc === "C"){
    //     this.clearScreen()
    // }
    //
    // else {
    //     this.setState({
    //         ketquaTinhtoan: this.state.ketquaTinhtoan + Buttoncalc
    //     })
    // }
  }

  hamTinhtoan = () => {
      var kiemTraketquaTinhtoan = 0;



      this.setState({
        ketquaTinhtoan: eval(kiemTraketquaTinhtoan)
      })
  };

  clearScreen = () => {
      this.setState({
          ketquaTinhtoan: 0
      })
  };


  render(){
    return(
      <>
      <div className="calc-button-row">
        <Buttoncalc value="C" className="button c" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="#" className="button l" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="%" className="button l" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="/"className="button l" suKienBamNut={this.suKienBamNut}></Buttoncalc>
      </div>
      <div className="calc-button-row">
        <Buttoncalc value="7" className="button" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="8" className="button" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="9" className="button" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="x"className="button l" suKienBamNut={this.suKienBamNut}></Buttoncalc>
      </div>
      <div className="calc-button-row">
        <Buttoncalc value="4" className="button" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="5" className="button" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="6" className="button" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="-"className="button l" suKienBamNut={this.suKienBamNut}></Buttoncalc>
      </div>
      <div className="calc-button-row">
        <Buttoncalc value="3" className="button" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="2" className="button" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="1" className="button" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="+"className="button l" suKienBamNut={this.suKienBamNut}></Buttoncalc>
      </div>
      <div className="calc-button-row">
        <Buttoncalc value="."  className="button l" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="0" className="button" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="&lt;" className="button l" suKienBamNut={this.suKienBamNut}></Buttoncalc>
        <Buttoncalc value="=" className="button l" suKienBamNut={this.suKienBamNut}
        ></Buttoncalc>
      </div>
      </>
    )
  }
}

export default ButtonNum;

class Buttoncalc extends React.Component{
  render(){
    return(
      <div className={this.props.className}
           onClick={this.props.suKienBamNut}
          value={this.props.value}
      >{this.props.value}</div>
    )
  }
}
