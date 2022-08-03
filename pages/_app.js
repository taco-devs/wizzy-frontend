import App from "next/app"
import Head from "next/head";
import { Box, Grommet } from "grommet";
import { AppContextProvider } from "../contexts/app-context";
import { AppBar, SideBar } from "../components";
import { AuthProvider, getUser } from "../contexts/auth-context";
// import "../styles/global.css";

const theme = {
  global: {
    font: {
      family: "Chakra Petch",
      size: "18px",
      height: "20px",
    },
  },
};

const MyApp = ({ Component, pageProps, auth }) => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Grommet theme={theme} full>
        <AuthProvider myAuth={auth}>
          <AppContextProvider>
            <Box fill>
              <AppBar />
              <Box direction="row" flex>
                <SideBar />
                <Box
                  background="#2e3138"
                  flex
                  direction="column"
                  style={{ overflow: "auto" }}
                >
                  <Component {...pageProps} />
                </Box>
              </Box>
            </Box>
          </AppContextProvider>
        </AuthProvider>
      </Grommet>
    </div>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const auth = await getUser(appContext.ctx)
  return { ...appProps, auth: auth }
}


export default MyApp;
