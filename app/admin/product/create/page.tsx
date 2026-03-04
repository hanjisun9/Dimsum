"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CreateProduct() {
  const router = useRouter();

  const [nama_produk, setNamaProduk] = useState("");
  const [harga, setHarga] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://dimsumwrap3d.berkahost.biz.id/api/products",
        {
          nama_produk,
          harga: Number(harga),
          image_url,
          deskripsi,
        }
      );

      router.push("/admin/product");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">
        Tambah Produk
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Nama Produk"
          className="border p-2 w-full"
          value={nama_produk}
          onChange={(e) =>
            setNamaProduk(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Harga"
          className="border p-2 w-full"
          value={harga}
          onChange={(e) =>
            setHarga(e.target.value)
          }
        />

        <input
          placeholder="Image URL"
          className="border p-2 w-full"
          value={image_url}
          onChange={(e) =>
            setImageUrl(e.target.value)
          }
        />

        <textarea
          placeholder="Deskripsi"
          className="border p-2 w-full"
          value={deskripsi}
          onChange={(e) =>
            setDeskripsi(e.target.value)
          }
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Simpan
        </button>
      </form>
    </div>
  );
}