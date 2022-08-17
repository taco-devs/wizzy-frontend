import Head from "next/head";
import {
  Box,
  Button,
  Heading,
  Paragraph,
  Image,
  Card,
  FormField,
  Text
} from "grommet";

import { Chat } from "grommet-icons";
import Link from "next/link";

export default function HomePage() {
  return (
    <Box flex align="center" justify="center" background="#535865">
      {/* <Paragraph>
        AskWizzy is currently in a closed beta if you want to test it please
        contact <Link href="https://twitter.com/tacodevs" target="_blank"><Text style={{ color: "#6FFFB0", cursor: "pointer" }} >tacodevs</Text></Link> on
        Twitter.
      </Paragraph>

    <Paragraph>
      Thanks for your interest!
    </Paragraph> */}
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
        <Paragraph>Choose the amount of credits</Paragraph>
        <Box direction="row" align="center">
          <Box>
            <Button style={{backgroundColor: '#6FFFB0', height: '50px', borderRadius: '50%', width: '50px', margin: '1em', color: 'red'}}><Text>-</Text></Button>
          </Box>
          <Heading>1,000</Heading>
          <Box><Button>+</Button></Box>
        </Box>
      </Card>
    </Box>
  );
}
