import { createContext } from "react";
import { AppAll } from "./screens";
import { ThemeProvider } from "./styles/theme/themeContext";

export default function App() {
  return (
    <ThemeProvider>
      <AppAll />
    </ThemeProvider>
  );
}
