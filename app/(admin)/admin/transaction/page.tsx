"use client";

import { useEffect, useState } from "react";

export default function TransactionsPage() {
  const [data, setData] = useState([]);
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const fetchData = () => {
    fetch("https://dimsumwrap3d.berkahost.biz.id/api/admin/transactions", {
      headers: { Authorization: "Bearer " + token },
    })
      .then(res => res.json())
      .then(res => setData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateStatus = async (id: number, status: string) => {
    await fetch(`https://dimsumwrap3d.berkahost.biz.id/api/admin/transactions/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ status }),
    });

    fetchData();
  };

  return (
    <div>
      {data.map((t: any) => (
        <div key={t.id_transaksi} className="bg-black/60 backdrop-blur p-4 mb-3 rounded-2xl shadow ">
          <p>ID: {t.id_transaksi}</p>
          <p>User: {t.nama}</p>
          <p>Status: {t.status}</p>

          <select onChange={(e) => updateStatus(t.id_transaksi, e.target.value)} value={t.status} className="mt-2 p-2 rounded-sm bg-[#7a1f1f] text-white">
            <option>Pilih Status</option>
            <option value="paid">Paid</option>
            <option value="dikirim">Dikirim</option>
            <option value="selesai">Selesai</option>
            <option value="cancelled">Cancel</option>
          </select>
        </div>
      ))}
    </div>
  );
}