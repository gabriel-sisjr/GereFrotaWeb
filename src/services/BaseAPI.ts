import axios from "axios";

const API = axios.create({
  baseURL: "",
});

// ADICIONAR UM INTERCEPTOR => ADICIONAR O TOKEN JWT AO HEADER
export default API;
