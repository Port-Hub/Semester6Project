import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Indexpag = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username === "admin" && password === "admin") {
      navigate("/getdetailsadmin");
    } else if (username === "student" && password === "student") {
      navigate("/getdetailsstudent");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleChange = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition duration-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition duration-300"
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Indexpag;
