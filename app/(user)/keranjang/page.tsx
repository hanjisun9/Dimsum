"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface CartItem {
  id_keranjang: number;
  id_produk: number;
  nama_produk: string;
  harga: number;
  gambar_produk: string;
  jumlah: number;
  subtotal_keranjang: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const token = typeof window !== "undefined"
    ? localStorage.getItem("token")
    : null;

  const api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const fetchCart = async () => {
    const res = await api.get("/cart");
    setCart(res.data.data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQty = async (id: number, jumlah: number) => {
    if (jumlah < 1) return;
    await api.put(`/cart/item/${id}`, { jumlah });
    fetchCart();
  };

  const removeItem = async (id: number) => {
    await api.delete(`/cart/item/${id}`);
    fetchCart();
  };

  const total = cart.reduce((acc, item) => acc + item.subtotal_keranjang, 0);

  return (
    <div className="p-6 bg-[#f7eaea] min-h-screen">
      <h2 className="text-xl font-semibold mb-4">
        Item ({cart.length} items)
      </h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id_keranjang}
            className="bg-[#d9bcbc] rounded-xl p-4 flex justify-between items-center shadow"
          >
            <div className="flex gap-4 items-center">
              <img
                src={item.gambar_produk}
                className="w-20 h-20 object-cover rounded"
              />

              <div>
                <h3 className="font-bold text-red-700">
                  {item.nama_produk}
                </h3>

                <p className="text-sm text-gray-700">
                  Metode Pembayaran : E-Wallet
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() =>
                      updateQty(item.id_keranjang, item.jumlah - 1)
                    }
                    className="bg-red-200 px-2 rounded"
                  >
                    -
                  </button>

                  <span>{item.jumlah}</span>

                  <button
                    onClick={() =>
                      updateQty(item.id_keranjang, item.jumlah + 1)
                    }
                    className="bg-red-200 px-2 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="text-right">
              <button
                onClick={() => removeItem(item.id_keranjang)}
                className="text-red-500 text-sm"
              >
                ✕
              </button>

              <p className="font-bold text-red-700 mt-4">
                Rp{item.harga.toLocaleString()} / desain
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#e8dcdc] rounded-xl p-4 mt-6">
        <h3 className="font-semibold mb-2">Ringkasan Belanja</h3>

        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>Rp{total.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Jumlah Item</span>
          <span>{cart.length}</span>
        </div>

        <div className="flex justify-between font-bold text-red-600 mt-2">
          <span>Total Harga</span>
          <span>Rp{total.toLocaleString()}</span>
        </div>
      </div>

      {/* BUTTON */}
      <button
        className="bg-red-600 text-white px-6 py-3 rounded-lg mt-6 w-full"
        onClick={async () => {
          await api.post("/cart/checkout", {
            email_penerima: "user@gmail.com",
            alamat: "Alamat user",
            metode_pembayaran: "E-Wallet",
          });
          fetchCart();
          alert("Checkout berhasil!");
        }}
      >
        Pesan Sekarang
      </button>
    </div>
  );
}