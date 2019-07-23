// const initState = [{
//   id: 0,
//   text: 'test',
// }]

const todos = (state = [], action) => {
  //debugger
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          compieted: false
        }
    ]

    case 'DELETE_TODO':
      const todos = state.filter(
        (todo) => todo.id !== action.id
      )
      return todos;

    default:
      return state;

  }
}

export default todos;
