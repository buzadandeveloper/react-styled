import { ThemeProvider } from "styled-components";
import { Home } from "./components/NavBar/Home/Home";
function App() {
  const theme = {
    colors: {
      primary: "#66BB69",
      black: "#263238",
      d_grey: "#4D4D4D",
      grey: "#717171",
      l_grey: "#89939E",
      white: "#FFFFFF",
      shade: "#28CB8B",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
