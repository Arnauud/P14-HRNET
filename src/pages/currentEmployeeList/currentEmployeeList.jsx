import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { EmployeeTable } from '../../components/employeeTable/employeeTable';
import SearchAndFilter from '../../utils/SearchandFilter/SearchandFilter';
import Pagination from '../../components/Pagination/Pagination';
import '../currentEmployeeList/currentEmployee.css';
import { sortEmployees, filterEmployees, handleSort } from '../../utils/SortingUtils/sortingUtils';

const CurrentEmployeeList = () => {
    const employeesFromRedux = useSelector((state) => state.employees?.employees || []);

    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

    // ✅ Filtering employees
    const filteredEmployees = useMemo(() => filterEmployees(employeesFromRedux, searchTerm), [employeesFromRedux, searchTerm]);

    // ✅ Sorting employees
    const sortedEmployees = useMemo(() => sortEmployees(filteredEmployees, sortConfig.key, sortConfig.direction), [filteredEmployees, sortConfig]);

    // ✅ Paginate employees
    const paginatedEmployees = useMemo(() => {
        const start = (currentPage - 1) * entriesPerPage;
        return sortedEmployees.slice(start, start + entriesPerPage);
    }, [sortedEmployees, currentPage, entriesPerPage]);

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
          <EmployeeTable 
            employees={paginatedEmployees} 
            handleSort={(key) => handleSort(key, sortConfig, setSortConfig, employeesFromRedux, dispatch)}
            sortConfig={sortConfig} 
          />
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
