import TodoItem from "./TodoItem";
import NewItem from "./NewItem";
import Filter from "./Filter";
import "./style.css";
import todosData from "./todosData";
import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState(todosData);
  const [hide, setHide] = useState(false);
  let filtered = hide
    ? todoList.filter((item) => {
        return item.completed ? false : true;
      })
    : todoList;

  function handleChange(id) {
    let updateTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodoList(updateTodoList);
  }

  function handleSubmit(task) {
    setTodoList([
      ...todoList,
      { id: ++todoList.length, text: task, completed: false },
    ]);
  }

  function hideCompleted() {
    setHide(!hide);
  }
  function handleOnDelete(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
  }
  function handleReverse() {
    setTodoList(todoList.map(todoList.pop, [...todoList]));
  }

  return (
    <>
      <div className="todo-list">
        <Filter label="hide completed" handleChange={hideCompleted} />
        <Filter label="reverse list" handleChange={handleReverse} />
        {filtered.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            handleChange={handleChange}
            handleOnDelete={handleOnDelete}
          />
        ))}
        {todoList.length === 0 && <p>Nothing to do...</p>}
      </div>
      <NewItem onFormSubmit={handleSubmit} />
    </>
  );
}
