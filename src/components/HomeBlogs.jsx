import React from "react";
import NavbarBlog from "./NavbarBlog";
import Blog from "./Blog";
import Login from "./auth/Login";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HomeBlogs = ({ userId }) => {
  const { id } = useParams();
  const [localUserId, setLocalUserId] = useState(userId);

  useEffect(() => {
    setLocalUserId(id);
  }, [id]);

  
  
  return (
    <div>
      
      <NavbarBlog userId={localUserId} />
      <Blog />
    </div>
  );
};

export default HomeBlogs;
