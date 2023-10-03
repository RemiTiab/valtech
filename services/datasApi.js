import axios from "axios";

export const datasApi = axios.create({
  // baseURL: `@TODO`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
