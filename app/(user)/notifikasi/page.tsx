"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Notif {
  id_notifikasi: number;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  is_read: number;
}

export default function NotificationPage() {
  const [data, setData] = useState<Notif[]>([]);

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

  const fetchNotif = async () => {
    const res = await api.get("/notifications");
    setData(res.data.data);
  };

  const markRead = async (id: number) => {
    await api.put(`/notifications/${id}/read`);
    fetchNotif();
  };

  useEffect(() => {
    fetchNotif();
  }, []);

  const getStyle = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-100 border-green-400 text-green-700";
      case "error":
        return "bg-red-100 border-red-400 text-red-700";
      case "warning":
        return "bg-yellow-100 border-yellow-400 text-yellow-700";
      case "info":
        return "bg-blue-100 border-blue-400 text-blue-700";
      default:
        return "bg-gray-100 border-gray-400 text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-[#f7eaea] min-h-screen">
      <h1 className="text-xl font-bold mb-6">Notifikasi</h1>

      <div className="space-y-4">
        {data.map((n) => (
          <div
            key={n.id_notifikasi}
            className={`border-l-4 p-4 rounded-lg shadow flex justify-between items-center ${getStyle(n.type)}`}
          >
            <div>
              <h2 className="font-semibold">{n.title}</h2>
              <p className="text-sm">{n.message}</p>
            </div>

            {!n.is_read && (
              <button
                onClick={() => markRead(n.id_notifikasi)}
                className="text-xs bg-black text-white px-3 py-1 rounded"
              >
                Tandai dibaca
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}