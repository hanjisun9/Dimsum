import SideBar from "../../components/AdminSidebar";
import SideNavbar from "../../components/AdminSidebarClient";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="flex-1 ml-60 p-6 bg-[#FFF2F2] min-h-screen">
    {children}
  </div>
    </div>
  );
}