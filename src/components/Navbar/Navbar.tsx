import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <span className="navbar-brand">Contacts</span>

        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Contact list</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add" className="nav-link">Add new contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;