import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { UserProfile } from "./UserProfile";

export const Login = () => {
  const { token, setErrorMessage, loginWithUserCredentials } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    await loginWithUserCredentials(email, password);
    navigate(state?.from ? state.from : "/userprofile");
  };
  return (
    <>
      {token ? (
        <UserProfile />
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex flex-col w-1/3 h-auto items-center p-8 border shadow-lg font-sans">
            <div className="text-3xl text-gray">Think Tunes</div>

            <form
              onSubmit={loginHandler}
              className="flex flex-col w-5/6 h-auto p-8 m-4"
            >
              <input
                className="w-full h-14 border shadow-md p-2 m-4"
                placeholder="Email address"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                className="w-full h-14 border shadow-md p-2 m-4"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button className="p-4 w-40  border bg-gray-800 text-white text-lg text-center self-center rounded-md font-semibold">
                Log in
              </button>
            </form>
            <small className="text-base">
              Don't have an account?{" "}
              <span className="text-base text-purple-700 underline">
                <Link to="/signup">signup</Link>
              </span>
            </small>
          </div>
        </div>
      )}
    </>
  );
};
