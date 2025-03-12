export const sortEmployees = (employees, key, direction) => {
  if (!key) return employees;

  return [...employees].sort((a, b) => {
    let aVal = a[key];
    let bVal = b[key];

    // ✅ Handle dates properly
    if (key === "startDate" || key === "dateOfBirth") {
      aVal = new Date(aVal).getTime();
      bVal = new Date(bVal).getTime();
    }

    // ✅ Handle numeric sorting for zip codes
    if (key === "zipCode") {
      aVal = parseInt(aVal, 10);
      bVal = parseInt(bVal, 10);
    }

    if (aVal < bVal) {
      return direction === "ascending" ? -1 : 1;
    }
    if (aVal > bVal) {
      return direction === "ascending" ? 1 : -1;
    }
    return 0;
  });
};

// ✅ Function to filter employees based on search term
export const filterEmployees = (employees, searchTerm) => {
  const lowerSearch = searchTerm.toLowerCase();
  return employees.filter(emp =>
    Object.values(emp).some(val =>
      val.toString().toLowerCase().includes(lowerSearch)
    )
  );
};

// ✅ Function to handle sorting configuration and apply sorting immediately
export const handleSort = (key, sortConfig, setSortConfig, employees, setEmployees) => {
  let direction = 'ascending';

  if (sortConfig.key === key && sortConfig.direction === 'ascending') {
    direction = 'descending';
  }

  setSortConfig({ key, direction });
  console.log('🔄 Sorting by:', key, '| Direction:', direction);

  // ✅ Sort employees immediately after updating sortConfig
  const sortedEmployees = sortEmployees(employees, key, direction);
  setEmployees(sortedEmployees);
};
