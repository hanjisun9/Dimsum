"use client";
import { useEffect } from "react";
import { requiredAuth } from "@/lib/auth";
import Link from "next/link";

export default function Dashboard() {
  useEffect(() => requiredAuth(), []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <Link href="/admin/products" className="text-blue-600 underline">
        Kelola Produk
      </Link>
    </div>
  );
}