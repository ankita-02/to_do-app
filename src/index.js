import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux"
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './Component/reducer/rootReducer';


const initialState={
  userDetails: {},
  todoItems: []
}

const store=createStore(rootReducer,initialState)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();