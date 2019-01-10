import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
      return updatedTodos
    })
  }

  render() {
    const todoComponents = this.state.todos.map(todo => <TodoItem key={todo.id} data={todo} onChange={this.handleChange} />)
    return (
      <div className="todo-list">
        {todoComponents}
      </div>
    );
  }
}

export default App;