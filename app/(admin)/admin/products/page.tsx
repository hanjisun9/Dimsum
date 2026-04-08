"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState<any>({});

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const fetchData = () => {
    fetch("https://dimsumwrap3d.berkahost.biz.id/api/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.data));
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 500);
  }, []);

  const handleSubmit = async () => {
    try {
      console.log("TOKEN:", token);

      if (!form.nama_produk || !form.harga || !form.stok) {
        alert("Isi semua field!");
        return;
      }

      const res = await fetch(
        "https://dimsumwrap3d.berkahost.biz.id/api/admin/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            nama_produk: form.nama_produk,
            harga: form.harga,
            stok: form.stok,
            gambar_produk: form.gambar_produk || null,
          }),
        }
      );

      console.log("STATUS:", res.status);

      const result = await res.json();
      console.log("RESULT:", result);

    } catch (err) {
      console.error("ERROR:", err);
    }
  };

  const handleDelete = async (id: number) => {
    await fetch(
      `https://dimsumwrap3d.berkahost.biz.id/api/admin/products/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      }
    );

    setTimeout(() => {
      fetchData();
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col px-4 space-y-10">
      <h1 className="text-2xl font-bold mb-6 text-[#741209]">Product</h1>

      {/* FORM */}
      <div className="w-full max-w-xl bg-black/70 backdrop-blur rounded-xl p-6 shadow-xl shadow-black/70 text-white space-y-4">

        <h2 className="text-2xl font-semibold text-white">
          Add Product
        </h2>

        <Input
          label="Nama Produk"
          value={form.nama_produk || ""}
          onChange={(e: any) =>
            setForm({ ...form, nama_produk: e.target.value })
          }
        />

        <Input
          label="Harga"
          value={form.harga || ""}
          onChange={(e: any) =>
            setForm({ ...form, harga: e.target.value })
          }
        />

        <Input
          label="Stok"
          value={form.stok || ""}
          onChange={(e: any) =>
            setForm({ ...form, stok: e.target.value })
          }
        />

        <div className="flex flex-col">
          <div className="mt-2">
            <Input
              label="Gambar Produk"
              value={form.gambar_produk || ""}
              onChange={(e: any) =>
                setForm({ ...form, gambar_produk: e.target.value })
              }
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded-md"
        >
          Tambah
        </button>
      </div>

      {/* TABLE */}
      {products.map((p: any) => (
        <div
          key={p.id_produk}
          className="bg-black/70 backdrop-blur p-3 rounded shadow flex items-center justify-between text-white"
        >
          <div className="flex items-center gap-4">

            <img
              src={p.gambar_produk}
              alt={p.nama_produk}
              className="w-16 h-16 object-cover rounded-md"
            />

            <div>
              <p className="font-semibold">{p.nama_produk}</p>
              <p className="text-sm text-gray-400">Rp{p.harga}</p>
            </div>

          </div>

          <button
            onClick={() => handleDelete(p.id_produk)}
            className="text-red-500"
          >
            Hapus
          </button>
        </div>
      ))}
    </div>
  );
}

const Input = ({ label, ...props }: any) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-white">{label}</label>
    <input
      {...props}
      className="mt-1 rounded-xl border border-gray-600 px-3 py-2 outline-none 
      text-white bg-gray-800"
    />
  </div>
);