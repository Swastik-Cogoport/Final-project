import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Homes.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Blog from "./pages/Blog.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/:id" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
