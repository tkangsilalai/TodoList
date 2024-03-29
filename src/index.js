import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalProvider } from './Modal';
import { APIProvider } from "./API";
import { AuthAPIProvider } from "./AuthAPI";
// import { createStore } from "redux";
// import allReducers from './reducers/index';
import { Provider } from 'react-redux'
// import TestRedux from './test-redux';
import store from './redux-test/store';

// const store = createStore(allReducers);

ReactDOM.render(
  <React.StrictMode>
    <APIProvider>
      <AuthAPIProvider>
        <Provider store={store}>
          <ModalProvider>
            <App />
            {/* <TestRedux></TestRedux> */}
          </ModalProvider>
        </Provider>
      </AuthAPIProvider>
    </APIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
