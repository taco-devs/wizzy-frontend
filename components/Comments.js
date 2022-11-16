import { Anchor, Box, Collapsible, Text, Heading } from "grommet";
import { Favorite } from "grommet-icons";
import Link from "next/link";

const Comments = function (props) {

  return (
      <Box direction="row" pad="5px">
        <Text margin="0 10px 0 10px">1</Text>
        <Favorite />
      </Box>
  );
};

export default Comments;
