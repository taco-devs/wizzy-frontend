import {
  Text,
  Box,
  Button,
  Heading,
  Paragraph,
  Image,
  Card,
  TextArea,
} from "grommet";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/app-context";
import { Chat } from "grommet-icons";
import axios from "axios";
import Spritesheet from "react-responsive-spritesheet";
import { useParams, useLocation } from "react-router-dom";

function Answer() {
  const { id } = useParams();
  const location = useLocation();

  const [appState, appDispatch] = useContext(AppContext);
  const [question, setQuestion] = useState({});

  useEffect(() => {
    getQuestion();
  }, [id]);

  const toggleAnimation = async () => {};

  const getQuestion = async () => {
    // Get answer logic
    await appState.axios
      .get(`/questions/${id}`)
      .then(function (response) {
        const { data } = response;
        console.log(data);
        setQuestion(data);

        // Toggle animation if it's a new question
        // if (location.state.new) toggleAnimation();
      })
      .catch(function (error) {
        alert("error creating question");
      });
  };

  return (
    <>
      {question.question ? (
        <Box flex align="center" justify="center" background="#535865">
          <Box
            style={{
              width: "50%",
            }}
          >
            <Box flex direction="row" align="end">
              <Box flex>
                <Card
                  align="center"
                  background="#40454F"
                  elevation="0"
                  pad="1em 1em 2em 1em"
                  margin="0 0 -1em 0"
                >
                  <Heading level="4" margin="small">
                    {question && question.question}
                  </Heading>
                </Card>
              </Box>
              <Box flex>
                <Spritesheet
                  image={require("../assets/wizzy_hand.png")}
                  widthFrame={256}
                  heightFrame={256}
                  steps={12}
                  fps={12}
                  autoplay={true}
                  loop={true}
                  isResponsive={false}
                  style={{
                    alignSelf: "flex-end",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Card
            align="center"
            background="#2e3138"
            elevation="0"
            pad="1em"
            style={{
              width: "50%",
            }}
          >
            {question &&
              question.answers &&
              question.answers.map((answer) => {
                return (
                  <Box
                    fill
                    direction="row"
                    style={{
                      height: "auto",
                      margin: "0.5em 0 0.5em 0",
                      background: "#40454F",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <Box margin="0 1em 0 0">
                      <Text margin="xxsmall">
                        <b style={{ color: "#149414" }}>{"> "}</b>
                      </Text>
                    </Box>
                    <Box>
                      <Text margin="xxsmall">{answer.answer}</Text>
                    </Box>
                  </Box>
                );
              })}
          </Card>
        </Box>
      ) : (
        <Box flex align="center" justify="center" background="#535865">
          <Spritesheet
            image={require("../assets/wizzy_thinking.png")}
            widthFrame={256}
            heightFrame={256}
            steps={8}
            fps={8}
            autoplay={true}
            loop={true}
          />
        </Box>
      )}
    </>
  );
}

export default Answer;
