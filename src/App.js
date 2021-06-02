import './App.css';
import React, { useState } from "react";
import Header from './Header';
import Forms from './Forms';
import TodoItem from './TodoItem';

function App() {

  const [list, setList] = useState([]);

  function onSubmit(item) {
    setList((prevList) => {
      return [...prevList, item];
    })
  }

  function onDelete(index) {
    setList((prevList) => {
      return prevList.filter((_, id) => {
        return id !== index;
      });
    })
  }

  function onUpdate(item, index) {
    setList((prevList) => {
      return [...prevList.slice(0, index), item, ...prevList.slice(index+1, prevList.length)];
    })
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
        (
          <TodoItem 
            key={index}
            index={index}
            text={item} 
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </center>
    </div>
  );
}

export default App;
