import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/createEmployee/createEmployee.jsx';
import CurrentEmployeeList from './pages/currentEmployeeList/currentEmployeeList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/currentEmployeeList" element={<CurrentEmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
