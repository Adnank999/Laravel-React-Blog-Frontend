import React from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const Blog = () => {
  const [userData, setUSerData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/blogs");
      // console.log(result.data.results);
      setUSerData(result.data.results);
      setLoading(false);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };

  const handelInfiniteScroll = async () => {
    

    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <div className="w-full bg-black ">
      <div className="max-w-[1240px] mx-auto px-4 py-16 ">
        <div className="text-white text-center my-10 py-10 flex flex-col justify-center items-center ">
          <h1 className="my-5 text-4xl">Showing All Blog Posts</h1>
          <p>
          Displaying blog posts on a website is an integral aspect of content management, allowing visitors to access and engage with informative articles and insights. Leveraging a well-structured interface, blog posts are presented in a user-friendly manner, often organized in a chronological or thematic order. Each blog post typically includes essential components such as a captivating title, an engaging featured image or thumbnail, a concise meta description, and the main body of the content itself. Accompanied by details such as the author's name, publication date, and relevant tags or categories, the blog post provides context and relevance to readers. Users are often granted the ability to interact with the content through likes, shares, and comments, fostering a sense of community engagement. The presentation of blog posts may vary, with modern websites often utilizing responsive design techniques to ensure optimal viewing experiences across different devices. Whether it's an individual blog or part of a larger website, showcasing blog posts effectively enhances user engagement, information dissemination, and online communication.
          </p>
        </div>

        <div className="text-white grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-black">
          {userData.map((item) => (
            <BlogCard
              key={item.id}
              id={item.id}
              thumbnail={item.thumbnail}
              user_name={item.user_name}
              title={item.title}
              description={item.description}
              image={item.image}
              meta_title={item.meta_title}
              meta_description={item.meta_description}
              meta_keywords={item.meta_keywords}
            />
          ))}
        </div>
        {loading && <Loading />}
      </div>
    </div>
  );
};

export default Blog;
