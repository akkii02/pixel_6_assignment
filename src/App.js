import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApiData from "./components/Data/ApiData";
import EmployeeRecord from "./components/EmployeesRecord/EmployeesRecord";
import Navbar from "./components/Navbar/Navbar";
import EmployeeRecordFilter from "./components/EmployeesRecord/EmployeesRecordFilter";
import EmployeeDetail from "./components/EmployeeDetail/EmployeeDetail";

const App = () => {
  const [filterData, setFilterData] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <EmployeeRecordFilter users={users} setFilterData={setFilterData} />
              <EmployeeRecord filterData={filterData} />
              <ApiData setUsers={setUsers} />
            </>
          }
        />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
