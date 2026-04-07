"use client";

import { useEffect, useState } from "react";

const BASE_URL = "https://dimsumwrap3d.berkahost.biz.id";

export default function ProfilePage() {
    const [form, setForm] = useState({
        nama: "",
        email: "",
        password: "",
        no_hp: "",
        alamat: "",
    });

    const [loading, setLoading] = useState(false);

    const getToken = () => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("token");
        }
    };

    const getProfile = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/auth/me`, {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            });

            const data = await res.json();

            setForm({
                nama: data.nama || "",
                email: data.email || "",
                password: "",
                no_hp: data.no_hp || "",
                alamat: data.alamat || "",
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${BASE_URL}/api/auth/me`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            alert("Profile berhasil diupdate!");
        } catch (err) {
            console.log(err);
            alert("Gagal update!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-10 bg-[#FFF1F1] min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Profile</h1>

            <div className="flex items-center gap-6 mb-10">
                <img src='/profile.jpg' className="w-28 h-28 rounded-full object-cover" />
                <div>
                    <h2 className="text-lg font-semibold">{form.nama}</h2>
                    <p className="text-sm text-gray-600">{form.email}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="text-[#7D2017]">Nama Lengkap *</label>
                        <input
                            name="nama"
                            value={form.nama}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-[#e7d2d2] text-black"
                        />
                    </div>

                    <div>
                        <label className="text-[#7D2017]">Email *</label>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-[#F2DAD8] text-black"
                        />
                    </div>

                    <div>
                        <label className="text-[#7D2017]">Password *</label>
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-[#F2DAD8] text-black"
                        />
                    </div>

                    <div>
                        <label className="text-[#7D2017]">No HP *</label>
                        <input
                            name="no_hp"
                            value={form.no_hp}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-[#F2DAD8] text-black"
                        />
                    </div>
                </div>

                <div>
                    <label className="text-[#7D2017]">Alamat *</label>
                    <textarea
                        name="alamat"
                        value={form.alamat}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-[#F2DAD8] text-black"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-red-500 text-white px-6 py-3 rounded"
                >
                    {loading ? "Loading..." : "Simpan"}
                </button>
            </form>
        </div>
    );
}