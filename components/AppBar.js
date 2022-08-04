import { Box, Heading, Anchor, Button, Menu, Image, Text } from "grommet";
// import { Link } from "react-router-dom";
import { useContext, useEffect, useLayoutEffect } from "react";
import { AppContext } from "../contexts/app-context";
import { useAuth } from "../contexts/auth-context";
import { isMobile } from "react-device-detect";

import { BladesVertical } from "grommet-icons";
import Link from "next/link";

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

  const toggleSideBar = async () => {
    console.log("toggle");
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

            <Link href="/ask">
              <Heading
                style={{ color: "#6FFFB0", cursor: "pointer" }}
                level="3"
                margin="none"
              >
                Ask
              </Heading>
            </Link>
          </Box>
        )}
      </Box>
      <Box flex direction="row" justify="center">
        <Link href="/">
          <Heading
            level="3"
            margin="none"
            style={{ color: "white", cursor: "pointer" }}
          >
            Wizzy AI
          </Heading>
        </Link>
      </Box>

      {auth.status === "SIGNED_IN" ? (
        <Box flex direction={"row"} align="center" justify="end">
          <Box direction="row" align="center" justify="center">
            <Text>
              {auth?.user?.balance && numberWithCommas(auth.user.balance)}
            </Text>
            <Image height="40px" src={"/assets/wizzy_credit.png"} />
          </Box>
          {/* <Anchor label="Logout" color="#149414" onClick={() => onLogout()} /> */}
        </Box>
      ) : (
        <Box flex direction="row" align="end" justify="end">
          <Link href="/login">
            <Heading
              level="3"
              margin="none"
              style={{ color: "#6FFFB0", cursor: "pointer" }}
            >
              Login
            </Heading>
          </Link>
        </Box>
      )}
    </AppBarContainer>
  );
};

export default AppBar;
