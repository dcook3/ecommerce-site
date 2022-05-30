import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Products from './components/Products';
import Home from './Home';
import About from './About';
import Cart from './components/Cart';
import {BrowserRouter} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { cartStore } from './redux/store';
import { Provider } from 'react-redux';
import ProductDetails from './components/ProductDetails';
import ThemeProvider from './context/themeContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={cartStore}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="Products" element={<Products />} />
                <Route path="Products/:productId" element={<ProductDetails />} />
                <Route path="about" element={<About />} />
                <Route path="cart" element={<Cart />}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);