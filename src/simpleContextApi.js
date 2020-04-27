import React from 'react';

const SimpleContextApi = React.createContext({
      todos: [],
      todo: "",
      showTodos: true,
      handleSetTodos: () => {},
      handleNewTodo: () => {}
})

export default SimpleContextApi;
