import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import Menu from './components/Menu';
import Create from '../src/components/Create';
import Home from '../src/components/Home';
import Update from '../src/components/Update';
import Pnf from '../src/components/Pnf';

const App = () => {
  return (
   <BrowserRouter>
    <Menu/>
    <ToastContainer autoClose={3000} position={"top-right"}/>
    <Routes>
      <Route path={`/`} element={<Home/>}/>
      <Route path={`/create`} element={<Create/>}/>
      <Route path={`/update/:id`} element={<Update/>}/>
      <Route path={`/*`} element={<Pnf/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
