import './App.css';
import React, { useEffect, useContext } from "react";
import Header from './Header';
import Forms from './Forms';
import TodoItem from './TodoItem';
import { APIContext, getNoAuth} from "./API";
import { login, get } from './actions'
import { AuthAPIContext, postAuth, putAuth, deleteAuth } from "./AuthAPI";
import { useDispatch, useSelector } from 'react-redux';
// import {get, update, del} from './actions'; 

function App() {

  const todolist = useSelector(state => state.todolist);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const [auth_domain] = useContext(AuthAPIContext);
  const [domain] = useContext(APIContext);

  useEffect(() => {
    getNoAuth(domain).then(data => {
      const mapData = data.data;
      dispatch(get(mapData));
    });
    dispatch(login());
  }, [domain, dispatch]);

  function onSubmit(item) {
    isLogged.then((token) => {
      postAuth(auth_domain, item, token).then(() => {
        getNoAuth(domain).then(data => {
          const mapData = data.data;
          dispatch(get(mapData));
        });
      });
    });
  }

  function onDelete(_id) {
    isLogged.then((token) => {
      deleteAuth(auth_domain, _id, token).then(() => {
        getNoAuth(domain).then(data => {
          const mapData = data.data;
          dispatch(get(mapData));
        });
      })
    });
  }

  function onUpdate(item, _id) {
    isLogged.then((token) => {
      putAuth(auth_domain, item, _id, token).then(() => {
        getNoAuth(domain).then(data => {
          const mapData = data.data;
          dispatch(get(mapData));
        });
      });
    });
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
        {todolist.map((item, index) =>
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
