import App from "next/app"
import Head from "next/head";
import { Box, Grommet } from "grommet";
import { AppContextProvider } from "../contexts/app-context";
import { AppBar, SideBar } from "../components";
import { AuthProvider, getUser } from "../contexts/auth-context";
// import "../styles/global.css";

const theme = {
  global: {
    background: {
      color: '#2e3138'
    },
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
            <Box fill >
              <AppBar />
              <Box direction="row" flex  background="#2e3138">
                <SideBar />
                <Box
                  flex
                  background="#2e3138"
                  direction="column"
                  style={{ overflow: "auto", height: 'auto' }}
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
