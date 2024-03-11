import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Rabbitmq from './components/rabbitmq'
import Redis from './components/redis'
import Mysql from './components/mysql';
import Oracledb from './components/oracledb';
import All from './components/all'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}>
      <Route index element={<Rabbitmq/>}/>
      <Route path='rabbitmq' element={<Rabbitmq/>}/>
      <Route path='redis' element={<Redis/>}/>
      <Route path='mysql' element={<Mysql/>}/>
      <Route path='oracledb' element={<Oracledb/>}/>
      <Route path='all' element={<All/>}/>
    </Route>
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
