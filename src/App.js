import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Outlet} from 'react-router-dom';
import Main from './components/Main';
import { ThemeContext, themes } from './context/themeContext';
import { useState, useContext } from 'react';
import Navbar from './components/Navbar'
import Button from './components/Button'

function Providers() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme((prevValue) =>
      prevValue === themes.dark ? themes.light : themes.dark
    );
  };
  return (
    <ThemeContext.Provider value={{theme: theme}}>
      <Navbar toggleTheme={toggleTheme}/>
      <Main />
    </ThemeContext.Provider>
  );
}

export default Providers;
