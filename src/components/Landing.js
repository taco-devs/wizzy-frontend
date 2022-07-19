import { Box, Button, Heading, Paragraph, Image, Card, Text } from "grommet";

import { Chat } from "grommet-icons";
import { Link } from "react-router-dom";

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
          <Image
            style={{ filter: "invert(1)" }}
            fit="cover"
            src="https://cdn3.iconfinder.com/data/icons/robotics-automation-and-digital-factory/32/friendly_robot_w-_headset-1024.png"
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
