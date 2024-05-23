import axios from "axios";

let API

if (import.meta.env.DEV) {
  API = import.meta.env.VITE_API_TEST;
} else {
  API = import.meta.env.VITE_API_URL;
}

export const makeRequest = axios.create({
  baseURL: API,
  withCredentials: true
})
