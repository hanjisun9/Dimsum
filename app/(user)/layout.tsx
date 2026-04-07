import Sidebar from "../components/Sidebar";
import React from "react";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full p-4">{children}</main>
    </div>
  );
}