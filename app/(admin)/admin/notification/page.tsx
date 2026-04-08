"use client";

import { useEffect, useState } from "react";

export default function NotificationsPage() {
  const [data, setData] = useState([]);
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

  useEffect(() => {
    fetch("https://dimsumwrap3d.berkahost.biz.id/api/notifications", {
      headers: { Authorization: "Bearer " + token },
    })
      .then(res => res.json())
      .then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-[#741209]">Notifications</h1>

      {data.map((n: any) => (
        <div key={n.id_notifikasi} className="bg-black/70 backdrop-blur p-3 mb-2 rounded shadow">
          <p>{n.title}</p>
          <p>{n.message}</p>
        </div>
      ))}
    </div>
  );
}