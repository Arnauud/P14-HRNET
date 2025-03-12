import React from 'react';
import { formatDate } from '../../utils/formatDate/formatDate';

const columnKeys = {
  'First Name': 'firstName',
  'Last Name': 'lastName',
  'Start Date': 'startDate',
  'Department': 'department',
  'Date Of Birth': 'dateOfBirth',
  'Street': 'street',
  'City': 'city',
  'State': 'state',
  'Zip Code': 'zipCode'
};

export const EmployeeTable = ({ employees, handleSort, sortConfig }) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.entries(columnKeys).map(([label, key]) => (
            <th key={label} onClick={() => handleSort(key)}>
              {label} {sortConfig?.key === key ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
            </th>
          ))}
        </tr>
      </thead> 
      <tbody>
        {employees.length > 0 ? (
          employees.map((emp, index) => (
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
          ))
        ) : (
          <tr>
            <td colSpan="9">No employees found.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
