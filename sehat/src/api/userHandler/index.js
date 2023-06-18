import axios from "axios";
import { APIURL } from "../../global";

const login = (user) => {
  axios.post(APIURL + "/user");
};
