import React from 'react';


class Baitap extends React.Component{
  render(){
    return(
      <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
              <Images/>
              <CardBody num1={this.props.num1}
                        num2={this.props.num2}
                        num3={this.props.num3}/>
          </div>
      </div>
    )
  }
}

class Images extends React.Component{
  render(){
    return(
        <img className="card-img-top" src="http://placehold.it/700x400/0000FF/?text=ảnh%201" alt="Anh sp so 1" />
    )
  }
}

class CardBody extends React.Component{
  render(){

    const tinhTong = function(arr){
    let sum = 0;
    sum = parseInt(arr['num1']) + parseInt(arr['num2']) + parseInt(arr['num3']);

    return sum;


    // const object1 = {
    //   a: 'somestring',
    //   b: 42,
    //   c: false
    // };
    //
    // console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

    // chuyen Object{} sang Array tren bien sum
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
    }

    return(
      <div className="card-body">
        <ElementP {...this.props} sum={tinhTong(this.props)}>
        </ElementP>
      </div>
    )
  }
}

class ElementP extends React.Component{




  render(){

    return(
      <div className="elementP">
        <p className="card-p-name">Num 1: {this.props.num1}</p>
        <p className="card-p-age">Num 2: {this.props.num2}</p>
        <p className="card-p-adds">Num 3: {this.props.num3}</p>

        <p className="card-p-adds">Sum: {this.props.sum}</p>
      </div>
    )
  };
}



export default Baitap;
