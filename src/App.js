import './App.css';
import React, { useState } from "react";
import Header from './Header';
import Forms from './Forms';
import TodoItem from './TodoItem';

function App() {

  const [list, setList] = useState([]);

  function onSubmit(item) {
    setList([...list, item]);
  }

  function onDelete(index) {
    list.splice(index, 1);
    setList([...list])
  }

  return (
    <div>
      <Header tag="h1" text="What's the Plan for Today?" />
      <center>
        <Forms
          placeholder="Enter some plan"
          onSubmit={onSubmit}
          text=""
          button="Add"
        />
        {list.map((item, index) =>
          <TodoItem 
            key={index}
            index={index}
            text={item} 
            onDelete={onDelete}
          />
        )}
      </center>
    </div>
  );
}

export default App;
