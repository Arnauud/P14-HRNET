import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: null,
  startDate: null,
  department: 'Sales',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  errors: {},
  isValid: false,
};

const employeeSlice = createSlice({
  name: 'employeeForm',
  initialState,
  reducers: {
    setField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: (state) => {
      return { ...initialState }; // ✅ Fully reset state instead of mutating it
    },
  },
});

export const { setField, resetForm } = employeeSlice.actions;
export default employeeSlice.reducer;