import { Box, Collapsible, Text, Heading } from "grommet";
import { useContext, useEffect } from "react";
// import { AppContext } from "../context/app-context";

import { useAuth } from "../../contexts/auth-context";
import api from "../../contexts/api";
import { isMobile } from "react-device-detect";
import { QuestionPreview } from '../../components';

const AccountQuestions = function (props) {
  const { slug } = props;
  return (
    <Box flex align="center" justify="start" background="#535865" style={{minHeight: 'auto'}}>
      <Box direction="row" justify="between" style={{minWidth: 700, margin: '1.5em 0 0.5em 0'}}>
        <Box flex>
          <Heading level="3">{slug}</Heading>
        </Box>
        <Box flex align="end" justify="center">
          {props.questions && (
            <Text>{props.questions && props.questions.length} Questions</Text>
          )}
        </Box>
      </Box>
      <Box style={{minWidth: 700, height: '2px', backgroundColor: '#6FFFB0', margin: '0 0 1em 0'}}/>
      {props.questions && props.questions.length > 0 ? (
        <Box flex >
          {props.questions.map((question) => {
            return <QuestionPreview key={question.slug} question={question} />;
          })}
        </Box>
      ) : (
        <Text>You'll see your questions here</Text>
      )}
      <Box style={{minWidth: 700, height: '2px', backgroundColor: '#6FFFB0', margin: '1em 0 1em 0'}}/>
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
