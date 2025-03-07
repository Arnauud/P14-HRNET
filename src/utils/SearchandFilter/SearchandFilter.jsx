import React from 'react';

const SearchAndFilter = ({ entriesPerPage, setEntriesPerPage, searchTerm, setSearchTerm }) => {
  return (
    <div className="top-controls">
      <div className="entries-select">
        <label>
          Show{' '}
          <select
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(parseInt(e.target.value, 10))}
          >
            {[10, 25, 50, 100].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>{' '}
          entries
        </label>
      </div>
      <div className="search-box">
        <label>
          Search:{' '}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default SearchAndFilter;
