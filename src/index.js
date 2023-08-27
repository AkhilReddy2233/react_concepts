import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { Comment } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let prop = {
  author : {
    name:'Akhil',
    avatarUrl:'http://www.w3.org/2000/svg'
  },
  text:'React latest Version',
  date:new Date()
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(BrowserRouter)
root.render(
  // <React.StrictMode>
    <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    {/* <Comment author = {prop}/> */}
    </>
  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
