// pages/index.js

import Link from "next/link";

const IndexPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">STA Project</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/getstudents">
          <div className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Get Student by ID
          </div>
        </Link>
        <Link href="/getcourse">
          <div className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Get Course by ID
          </div>
        </Link>
        <Link href="/createstudent">
          <div className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Create New Student
          </div>
        </Link>
        <Link href="/createcourse">
          <div className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Create New Course
          </div>
        </Link>
        <Link href="/enrollcourse">
          <div className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Enroll Student in Course
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
