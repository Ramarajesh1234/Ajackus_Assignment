import React from "react";

const Pagination = ({
  total,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pages = [];

  const start = Math.max(1, page - 3);
  const end = Math.min(totalPages, page + 3);
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="pagination">
      <div className="page-size">
        <label>
          Page Size{" "}
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
          >
            {[10, 25, 50, 100].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="page-controls">
        <button onClick={() => onPageChange(1)} disabled={page === 1}>
          {"<"}
        </button>

        {pages.map((p) => (
          <button
            key={p}
            className={p === page ? "active" : ""}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => onPageChange(totalPages)}
          disabled={page === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
