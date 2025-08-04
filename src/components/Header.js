import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container pt-2 pb-2">
        <Link to="/" className="navbar-brand fw-bold text-primary">
          <img src="SIG.png" alt='logo' height={"30px"} style={{marginRight:"0.5em"}}></img> Importador SIG
        </Link>
        <div>
          <ul className="navbar-nav ms-auto flex-row gap-3">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/tutorial" className="nav-link">Tutorial</Link>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/igor-garcia-rezende-4a1356218/" target='blank' className="nav-link">Desenvolvedor</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
