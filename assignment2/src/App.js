import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import Addition from './components/Addition'
import Subtraction from './components/Subtraction'
import Multiplication from './components/Multiplication'
import Division from './components/Division'
import Modulus from './components/Modulus'
import PathNotFound from './components/PathNotFound';

var temp = "/addition"
function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path={`/`} element={<Home />} />
        <Route path={`${temp}`} element={<Addition />} />
        <Route path={'/subtraction'} element={<Subtraction />} />
        <Route path={'/multiplication'} element={<Multiplication />} />
        <Route path={'/division'} element={<Division />} />
        <Route path={'/modulus'} element={<Modulus />} />
        <Route path={'/*'} element={<PathNotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
