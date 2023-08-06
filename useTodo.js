import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatchTodo(action);
  }

  const handleDeleteTodo = (idTodo) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: idTodo
    }

    dispatchTodo(action);
  }
  
  const handleToggleTodo = (idTodo) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: idTodo
    }

    dispatchTodo(action);
  }

  return {
    todos,
    allTodosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  };
}