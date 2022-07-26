import { Box, Button, Heading, Paragraph, Image, Card, Text } from "grommet";
import { useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/app-context";

function Auth(props) {
  const [appState, appDispatch] = useContext(AppContext);
  let [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();

  const setToken = () => {
    let token = searchParams.get("token");

    if (!token) navigate("/login");

    appDispatch({
      type: "SET_TOKEN",
      payload: token,
    });
  };

  useEffect(() => {
    setToken();
  }, []);

  return (
    <Box flex align="center" justify="center" background="#535865">
      <Text>Please wait a second</Text>
    </Box>
  );
}

export default Auth;
