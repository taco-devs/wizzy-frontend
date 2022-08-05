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
  Spinner
} from "grommet";
import React, { useState, useContext } from "react";
import { Chat } from "grommet-icons";
import { AppContext } from "../contexts/app-context";
import { useAuth } from "../contexts/auth-context";

function Login() {
  const { login, state } = useAuth();
  const [form, setForm] = useState({});

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
        <Box height="small" width="small" >
          <Image fit="cover" src={"/assets/wizzy.png"} />
        </Box>
        <Heading level="3" margin="small">
          Log In
        </Heading>
        <Box style={{width:'100%', tabIndex: -1}}>
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
          {state && state.error && (
            <Box flex align="center" justify="center" style={{backgroundColor: '#FF4040', minHeight: '50px'}}>
              <Text>{state.error}</Text>
            </Box>
            
          )}
          {state && state.loading && (
            <Box flex align="center" justify="center">
                <Spinner />
            </Box>
            
          )}
        </Box>
        
        <Box flex style={{width:'100%'}}>
          <Button
            primary
            color="#6FFFB0"
            reverse
            size="large"
            label="Login"
            margin="1em 1em 0 1em"
            onClick={() => login(form)}
          />
        </Box>
        <Box style={{width:'100%'}}>
          <Button
            primary
            margin="1em 1em 0 1em"
            color="#1DA1F2"
            reverse
            size="large"
            label="Login with Twitter"
            style={{ color: "white" }}
            onClick={() =>
              window.open(
                `${process.env.REACT_APP_API_URL}/auth/twitter`,
                "_self"
              )
            }
          />
        </Box>
        <Box margin="medium">
          <Box>
            <Anchor
              weight="normal"
              label="I don't have an account"
              color="white"
              href="/signup"
            />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default Login;
