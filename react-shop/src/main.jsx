import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
/**
 * Router:React Router 實現地址和頁面的綁定，實現頁面之間的跳轉
 */
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
