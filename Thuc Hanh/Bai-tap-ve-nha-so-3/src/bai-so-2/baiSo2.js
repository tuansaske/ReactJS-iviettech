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
    LinkFacebook:"#facebook",
    LinkGitHub:"#github",
    LinkYoutube:"#youtube",
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
        <TaskName nameTaskNode="Submitted" CountTask={this.props.CountSubmittedTask}/>
        <TaskName nameTaskNode="Made" CountTask={this.props.CountMadeTask}/>
      </ul>
    )
  }
}

class TaskName extends React.Component{
  render(){
    return(
      <li className="list-group-item">
        {this.props.nameTaskNode} <span className="font-weight-bold">{this.props.CountTask}</span> products
      </li>
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
        <LinkUrl NameSocial="Facebook" href={this.props.LinkFacebook} />
        <LinkUrl NameSocial="Github" href={this.props.LinkGitHub}/>
        <LinkUrl NameSocial="Youtube" href={this.props.LinkYoutube}/>
      </div>
    )
  }
}

class LinkUrl extends React.Component{
  render(){
    return(
        <a href={this.props.href} className="card-link">{this.props.NameSocial}</a>
    )
  }
}

export default BaiTapSo2;
