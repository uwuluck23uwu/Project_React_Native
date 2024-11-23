import { createContext, useState, ReactNode } from 'react';

interface Theme {
  colors: {
    primary: string;
    background: string;
    text: {
      primary: string;
      secondary: string;
    };
  };
  typography: {
    fontFamily: string;
  };
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const lightTheme: Theme = {
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

const darkTheme: Theme = {
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

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
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