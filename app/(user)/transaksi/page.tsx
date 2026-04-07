"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Transaction {
  id_transaksi: number;
  tanggal: string;
  status: string;
  total_harga: number;
  metode_pembayaran: string;
}

export default function TransactionPage() {
  const [data, setData] = useState<Transaction[]>([]);

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const fetchData = async () => {
    const res = await api.get("/transactions");
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getStatusUI = (status: string) => {
    switch (status) {
      case "pending":
        return {
          text: "Belum melakukan pembayaran",
          color: "text-yellow-600",
          action: (
            <>
              <button className="bg-gray-300 px-3 py-1 rounded">
                Batalkan
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded">
                Bayar
              </button>
            </>
          ),
        };

      case "paid":
        return {
          text: "Berhasil melakukan pembayaran",
          color: "text-green-600",
          action: (
            <>
              <button className="bg-gray-200 px-3 py-1 rounded">
                Lihat Struk
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded">
                Selesai
              </button>
            </>
          ),
        };

      case "cancelled":
        return {
          text: "Pesanan telah dibatalkan",
          color: "text-red-600",
          action: (
            <button className="bg-gray-300 px-3 py-1 rounded">
              Pesan Ulang
            </button>
          ),
        };

      default:
        return {
          text: status,
          color: "text-gray-600",
          action: null,
        };
    }
  };

  return (
    <div className="p-6 bg-[#f7eaea] min-h-screen">
      <h1 className="text-xl font-bold mb-6">Transaksi</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((trx) => {
          const ui = getStatusUI(trx.status);

          return (
            <div
              key={trx.id_transaksi}
              className="bg-[#e5cfcf] rounded-2xl p-5 shadow text-center"
            >
              <div className="flex justify-center">
                <img
                  src="/dimsum.png"
                  className="w-24 h-24 rounded-full"
                />
              </div>

              <p className="text-xs text-gray-500 mt-2">
                {new Date(trx.tanggal).toLocaleDateString()}
              </p>

              <h2 className="font-bold text-red-700 mt-2">
                DimsumBlow
              </h2>

              <p className="text-sm text-gray-600">
                Metode Pembayaran : {trx.metode_pembayaran}
              </p>

              <p className={`mt-3 text-sm ${ui.color}`}>
                {ui.text}
              </p>

              <div className="flex justify-center gap-3 mt-4">
                {ui.action}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}