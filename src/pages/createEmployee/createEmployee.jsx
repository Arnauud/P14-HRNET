import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EmployeeForm from '../../components/employeeForm/employeeForm.jsx';
import { addEmployee } from '../../features/employees/employeeManagementSlice.js';
import './employeeCreation.css'

const CreateEmployee = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const changeShowModal = (val) => {setShowModal(val)}

  const saveEmployee = (newEmployee) => {
    console.log('🟢 saveEmployee called with:', newEmployee);
    dispatch(addEmployee(newEmployee)); // ✅ Ensure employee is added to Redux
      console.log('🚀 Setting showModal to true');

  };
  

  return (
    <div className="employeeContainer">
      <h1>HRnet</h1>
      <Link to="/currentEmployeeList">View Current Employees</Link>
      <h2>Create Employee</h2>

      {/* Use EmployeeForm Component */}
      <EmployeeForm saveEmployee={saveEmployee} changeShowModal={changeShowModal} />

      {showModal && (
        <div className="modal">
          <p>Employee Created!</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CreateEmployee;
