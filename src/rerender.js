import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';



export let rerenderEntireTree = (state) =>{

ReactDOM.render(<BrowserRouter>
  <React.StrictMode>
    <App state={state} addPost = {addPost} updateNewPostText={updateNewPostText}/>
  </React.StrictMode></BrowserRouter>,
  document.getElementById('root')
);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

