import {
  Text,
  Box,
  Button,
  Heading,
  Paragraph,
  Image,
  Card,
  TextArea,
} from "grommet";
import api from "../../contexts/api";
import { isMobile } from "react-device-detect";
import Link from "next/link";
import SEO from "../../components/SEO";
import { Rating, Likes } from '../../components'
import { useAuth } from "../../contexts/auth-context";

function getSEODescription(answers) {
  const string = answers.map((answer) => answer.answer).join(" ");
  return string.substring(0, 155) + "...";
}

function Answer(props) {
  const { question } = props;
  const { auth, logout } = useAuth();

  return (
    <Box flex style={{ minHeight: "auto" }}>
      <SEO
        url={`${process.env.REACT_APP_APP_URL}/question/${question.slug}`}
        openGraphType="website"
        schemaType="article"
        title={question.question}
        description={getSEODescription(question.answers)}
        image={`https://askwizzy.ai/assets/banner.png`}
      />
      {question.question ? (
        <Box
          flex
          align="center"
          justify="center"
          background="#535865"
          pad="3em 0 1em 0"
        >
          <Box
            style={{
              height: "auto",
              minWidth: "400px",
              width: "50%",
            }}
          >
            <Box flex direction="row" align="end">
              <Box flex>
                <Box margin="20px">
                  <Link href={`/account/${question.account.username}`}>
                    <Text style={{ color: "#6FFFB0", cursor: "pointer" }}>
                      {question.account.username}
                    </Text>
                  </Link>
                </Box>

               {/*  <Card
                  width="100%"
                  direction="row"
                  align="center"
                  justify="between"
                  background="#5c6370"
                  elevation="0"
                  pad="0.5em 0.5em 1em 0.5em"
                  margin="0 0 -1em 0"
                >
                  <Rating />
                  <Likes />
                </Card> */}
              </Box>
              <Box flex align="end" style={{ width: "100%", margin: '0 0 -0.25em 0' }}>
                <Image src={"/assets/wizzy.png"} style={{ maxWidth: "128px" }}/>
              </Box>
            </Box>
            <Box flex direction="row" align="end">
              <Box flex>
                <Card
                  align="center"
                  background="#40454F"
                  elevation="0"
                  pad="1em 1em 2em 1em"
                  margin="0 0 -1em 0"
                >
                  <Likes />
                  <Heading level="4" margin="small">
                    {question && question.question}
                  </Heading>
                </Card>
              </Box>
            </Box>
          </Box>
          <Card
            align="center"
            background="#2e3138"
            elevation="0"
            pad="1em"
            style={{
              height: "auto",
              minWidth: "400px",
              width: "50%",
              margin: "0 0 1.5em 0"
            }}
          >
            {question &&
              question.answers &&
              question.answers.map((answer) => {
                return (
                  <Box
                    fill
                    direction="row"
                    style={{
                      height: "auto",
                      margin: "0.5em 0 0.5em 0",
                      background: "#40454F",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <Box margin="0 1em 0 0">
                      <Text margin="xxsmall">
                        <b style={{ color: "#6FFFB0" }}>{"> "}</b>
                      </Text>
                    </Box>
                    <Box>
                      <Text margin="xxsmall">{answer.answer}</Text>
                    </Box>
                  </Box>
                );
              })}
          </Card>
        </Box>
      ) : (
        <Box flex align="center" justify="center" background="#535865">
          <Text>Loading...</Text>
        </Box>
      )}
    </Box>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const question = await api({
    method: "get",
    url: `/questions/${id}`,
    withCredentials: true,
  })
    .then(function (response) {
      const { data } = response;
      return data;
    })
    .catch(function (error) {
      alert("error creating question");
    });

  return { props: { question } };
}

export default Answer;
