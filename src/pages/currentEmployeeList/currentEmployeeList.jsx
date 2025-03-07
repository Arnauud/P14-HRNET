import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployees } from '../../features/employees/employeeManagementSlice';
import EmployeeTable from '../../components/employeeTable/employeeTable';
import SearchAndFilter from '../../utils/SearchandFilter/SearchandFilter';
import Pagination from '../../components/Pagination/Pagination';
import '../currentEmployeeList/currentEmployee.css';
import { dummyEmployees } from '../../assets/dummyEmployees';
import { sortEmployees, filterEmployees, requestSort } from '../../utils/SortingUtils//sortingUtils';

const CurrentEmployeeList = () => {
    const employees = useSelector((state) => state.employees.employees);
    console.log('📢 Employees list from Redux:', JSON.parse(JSON.stringify(employees)));

    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

    const dispatch = useDispatch();

    // useEffect(() => {
    //   console.log('🔄 Employees updated:', employees);
    // }, [employees]);

    useEffect(() => {
      if (employees.length === 0) { // ✅ Only load if Redux is empty
        dispatch(setEmployees(dummyEmployees));
      }
    }, [dispatch, employees.length]);

    // ✅ Use utility function for filtering employees
    const filteredEmployees = useMemo(() => filterEmployees(employees, searchTerm), [employees, searchTerm]);

    // ✅ Use utility function for sorting employees
    const sortedEmployees = useMemo(() => sortEmployees(filteredEmployees, sortConfig), [filteredEmployees, sortConfig]);
    

    const paginatedEmployees = useMemo(() => {
      const start = (currentPage - 1) * entriesPerPage;
      return sortedEmployees.slice(start, start + entriesPerPage); // ✅ Ensures correct table size
    }, [sortedEmployees, currentPage, entriesPerPage]); // ✅ Table updates dynamically

    return (
      <div className="currentEmployeeContainer">
        <h1>Current Employees</h1>
        <SearchAndFilter
          entriesPerPage={entriesPerPage}
          setEntriesPerPage={setEntriesPerPage}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div>
          <EmployeeTable employees={paginatedEmployees} requestSort={(key) => requestSort(key, sortConfig, setSortConfig)} sortConfig={sortConfig} />
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={Math.ceil(sortedEmployees.length / entriesPerPage)}
          indexOfFirstEmployee={(currentPage - 1) * entriesPerPage}
          indexOfLastEmployee={currentPage * entriesPerPage}
          totalEntries={sortedEmployees.length}
        />
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
};

export default CurrentEmployeeList;
