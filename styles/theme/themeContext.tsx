import { createContext, useState, ReactNode } from 'react';

const ThemeContext = createContext(null);

const lightTheme = {
  colors: {
    primary: '#000000',
    background: '#ffffff',
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Roboto Mono, monospace',
},
};

const darkTheme = {
  colors: {
    primary: '#ffffff',
    background: '#000000',
    text: {
      primary: '#ffffff',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Roboto Mono, monospace',
  },
};

const ThemeProvider = ({ children }) => {
  const [isTheme, setIsTheme] = useState(false);

  const toggleTheme = () => {
    setIsTheme(!isTheme);
  };

  const theme = isTheme ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };