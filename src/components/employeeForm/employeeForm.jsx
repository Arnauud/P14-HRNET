import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setField, resetForm } from '../../features/employees/employeeSlice';
import { addEmployee } from '../../features/employees/employeeManagementSlice';
import DatePicker from '../../utils/datePicker/DatePicker';
import StateDropdown from '../../utils/StateDropdown/StateDropdown';
import '../../pages/createEmployee/employeeCreation.css';

const EmployeeForm = ({ changeShowModal }) => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employeeForm); // ✅ Kept outside handleSubmit
  const errors = useSelector((state) => state.employeeForm.errors);

  const handleChange = (field, value) => {
    dispatch(setField({ field, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform validation directly
    const errors = {};
    if (!employee.firstName?.trim()) errors.firstName = 'First Name is required';
    if (!employee.lastName?.trim()) errors.lastName = 'Last Name is required';
    if (!employee.dateOfBirth) errors.dateOfBirth = 'Date of Birth is required';
    if (!employee.startDate) errors.startDate = 'Start Date is required';
    if (!employee.street?.trim()) errors.street = 'Street is required';
    if (!employee.city?.trim()) errors.city = 'City is required';
    if (!employee.state?.trim()) errors.state = 'State is required';
    if (!employee.zipCode?.trim()) errors.zipCode = 'Zip Code is required';
    if (!employee.department?.trim()) errors.department = 'Department is required';
    
    // Update redux with validation results
    dispatch(setField({ field: 'errors', value: errors }));
    const isFormValid = Object.keys(errors).length === 0;
    dispatch(setField({ field: 'isValid', value: isFormValid }));
    
    if (!isFormValid) {
      console.log('❌ Form validation failed:', errors);
      return;
    }
  
    // Continue with form submission...
    const newEmployee = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      dateOfBirth: employee.dateOfBirth ? new Date(employee.dateOfBirth).toISOString().split('T')[0] : '',
      startDate: employee.startDate ? new Date(employee.startDate).toISOString().split('T')[0] : '',
      department: employee.department || 'Sales',
      street: employee.street,
      city: employee.city,
      state: employee.state,
      zipCode: employee.zipCode,
    };
  
    dispatch(addEmployee(newEmployee));
    console.log('✅ Employee added:', newEmployee);
    changeShowModal(true);
    dispatch(resetForm());
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="form-heading">
      <fieldset>
        <legend id="form-heading">Employee Information</legend>
        <label htmlFor="first-name">First Name</label>
        <input id="first-name" type="text" value={employee.firstName || ''} onChange={(e) => handleChange('firstName', e.target.value)} />
        {errors.firstName && <span className="error">{errors.firstName}</span>}

        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" type="text" value={employee.lastName || ''} onChange={(e) => handleChange('lastName', e.target.value)} />
        {errors.lastName && <span className="error">{errors.lastName}</span>}

        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker selected={employee.dateOfBirth || null} onDateChange={(date) => handleChange('dateOfBirth', date)} id="date-of-birth" />
        {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}

        <label htmlFor="start-date">Start Date</label>
        <DatePicker selected={employee.startDate || null} onDateChange={(date) => handleChange('startDate', date)} id="start-date" />
        {errors.startDate && <span className="error">{errors.startDate}</span>}
      </fieldset>

      <fieldset>
        <legend>Address</legend>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" value={employee.street || ''} onChange={(e) => handleChange('street', e.target.value)} />
        {errors.street && <span className="error">{errors.street}</span>}

        <label htmlFor="city">City</label>
        <input id="city" type="text" value={employee.city || ''} onChange={(e) => handleChange('city', e.target.value)} />
        {errors.city && <span className="error">{errors.city}</span>}

        <label htmlFor="state">State</label>
        <StateDropdown selectedState={employee.state || ''} onStateChange={(value) => handleChange('state', value)} id="state" />
        {errors.state && <span className="error">{errors.state}</span>}

        <label htmlFor="zip-code">Zip Code</label>
        <input id="zip-code" type="text" value={employee.zipCode || ''} onChange={(e) => handleChange('zipCode', e.target.value)} />
        {errors.zipCode && <span className="error">{errors.zipCode}</span>}
      </fieldset>

      <label htmlFor="department">Department</label>
      <select id="department" value={employee.department || 'Sales'} onChange={(e) => handleChange('department', e.target.value)}>
        <option value="">Select a department</option>
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
      {errors.department && <span className="error">{errors.department}</span>}

      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;