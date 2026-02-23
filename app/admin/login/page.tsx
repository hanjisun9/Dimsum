"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/api";

export default function Home() {
    const [active, setActive] = useState(false);
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const res = await fetch(`${API_URL}/admin/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (data.token) {
                localStorage.setItem("token", data.token);
                router.push("/admin/dashboard");
            } else {
                alert("ADMIN ABAL ABAL DILARANG MASUK!!!");
            }
        } catch (err) {
            console.error(err);
            alert("Server error");
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-blue-200">
            <div className="relative overflow-hidden w-[768px] max-w-full min-h-[480px] bg-white rounded-[30px] shadow-xl">

                <div
                    className={`absolute top-0 h-full w-1/2 transition-all duration-700 ${active ? "translate-x-full opacity-100 z-50" : "opacity-0 z-10"
                        }`}>
                    <form className="flex flex-col items-center justify-center h-full px-10">
                        <h1 className="text-2xl font-bold">Create Account</h1>
                        <span className="text-xs mt-3">or use your email for registration</span>
                        <input className="bg-gray-200 rounded-lg px-4 py-2 w-full mt-3 outline-none" placeholder="Name" />
                        <input className="bg-gray-200 rounded-lg px-4 py-2 w-full mt-3 outline-none" placeholder="Email" />
                        <input type="password" className="bg-gray-200 rounded-lg px-4 py-2 w-full mt-3 outline-none" placeholder="Password" />
                        <button className="mt-4 bg-purple-700 text-white px-10 py-2 rounded-lg font-semibold uppercase text-sm">Sign Up</button>
                    </form>
                </div>
                <div
                    className={`absolute top-0 h-full w-1/2 transition-all duration-700 z-20 ${active ? "translate-x-full" : ""}`}>
                    <form onSubmit={handleLogin} className="flex flex-col items-center justify-center h-full px-10">
                        <h1 className="text-2xl font-bold">Sign In</h1>
                        <span className="text-xs mt-3">or use your email password</span>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-200 rounded-lg px-4 py-2 w-full mt-3 outline-none" placeholder="Username" />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 rounded-lg px-4 py-2 w-full mt-3 outline-none" placeholder="Password" />
                        <a className="text-sm mt-3">Forgot Password?</a>

                        <button type="submit" className="mt-4 bg-purple-700 text-white px-10 py-2 rounded-lg font-semibold uppercase text-sm">Sign In</button>
                    </form>
                </div>

                <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 z-[1000]${active ? "-translate-x-full rounded-r-[150px]" : "rounded-l-[150px]"}`}>
                    <div className={`relative left-[-100%] w-[200%] h-full bg-gradient-to-r from-indigo-500 to-purple-700 text-white transition-all duration-700${active ? "translate-x-1/2" : ""}`}
                    >
                        <div className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center transition-all duration-700 ${active ? "translate-x-0" : "-translate-x-[200%]"}`}>
                            <h1 className="text-2xl font-bold">Welcome Back!</h1>
                            <p className="mt-4 text-sm">Enter your personal details to use all site features</p>
                            <button onClick={() => setActive(false)} className="mt-5 border border-white px-10 py-2 rounded-lg uppercase text-sm">Sign In</button>
                        </div>

                        <div className={`absolute right-0 w-1/2 h-full flex flex-col items-center justify-center px-8 text-center transition-all duration-700 ${active ? "translate-x-[200%]" : ""}`}>
                            <h1 className="text-2xl font-bold">Hello, Friend!</h1>
                            <p className="mt-4 text-sm">Register with your personal details to use all site features</p>
                            <button onClick={() => setActive(true)} className="mt-5 border border-white px-10 py-2 rounded-lg uppercase text-sm">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}