import React from "react";
import Navbar from "./Navbar";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="h-screen bg-black flex justify-center text-6xl items-center font-serif font-bold tracking-wide text-cyan-500">
        <h1>Register and Login to Continue</h1>
      </div>
    </div>
  );
};

export default Home;
