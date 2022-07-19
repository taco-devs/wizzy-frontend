import { Box, Grommet } from "grommet";
import React, { useState } from "react";
import { Landing, AppBar, SideBar, Login, NoAuthRoute } from "./components";
import { AppContextProvider } from "./context/app-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <AppContextProvider>
        <Box fill>
          <BrowserRouter>
            <AppBar />
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <SideBar showSidebar={showSidebar} />
              <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route
                  path="/login"
                  element={
                    <NoAuthRoute>
                      <Login />
                    </NoAuthRoute>
                  }
                />
              </Routes>
              <SideBar showSidebar={showSidebar} />
            </Box>
          </BrowserRouter>
        </Box>
      </AppContextProvider>
    </Grommet>
  );
}

export default App;
