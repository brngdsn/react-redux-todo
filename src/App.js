import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './TodoListContainer'
import AddTodo from './AddTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{
          padding: '50px',
          maxWidth: '250px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <AddTodo />
          <TodoListContainer />
        </div>
      </div>
    );
  }
}

export default App;
