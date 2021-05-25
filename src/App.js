import React from "react"
import TodoItem from "./TodoItem"
import NewItem from "./NewItem"
import Filter from "./Filter"
import './style.css';
import todosData from "./todosData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      id: 1,
      hide : false
    }
    this.handleChange = this.handleChange.bind(this)      //by działało
    this.handleSubmit = this.handleSubmit.bind(this)
    this.hideCompleted = this.hideCompleted.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  handleSubmit(task) {
    this.setState(prevState => {
      return {
        todos: [...this.state.todos, {id: this.state.id, text: task, completed:false}],
        id: prevState.id + 1
      }
    })
  }

  hideCompleted(){
    this.setState(prevState => {
      return {
        hide: !prevState.hide
      }
    })
  }

  render() {
    var todoItems = this.state.todos.map(item =>
        <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

    var filtered = this.state.todos.filter(function(item) {
      if (item.completed) {
        return false; // skip
      }
      return true;
    });


    if(this.state.hide){
      todoItems = filtered.map(item =>
          <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    }

    return (
        <div>
          <div className="todo-list">
            <Filter handleChange={ this.hideCompleted}/>
            {todoItems.length > 0 ? todoItems : <p>Nothing to do...</p>}
          </div>
        <NewItem onFormSubmit={this.handleSubmit} />
        </div>
    )
  }
}

export default App