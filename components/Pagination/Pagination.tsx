import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-4 p-4">
      <button className="text-gray-400 hover:text-white">Previous</button>
      <span className="text-gray-400">Page 1 of 10</span>
      <button className="text-gray-400 hover:text-white">Next</button>
    </div>
  );
};

export default Pagination;
