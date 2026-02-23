"use client";
import { useEffect, useState } from "react";
import { API_URL, authHeader } from "@/lib/api";
import { requiredAuth } from "@/lib/auth";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();
    setProducts(data);
  };

  const deleteProduct = async (id: number) => {
    await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
      headers: authHeader()
    });
    loadProducts();
  };

  useEffect(() => {
    requiredAuth();
    loadProducts();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Daftar Produk</h1>

      <Link href="/admin/products/create" className="bg-green-600 text-white px-4 py-2 rounded">
        Tambah Produk
      </Link>

      <div className="mt-6 space-y-4">
        {products.map((p: any) => (
          <div key={p.id_products} className="border p-4 rounded flex justify-between">
            <div>
              <p className="font-bold">{p.nama_produk}</p>
              <p>Rp {p.harga}</p>
            </div>

            <div className="space-x-3">
              <Link href={`/admin/products/edit/${p.id_products}`}>
                Edit
              </Link>

              <button
                onClick={() => deleteProduct(p.id_products)}
                className="text-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}