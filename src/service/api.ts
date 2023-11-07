import axios from "../util/customizeAPI";
const getAPILogin = (data: { userName: string; password: string }) => {
  return axios.get("auth/login", data);
};
export { getAPILogin };
