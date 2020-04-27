import React, { useContext } from 'react';
import SimpleContextApi from './simpleContextApi';
import Todo from './Todo';

const Todos = () => {
      const context = useContext(SimpleContextApi);
      const {todos} = context;
      return (
            <div>
                  {todos.map(t => (
                        <Todo todo={t.todo} key={t.id}/>
                  ))}
            </div>
       );
}

export default Todos;