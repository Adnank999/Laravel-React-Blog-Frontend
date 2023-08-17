import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import CreateBlog from "./components/CreateBlog";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HomeBlogs from "./components/HomeBlogs";
import View from "./components/View";

function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access'));
  const [userId, setUserId] = useState('your-user-id');

  // Callback function to update the accessToken state
  const updateAccessToken = (newAccessToken) => {
    setAccessToken(newAccessToken);
    localStorage.setItem('access', newAccessToken); // Store the token in localStorage
  };

  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/createblog/:id"
            element={<CreateBlog userId={userId} accessToken={accessToken} />}
          />
          <Route
            exact
            path="/login"
            element={<Login  updateAccessToken={updateAccessToken} />}
          />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/homeblog/:id"
            element={<HomeBlogs userId={userId} accessToken={accessToken}/>}
          />
          <Route exact path="/view/:id" element={<View />} />

          {/* <Route exact path="/view/:id" element={<View/>}/>
              <Route exact path="/edit/:id" element={<Edit/>}/>  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
