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
import { useParams } from 'react-router-dom';

function Answer() {
  const { id } = useParams();
  const [appState, appDispatch] = useContext(AppContext);
  const [question, setQuestion] = useState({});

  useEffect(() => {
    getQuestion();
  }, [])

  const getQuestion = async () => {

    // Get answer logic
    await appState.axios
      .get(`/questions/${id}`)
      .then(function (response) {
        const {data} = response;
        console.log(data)
        setQuestion(data);
      })
      .catch(function (error) {
        alert("error creating question");
      });
  };

  return (
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
        {/* <Box>
          <Heading level="3" margin="small">
            Question Placeholder
          </Heading>
        </Box> */}

        <Box fill>
          <Text margin="xxsmall">
            <b style={{ color: "#149414" }}>{"> "}</b>
            {question && question.answer}
          </Text>
        </Box>
        {/* <Box pad="0 0 2em 0">
          <Button
            primary
            color="#149414"
            reverse
            size="large"
            label="Ask Me"
            margin="medium"
            icon={<Chat />}
            onClick={() => getAnswer()}
          />
        </Box> */}
      </Card>
    </Box>
  );
}

export default Answer;
