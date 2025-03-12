import { createSlice } from '@reduxjs/toolkit';

const loadEmployeesFromStorage = () => {
  const storedEmployees = localStorage.getItem('employees');
  return storedEmployees ? JSON.parse(storedEmployees) : [];
};

const initialState = {
  employees: loadEmployeesFromStorage(),
};

const employeeManagementSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      console.log('🔄 Redux: Setting employees list:', action.payload);
      state.employees = action.payload;
      localStorage.setItem('employees', JSON.stringify(state.employees)); // ✅ Save to localStorage
    },
    addEmployee: (state, action) => {
      console.log('🚀 Redux: Adding employee:', action.payload);
      state.employees.push(action.payload);
      localStorage.setItem('employees', JSON.stringify(state.employees)); // ✅ Save to localStorage
    },
  },
});

export const { setEmployees, addEmployee } = employeeManagementSlice.actions;
export default employeeManagementSlice.reducer;
