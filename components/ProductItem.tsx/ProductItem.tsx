import Image from "next/image";
import React from "react";
import Avatar from "/app/public/Avatar.png";

import iconRecyle from "/app/public/IconRecyle.png";
import iconPen from "/app/public/iconPen.png";

interface ProductItemProps {
  name: string;
  url: string;
  lastAssessed: string;
  licenseStatus: string;
  licenseType: string;
  userRole: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  url,
  lastAssessed,
  licenseStatus,
  licenseType,
  userRole,
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 mb-2 ">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="form-checkbox text-green-500" />
        <Image
          src={Avatar}
          alt="avatar icon"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="font-bold text-white">{name}</div>
          <div className="text-gray-400">{url}</div>
        </div>
      </div>

      <div className="text-gray-400">{lastAssessed}</div>

      <div className="flex gap-2 text-sm">
        <span
          className={`px-2 py-1 rounded-2xl ${
            licenseStatus === "Active"
              ? "bg-[#46E8A5] text-[#206b4c]"
              : "bg-gray-500"
          } text-white`}>
          {licenseStatus}
        </span>
        <span className="px-2 py-1 rounded-2xl bg-[#FFD666] text-[#746131] ">
          {licenseType}
        </span>
        <span className="bg-[#422721] text-[#7c3e30] px-2 py-1 rounded-2xl ">
          {userRole}
        </span>
      </div>

      <div className="flex gap-2">
        <button className="text-gray-400 hover:text-white">
          <Image src={iconRecyle} alt="Search icon" width={32} height={32} />
        </button>
        <button className="text-gray-400 hover:text-white">
          <Image src={iconPen} alt="Search icon" width={32} height={32} />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
