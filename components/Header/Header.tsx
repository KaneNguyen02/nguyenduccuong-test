import Image from "next/image";
import React from "react";

import iconMessage from "/app/public/iconmessage.png";
import iconNotification from "/app/public/iconnotification.png";
import Search from "../Search.tsx/Search";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 p-4 flex items-center justify-between rounded-xl">
      <Search />
      
      <div className="flex gap-4 items-center space-x-6">
        <Image src={iconMessage} alt="Search icon" width={48} height={48} />
        <div className="relative">
          <Image
            src={iconNotification}
            alt="Search icon"
            width={48}
            height={48}
          />
        </div>

        <Image
          height={32}
          width={32}
          alt="User avatar"
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
    </header>
  );
};

export default Header;
