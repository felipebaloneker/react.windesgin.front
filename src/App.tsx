import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <div className="app">
      <div className="app_wrp">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
