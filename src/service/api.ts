import axios from "../util/customizeAPI";
const getAPILogin = async (data: { username: any; password: any }) => {
  return await axios.post("auth/login", data);
};
export { getAPILogin };
