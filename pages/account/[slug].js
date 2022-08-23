import { Box, Collapsible, Text, Heading } from "grommet";
import { useContext, useEffect } from "react";
// import { AppContext } from "../context/app-context";

import { useAuth } from "../../contexts/auth-context";
import api from "../../contexts/api";
import { isMobile } from "react-device-detect";
import { QuestionPreview } from "../../components";

const AccountQuestions = function (props) {
  const { slug } = props;
  return (
    <Box
      flex
      align="center"
      justify="start"
      background="#535865" 
      style={{ minHeight: "auto" }}
    >
      <Box>
        <Box
          direction="row"
          justify="between"
          style={{ margin: "1.5em 10px 0.5em 10px" }}
        >
          <Box flex>
            <Heading level="3">{slug}</Heading>
          </Box>
          <Box flex align="end" justify="center">
            {props.questions && (
              <Text>{props.questions && props.questions.length} Questions</Text>
            )}
          </Box>
        </Box>
        <Box
          style={{
            height: "2px",
            backgroundColor: "#6FFFB0",
            margin: "0 10px 1em 10px",
          }}
        />
        {props.questions && props.questions.length > 0 ? (
          <Box flex>
            {props.questions.map((question) => {
              return (
                <QuestionPreview key={question.slug} question={question} />
              );
            })}
          </Box>
        ) : (
          <Text>You'll see your questions here</Text>
        )}
                <Box
          style={{
            height: "2px",
            backgroundColor: "#6FFFB0",
            margin: "0 10px 1em 10px",
          }}
        />
      </Box>
    </Box>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const questions = await api({
    method: "get",
    url: `/accounts/${slug}/questions`,
    withCredentials: true,
  })
    .then(function (response) {
      const { data } = response.data;
      return data;
    })
    .catch(function (error) {
      return { error };
    });

  return { props: { questions, slug } };
}

export default AccountQuestions;
