// import React from 'react';
// import PropTypes from 'prop-types';
// import './EmployeeModal.css'; // ✅ Ensure styles are isolated

// /**
//  * EmployeeModal Component
//  *
//  * This component displays a modal when an employee is successfully created.
//  * It is used inside the EmployeeForm component and can be easily reused in other parts of the application.
//  *
//  * @component
//  * @param {boolean} isOpen - Controls whether the modal is visible (`true`) or hidden (`false`).
//  * @param {function} onClose - Function that handles closing the modal when the button is clicked.
//  * @returns {JSX.Element | null} - Returns the modal component if `isOpen` is `true`, otherwise returns `null`.
//  */
// const EmployeeModal = ({ isOpen, onClose, message }) => { 
//   if (!isOpen) return null; // ✅ Prevents rendering when modal is closed

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <p>Employee Created!</p>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// // ✅ Define PropTypes for type-checking and documentation
// EmployeeModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired, // Controls modal visibility (true = open, false = closed)
//   onClose: PropTypes.func.isRequired, // Function to close the modal
// };

// export default EmployeeModal;