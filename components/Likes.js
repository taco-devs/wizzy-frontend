import { Anchor, Box, Collapsible, Text, Heading } from "grommet";
import { Favorite } from "grommet-icons";
import Link from "next/link";

const Likes = function (props) {

  return (
      <Box direction="row" pad="5px">
        <Favorite />
      </Box>
  );
};

export default Likes;
