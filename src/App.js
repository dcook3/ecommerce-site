import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React from 'react';
import {Link, Outlet} from 'react-router-dom';

function App() {

  return (
    <>
      <nav className="navbar navbar-light navbar-expand-md bg-light px-2 m-1 border border-rounded">
        <Link className='navbar-brand' to="/">Site Brand</Link>
        <div className='container-fluid'>
          <div className="navbar-nav">
            <Link className='nav-link' to="/Products">Products</Link>
            <Link className='nav-link' to="/About">About</Link>
          </div>
        </div>
      </nav>
      <div className='container'>
        <Outlet />
      </div>
      
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link className='text-decoration-none' to="/">Retailer Site Name</Link>
            <span className="text-muted ms-1">| © 2022 Dylan Cook</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
