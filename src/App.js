import React, {useState} from 'react';

import Todos from './Todos';
import SimpleContextApi from './simpleContextApi';
import NewTodos from './NewTodo';
import Header from './header';

const App = () => {
      const [getTodos, setTodos] = useState([]);
      const [getTodo, setTodo] = useState("");
      const [showTodos, setShowTodos] = useState(true);
      const [showEdit, setShowEdit] = useState(false);

      const handleShowTodos = () => {
            setShowTodos(!showTodos);
            // console.log(showTodos);
      }

      const handleSetTodos = e => {
            setTodo(e.target.value);
      }

      const handleNewTodo = () => {
            const todos = [...getTodos];
            const todo = {
                  id: Math.floor(Math.random() * 10000),
                  todo: getTodo
            }
            if(todo.todo !== "" && todo.todo !== " "){
                  todos.push(todo);
                  setTodos(todos);
                  setTodo("");
            }
      }

      return (
            <SimpleContextApi.Provider value={{
                  todos: getTodos,
                  todo: getTodo,
                  handleNewTodo,
                  handleSetTodos,
            }}>
                  <div>
                        <Header/>
                        <NewTodos/>
                        <button onClick={handleShowTodos}>click</button>
                        {showTodos ? <Todos/> : null}

                  </div>
            </SimpleContextApi.Provider>
      );
}

export default App;
