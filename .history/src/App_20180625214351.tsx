import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import TodoListView from "./todo/todo_list_view"
import TodoList from "./todo/todo_list"
import Todo from "./todo/todo"

class App extends React.Component {
  public render() {
    const store = new TodoList();
    store.todos.push(
      new Todo("Get Coffee"),
      new Todo("Write simpler code")
    );
    store.todos[0].finished = true;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoListView todoList={store} />
      </div>
    );
  }
}

export default App;
