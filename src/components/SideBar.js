import { Box, Collapsible } from "grommet";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app-context";
import { QuestionPreview } from "../components";

const SideBar = function (props) {
  const [appState, appDispatch] = useContext(AppContext);

  useEffect(() => {
    getAccountQuestions();
  }, []);

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
    <Collapsible direction="horizontal" open={appState.showSideBar}>
      <Box
        width="medium"
        background="#40454F"
        elevation="small"
        align="center"
        justify="center"
        style={{
          overflowY: "scroll",
          direction: "rtl",
        }}
      >
        <Box fill>
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
