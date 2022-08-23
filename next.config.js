module.exports = {
    reactStrictMode: true,
    env: {
        REACT_APP_API_URL: process.env.REACT_APP_API_URL,
        REACT_APP_APP_URL: process.env.REACT_APP_APP_URL,
        STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    }
  }