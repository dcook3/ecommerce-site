import React from 'react';
import Theme from '../components/types/Theme';

interface Themes {
  theme: Theme;
}

export const themes = {
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
  });