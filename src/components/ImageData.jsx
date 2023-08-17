import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";

const ImageData = () => {
  const baseUrl = "http://127.0.0.1:8000/storage/";
  const [userData, setUSerData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/getImage", {
        headers: {
          accept: "application/json",
          // Other custom headers can be added here
        },
      });
      console.log(result.data.path);
      setUSerData(result.data.path);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };




  return (
    <div>
      {userData.map((item) => (
        <BlogCard image= {item.image} />
      ))}

      
      
    </div>
  );
};

export default ImageData;
