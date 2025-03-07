// ✅ Function to handle sorting logic
export const sortEmployees = (employees, sortConfig) => {
    let sortableEmployees = [...employees];
  
    if (sortConfig.key) {
      sortableEmployees.sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];
  
        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return sortConfig.direction === 'ascending' ? aVal - bVal : bVal - aVal;
        } else {
          aVal = aVal?.toString().toLowerCase() || "";
          bVal = bVal?.toString().toLowerCase() || "";
        }
  
        return aVal < bVal
          ? sortConfig.direction === 'ascending' ? -1 : 1
          : sortConfig.direction === 'ascending' ? 1 : -1;
      });
    }
  
    return sortableEmployees;
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
  
  // ✅ Function to handle sorting configuration changes
  export const requestSort = (key, sortConfig, setSortConfig) => {
    let direction = 'ascending';
  
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
  
    setSortConfig({ key, direction });
    console.log('🔄 Sorting by:', key, '| Direction:', direction);
  };
  

