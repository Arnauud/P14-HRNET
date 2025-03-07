import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // ✅ Use local storage for Redux Persist
import { persistReducer, persistStore } from 'redux-persist';
import employeeManagementReducer from '../features/employees/employeeManagementSlice';
import employeeFormReducer from '../features/employees/employeeSlice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';

// ✅ Persist config for Redux state
const persistConfig = {
  key: 'root',
  storage,
};

// ✅ Wrap reducer with persistReducer
const persistedEmployeeManagementReducer = persistReducer(persistConfig, employeeManagementReducer);

export const store = configureStore({
  reducer: {
    employeeForm: employeeFormReducer,
    employees: persistedEmployeeManagementReducer, // ✅ Persisted state
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // ✅ Ignore Redux Persist actions
      },
    }),
});

export const persistor = persistStore(store); // ✅ Enable persisting

export default store;
