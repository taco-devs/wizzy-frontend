import { Box, Heading, Anchor, Button, Menu, Image, Text } from "grommet";
import { Link } from "react-router-dom";
import { useContext, useEffect, useLayoutEffect } from "react";
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

  useEffect(() => {
    getAccount();
  }, [state.isAuth]);

  const getAccount = async () => {
    state.axios
      .get("/accounts/me")
      .then((res) => {
        dispatch({
          type: "SET_ACCOUNT",
          payload: res.data.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onLogout = async () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const toggleSideBar = async () => {
    dispatch({
      type: "TOGGLE_SIDEBAR",
    });
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <AppBarContainer>
      <Box flex>
        {state.isAuth && (
          <Box flex direction="row" align="center">
            <Button icon={<BladesVertical />} onClick={() => toggleSideBar()} />
            <Link to="/ask" style={{ textDecoration: "none" }}>
              <Anchor label="Ask" color="#149414" />
            </Link>
          </Box>
        )}
      </Box>
      <Box flex direction="row" justify="center">
        <Heading level="3" margin="none">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Wizzy AI
          </Link>
        </Heading>
      </Box>

      {!state.isAuth ? (
        <Box flex direction="row" align="end" justify="end">
          <Link to="/login">
            <Anchor label="Sign In" color="#149414" />
          </Link>
        </Box>
      ) : (
        <Box flex direction="row" align="center" justify="end">
          <Box direction="row" align="center" justify="center">
            <Text>
              {state.account && numberWithCommas(state.account.balance)}
            </Text>
            <Image height="40px" src={require("../assets/wizzy_credit.png")} />
          </Box>
          <Menu
            dropBackground={{ color: "#2e3138", opacity: "weak" }}
            dropAlign={{ top: "top", bottom: "bottom", left: "left" }}
            label={state.account ? state.account.username : ""}
            items={[
              {
                label: "Logout",
                onClick: () => {
                  onLogout();
                },
              },
            ]}
          />
          {/* <Anchor label="Logout" color="#149414" onClick={() => onLogout()} /> */}
        </Box>
      )}
    </AppBarContainer>
  );
};

export default AppBar;
