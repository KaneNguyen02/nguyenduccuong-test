import Image from "next/image";
import React from "react";
import iconSearch from "/app/public/iconSearch.png";

const Search = () => {
  return (
    <div className="flex gap-2 items-center w-[21rem]  px-4 py-2 rounded-xl ">
      <Image src={iconSearch} alt="Search icon" width={20} height={20} />
      <input
        type="text"
        placeholder="Search anything"
        className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
      />
    </div>
  );
};

export default Search;
