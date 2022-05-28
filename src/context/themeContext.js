import React from 'react';

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
  
  export const ThemeContext = React.createContext({
    theme: {},
  });