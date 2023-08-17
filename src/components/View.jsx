import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const View = (props) => {
  const { id } = useParams();
  // console.log(id);
  const [user, setUser] = useState([]);
  const [userData, setUSerData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/blogs/" + id);
      console.log(result.data.blogs);
      setUser(result.data.blogs);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  const clickToBackHandler = () => {
    navigate("/homeblog");
  };

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete("http://127.0.0.1:8000/api/blogdelete/" + id);
    const newUserData = userData.filter((item) => {
      return item.id !== id;
    });
    setUSerData(newUserData);
    navigate("/homeblog/${id}");
  };

  return (
    <div className="h-screen bg-black text-3xl flex flex-col gap-10 justify-center">
      <div className="flex flex-col just h-10 w-96 ml-10 p-10 ">
        <img src={user.image} />
      </div>

      <div className="text-left mb-4 text-cyan-300 flex flex-col gap-2 justify-center items-center ml-40 ">
        <h3>{user.user_name}</h3>
        <h1>{user.title}</h1>
        <p>{user.description}</p>
        <p>{user.thumbnail}</p>
        <h2>{user.meta_title}</h2>
        <h2>{user.meta_description}</h2>
        <h2>{user.meta_keywords}</h2>
      </div>

      <div className="flex justify-center items-center ml-40">
        <div>
          <button
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-6 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            onClick={clickToBackHandler}
          >
            Back To Home
          </button>
          <button
            onClick={() => handleDelete(user.id)}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
