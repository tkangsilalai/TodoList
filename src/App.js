import './App.css';
import React, { useState, useEffect, useContext } from "react";
import Header from './Header';
import Forms from './Forms';
import TodoItem from './TodoItem';
import { APIContext, getNoAuth, /* postNoAuth, putNoAuth, deleteNoAuth */ } from "./API";
import { AuthAPIContext, login, postAuth, putAuth, deleteAuth } from "./AuthAPI";
function App() {

  const [auth_domain] = useContext(AuthAPIContext);
  const [domain] = useContext(APIContext);

  const [list, setList] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    getNoAuth(domain).then(data => {
      const mapData = data.data;
      setList(mapData)
    });
    login(auth_domain).then(data => {
      setToken(data.token);
    });
  }, [domain, auth_domain]);

  function onSubmit(item) {
    // setList((prevList) => {
    //   return [...prevList, item];
    // })
    // postNoAuth(domain, item).then(() => {
    //   getNoAuth(domain).then(data => {
    //     const mapData = data.data;
    //     setList(mapData)
    //   });
    // });
    postAuth(auth_domain, item, token).then(() => {
      getNoAuth(domain).then(data => {
        const mapData = data.data;
        setList(mapData)
      });
    });
  }

  function onDelete(_id) {
    deleteAuth(auth_domain, _id, token).then(() => {
      getNoAuth(domain).then(data => {
        const mapData = data.data;
        setList(mapData)
      });
    })
    // deleteNoAuth(domain, _id).then(() => {
    //   getNoAuth(domain).then(data => {
    //     const mapData = data.data;
    //     setList(mapData)
    //   });
    // })
    // setList((prevList) => {
    //   return prevList.filter((_, id) => {
    //     return id !== index;
    //   });
    // });
  }

  function onUpdate(item, _id) {
    putAuth(auth_domain, item, _id, token).then(() => {
      getNoAuth(domain).then(data => {
        const mapData = data.data;
        setList(mapData)
      });
    });
    // putNoAuth(domain, item, _id).then(() => {
    //   getNoAuth(domain).then(data => {
    //     const mapData = data.data;
    //     setList(mapData)
    //   });
    // })
    // setList((prevList) => {
    //   return [...prevList.slice(0, index), item, ...prevList.slice(index + 1, prevList.length)];
    // })
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
