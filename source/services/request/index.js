import axios from "axios";
import { localStorage } from "services";
import { serverIp } from "_constants";

const instance = axios.create({
  baseURL: `${serverIp}api/`,
});

instance.defaults.headers.common["password"] =
  localStorage.getItem("password") || "";

export default instance;
