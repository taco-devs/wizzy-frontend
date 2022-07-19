import { Box, Heading, Anchor } from "grommet";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/app-context";
import axios from "axios";

const AppBarContainer = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="#2e3138"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const AppBar = function () {
  const [state, dispatch] = useContext(AppContext);

  const onLogout = async () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AppBarContainer>
      <Box>
        {/* <Button
              icon={<BladesVertical />}
              onClick={() => setShowSidebar(!showSidebar)}
            /> */}
      </Box>

      <Heading level="3" margin="none">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Wizzy AI
        </Link>
      </Heading>
      {!state.isAuth ? (
        <Box direction="row" align="end">
          <Link to="/login">
            <Anchor label="Sign In" color="#149414" />
          </Link>
        </Box>
      ) : (
        <Box direction="row" align="end">
          <Anchor label="Logout" color="#149414" onClick={() => onLogout()} />
        </Box>
      )}
    </AppBarContainer>
  );
};

export default AppBar;
