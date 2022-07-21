import { Box, Heading, Anchor, Button } from "grommet";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/app-context";

import { BladesVertical } from "grommet-icons";

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

const AppBar = function (props) {
  const [state, dispatch] = useContext(AppContext);

  const onLogout = async () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const toggleSideBar = async () => {
    dispatch({
      type: 'TOGGLE_SIDEBAR'
    })
  }

  return (
    <AppBarContainer>
      <Box>
        {state.isAuth && (
          <Button
            icon={<BladesVertical />}
            onClick={() => toggleSideBar()}
          />
        )}
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
