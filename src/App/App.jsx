import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRouter from "../PublicRouter/PublicRouter";

import ScrollToTop from "../ScrollToTop";
import { GlobalStyle } from "../components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/theme";

const App = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <GlobalStyle />
          <PublicRouter />
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
