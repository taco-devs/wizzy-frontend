import "./App.css";
import { Box, Grommet } from "grommet";
import React, { useState } from "react";
import {
  Auth,
  Landing,
  AppBar,
  SideBar,
  Login,
  SignUp,
  Ask,
  NoAuthRoute,
  AuthRoute,
  Answer,
  Footer,
} from "./components";
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
  return (
    <Grommet theme={theme} full>
      <AppContextProvider>
        <Box fill>
          <BrowserRouter>
            <AppBar />
            <Box direction="row" flex>
              <SideBar />
              <Box flex direction="column" style={{overflow: 'auto'}}>
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
                  <Route
                    path="/signup"
                    element={
                      <NoAuthRoute>
                        <SignUp />
                      </NoAuthRoute>
                    }
                  />
                  <Route
                    path="/auth"
                    element={
                      <NoAuthRoute>
                        <Auth />
                      </NoAuthRoute>
                    }
                  />
                  <Route
                    path="/ask"
                    element={
                      <AuthRoute>
                        <Ask />
                      </AuthRoute>
                    }
                  />
                  <Route path="/question/:id" element={<Answer />} />
                </Routes>
                <Footer />
              </Box>
            </Box>
          </BrowserRouter>
        </Box>
      </AppContextProvider>
    </Grommet>
  );
}

export default App;
