import { Box, Heading, Anchor, Button, Header, Text, Card } from "grommet";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/app-context";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";

import { Car, CaretRightFill } from "grommet-icons";

const QuestionPreview = function (props) {
  const navigate = useNavigate();
  // const [state, dispatch] = useContext(AppContext);

  const goToQuestion = () => {
    navigate(`/question/${props.question.slug}`);
  };

  //"#2e3138"

  const dt = DateTime.fromISO(props.question.created_at).toObject();

  return (
    <Box
      key={props.question.slug}
      fill
      style={{
        minHeight: "auto",
        height: "auto",
        direction: "ltr",
        padding: "0.5em 1em 0.5em 1em",
      }}
    >
      <Card
        fill
        elevation="0"
        style={{ background: "#2e3138", padding: "15px" }}
        onClick={goToQuestion}
        hoverIndicator={{ background: { color: "#149414"} }}
      >
        <Box>
          {dt.year}/{dt.month}/{dt.day} {dt.hour}:{dt.minute}{" "}
        </Box>
        <Box style={{padding: '5px 0 0 0'}}>
          <Text>{props.question.question}</Text>
        </Box>
      </Card>
    </Box>
  );
};

export default QuestionPreview;
