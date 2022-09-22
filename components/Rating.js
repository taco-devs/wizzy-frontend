import { Anchor, Box, Collapsible, Text, Heading } from "grommet";
import { Star } from "grommet-icons";
import Link from "next/link";

const Rating = function (props) {

  return (
      <Box direction="row" pad="5px">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </Box>
  );
};

export default Rating;
