import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employees/employeeManagementSlice';
import employeeFormReducer from '../features/employees/employeeSlice';
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';

const persistConfig = {
  key: 'employees',
  storage: storageSession,
};

const persistedEmployeeReducer = persistReducer(persistConfig, employeeReducer);

export const store = configureStore({
  reducer: {
    employees: persistedEmployeeReducer,
    employeeForm: employeeFormReducer, // ❌ Do NOT persist the form
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // ✅ Ignore redux-persist actions
      },
    }),
});

export const persistor = persistStore(store);