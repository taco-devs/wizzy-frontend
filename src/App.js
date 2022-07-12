import {
  Box,
  Grommet,
} from "grommet";
import React, { useState } from "react";
import { Landing, AppBar, SideBar, Login } from "./components";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const theme = {
  global: {
    font: {
      family: "Chakra Petch",
      size: "18px",
      height: "20px",
    },
  },
};


function App() {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full>
      <Box fill>
      <BrowserRouter>
        <AppBar />
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <SideBar showSidebar={showSidebar}/>
              <Routes>
                <Route path="/" element={<Landing />}>

                </Route>
                <Route path="/login" element={<Login />} />
              </Routes>
            <SideBar showSidebar={showSidebar}/>
        </Box>
      </BrowserRouter>
    </Box>
  </Grommet>
  );
}

export default App;
