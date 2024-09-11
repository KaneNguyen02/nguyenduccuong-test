import React from "react";
import Header from "@/components/Header/Header";
import NavBar from "@/components/Navbar/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen gap-4 bg-[#21262b]">
      <div className="">
        <NavBar  />
      </div>

      <div className="flex flex-col flex-grow">
        <Header />

        <div className="flex-grow  pt-4 pr-4 overflow-y-auto">
          <h1 className="text-3xl text-white py-1">Dashboard</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
