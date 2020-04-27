import React, { useContext } from 'react';
import SimpleContextApi from './simpleContextApi';

const Todo = ({todo}) => {
      const context = useContext(SimpleContextApi);
      return (
            <div>
                  <h5>{todo}</h5>
            </div>
       );
}

export default Todo;