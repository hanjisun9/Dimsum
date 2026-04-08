"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const hideNavbar =
        pathname.startsWith("/login") ||
        pathname.startsWith("/keranjang") ||
        pathname.startsWith("/profile") ||
        pathname.startsWith("/transaksi") ||
        pathname.startsWith("/notifikasi");

    return (
        <>
            {!hideNavbar && <Navbar />}
            {children}
        </>
    );
}