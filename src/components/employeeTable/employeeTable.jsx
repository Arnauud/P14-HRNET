import React from 'react';
import { formatDate } from '../../utils/formatDate/formatDate';

const EmployeeTable = ({ employees, requestSort, sortConfig }) => {
  return (
    <table>
      <thead>
        <tr>
          {['First Name', 'Last Name', 'Start Date', 'Department', 'Date Of Birth', 'Street', 'City', 'State', 'Zip Code'].map((key) => (
            <th key={key} onClick={() => requestSort(key)}>
              {key.replace(/([A-Z])/g, ' $1').trim()}{' '}
              {sortConfig.key === key ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <tr key={index}>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{formatDate(emp.startDate)}</td>
            <td>{emp.department}</td>
            <td>{formatDate(emp.dateOfBirth)}</td>
            <td>{emp.street}</td>
            <td>{emp.city}</td>
            <td>{emp.state}</td>
            <td>{emp.zipCode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;