import axios from "axios";

// const URI = "http://127.0.0.1:2005";
const URI = "https://acm-co.onrender.com/";
export const Base = axios.create({
  baseURL: `${URI}`,
});
