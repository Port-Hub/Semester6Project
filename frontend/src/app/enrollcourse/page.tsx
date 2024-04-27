"use client";
// pages/enroll-course.tsx

import { useState } from "react";

const EnrollCoursePage = () => {
  const [studentId, setStudentId] = useState<number>(0);
  const [courseId, setCourseId] = useState<number>(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Construct the enrollment object
    const enrollmentData = {
      studentId,
      courseId,
    };

    // Send a POST request to enroll the student in the course
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/course/enroll",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(enrollmentData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to enroll student in course");
      }

      // Handle successful enrollment
      console.log("Student enrolled in course successfully!");
    } catch (error) {
      console.error("Error enrolling student in course:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Enroll Student in Course</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Student ID:
          </label>
          <input
            type="number"
            value={studentId}
            onChange={(e) => setStudentId(parseInt(e.target.value))}
            className="border border-gray-300 rounded px-4 py-2 w-full text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Course ID:
          </label>
          <input
            type="number"
            value={courseId}
            onChange={(e) => setCourseId(parseInt(e.target.value))}
            className="border border-gray-300 rounded px-4 py-2 w-full text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded"
        >
          Enroll Student
        </button>
      </form>
    </div>
  );
};

export default EnrollCoursePage;
