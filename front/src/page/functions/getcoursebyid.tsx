import React, { useState } from "react";

const Getcoursebyid = () => {
  const [courseId, setCourseId] = useState("");
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCourseDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/api/v1/course/${courseId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch course details");
      }
      const data = await response.json();
      setCourse(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setCourseId(event.target.value);
  };

  const handleButtonClick = () => {
    fetchCourseDetails();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Course Details</h1>
      <div className="mb-4">
        <label className="block text-yellow-600 font-semibold mb-1">
          Enter Course ID:
        </label>
        <input
          type="text"
          value={courseId}
          onChange={handleInputChange}
          className="border border-gray-300 rounded px-4 py-2 w-full text-black"
        />
      </div>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded"
      >
        Get Course Details
      </button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {course && (
        <div className="border border-gray-200 p-4 rounded mt-4">
          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-1">
              Name:
            </label>
            <span>{course.name}</span>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-1">
              Description:
            </label>
            <span>{course.description}</span>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-1">
              Duration:
            </label>
            <span>{course.duration}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Getcoursebyid;
