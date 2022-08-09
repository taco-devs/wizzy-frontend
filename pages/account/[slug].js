import { Box, Collapsible, Text } from "grommet";
import { useContext, useEffect } from "react";
// import { AppContext } from "../context/app-context";

import { useAuth } from "../../contexts/auth-context";
import api from "../../contexts/api";
import { isMobile } from "react-device-detect";
import { QuestionPreview } from '../../components';

const AccountQuestions = function (props) {

  return (
    <Box flex align="center" justify="center" background="#535865" style={{minHeight: 'auto'}}>
      {props.questions && props.questions.length > 0 ? (
        <Box flex>
          {props.questions.map((question) => {
            return <QuestionPreview key={question.slug} question={question} />;
          })}
        </Box>
      ) : (
        <Text>You'll see your questions here</Text>
      )}
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

  return { props: { questions } };
}

export default AccountQuestions;
