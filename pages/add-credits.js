import Head from "next/head";
import {
  Box,
  Button,
  Heading,
  Paragraph,
  Image,
  Card,
  FormField,
  Text,
} from "grommet";
import { useState } from "react";

import { Chat } from "grommet-icons";
import Link from "next/link";

export default function HomePage() {
  const [credits, setCredits] = useState(1000);

  const increase = () => {
    setCredits(credits + 500);
  };

  const decrease = () => {
    if (credits <= 500) return;
    setCredits(credits - 500);
  };

  const calcPayment = () => {
    const CREDIT_1000_VALUE = 3; // 3 USD
    return ((credits / 1000) * CREDIT_1000_VALUE).toFixed(2);
  };

  return (
    <Box flex align="center" justify="center" background="#535865">
      <Heading>Add Credits</Heading>
      <Card
        align="center"
        background="#2e3138"
        elevation="0"
        style={{
          minWidth: "375px",
          width: "60%",
        }}
      >
        <Box direction="row" align="center">
          <Box flex>
            <Button
              primary
              color="#6FFFB0"
              reverse
              size="large"
              label="-"
              margin="medium"
              onClick={decrease}
            />
          </Box>
          <Box direction="row" justify="center" align="center">
            <Heading>{credits.toLocaleString("en-En")}</Heading>
            <Image height="50px" src={"/assets/wizzy_credit.png"} />
          </Box>

          <Box flex>
            <Button
              primary
              color="#6FFFB0"
              reverse
              size="large"
              label="+"
              margin="medium"
              onClick={increase}
            />
          </Box>
        </Box>
        <Box flex>
          <Heading level="2">Total ${calcPayment()} USD</Heading>
        </Box>
        <Box flex>
            <Button
              primary
              color="#6FFFB0"
              reverse
              size="large"
              label="Buy"
              margin="medium"
            />
          </Box>
      </Card>
    </Box>
  );
}
