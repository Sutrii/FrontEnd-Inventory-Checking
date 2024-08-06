import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});
