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
  Spinner,
} from "grommet";
import React, { useState, useContext } from "react";
import { useAuth } from '../contexts/auth-context';
// import { useNavigate } from "react-router-dom";

function SignUp() {
  const [form, setForm] = useState({});
  const { state, register } = useAuth();

  // Login Effect
  const onSignUp = async () => {
    

    if (!form.email || !form.confirm || !form.password)
      return alert("Incomplete fields");
    if (form.password !== form.confirm) return alert("Passwords must match");

    const signup = {
      email: form.email,
      password: form.password,
    };

    register(signup);
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
          <Image fit="cover" src={"/assets/wizzy.png"} />
        </Box>
        <Heading level="3" margin="small">
          Sign Up
        </Heading>
        <Box margin="small" style={{width:'100%'}}>
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
        <Box style={{width:'100%'}}>
          <Button
            primary
            color="#6FFFB0"
            reverse
            size="large"
            label="Sign Up"
            margin="1em 1em 0 1em"
            onClick={() => onSignUp()}
          />
        </Box>
        <Box style={{width:'100%'}}>
          <Button
            
            primary
            color="#1DA1F2"
            reverse
            margin="1em 1em 0 1em"
            size="large"
            label="Signup with Twitter"
            style={{color: 'white'}}
            onClick={() => window.open(`${process.env.REACT_APP_API_URL}/auth/twitter`, "_self")}
          />
        </Box>
        <Box margin="medium">
          <Box>
              <Anchor weight="normal" label="I have an account" color="white" href="/login" />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default SignUp;
