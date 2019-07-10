import React from 'react';

class BaiTapTrenLop2 extends React.Component{

  constructor(props) {
    super(props);
    this.state = {date: new Date()};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render(){
    return(
      <div className="container">
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <HienThiMH/>
        <ButtomClick/>
      </div>
    )
  }
}

class HienThiMH extends React.Component{
  render(){
    return(
      <div className="loader">...</div>
    )
  }
}

class ButtomClick extends React.Component{
  render(){
    return(
      <button type="button" onClick={this.activateLasers}>Click Me! +</button>
    )
  }
}

export default BaiTapTrenLop2;
