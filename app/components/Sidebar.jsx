"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useMemo } from "react";
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";

const menuItems = [
  { id: 1, label: "User Info", icon: HomeIcon, link: "/profile" },
  { id: 2, label: "Keranjang", icon: ArticleIcon, link: "/keranjang" },
  { id: 3, label: "Transaksi", icon: UsersIcon, link: "/transaksi" },
  { id: 4, label: "Notifikasi", icon: VideosIcon, link: "/notifikasi" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const pathname = usePathname();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === pathname),
    [pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 py-6 flex flex-col justify-between shadow-md transition-all duration-300",
    {
      "w-72 bg-[#F3EAEA]": !toggleCollapse,
      "w-20 bg-[#F3EAEA]": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) =>
    classNames(
      "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all",
      {
        "bg-[#B94A48] text-white shadow-md":
          activeMenu?.id === menu.id,
        "bg-white text-[#8B5E5E] hover:bg-[#EBDDDD]":
          activeMenu?.id !== menu.id,
      }
    );

  return (
    <div className={wrapperClasses}>
      <div>
        <div className="flex items-center justify-between mb-6">
          {!toggleCollapse && (
            <h2 className="text-[#8B5E5E] font-semibold text-lg">
              User Profile
            </h2>
          )}

          <button
            onClick={() => setToggleCollapse(!toggleCollapse)}
            className="bg-[#E6D6D6] p-2 rounded-full"
          >
            <CollapsIcon />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {menuItems.map(({ icon: Icon, ...menu }) => (
            <Link key={menu.id} href={menu.link}>
              <div className={getNavItemClasses(menu)}>
                <Icon />

                {!toggleCollapse && (
                  <span className="font-medium">
                    {menu.label}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 text-[#B94A48] cursor-pointer">
        <LogoutIcon />
        {!toggleCollapse && <span>Log Out</span>}
      </div>
    </div>
  );
};

export default Sidebar;