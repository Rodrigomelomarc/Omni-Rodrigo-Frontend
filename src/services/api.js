import axios from "axios";

const api = axios.create({
  baseURL: "https://omni-rodrigo-backend.herokuapp.com"
});

export default api;
