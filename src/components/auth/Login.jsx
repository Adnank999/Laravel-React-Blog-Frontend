import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

import axios from "../api/axios";
import NavbarBlog from "../NavbarBlog";
import CreateBlog from "../CreateBlog";
import HomeBlogs from "../HomeBlogs";
const LOGIN_URL = "/login";

const Login = ({ updateAccessToken }) => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const Navigate = useNavigate();


  const [item,setItem] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );
      // console.log(JSON.stringify(response?.data));
      
      const accessToken = response?.data?.token;
      const roles = response?.data?.roles;
      const id = response?.data?.user.id;
      // console.log(accessToken);

      setAuth({ email, password, roles, accessToken });
      setEmail("");
      setPassword("");
      setUserId(id);
      localStorage.setItem('access', accessToken);
      console.log(localStorage);
      setSuccess(true);


      

      Navigate(`/homeblog/${id}`);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      // errRef.current.focus();
    }
  };

  return (
    <div className="w-[60%] flex flex-col justify-center ml-64 p-10 mt-20 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      {/* {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a className ="w-[40%] mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href="/">Go to Home</a>
          </p>
        </section>
      ) : ( */}
      {/* <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p> */}
     

      <form
        onSubmit={handleSubmit}
        className="bg-blue-700 p-4  flex flex-col justify-center items-center"
      >
        <h1 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign In
        </h1>

        <div className="w-[40%]">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            type="email"
            id="email"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-[40%]">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button className="w-[40%] mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Sign In
        </button>
      </form>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        <p className="text-blue-700 hover:underline dark:text-blue-500">
          Need an Account?
          <br />
          <span className="text-blue-700 hover:underline dark:text-blue-500">
            {/*put router link here*/}
            <a href="/register">Sign Up</a>
          </span>
        </p>
      </div>

      {/* </section> */}
      {/* )} */}
    </div>
  );
};

export default Login;
