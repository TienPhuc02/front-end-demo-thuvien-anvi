import { Body, ResponseType, getClient } from "@tauri-apps/api/http";
const getAPILogin = async (data: { username: string; password: string }) => {
  const client = await getClient();
  return await client.get("https://vls.vietlacapi.com/api/v1/App/user", {
    body: Body.json({
      name: data.username,
      password: data.password,
    }),
    headers: {
      Authorization: "Basic ZGV2YWRtaW46MTIzMTIz",
    },
  });
};
const getAPIRegister = async (data: {
  userName: string;
  firstName: string;
  name: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
  emailAddress: string;
  phoneNumber: string;
  gender: string;
}) => {
  const client = await getClient();
  return await client.post("https://vls.vietlacapi.com/api/v1/User", {
    body: Body.json({
      userName: data.userName,
      firstName: data.firstName,
      name: data.name,
      lastName: data.lastName,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      emailAddress: data.emailAddress,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization-Token":
        "ZGV2YWRtaW46MjY3OTk1YmQxMDdiYTllNTIzNGJlMzUzYmQ1MWU3ODU=",
    },
    type: "Json",
    payload: null,
  });
};
export { getAPILogin, getAPIRegister };
