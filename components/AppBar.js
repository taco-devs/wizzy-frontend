import { Box, Heading, Anchor, Button, Menu, Image, Text } from "grommet";
// import { Link } from "react-router-dom";
import { useContext, useEffect, useLayoutEffect } from "react";
import { AppContext } from "../contexts/app-context";
import { useAuth } from "../contexts/auth-context";
import { isMobile } from "react-device-detect";

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
  const { auth, logout } = useAuth();

  /* useEffect(() => {
    getAccount();
  }, [state.isAuth]); */

/*   const getAccount = async () => {
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
 */
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
        {auth.status === "SIGNED_IN" && (
          <Box flex direction="row" align="center">
            <Button icon={<BladesVertical />} onClick={() => toggleSideBar()} />
            <Anchor label="Ask" color="#149414" />
          </Box>
        )}
      </Box>
      <Box flex direction="row" justify="center">
        <Heading level="3" margin="none">
          <Anchor href="/">Wizzy AI</Anchor>
        </Heading>
      </Box>

      {auth.status === "SIGNED_IN" ? (
        <Box flex direction={"row"} align="center" justify="end">
          <Box direction="row" align="center" justify="center">
            <Text>
              {auth?.user?.balance && numberWithCommas(auth.user.balance)}
            </Text>
            <Image height="40px" src={"/assets/wizzy_credit.png"} />
          </Box>
          <Menu
            dropBackground={{ color: "#2e3138", opacity: "weak" }}
            dropAlign={{ top: "top", bottom: "bottom", left: "left" }}
            label={isMobile ? "" : auth.user ? auth.user.username : ""}
            items={[
              {
                label: "Profile Settings",
              },
              {
                label: "Logout",
                onClick: logout
              }
            ]}
          />
          {/* <Anchor label="Logout" color="#149414" onClick={() => onLogout()} /> */}
        </Box>
      ) : (
        <Box flex direction="row" align="end" justify="end">
          <Anchor label="Sign In" color="#149414" href="/login" />
        </Box>
      )}
    </AppBarContainer>
  );
};

export default AppBar;
