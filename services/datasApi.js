import axios from "axios";

export const datasApi = axios.create({
  // baseURL: `https://www.lasuiteandco.com/api/web/v1`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
