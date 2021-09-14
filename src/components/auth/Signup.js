import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeHandler = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const createNewUser = async (email, name, password) => {
    try {
      setErrorMessage("");
      const response = await axios.post(
        "https://think-tunes-server.herokuapp.com/signup",
        {
          email: email,
          name: name,
          password: password,
        }
      );
      if (response.status === 200) {
        setValues({
          email: "",
          name: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(
        "Something went wrong,Sign up was unsuccessful. Please try again!"
      );
    }
  };
  const passwordMatch =
    values.confirmPassword !== "" && values.confirmPassword === values.password;

  const checkUserInput =
    values.name !== "" && values.email !== "" && passwordMatch;

  const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(
    values.password
  );

  const submitHandler = (e) => {
    const { email, name, password } = values;
    e.preventDefault();
    if (checkUserInput) {
      if (!isPasswordValid) {
        setErrorMessage("PASSWORD_MATCH_ERROR");
        return;
      }
      createNewUser(email, name, password);
    } else {
      setErrorMessage("FIELD_EMPTY");
    }
  };

  const showError = () => {
    if (values.confirmPassword !== "" && !passwordMatch) {
      return "Password must match";
    }
    switch (errorMessage) {
      case "PASSWORD_MATCH_ERROR":
        return "password must be 8 character long,must have one upper case and lower case character and one atleast number";

      case "FIELD_EMPTY":
        return "All Fields are required, Please fill the all required fields and try again";

      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-1/3 h-auto items-center p-8 border shadow-lg font-sans">
        <div className="text-3xl">Think Tunes</div>

        <form
          className="flex flex-col w-5/6 h-auto p-8 m-4"
          onSubmit={submitHandler}
        >
          <input
            className="w-full h-14 border shadow-md p-2 m-4"
            placeholder="Email address"
            type="email"
            name="email"
            value={values.email}
            onChange={onChangeHandler}
            required
          />

          <input
            className="w-full h-14 border shadow-md p-2 m-4"
            placeholder="Name"
            type="name"
            name="name"
            value={values.name}
            onChange={onChangeHandler}
            required
          />

          <input
            className="w-full h-14 border shadow-md p-2 m-4"
            placeholder="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={onChangeHandler}
            required
          />

          <input
            className="w-full h-14 border shadow-md p-2 m-4"
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={onChangeHandler}
            required
          />

          <small className="p-1 text-red-600">{showError()}</small>

          <button className="p-4 w-40  border bg-gray-800 text-white text-lg text-center self-center rounded-md font-semibold">
            Sign Up
          </button>
        </form>
        <small className="text-base">
          Already have an account?{" "}
          <span className="text-base text-purple-700 underline">
            <Link to="/login">Login</Link>
          </span>
        </small>
      </div>
    </div>
  );
};
