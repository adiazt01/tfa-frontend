import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { checkToken, loginAPI, logoutRequest, registerAPI } from "../api/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setError] = useState(null);

  const login = async (data) => {
    try {
      setLoading(true);
      const resp = await loginAPI(data);
      if (resp.data) {
        setUser(resp.data);
        setAuthenticated(true);
        setLoading(false);
      } else return;
    } catch (error) {
      setUser(null);
      setAuthenticated(false);
      setLoading(false);
      console.log(error);
      setError(error.response.data);
      console.log(errors);
    }
  };

  const logout = async () => {
    try {
      const resp = await logoutRequest();
      setUser(null);
      setAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (data) => {
    try {
      setLoading(true);
      const resp = await registerAPI(data);
      if (resp.data) {
        setUser(resp.data);
        setAuthenticated(true);
        setLoading(false);
      } else return;
    } catch (error) {
      setUser(null);
      setAuthenticated(false);
      setLoading(false);
      console.log(error);
      setError(error.response.data);
      console.log(errors);
    }
  };

  /* Permite la verificaion del token durante el enrutado */
  useEffect(() => {
    const verifyToken = async () => {
      const cookies = Cookies.get();
      if (cookies.token) {
        try {
          const res = await checkToken(cookies.token);
          if (res) {
            setUser(res.data);

            setAuthenticated(true);
            setLoading(false);
          } else {
            setUser(null);
            setAuthenticated(false);
          }
        } catch (error) {
          setUser(null);
          setAuthenticated(false);
          setLoading(false);
          console.log(error);
        }
      } else {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  /* Permite limpiar el estado de los errores */
  useEffect(() => {
    const timerError = setInterval(() => {
      setError(null);
    }, 5000);

    return () => {
      clearInterval(timerError);
    };
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{ user, authenticated, loading, login, register, logout, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
