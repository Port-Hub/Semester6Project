import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Getdetailsadmin from "./page/getdetailsadmin.jsx";
import Getdetailsstudent from "./page/getdetailsstudent.jsx";
import Indexpag from "./page/Indexpag";
import Getstudentbyid from "./page/functions/getstudentbyid.tsx";
import Getcoursebyid from "./page/functions/getcoursebyid.tsx";
import Createstudent from "./page/functions/createstudent.tsx";
import Createcourse from "./page/functions/createcourse.tsx";
import Enrollstudent from "./page/functions/enrollstudent.tsx";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Indexpag />} />
        <Route path="/getdetailsadmin" element={<Getdetailsadmin />} />
        <Route path="/getdetailsstudent" element={<Getdetailsstudent />} />
        <Route path="/getstudentbyid" element={<Getstudentbyid />} />
        <Route path="/getcoursebyid" element={<Getcoursebyid />} />
        <Route path="/createstudent" element={<Createstudent />} />
        <Route path="/createcourse" element={<Createcourse />} />
        <Route path="/enrollstudent" element={<Enrollstudent />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;


