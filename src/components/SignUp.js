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
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {
  const [form, setForm] = useState({});

  const [state, dispatch] = useContext(AppContext);
  const navigate = useNavigate();

  // Login Effect
  const onSignUp = async () => {

    if (!form.email || !form.confirm || !form.password)
      return alert("Incomplete fields");
    if (form.password !== form.confirm) return alert("Passwords must match");

    const signup = {
      email: form.email,
      password: form.password,
    };

    await state.axios
      .post("/accounts/register", signup)
      .then(function (response) {
        alert("Succesfull Sign Up");
        navigate("/login", { replace: true });
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
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
          Sign Up
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
            <FormField
              name="confirm"
              htmlFor="password"
              label="Repeat Password"
            >
              <TextInput type="password" id="confirm-input-id" name="confirm" />
            </FormField>
          </Form>
        </Box>
        <Box>
          <Button
            primary
            color="#149414"
            reverse
            size="large"
            label="Sign Up"
            margin="medium"
            onClick={() => onSignUp()}
          />
        </Box>
        <Box>
          <Button
            primary
            color="#1DA1F2"
            reverse
            size="large"
            label="Signup with Twitter"
            style={{color: 'white'}}
            onClick={() => window.open("http://localhost:3001/auth/twitter", "_self")}
          />
        </Box>
        <Box margin="medium">
          <Box>
            <Link to="/login">
              <Anchor weight="normal" label="I have an account" color="white" />
            </Link>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default SignUp;
