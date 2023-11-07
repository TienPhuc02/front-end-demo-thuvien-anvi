import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8083/api/v1/",
  withCredentials: true,
});

export default instance;

//https://cors-anywhere.herokuapp.com/
