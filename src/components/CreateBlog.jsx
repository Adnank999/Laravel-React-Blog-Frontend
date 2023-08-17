import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CreateBlog = ({ accessToken }) => {
  const Navigate = useNavigate();
  const { id, name } = useParams();

  const [formData, setFormData] = useState({
    user_id: id || "",
    user_name: "",
    title: "",
    description: "",
    image: "",
    thumbnail: "",
    meta_description: "",
    meta_title: "",
    meta_keywords: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Update the image directly in formData state
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/addnew/" + id,
        formDataToSend,
        {
          headers: {
            accept: "application/json",
            // "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
      // Handle success or error response
    } catch (error) {
      console.error("Error creating blog:", error);
    }

    onLogin(id);
    Navigate(`/homeblog/${id}`);
  };

  return (
    <div className="h-screen p-64 mt-5 flex flex-col justify-center">
      <div className="bg-white">
        <h2 className="text-lg flex justify-center mt-2 font-bold">
          Create Blog
        </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-2">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label>Description:</label>
            <textarea
              name="description"
              className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label>Image URL:</label>
            <input
              type="file"
              name="image"
              className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label>Thumbnail URL:</label>
            <input
              type="text"
              name="thumbnail"
              className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.thumbnail}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label>Meta Description:</label>
            <textarea
              name="meta_description"
              className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.meta_description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label>Meta Title:</label>
            <input
              type="text"
              className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="meta_title"
              value={formData.meta_title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label>Meta Keywords:</label>
            <input
              type="text"
              name="meta_keywords"
              className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.meta_keywords}
              onChange={handleChange}
            />
          </div>
          <button
            className="rounded-md relative inline-flex items-center justify-center p-2 mt-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            type="submit"
          >
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
