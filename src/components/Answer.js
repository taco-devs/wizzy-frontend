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
import { useState, useContext } from "react";
import { AppContext } from "../context/app-context";
import { Chat } from "grommet-icons";
import axios from "axios";
import Spritesheet from "react-responsive-spritesheet";

function Ask() {
  const [appState, appDispatch] = useContext(AppContext);
  const [value, setValue] = useState("");

  /*   const getAnswer = async () => {

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
  }; */

  return (
    <Box flex align="center" justify="center" background="#535865">
      <Box height="small" width="small">
        <Box direction="row" justify="between" align="end">
          <Box flex>
            <Heading level="3" margin="small">
              Does alien's love ketchup?
            </Heading>
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
            />
          </Box>
        </Box>
      </Box>
      <Card
        align="center"
        background="#2e3138"
        elevation="0"
        style={{
          width: "60%",
        }}
        pad="1em"
      >
        <Box>
          <Heading level="3" margin="small">
            Question Placeholder
          </Heading>
        </Box>

        <Box fill>
          <Text margin="xxsmall">
            <b style={{ color: "#149414" }}>{"> "}</b>
            {"Answer Placeholder"}
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

export default Ask;
