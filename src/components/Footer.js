import { Box, Heading, Anchor, Button, Text } from "grommet";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/app-context";

import { BladesVertical } from "grommet-icons";

const Footer = function (props) {

  return (
    <Box margin="5px" pad="0 0 5px 0" align="end">
        <Text>Created by <Anchor target="_blank" href="https://twitter.com/Sentpiqe">Sentpiqe</Anchor> V0.1</Text>
    </Box>
  );
};

export default Footer;
