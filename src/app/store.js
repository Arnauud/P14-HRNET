import { configureStore } from '@reduxjs/toolkit';
import employeeManagementReducer from '../features/employees/employeeManagementSlice';
import employeeFormReducer from '../features/employees/employeeSlice';

export const store = configureStore({
  reducer: {
    employeeForm: employeeFormReducer,
    employees: employeeManagementReducer,
  },
});

export default store;
