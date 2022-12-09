import axios from "axios";

axios.defaults.baseURL = process.env.API_HOST ?? "http://localhost:8080";

type IRegister = {
  name: string;
  email: string;
  password: string;
};

type ILogin = {
  email: string;
  password: string;
};

const register = (data: IRegister) => {
  return axios.post("/api/users/register", data).then((res) => res.data);
};

const login = (data: ILogin) => {
  return axios.post("/api/users/login", data).then((res) => res.data);
};

export default {
  register,
  login,
};
