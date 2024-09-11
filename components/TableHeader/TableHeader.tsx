import React from "react";

const TableHeader = () => {
  return (
    <div className="flex items-center justify-between mb-2 px-4 py-2  rounded-lg text-gray-400">
      <div>Project</div>
      <div>Last Assessed</div>
      <div>License use</div>
      <div>Actions</div>
    </div>
  );
};

export default TableHeader;
