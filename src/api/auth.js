import axios from "axios";

const API_AUTH = axios.create({
  baseURL:import.meta.env.BACKEND_URL,
  withCredentials: true,
});

export const loginAPI = async (data) => {
  const resp = await API_AUTH.post("/login", data);
  return resp;
};

export const registerAPI = async (data) => {
  const resp = await API_AUTH.post("/register", data);
  return resp;
};

export const checkToken = async () => {
  const resp = await API_AUTH.get("/verify-token");
  return resp;
};

export const logoutRequest = async () => {
  const resp = await API_AUTH.post('/logout')
  return resp
}
