import React, { MouseEventHandler, useState } from 'react';
import Theme from '../types/Theme';

interface Themes {
  theme: Theme;
  toggleTheme?: MouseEventHandler<HTMLButtonElement>;
}
const themes = {
  light: {
    foreground: '#DDD',
    background: '#fff',
    textColor: '#000'
  },
  dark: {
    foreground: '#333',
    background: '#1a1a1a',
    textColor: '#fff',
  },
};

export const ThemeContext = React.createContext<Themes>({
  theme: {},
  toggleTheme: () => {},
});

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    setTheme((prevValue) =>
    prevValue === themes.dark ? themes.light : themes.dark
    );
  };
  document.body.style.background = theme.background;
  return (
  <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
    {props.children}
  </ThemeContext.Provider>)
};

export default ThemeProvider;