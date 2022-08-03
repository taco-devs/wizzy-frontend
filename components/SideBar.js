import { Box, Collapsible, Text } from "grommet";
import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/app-context";
import { useAuth } from "../contexts/auth-context";
import { QuestionPreview } from "../components";
import { isMobile } from 'react-device-detect';

const SideBar = function (props) {
  const [appState, appDispatch] = useContext(AppContext);
  const { auth } = useAuth();

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
      open={auth.status === 'SIGNED_IN' && appState.showSideBar}
    >
      <Box
        width="medium"
        background="#40454F"
        elevation="small"
        align="center"
        justify="center"
        style={{
          overflowY: "scroll",
          direction: "rtl",
          height: "100%",
        }}
      >
        <Box fill align="center" justify="center" style={{margin: isMobile ? '15em 0 0 0' : '8em 0 0 0'}}>
          {appState.questionsHistory < 1 && (
            <Text>You'll see your questions here</Text>
          )}
          {appState.questionsHistory &&
            appState.questionsHistory.map((question) => {
              return <QuestionPreview question={question} />;
            })}
        </Box>
      </Box>
    </Collapsible>
  );
};

export default SideBar;
