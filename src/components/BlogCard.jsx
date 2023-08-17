import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

const BlogCard = (props) => {

  const baseUrl = "http://127.0.0.1:8000/";
  console.log(props.image);

  return (
    <div>
      <div className="flex flex-col border text-left rounded-2xl py-12 px-8 shadow-2xl shadow-cyan-400">
        <Link to={`/view/${props.id}`} className="cursor-pointer">
          <div>
            <div className="blue bg-[#000000] inline-flex rounded-full">
              {props.thumbnail}
            </div>

            <h1 className="text-sm font-bold py-4"> {props.user_name}</h1>
            <h1 className="text-2xl font-bold py-4"> {props.title}</h1>
            <p>{props.description}</p>

            <div>
              <img
                src={props.image}
                alt={props.title}
              />
            </div>

            <p>{props.meta_title}</p>

            <p>{props.meta_description}</p>

            <p>{props.meta_keywords}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
