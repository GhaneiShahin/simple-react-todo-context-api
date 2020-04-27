import React, { useContext } from 'react';
import SimpleContextApi from './simpleContextApi';

const Header = () => {
      const context = useContext(SimpleContextApi);
      const {todos} = context;
      return (
            <div>
                  <h1>TODO APP</h1>
                  <h3>{todos.length}</h3>
            </div>
       );
}

export default Header;