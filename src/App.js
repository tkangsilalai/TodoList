import './App.css';
import React, { useEffect} from "react";
import Header from './Header';
import Forms from './Forms';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import * as todoActions from './redux-test/test/actions';

function App() {

  const dispatch = useDispatch();
  const todolistState = useSelector((state) => state.todolist.list);
  const token = useSelector((state) => state.todolist.token);

  useEffect(() => {
    dispatch(todoActions.login());
    dispatch(todoActions.get());
  }, [dispatch]);

  function onSubmit(item) {
    dispatch(todoActions.post(token, item));
  }

  function onDelete(_id) {
    dispatch(todoActions.del(token, _id));
  }

  function onUpdate(item, _id) {
    dispatch(todoActions.update(token, _id, item));
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
        {todolistState.map((item, index) =>
        (
          <TodoItem
            key={index}
            index={index}
            text={item.title}
            _id={item._id}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </center>
    </div>
  );
}

export default App;
