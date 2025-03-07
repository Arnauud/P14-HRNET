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

      // Debugging: Log current state before mutation
      console.log('📌 Before state update:', JSON.parse(JSON.stringify(state.employees)));

      state.employees.push(action.payload); // ✅ Correct: Direct mutation

      // Debugging: Log state after mutation
      console.log('📢 Updated employees list in Redux:', JSON.parse(JSON.stringify(state.employees)));
    },
  },
});

export const { setEmployees, addEmployee } = employeeManagementSlice.actions;
export default employeeManagementSlice.reducer;
