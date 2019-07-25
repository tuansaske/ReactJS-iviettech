let nextTodoId = 1;

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const delelteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const setTodoAction = todos => {
  return {
    type: "SET_TODO",
    todos
  };
};
