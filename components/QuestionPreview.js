import { Box, Heading, Anchor, Button, Header, Text, Card } from "grommet";
import { DateTime } from "luxon";
import { Car, CaretRightFill } from "grommet-icons";
import { useRouter } from 'next/router'

const QuestionPreview = function (props) {
  const router = useRouter()

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
        onClick={() => router.push(`/question/${props.question.slug}`)}
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
