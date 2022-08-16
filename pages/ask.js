import {
  Box,
  Button,
  Heading,
  Paragraph,
  Image,
  Text,
  Card,
  TextArea,
} from "grommet";
import { useState, useContext } from "react";
import api from "../contexts/api";
import { AppContext } from "../contexts/app-context";
import { useRouter } from "next/router";
import Spritesheet from "react-responsive-spritesheet";

function Ask() {
  const [appState, appDispatch] = useContext(AppContext);
  const [value, setValue] = useState("");
  const [loading = false, setLoading] = useState(false);
  const router = useRouter();

  // const navigate = useNavigate();

  const getAnswer = async () => {
    if (!value || value.length < 1) return;

    setLoading(true);

    // Get answer logic
    await api({
      method: "post",
      url: "/questions",
      data: { question: value, author: "test@example.com" },
      withCredentials: true,
    })
      .then(function (response) {
        const { data } = response;
        const question = data.result[0];
        const route = `/question/${question.slug}`;
        /* appDispatch({
            type: 'ADD_QUESTION',
            payload: question,
          }); */
        router.push(route);
      })
      .catch(function (error) {
        alert("error creating question");
        console.log(error);
      });
  };

  return (
    <Box flex align="center" justify="center" background="#535865">
      <Box height="small" width="small">
        {loading ? (
          <Spritesheet
            image={"/assets/wizzy_thinking.png"}
            widthFrame={256}
            heightFrame={256}
            steps={8}
            fps={8}
            autoplay={true}
            loop={true}
          />
        ) : (
          <Image
            fit="cover"
            src={"/assets/wizzy.png"}
            height="200px"
            width="200px"
          />
        )}
      </Box>
      <Card
        align="center"
        background="#2e3138"
        elevation="0"
        style={{
          minWidth: "400px",
          width: "60%",
        }}
        pad="1em"
      >
        <Box fill>
          <TextArea
            style={{
              "background-color": "#4E5360",
            }}
            disabled={loading}
            fill
            plain
            resize={false}
            placeholder="What are the chances that there is life in another planets?"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Box>
        <Box direction="row" align="center" pad="1em 0 1em 0" style={{width: '100%'}}>
          <Box flex />
          <Box flex>
            <Button
              disabled={loading}
              primary
              color="#6FFFB0"
              reverse
              size="large"
              label="Ask"
              margin="medium"
              onClick={() => getAnswer()}
            />
          </Box>

          <Box flex direction="row" align="center" justify="end">
            <Text>100</Text>
            <Image height="40px" src={"/assets/wizzy_credit.png"} />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default Ask;
