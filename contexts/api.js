import axios from "axios";

let api = axios;
let token = null;

// Axios Initializer
api.defaults.baseURL =
  process.env.REACT_APP_API_URL || "https://wizzy-ai.herokuapp.com";
api.defaults.headers.common["auth-token"] = token;

export default api;
