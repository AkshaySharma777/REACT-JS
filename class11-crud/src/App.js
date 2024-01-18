import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import Pnf from './components/Pnf';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import ProtectedRoute from './authGuard/ProtectedRoute';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <ToastContainer autoClose={4000} position={'top-right'}/>
      <Routes>
        <Route element= {<ProtectedRoute/>}>
              <Route path={"/"} element={<Home/>} />
              <Route path={"/create"} element={<Create/>} />
        </Route>
        <Route path={"/update/:id"} element={<Update/>} />
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/register"} element={<Register/>} />
        <Route path={"/*"} element={<Pnf/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
