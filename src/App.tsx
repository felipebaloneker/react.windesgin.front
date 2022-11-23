import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext';
import Home from './pages/Home'
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import UserRoom from './pages/UserRoom';
import Chat from './pages/Chat';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div className="app">
      <div className="app_wrp">
        <BrowserRouter>
        <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/recuperar-senha" element={<ForgotPassword/>}/>
          <Route path="/meu-painel" element={<UserRoom/>}/>
          <Route path="/room/:id" element={<Chat/>}/>
          <Route path="/reset_password/:id" element={<ResetPassword/>}/>
        </Routes>
        </AuthContextProvider>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
