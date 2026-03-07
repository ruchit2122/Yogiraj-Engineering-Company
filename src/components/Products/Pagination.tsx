interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function getPageRange(current: number, total: number, maxVisible = 7) {
  // returns an array of numbers and '...' strings to render condensed pagination
  const range: (number | string)[] = [];
  if (total <= maxVisible) {
    for (let i = 1; i <= total; i++) range.push(i);
    return range;
  }

  const side = Math.floor((maxVisible - 3) / 2); // space for first, last, current region

  let left = Math.max(2, current - side);
  let right = Math.min(total - 1, current + side);

  if (current - 1 <= side) {
    left = 2;
    right = maxVisible - 2;
  }

  if (total - current <= side) {
    left = total - (maxVisible - 3);
    right = total - 1;
  }

  range.push(1);
  if (left > 2) range.push("...");
  for (let i = left; i <= right; i++) range.push(i);
  if (right < total - 1) range.push("...");
  range.push(total);
  return range;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  if (totalPages === 1) return null;

  const items = getPageRange(currentPage, totalPages, 7);

  return (
    <nav
      className="flex items-center justify-center mt-8"
      aria-label="Pagination"
    >
      <ul className="flex items-center gap-2">
        <li>
          <button
            type="button"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium border ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
            aria-label="Go to first page"
          >
            « First
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium border ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
            aria-label="Go to previous page"
          >
            ‹ Prev
          </button>
        </li>

        {items.map((it, idx) => (
          <li key={String(it) + idx}>
            {typeof it === "string" ? (
              <span className="inline-flex items-center justify-center px-3 py-1.5 text-sm text-gray-500">
                {it}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => onPageChange(it)}
                aria-current={it === currentPage ? "page" : undefined}
                className={`min-w-[40px] inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium border ${
                  it === currentPage
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
                aria-label={`Go to page ${it}`}
              >
                {it}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            type="button"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium border ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
            aria-label="Go to next page"
          >
            Next ›
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium border ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
            aria-label="Go to last page"
          >
            Last »
          </button>
        </li>
      </ul>
    </nav>
  );
}
