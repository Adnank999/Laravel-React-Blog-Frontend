import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }

  return (
    <nav>
      <div className="w-full h-[60px] bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="max-w-[1240px] mx-auto py-4 flex justify-between items-center h-full">
          <div className="mx-0">
            <h1>Blogs</h1>
          </div>

          <div className="hidden md:flex ">
            <ul className="flex flex-row gap-6 text-white">
              {/* <li className={activeLink === "home" ? "active" : ""}>
                <a href="/" onClick={() => handleLinkClick("home")}>
                  Show all blogs
                </a>
              </li> */}
              {/* <li className={activeLink === "home" ? "active" : ""}>
                <a href="/createblog" onClick={() => handleLinkClick("home")}>
                  Create blogs
                </a>
              </li> */}
              {/* <li className={activeLink === "home" ? "active" : ""}>
                <a href="#home" onClick={() => handleLinkClick("home")}>
                  Delete blogs
                </a>
              </li> */}
              <li className={activeLink === "home" ? "active" : ""}>
                <a href="/login" onClick={() => handleLinkClick("home")}>
                  Login
                </a>
              </li>
              <li className={activeLink === "home" ? "active" : ""}>
                <a href="/register" onClick={() => handleLinkClick("home")}>
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* hamburger menu */}
          {/* <div onClick={handleLinkClick} className="block md:hidden">
            {activeLink ? (
              <AiOutlineClose size={40} className="text-white mr-4" />
            ) : (
              <AiOutlineMenu size={40} className="text-white mr-4" />
            )}
          </div>

          mobile menu
          <div 
            className={
              activeLink
                ? "w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white absolute top-[60px] flex justify-center left-0"
                : "absolute left-[-100%]"
            }
          >
            <ul>
              <li className="text-xl">Home</li>
              <li className="text-xl">Home</li>
              <li className="text-xl">Home</li>
              <li className="text-xl">Home</li>
              <li className="text-xl">Home</li>
            </ul>
          </div>  */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
