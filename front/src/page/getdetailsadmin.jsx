import React from "react";
import { useNavigate } from "react-router-dom";

const Getdetailsadmin = () => {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/getstudentbyid");
  };
  const handleClick2 = () => {
    navigate("/getcoursebyid");
  };
  const handleClick3 = () => {
    navigate("/createstudent");
  };
  const handleClick4 = () => {
    navigate("/createcourse");
  };
  const handleClick5 = () => {
    navigate("/enrollstudent");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Get Student by ID</h2>
          <button onClick={handleClick1} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
            Go
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Get Course by ID</h2>
          <button onClick={handleClick2} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
            Go
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Create New Student</h2>
          <button onClick={handleClick3} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
            Go
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Create New Course</h2>
          <button onClick={handleClick4} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
            Go
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Enroll Student in Course</h2>
          <button onClick={handleClick5} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Getdetailsadmin;
