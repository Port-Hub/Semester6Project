// pages/student/[id].tsx
"use client";
import { useState } from "react";

interface Student {
  name: string;
  email: string;
  birthDate: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

const StudentDetailPage = () => {
  const [studentId, setStudentId] = useState<string>("");
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStudentDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/student/${studentId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch student details");
      }
      const data: Student = await response.json();
      setStudent(data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStudentId(event.target.value);
  };

  const handleButtonClick = () => {
    fetchStudentDetails();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Student Details</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          Enter Student ID:
        </label>
        <input
          type="text"
          value={studentId}
          onChange={handleInputChange}
          className="border border-gray-300 rounded px-4 py-2 w-full text-black"
        />
      </div>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded"
      >
        Get Student Details
      </button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {student && (
        <div className="border border-gray-200 p-4 rounded mt-4">
          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-1">
              Name:
            </label>
            <span>{student.name}</span>
          </div>
          {/* Include other student details here */}
        </div>
      )}
    </div>
  );
};

export default StudentDetailPage;
