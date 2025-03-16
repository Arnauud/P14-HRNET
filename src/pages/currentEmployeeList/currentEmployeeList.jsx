import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { EmployeeTable } from '../../components/employeeTable/employeeTable';
import SearchAndFilter from '../../utils/SearchandFilter/SearchandFilter';
import Pagination from '../../components/Pagination/Pagination';
import '../currentEmployeeList/currentEmployee.css';
import { sortEmployees, filterEmployees } from '../../utils/SortingUtils/sortingUtils';

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
      const totalPages = Math.ceil(sortedEmployees.length / entriesPerPage);
      
      // Ensure currentPage is valid (reset to 1 if filtered results are fewer)
      if (currentPage > totalPages) {
          setCurrentPage(1);
      }

      const start = (currentPage - 1) * entriesPerPage;
      return sortedEmployees.slice(start, start + entriesPerPage);
  }, [sortedEmployees, currentPage, entriesPerPage]);


  const handleSort = (key) => {
    let direction = 'ascending';

    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
    }

    setSortConfig({ key, direction });
};


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
            handleSort={handleSort}
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
