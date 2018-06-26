import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import TodoListView from "./todo/todo_list_view"

class App extends React.Component {
  public render() {
    const store = new TodoList();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TodoListView todoList={store} />
      </div>
    );
  }
}

export default App;
