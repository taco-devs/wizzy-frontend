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
import Link from "next/link";

export default function HomePage() {
  return (
    <Box flex align="center" justify="center" background="#535865">
      <Paragraph>
        AskWizzy is currently in a closed beta if you want to test it please
        contact <Link href="https://twitter.com/Sentpiqe" target="_blank"><Text style={{ color: "#6FFFB0", cursor: "pointer" }} >Sentpiqe</Text></Link> on
        Twitter.
      </Paragraph>

    <Paragraph>
      Thanks for your interest!
    </Paragraph>
    </Box>
  );
}
