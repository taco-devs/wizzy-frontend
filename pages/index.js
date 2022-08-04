import Head from "next/head";
import {
  Box,
  Button,
  Heading,
  Paragraph,
  Image,
  Card,
  Text,
  Anchor,
} from "grommet";

import { Chat } from "grommet-icons";


export default function HomePage() {
  return (
    <Box flex align="center" justify="center" background="#535865">
      <Head>
        <title>Wizzy - HomePage</title>
      </Head>
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
            <Image height="200" width="200" src={"/assets/wizzy.png"} />
          </Box>
          <Heading level="3" margin="small">
            Hello, I'm Wizzy
          </Heading>
          <Box
            margin="small"
            pad="1em"
            border={{
              color: "#6FFFB0",
              size: "small",
              side: "horizontal",
              margin: "1em",
            }}
          >
            <Text margin="xxsmall">
              <b style={{ color: "#6FFFB0" }}>{"> "}</b>
              {"Wizzy loves Wisdom."}
            </Text>
            <Paragraph margin="xxsmall">
              <b style={{ color: "#6FFFB0" }}>{"> "}</b>
              {"Wizzy loves Philosophy"}
            </Paragraph>
            <Paragraph margin="xxsmall">
              <b style={{ color: "#6FFFB0" }}>{"> "}</b>
              {"Wizzy loves Complex Topics"}
            </Paragraph>
            <Paragraph margin="xxsmall">
              <b style={{ color: "#6FFFB0" }}>{"> "}</b>
              {"Wizzy loves Neutrality"}
            </Paragraph>
            <Paragraph margin="xxsmall">
              <b style={{ color: "#6FFFB0" }}>{"> "}</b>
              {"Wizzy loves to answer Questions"}
            </Paragraph>
          </Box>
          <Box>
              <Button
                primary
                color="#6FFFB0"
                reverse
                size="large"
                label="Ask Me"
                margin="medium"
                icon={<Chat />}
                href="/login"
                // onClick={() => setShowSidebar(!showSidebar)}
              />
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
