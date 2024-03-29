import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container">
          <NavLink to={`/`} className="navbar-brand">React Hooks</NavLink>

          <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#menu'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className="collapse navbar-collapse" id='menu'>
           <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link">Ex1</NavLink>
            </li>
            <li className="navitem">
              <NavLink to={`/ex2`} className="nav-link">Ex2</NavLink>
            </li>
            <li className="navitem">
              <NavLink to={`/ex3`} className="nav-link">Ex3</NavLink>
            </li>
            <li className="navitem">
              <NavLink to={`/ex4`} className="nav-link">Ex4</NavLink>
            </li>
            <li className="navitem">
              <NavLink to={`/ex5`} className="nav-link">Ex5</NavLink>
            </li>
            <li className="navitem">
              <NavLink to={`/ex6`} className="nav-link">Ex6</NavLink>
            </li>
            <li className="navitem">
              <NavLink to={`/ex7`} className="nav-link">Ex7</NavLink>
            </li>
            <li className="navitem">
              <NavLink to={`/ex8`} className="nav-link">Ex8</NavLink>
            </li>
            <li className="navitem">
              <NavLink to={`/ex9`} className="nav-link">Ex9</NavLink>
            </li>
            <li className="navitem">
              <NavLink to={`/ex10`} className="nav-link">Ex10</NavLink>
            </li>
            <li className="navitem">
              <NavLink to={`/arithmeticOperations`} className="nav-link">ArithmeticOperations</NavLink>
            </li>
           </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header