"use client";
// pages/create-course.tsx

import { useState } from "react";

const CreateCoursePage = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);
  const [createdCourse, setCreatedCourse] = useState(false);
  const [courseId, setCourseId] = useState<number>(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Construct the course object
    const courseData = {
      name,
      description,
      duration,
    };

    // Send a POST request to create the course
    try {
      const response = await fetch("http://localhost:8080/api/v1/course/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        throw new Error("Failed to create course");
      }

      // Handle successful creation
      setCreatedCourse(true);
      const data = await response.json();
      setCourseId(data.id);
      console.log("Course created successfully!");
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Create New Course</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Course Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Duration (in milliseconds):
          </label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="border border-gray-300 rounded px-4 py-2 w-full text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded"
        >
          Create Course
        </button>
      </form>
      {createdCourse && (
        <div className="border border-gray-200 p-4 rounded mt-4">
          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-1">
              Course ID:
            </label>
            <span>{courseId}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCoursePage;
