import { Box, Button, Heading, Paragraph, Image, Card, Text } from "grommet";

import { Chat } from "grommet-icons";
import { Link } from "react-router-dom";
import  Spritesheet  from "react-responsive-spritesheet";

function Landing() {
  return (
    <Box flex align="center" justify="center" background="#535865">
      <Card
        align="center"
        background="#2e3138"
        elevation="0"
        style={{
          width: 370,
        }}
      >
        <Box height="small" width="small">
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
        <Heading level="3" margin="small">
          Hello, I'm Wizzy
        </Heading>
        <Box
          margin="small"
          pad="1em"
          border={{
            color: "#149414",
            size: "small",
            side: "horizontal",
            margin: "1em",
          }}
        >
          <Text margin="xxsmall">
            <b style={{ color: "#149414" }}>{"> "}</b>
            {"Wizzy loves Wisdom."}
          </Text>
          <Paragraph margin="xxsmall">
            <b style={{ color: "#149414" }}>{"> "}</b>
            {"Wizzy loves Philosophy"}
          </Paragraph>
          <Paragraph margin="xxsmall">
            <b style={{ color: "#149414" }}>{"> "}</b>
            {"Wizzy loves Complex Topics"}
          </Paragraph>
          <Paragraph margin="xxsmall">
            <b style={{ color: "#149414" }}>{"> "}</b>
            {"Wizzy loves Neutrality"}
          </Paragraph>
          <Paragraph margin="xxsmall">
            <b style={{ color: "#149414" }}>{"> "}</b>
            {"Wizzy loves to answer Questions"}
          </Paragraph>
        </Box>
        <Box>
          <Link to="/ask">
            <Button
              primary
              color="#149414"
              reverse
              size="large"
              label="Ask Me"
              margin="medium"
              icon={<Chat />}
              // onClick={() => setShowSidebar(!showSidebar)}
            />
          </Link>
        </Box>
      </Card>
    </Box>
  );
}

export default Landing;
