import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeForm from '../../components/employeeForm/employeeForm.jsx'; // 
import './employeeCreation.css';

const CreateEmployee = () => {
  return (
    <div className="employeeContainer">
      <h1>HRnet</h1>
      <h2>Create Employee</h2> {/* ✅ Ensures `<h2>` renders first */}
      <Link to="/currentEmployeeList">View Current Employees</Link>

      {/* ✅ Load EmployeeForm immediately */}
      <EmployeeForm />
    </div>
  );
};

export default CreateEmployee;
