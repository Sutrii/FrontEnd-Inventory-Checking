import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.headers.common["X-CSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");

export default axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});
