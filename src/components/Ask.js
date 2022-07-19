import {
  Box,
  Button,
  Heading,
  Paragraph,
  Image,
  Card,
  TextArea,
} from "grommet";
import { useState, useContext } from "react";
import { AppContext } from "../context/app-context";
import { Chat } from "grommet-icons";
import axios from "axios";

function Ask() {
  const [appState, appDispatch] = useContext(AppContext);
  const [value, setValue] = useState("");

  const getAnswer = async () => {

    if (!value || value.length < 1) return;

    // Get answer logic
    await axios
      .post("/questions", {question: value, author: 'test@example.com'}, {
        headers: {
          'auth-token': appState.authToken,
        }
      })
      .then(function (response) {
        alert('question submitted succesfully');
      })
      .catch(function (error) {
        alert("error creating question");
      });
  };

  return (
    <Box flex align="center" justify="center" background="#535865">
      <Card
        align="center"
        background="#2e3138"
        elevation="0"
        style={{
          width: "60%",
        }}
        pad="1em"
      >
        {/* <Box height="small" width="small">
          <Image

            style={{ filter: "invert(1)" }}
            fit="cover"
            src="https://cdn3.iconfinder.com/data/icons/robotics-automation-and-digital-factory/32/friendly_robot_w-_headset-1024.png"
          />
        </Box> 
        <Heading level="3" margin="small">
          Ask me something:
        </Heading>*/}
        <Box fill>
          <TextArea
            style={{
              "background-color": "#4E5360",
            }}
            fill
            plain
            resize={false}
            placeholder="What are the chances that there is life in another planets?"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Box>
        <Box pad="0 0 2em 0">
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
        </Box>
      </Card>
    </Box>
  );
}

export default Ask;
