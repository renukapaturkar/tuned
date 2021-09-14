import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const userDetails = JSON.parse(localStorage.getItem("userData"));
    setupAuthHeaderForServiceCalls(token);
    setToken(token);
    setUserDetails(userDetails);
  }, []);

  const setupAuthHeaderForServiceCalls = (token) => {
    if (token) {
      return (axios.defaults.headers.common["Authorization"] = token);
    }
    delete axios.defaults.headers.common["Authorization"];
  };

  const loginWithUserCredentials = async (email, password) => {
    try {
      const {
        status,
        data: { token, userData },
      } = await axios.post("https://think-tunes-server.herokuapp.com/login", {
        email: email,
        password: password,
      });
      if (status === 200) {
        setToken(token);
        console.log(token);
        setUserDetails(userData);
        console.log(userData);
        setupAuthHeaderForServiceCalls(token);
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("userData", JSON.stringify(userData));
      }
    } catch (error) {
      console.log("err =>", error);
      setErrorMessage("Email or Password is incorrect");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userDetails,
        setUserDetails,
        errorMessage,
        setErrorMessage,
        loginWithUserCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
