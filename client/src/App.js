import react, { useEffect } from "react";

import Routes from "./routes/index";
import ThemeCustomization from "./themes";
import ScrollTop from "./Components/ScrollTop";

// ==============================|| APP - THEME, ROUTER, ScrollTop ||============================== //

const App = () => {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <Routes />
      </ScrollTop>
    </ThemeCustomization>
  );
};

export default App;
