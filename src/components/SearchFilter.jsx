import React from "react";

const SearchFilter = ({
  search,
  onSearchChange,
  departments = [],
  selectedDept,
  onDeptChange,
  onClear,
}) => {
  return (
    <div className="search-filter">
      <input
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        value={selectedDept}
        onChange={(e) => onDeptChange(e.target.value)}
      >
        <option value="">All Departments</option>
        {departments.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <button className="clear-btn" onClick={onClear}>
        Clear
      </button>
    </div>
  );
};

export default SearchFilter;
