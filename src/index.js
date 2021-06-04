import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalProvider } from './Modal';
import { APIProvider } from "./API";
import { AuthAPIProvider } from "./AuthAPI";

ReactDOM.render(
  <React.StrictMode>
    <APIProvider>
      <AuthAPIProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </AuthAPIProvider>
    </APIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
