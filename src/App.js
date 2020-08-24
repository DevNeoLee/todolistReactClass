import React from 'react';
import ListItem from './ListItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: { content: "", key: "", completed: false },
      todos: [],
    };
    this.setTodo = this.setTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.delete = this.delete.bind(this);
    this.completed = this.completed.bind(this);
  }
  setTodo(event) {
    event.preventDefault();
    let newTodo = event.target.value;
    this.setState({ todo: { content: newTodo, key: Date.now() } });
  }

  addTodo(event) {
    event.preventDefault();
    let newTodo = this.state.todo;
    if (newTodo.content !== "") {
      let newTodos = [...this.state.todos, newTodo];
      this.setState({
        todos: newTodos,
        todo: { content: "", key: "", completed: false },
      });
      event.target.childNodes[0].value = "";
    }
  }

  delete(key) {
    const newTodos = this.state.todos.filter((todo) => {
      return todo.key !== key;
    });
    this.setState({ todos: newTodos });
  }

  completed(key) {
    const newTodos = this.state.todos;
    newTodos.forEach((todo) => {
      if (todo.key === key) {
        todo.completed = !todo.completed;
      }
    });
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div>
        <h1>todo list</h1>
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.setTodo} />
          <button>create todo</button>
        </form>
        <ListItem
          todos={this.state.todos}
          delete={this.delete}
          completed={this.completed}
        />
      </div>
    );
  }
}

export default App;
