import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from './action';

import {delelteTodo} from './action';

import axios from 'axios';
import {setTodoAction} from './action';

import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      text : '',
    };
    this.setText = this.setText.bind(this);
    this.getTodoList = this.getTodoList.bind(this);
  }

  setText = (e) => {
    const value = e.target.value;
    this.setState({text:value});
  }

  async getTodoList() {
    try {
      const todos = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      debugger;
      this.props.setTodos(todos.data);
    } catch (error) {
      // show errors
    }
  }

  componentDidMount() {
    this.getTodoList();
  }

  render(){
    //debugger
    //


    return(
      <div>

        {this.props.todos.map((todo) => {
          return(
            <div key={todo.id}>
              <li>{todo.title}</li>
              <a href="#"
              onClick ={()=> this.props.onDeleteTodo(todo.id)}>
              Delete Todo
            </a>
            </div>
          );
        })}


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
    todos: state.todos,

    // todos: state.todos.filter(todo =>  todo.compieted === false)
  }
}


const mapDispatchToProps = dispatch => {
  return{
    setTodos: todos => {
      dispatch(setTodoAction(todos));
    },
    onAddTodo: title => {
      dispatch(addTodo(title));
    },
    onDeleteTodo: id => {
      dispatch(delelteTodo(id));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
