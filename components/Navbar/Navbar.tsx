import React from "react";
import Link from "next/link";
import logo from "/app/public/logo.png";
import iconLeft from "/app/public/iconLeft.png";
import Image from "next/image";

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  notificationCount?: number;
  isActive?: boolean;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  icon,
  notificationCount,
  isActive,
  href,
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 p-3 rounded-lg ${
        isActive ? "bg-green-200" : "hover:bg-gray-700"
      } transition duration-300`}>
      {icon}
      <span className="flex-grow">{label}</span>
      {notificationCount && (
        <span className="bg-green-300 text-black rounded-full w-6 h-6 flex items-center justify-center">
          {notificationCount}
        </span>
      )}
    </Link>
  );
};

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white w-[19.5rem] h-screen p-4 flex flex-col rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <Image src={logo} alt="Search icon" width={120} height={32} />
        <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center">
          <Image src={iconLeft} alt="Search icon" width={8} height={8} />
        </div>
      </div>

      <nav className="flex-grow">
        <NavItem
          label="Dashboard"
          icon={<i className="icon-dashboard" />}
          isActive={true}
          href="/dashboard"
        />
        <NavItem label="Task" icon={<i className="icon-task" />} href="/task" />
        <NavItem
          label="Projects"
          icon={<i className="icon-projects" />}
          href="/projects"
        />
        <NavItem
          label="Schedule"
          icon={<i className="icon-schedule" />}
          notificationCount={2}
          href="/schedule"
        />
      </nav>

      <button className="mt-auto text-gray-400 hover:text-white">
        <i className="icon-collapse" />
      </button>
    </nav>
  );
};

export default NavBar;
