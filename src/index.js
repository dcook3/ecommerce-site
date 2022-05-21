import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Products from './components/Products.js';
import Home from './Home.js';
import About from './About.js';
import {BrowserRouter} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/Products" element={<Products />}>
              <Route path=":productId" element={<Products />} />
            </Route>
            <Route path="about" element={<About />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);