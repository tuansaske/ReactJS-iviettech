import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from './action';

import {delelteTodo} from './action';

import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      text : '',
    };
    this.setText = this.setText.bind(this);
  }

  setText = (e) => {
    const value = e.target.value;
    this.setState({text:value});
  }

  render(){
    //debugger
    //


    return(
      <div>

        {this.props.tooo.map((todo) => {
          return(
            <div key={todo.id}>
              <li>{todo.text}</li>
              <a href="#"
              onClick ={()=> this.props.onDeleteTodo(todo.id)}>
              Delete Todo
            </a>
            </div>
          );
        })}
        {/* tách ra Component */}


        <input
          value={this.state.text}
          onChange={this.setText}
        />

        <button
          onClick ={()=> this.props.onAddTodo(this.state.text)}>
          Add Todo
        </button>

      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    tooo: state.todos,

    // todos: state.todos.filter(todo =>  todo.compieted === false)
  }
}


const mapDispatchToProps = dispatch => {
  return{
    onAddTodo: text => {
      dispatch(addTodo(text));
    },
    onDeleteTodo: id => {
      dispatch(delelteTodo(id));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
