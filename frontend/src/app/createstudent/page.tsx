"use client";
import { useState } from "react";

const CreateStudentPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zip, setZip] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Construct the student object
    const studentData = {
      name,
      email,
      birthDate,
      phone,
      address,
      city,
      state,
      zip,
      country,
    };

    // Send a POST request to create the student
    try {
      const response = await fetch("http://localhost:8080/api/v1/student/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        throw new Error("Failed to create student");
      }

      // Handle successful creation
      console.log("Student created successfully!");
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Create New Student</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Name:
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
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Birth Date (YYYY-MM-DD):
          </label>
          <input
            type="text"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full text-black"
            required
          />
        </div>
        {/* Add input fields for other student details similarly */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded"
        >
          Create Student
        </button>
      </form>
    </div>
  );
};

export default CreateStudentPage;
