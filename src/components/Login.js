import axios from "axios";
import {
  Box,
  Button,
  Heading,
  Form,
  FormField,
  TextInput,
  Image,
  Card,
  Text,
  Anchor,
} from "grommet";
import React, { useState, useContext } from "react";
import { Chat } from "grommet-icons";
import { AppContext } from "../context/app-context";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({});

  const [appState, dispatch] = useContext(AppContext);

  // Login Effect
  const onLogin = async () => {
    await appState.axios
      .post("/accounts/login", form)
      .then(function (response) {
        const { token } = response.data.data;
        dispatch({
          type: "SET_TOKEN",
          payload: token,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Login Effect
  const onTwitterLogin = async () => {
    await appState.axios
      .get("/auth/twitter")
      .then(function (response) {
        console.log('success');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box flex align="center" justify="center" background="#535865">
      <Card
        align="center"
        background="#2e3138"
        elevation="0"
        style={{
          minWidth: 370,
        }}
      >
        <Box height="small" width="small">
          <Image fit="cover" src={require("../assets/wizzy.png")} />
        </Box>
        <Heading level="3" margin="small">
          Log In
        </Heading>
        <Box margin="small">
          <Form
            value={form}
            onChange={(nextValue) => setForm(nextValue)}
            onReset={() => setForm({})}
            onSubmit={({ value }) => {}}
          >
            <FormField name="email" htmlFor="email" label="Email">
              <TextInput id="email-input-id" name="email" />
            </FormField>
            <FormField name="password" htmlFor="password" label="Password">
              <TextInput
                type="password"
                id="password-input-id"
                name="password"
              />
            </FormField>
          </Form>
        </Box>
        <Box flex>
          <Button
            primary
            color="#149414"
            reverse
            size="large"
            label="Login"
            margin="medium"
            onClick={() => onLogin()}
          />
        </Box>
        <Box>
          <Button
            primary
            color="#1DA1F2"
            reverse
            size="large"
            label="Login with Twitter"
            style={{color: 'white'}}
            onClick={() => window.open(`${process.env.REACT_REACT_APP_API_URL}/auth/twitter`, "_self")}
          />
        </Box>
        <Box margin="medium">
          <Box>
            <Link to="/signup">
              <Anchor
                weight="normal"
                label="I don't have an account"
                color="white"
              />
            </Link>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default Login;
