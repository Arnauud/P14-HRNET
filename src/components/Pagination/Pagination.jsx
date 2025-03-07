import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalPages, indexOfFirstEmployee, indexOfLastEmployee, totalEntries }) => {
  return (
    <div className="pagination-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
      <div className="page-info">
        Showing {totalEntries === 0 ? 0 : indexOfFirstEmployee + 1} to {Math.min(indexOfLastEmployee, totalEntries)} of {totalEntries} entries
      </div>
      <div className="page-nav" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
