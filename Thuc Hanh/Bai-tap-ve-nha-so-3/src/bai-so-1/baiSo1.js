import React from 'react';
import '../bai-so-1/baiSo1.css';

class BaiTapSo1 extends React.Component{
  render(){
    return(
      <div className="container">
        <CalcBody />
      </div>
    )
  }
}

class CalcBody extends React.Component{


  render(){
    return(
      <div className="calc-body">
        <CalcScreen/>
        <CalcButtonRow/>
      </div>
    )
  }
}


class CalcScreen extends React.Component{

  // ADD blink CSS: đền nhấp nháy
  constructor(props) {
    super();
    // this.state = {appear: true}
    // this.blinker = this.blinker.bind(this);
  }

  // blinker()  {
  //   this.setState({appear: !this.state.appear });
  // }
  //
  // componentDidMount() {
  //   this.blinkerId = setInterval(this.blinker, 1000)
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.blinkerId);
  // }
  //END: ADD blink CSS: đền nhấp nháy


  render(){
    return(
      <div className="calc-screen">
        <div className="calc-operation">2536 + 419 + </div>
        <div className="calc-typed">0<span id="blinkerId" className="blink-me">_</span></div>
      </div>
    )
  }
}

class CalcButtonRow extends React.Component{
  render(){
    return(
      <>
      <div className="calc-button-row">
        <ButtomNum value="C" className="button c"></ButtomNum>
        <ButtomNum value="#" className="button l"></ButtomNum>
        <ButtomNum value="%" className="button l"></ButtomNum>
        <ButtomNum value="/"className="button l"></ButtomNum>
      </div>
      <div className="calc-button-row">
        <ButtomNum value="7" className="button"></ButtomNum>
        <ButtomNum value="8" className="button"></ButtomNum>
        <ButtomNum value="9" className="button"></ButtomNum>
        <ButtomNum value="x"className="button l"></ButtomNum>
      </div>
      <div className="calc-button-row">
        <ButtomNum value="4" className="button"></ButtomNum>
        <ButtomNum value="5" className="button"></ButtomNum>
        <ButtomNum value="6" className="button"></ButtomNum>
        <ButtomNum value="-"className="button l"></ButtomNum>
      </div>
      <div className="calc-button-row">
        <ButtomNum value="3" className="button"></ButtomNum>
        <ButtomNum value="2" className="button"></ButtomNum>
        <ButtomNum value="1" className="button"></ButtomNum>
        <ButtomNum value="+"className="button l"></ButtomNum>
      </div>
      <div className="calc-button-row">
        <ButtomNum value="."  className="button l"></ButtomNum>
        <ButtomNum value="0" className="button"></ButtomNum>
        <ButtomNum value="&lt;" className="button"></ButtomNum>
        <ButtomNum value="=" className="button l"></ButtomNum>
      </div>
      </>
    )
  }
}

// HỎI: LÀM SAO MAP DỮ LIỆU, CÁC SỐ 1 cách nhanh chóng bằng mảng nào đó, không cần phải gọi ra từng BUTTOM NHƯ Ở TRÊN?


class ButtomNum extends React.Component{
  render(){
    // let className = 'button l';
    // if (this.props.isActive) {
    //   className += ' menu-active';
    // }
    return(
      <div className={this.props.className}>{this.props.value}</div>
    )
  }
}

export default BaiTapSo1;
