import { Anchor, Box, Collapsible, Text, Heading } from "grommet";
import { Logout } from "grommet-icons";
import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/app-context";
import { useAuth } from "../contexts/auth-context";
import { QuestionPreview } from "../components";
import { isMobile } from "react-device-detect";
import Link from "next/link";

const SideBar = function (props) {
  const [appState, appDispatch] = useContext(AppContext);
  const { auth, logout } = useAuth();

  // Login Effect
  const getAccountQuestions = async () => {
    await appState.axios
      .get("/accounts/my-questions")
      .then(function (response) {
        const data = response.data.data;
        appDispatch({
          type: "SET_QUESTIONS_HISTORY",
          payload: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Collapsible
      direction="horizontal"
      open={auth.status === "SIGNED_IN" && appState.showSideBar}
    >
      <Box
        width="medium"
        background="#40454F"
        elevation="small"
        align="center"
        justify="center"
        style={{
          overflowY: "auto",
          direction: "rtl",
          height: "100%",
          width: "250px",
        }}
      >
        <Box flex fill align="start" justify="start">
          <Box flex fill>
            <Link href={`/account/${auth?.user?.username}`}>
              <Box margin="0.5em 1.5em 0.5em 0">
                <Heading style={{color: "#6FFFB0" }} level="3">My Questions</Heading>
              </Box>
            </Link>
            {/* <Link href="/">
              <Box margin="0.5em 1.5em 0.5em 0">
                <Heading level="3">Settings</Heading>
              </Box>
            </Link> */}
            <Link href="/credits">
              <Box margin="0.5em 1.5em 0.5em 0">
                <Heading level="3" style={{color: "#6FFFB0" }}>Add Credits</Heading>
              </Box>
            </Link>
          </Box>
          <Box flex fill justify="end">
            <Anchor onClick={logout}>
              <Box margin="0.5em 1.5em 0.5em 0">
                <Heading level="3">Logout</Heading>
              </Box>
            </Anchor>
          </Box>
        </Box>
      </Box>
    </Collapsible>
  );
};

export default SideBar;
