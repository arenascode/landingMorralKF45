import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
// const API_TEST = import.meta.env.VITE_API_TEST;

export const makeRequest = axios.create({
  baseURL: API_URL,
  withCredentials: true
})
