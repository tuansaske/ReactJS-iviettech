import React from 'react';
import '../bai-so-2/baiSo2.css';

const DulieuItems = [
  {
    id:1,
    tenItem:"Nguyen Anh Tuan",
    srcImageItem:"http://placehold.it/400/0000FF/?text=Avatar",
    atlImage:"Anh avatar so 1",
    SubmittedTask:"6",
    MadeTask:"8",
    LinkFacebook:"#",
    LinkGitHub:"#",
  }
];

console.log({DulieuItems});

class BaiTapSo2 extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="container card" style={{width: '18rem'}}>
          <Images {...this.props}
            ></Images>
          <CardNameBody/>
          <ListTaskGroup/>
          <LinkTaskGroup/>
        </div>
      </div>
    )
  }
}


class Images extends React.Component{
  render(){
    return(
      <img className="card-img-top"
        src={this.props.srcImageItem}
        alt={this.props.atlImage} />
    )
  }
}

class CardNameBody extends React.Component{
  render(){
    return(
      <div className="card-body text-center">
        <h5 className="card-title">Nguyen Anh Tuan</h5>
        <p className="card-text">@Tuansaske</p>
      </div>
    )
  }
}

class ListTaskGroup extends React.Component{
  render(){
    return(
      <ul className="list-group list-group-flush text-center">
        <TaskName/>
      </ul>
    )
  }
}

class TaskName extends React.Component{
  render(){
    return(
      <>
        <TaskNameNode class="list-group-item">Submitted <CountNode/> products</TaskNameNode>
        <TaskNameNode class="list-group-item">Made <span className="font-weight-bold">8</span> products</TaskNameNode>
        <TaskNameNode class="list-group-item">...</TaskNameNode>
        <TaskNameNode class="list-group-item">...</TaskNameNode>
      </>
    )
  }
}

class TaskNameNode extends React.Component{
  render(){
    return(
      <>
        <li className={this.props.class}>{this.props.children}</li>
      </>
    )
  }
}

class CountNode extends React.Component{
  render(){
    return(
      <>
        <span className="font-weight-bold">{this.props.children}</span>
      </>
    )
  }
}



class LinkTaskGroup extends React.Component{
  render(){
    return(
      <div className="card-body text-center">
        <a href="#" className="card-link">Facebook</a>
      <a href="#" className="card-link">Github</a>
      </div>
    )
  }
}

export default BaiTapSo2;
