import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { Home } from "./components/Home/Home";
import { Auth } from "./components/Auth/Auth";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Dashboard } from "./components/Dashboard/Dashboard";

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
      silver: "#F5F7FA",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
