import {
    Box,
    Heading,
    Anchor,
  } from "grommet";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { AppContext } from "../context/app-context";
  
const AppBarContainer = (props) => (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="#2e3138"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    />
);
  

const AppBar = function() {

    return (
        <AppBarContainer>
          <Box>
            {/* <Button
              icon={<BladesVertical />}
              onClick={() => setShowSidebar(!showSidebar)}
            /> */}
          </Box>

          <Heading level="3" margin="none">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Wizzy AI</Link>
          </Heading>
          <Box 
            direction="row"
            align="end"
          >
            <Link to="/login"><Anchor label="Sign In" color='#149414'/></Link>
          </Box>
        </AppBarContainer>
    )
}

export default AppBar;