"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function Dashboard() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalAdmin, setTotalAdmin] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/");
      return;
    }

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const productsRes = await axios.get(
        "http://dimsumwrap3d.berkahost.biz.id/api/products"
      );

      const adminRes = await axios.get(
        "http://dimsumwrap3d.berkahost.biz.id/api/admin"
      );

      setTotalProducts(productsRes.data.data.length);
      setTotalAdmin(adminRes.data.data.length);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow">
          <h2 className="text-xl">Total Produk</h2>
          <p className="text-3xl font-bold mt-2">{totalProducts}</p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-lg shadow">
          <h2 className="text-xl">Total Admin</h2>
          <p className="text-3xl font-bold mt-2">{totalAdmin}</p>
        </div>
      </div>

     <div className="flex gap-4 flex-wrap">
       <Link href="/admin/product" className="bg-blue-600 text-white px-4 py-2 rounded">Kelola Produk</Link>

       <Link href="/admin/product/create" className="bg-green-600 text-white px-4 py-2 rounded">Tambah Produk</Link>

       <Link href="/admin/product/edit" className="bg-yellow-500 text-white px-4 py-2 rounded">Edit Produk</Link>

       <Link href="/admin"className="bg-gray-600 text-white px-4 py-2 rounded">Kelola Admin</Link>
     </div>
    </div>
  );
}