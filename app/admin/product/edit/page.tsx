"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

export default function EditProduct() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [nama_produk, setNamaProduk] = useState("");
  const [harga, setHarga] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = await axios.get(
      `http://dimsumwrap3d.berkahost.biz.id/api/products/${id}`
    );

    const data = res.data.data;

    setNamaProduk(data.nama_produk);
    setHarga(data.harga);
    setImageUrl(data.image_url);
    setDeskripsi(data.deskripsi);
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    await axios.put(
      `http://dimsumwrap3d.berkahost.biz.id/api/products/${id}`,
      {
        nama_produk,
        harga: Number(harga),
        image_url,
        deskripsi,
      }
    );

    router.push("/admin/product");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">
        Edit Produk
      </h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          className="border p-2 w-full"
          value={nama_produk}
          onChange={(e) =>
            setNamaProduk(e.target.value)
          }
        />

        <input
          type="number"
          className="border p-2 w-full"
          value={harga}
          onChange={(e) =>
            setHarga(e.target.value)
          }
        />

        <input
          className="border p-2 w-full"
          value={image_url}
          onChange={(e) =>
            setImageUrl(e.target.value)
          }
        />

        <textarea
          className="border p-2 w-full"
          value={deskripsi}
          onChange={(e) =>
            setDeskripsi(e.target.value)
          }
        />

        <button className="bg-yellow-600 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}