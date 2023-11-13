import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Eatery Cafe
        </a>
       
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <span className="navbar-text text-white">
            CALL NOW <i className="bi bi-telephone-fill"></i>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
 