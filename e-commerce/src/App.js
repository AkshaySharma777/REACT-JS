import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Login from './Components/Login';
import Register from './Components/Register';
import Pnf from './Components/Pnf';
import { ToastContainer } from 'react-toastify';
import ProtectedRouter from './authGuard/ProtectedRoute';
import Create from './Components/Create';
import Home from './Components/Home';
import Update from "./Components/Update";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <ToastContainer autoClose={4000} position={'top-right'}/>
      <Routes>
        <Route element={<ProtectedRouter />}>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/create'} element={<Create />}/>
          <Route path={'/update/:id'} element={<Update />}/>
        </Route>
        
        <Route path={'/login'} element={<Login />}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/*'} element={<Pnf />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;