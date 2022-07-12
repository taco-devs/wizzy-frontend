import {
    Box,
    Collapsible,
  } from "grommet";

const SideBar = function(props) {

    const {showSidebar} = props;
    
    return (
        <Collapsible direction="horizontal" open={showSidebar}>
            <Box
              width="medium"
              flex
              background="light-2"
              elevation="small"
              align="center"
              justify="center"
            >
              sidebar
            </Box>
        </Collapsible>
    )
}

export default SideBar;