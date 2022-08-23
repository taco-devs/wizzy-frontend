import Head from "next/head";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import {
  Box,
  Button,
  Heading,
  Paragraph,
  Image,
  Card,
  FormField,
  Text,
  Spinner,
} from "grommet";
import { useState } from "react";
import api from "../contexts/api";

import { Chat } from "grommet-icons";
import Link from "next/link";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

export default function HomePage() {
  const [credits, setCredits] = useState(1000);
  const [loading = false, setLoading] = useState(false);
  const router = useRouter();
  const { status } = router.query;

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

  const getSession = async () => {
    setLoading(true);

    const stripe = await stripePromise;

    // Get answer logic
    await api({
      method: "post",
      url: "/payments/initialize-session",
      data: {
        item: {
          image: "https://askwizzy.ai/assets/banner.png",
          name: credits.toLocaleString("en-En") + " Credits - AskWizzy",
          description: "In-App Credits",
          quantity: 1,
          amount: credits,
          price: calcPayment(),
        },
      },
      withCredentials: true,
    })
      .then(async function (response) {
        const { data } = response;
        const result = await stripe.redirectToCheckout({
          sessionId: data.id,
        });
      })
      .catch(function (error) {
        alert("Error");
        setLoading(false);
      });
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
            disabled={loading}
            primary
            color="#6FFFB0"
            reverse
            size="large"
            label={loading ? <Spinner /> : "Buy"}
            margin="medium"
            onClick={getSession}
          />
        </Box>
        {status === "success" && (
          <Box
            flex
            align="center"
            justify="center"
            style={{
              backgroundColor: "#00C781",
              minHeight: "50px",
              width: "100%",
              margin: "15px 0 0 0",
              color: "#2e3138",
            }}
          >
            <Text>
              Your payment was successfull. Credits should be reflected in your
              account shortly
            </Text>
          </Box>
        )}
      </Card>
      <Box align="center" justify="center" background="#535865">
        <Paragraph>
          1 Question = 100 Credits. 
        </Paragraph>
      </Box>
    </Box>
  );
}
