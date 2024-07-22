import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from ".././redux/user/userSlice.js";
import Oath from "../components/Firebase/Oath.jsx";
import "./signin.css";

const SignIn = () => {
  const [formData, SetFormData] = useState({});
  /*const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);*/
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    //setLoading(false);
    SetFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.password || !formData.email) {
      return dispatch(signInFailure("All fields are required")); //setErrorMessage("*All fields are required");
    }
    try {
      dispatch(signInStart);
      /*setLoading(true);
      setErrorMessage(null);*/
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        //return setErrorMessage(data.message);
        console.log(data.message);
        return dispatch(signInFailure(data.message));
      }
      //setLoading(false);
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      /*setErrorMessage(error.message);
      setLoading(false);*/
    }
  };
  return (
    <div className="max-container min-h-screen">
      <div className="sub_container">
        <div className="title">
          <h1 className="bg-emerald-500 text-white w-max p-4 text-3xl rounded-md mb-5">
            ThePulse
          </h1>
          <h1 className="dark:text-slate-300">
            Your Daily Dose of Headlines. Please Sign in here to discover many
            more.
          </h1>
          <h1 className="dark:text-slate-300">
            If you do not have an account , you can also sign up here.
          </h1>
        </div>
        <form
          className="form_container  dark:bg-[#404040] border-[#444444] shadow-lg p-8 rounded-md"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center mb-9 text-3xl ">Sign in</h1>

          <div className=" flex flex-col gap-5">
            <div className="flex flex-col">
              <span className="">Your email</span>
              <input
                type="email"
                id="email"
                placeholder="email@company.com"
                className=""
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <span className="">Your password</span>
              <input
                type="password"
                id="password"
                placeholder="**********"
                className=""
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-500 w-full py-2 text-white"
              disabled={loading}
            >
              {loading ? <span>Loading...</span> : "Sign in"}
            </button>
            <div
              to="/"
              className="bg-indigo-500 py-2 cursor-pointer w-full flex justify-center"
            >
              <Oath />
            </div>
            <span className="">
              Dont Have an Account?
              <Link to="/login" className="text-emerald-500">
                {" "}
                Sign up
              </Link>
            </span>
            {errorMessage && <span className="">{errorMessage}</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
