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
} from "grommet";
import React, { useState } from "react";
import { Chat } from "grommet-icons";

function Landing() {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

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
          <Image
            style={{ filter: "invert(1)" }}
            fit="cover"
            src="https://cdn3.iconfinder.com/data/icons/robotics-automation-and-digital-factory/32/friendly_robot_w-_headset-1024.png"
          />
        </Box>
        <Heading level="3" margin="small">
          Sign In
        </Heading>
        <Box margin="medium">
          <Form
            value={email}
            onChange={(nextValue) => setEmail(nextValue)}
            onReset={() => setEmail({})}
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
        <Box>
          <Button
            primary
            color="#149414"
            reverse
            size="large"
            label="Login"
            margin="medium"
            // onClick={() => setShowSidebar(!showSidebar)}
          />
        </Box>
      </Card>
    </Box>
  );
}

export default Landing;
