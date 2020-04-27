import React, { useContext } from 'react';

import SimpleContextApi from './simpleContextApi';

const NewTodos = () => {
      const context = useContext(SimpleContextApi);
      return (
            <div>
                  <button onClick={context.handleNewTodo}>add</button>
                  <input type="text" onChange={context.handleSetTodos}/>
            </div>
       );
}

export default NewTodos;