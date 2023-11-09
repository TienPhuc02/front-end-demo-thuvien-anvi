import axios from "axios";

const instance = axios.create({
  baseURL: "https://dam.vietlac.com/api/v1/",
  withCredentials: true,
});

export default instance;

//https://cors-anywhere.herokuapp.com/
