import React from 'react';
import '../bai-so-2/baiSo2.css';

const DulieuItems = [
  {
    id:1,
    NameCard:"Nguyen Anh Tuan",
    UrlNameCard:"Tuansaske",
    srcImageNameCard:"http://placehold.it/400/0000FF/?text=Avatar",
    atlImageNameCard:"Anh avatar so 1",
    CountSubmittedTask:"6",
    CountMadeTask:"8",
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
          <Images {...this.props}/>
          <CardNameBody {...this.props}/>
          <ListTaskGroup {...this.props}/>
          <LinkUrlTaskGroup {...this.props}/>
        </div>
      </div>
    )
  }
}


class Images extends React.Component{
  render(){
    return(
      <img className="card-img-top"
        src={this.props.srcImageNameCard}
        alt={this.props.atlImageNameCard} />
    )
  }
}


class ListTaskGroup extends React.Component{
  render(){
    return(
      <ul className="list-group list-group-flush text-center">
          <SubmittedTaskName nameTaskNode="Submitted" {...this.props}></SubmittedTaskName>
          <MadeTaskName nameTaskNode="Made" {...this.props}></MadeTaskName>
      </ul>
    )
  }
}


class SubmittedTaskName extends React.Component{
  render(){
    return(
      <>
        <li className="list-group-item">
          {this.props.nameTaskNode} <span className="font-weight-bold">{this.props.CountSubmittedTask}</span> products
        </li>
      </>
    )
  }
}



class MadeTaskName extends React.Component{
  render(){
    return(
      <>
        <li className="list-group-item">
          {this.props.nameTaskNode} <span className="font-weight-bold">{this.props.CountMadeTask}</span> products
        </li>
      </>
    )
  }
}



class CardNameBody extends React.Component{
  render(){
    return(
      <div className="card-body text-center">
        <YourNameInCard {...this.props}/>
        <UrlNameCard {...this.props}/>
      </div>
    )
  }
}

class YourNameInCard extends React.Component{
  render(){
    return(
      <h5 className="card-title">{this.props.NameCard}</h5>
    )
  }
}

class UrlNameCard extends React.Component{
  render(){
    return(
      <p className="card-text">@{this.props.UrlNameCard}</p>
    )
  }
}


class LinkUrlTaskGroup extends React.Component{
  render(){
    return(
      <div className="card-body text-center">
        <LinkUrl NameSocial="Facebook" LinkFacebook="#a"/>
        <LinkUrl NameSocial="Github" LinkGitHub="#b"/>
      </div>
    )
  }
}

class LinkUrl extends React.Component{
  render(){
    return(
        <a href={this.props.LinkFacebook} className="card-link">{this.props.NameSocial}</a>
    )
  }
}

export default BaiTapSo2;
