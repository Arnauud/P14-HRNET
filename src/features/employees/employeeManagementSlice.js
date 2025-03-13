import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [], 
};

const employeeManagementSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      console.log('🔄 Redux: Setting employees list:', action.payload);
      state.employees = action.payload; 
    },
    addEmployee: (state, action) => {
      console.log('🚀 Redux: Adding employee:', action.payload);
      state.employees.push(action.payload); 
    },
  },
});

export const { setEmployees, addEmployee } = employeeManagementSlice.actions;
export default employeeManagementSlice.reducer;
