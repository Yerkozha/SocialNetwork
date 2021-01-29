import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const dialogs = [
  {id : 1, name : "Yerkozha"},
  {id : 2, name : "Dada"},
  {id : 3, name : "Asik"},
  {id : 4, name : "Baur"},
  {id : 5, name : "Adil"}
]
const messages = [
  {id : 1, name : "Assalamaleikum"},
  {id : 2, name : "Kalasin"},
  {id : 3, name : "Kaidasin"}
]
let posts = [
  {id : 1, name : "Hi, how are you?",likesCount : 2},
  {id : 2, name : "It's my first post",likesCount : 3}
 
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
