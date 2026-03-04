"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/api";

export default function Home() {
    const [active, setActive] = useState(false);
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [regUsername, setRegUsername] = useState("");
    const [regPassword, setRegPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`${API_URL}/admin/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            console.log("Login response:", data);

            if (res.ok && data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("admin", JSON.stringify(data.admin));
                console.log("TOKEN TERSIMPAN:", localStorage.getItem("token"));
                alert("Login successful");
                setTimeout(() => {
                    window.location.href = "/admin/dashboard";
                }, 100);
            } else {
                alert("You're not admin");
            }
        } catch (err) {
            console.error(err);
            alert("Server error");
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try{
            const res = await fetch(`${API_URL}/admin/register`,{
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify({ username: regUsername, password: regPassword }),
            })
            const text = await res.text();

            let data;
            try {
                data = JSON.parse(text);
            } catch {
                console.error("Response is not JSON:", text);
                return
            }

            if (res.ok) {
                alert("Successfully registered");
                setActive(false);
            } else {
                alert(data.message || "Registration failed");
            }
        } catch (err) {
            console.error(err);
            alert("Server error");
        }
    }

    return (
        <div className="h-screen flex items-center justify-center bg-[#e6d7d5]">
            <div className="relative overflow-hidden w-[768px] max-w-full min-h-[480px] bg-[#f4eceb] rounded-[30px] shadow-xl">

                {/* SIGN UP */}
                <div className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-700
                        ${active
                            ? "translate-x-full opacity-100 scale-100 z-30 pointer-events-auto"
                            : "opacity-0 scale-95 z-10 pointer-events-none"
                        }`}>
                    <form onSubmit={handleRegister} className="flex flex-col items-center justify-center h-full px-10">
                        <h1 className="text-2xl font-bold text-[#7a1f1f]">Create Account</h1>

                        <input value={regUsername} onChange={(e) => setRegUsername(e.target.value)} className="bg-[#e8cfcf] text-[#7a1f1f] rounded-lg px-4 py-2 w-full mt-3 outline-none" placeholder="Name" />
                        <input value={regPassword} onChange={(e) => setRegPassword(e.target.value)} type="password" className="bg-[#e8cfcf] text-[#7a1f1f] rounded-lg px-4 py-2 w-full mt-3 outline-none" placeholder="Password" />

                        <button type="submit" className="mt-4 bg-[#a83232] text-white px-10 py-2 rounded-lg font-semibold uppercase text-sm">Sign Up</button>
                    </form>
                </div>

                {/* SIGN IN */}
                <div className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-700
                        ${active
                            ? "opacity-0 scale-95 pointer-events-none z-10"
                            : "opacity-100 scale-100 pointer-events-auto z-30"
                        }`}>
                    <form
                        onSubmit={handleLogin}
                        className="flex flex-col items-center justify-center h-full px-10"
                    >
                        <h1 className="text-2xl font-bold text-[#7a1f1f]">Sign In</h1>

                        <input value={username} onChange={(e) => setUsername(e.target.value)} className="bg-[#e8cfcf] text-[#7a1f1f] rounded-lg px-4 py-2 w-full mt-3 outline-none" placeholder="Username"
                        />

                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-[#e8cfcf] text-[#7a1f1f] rounded-lg px-4 py-2 w-full mt-3 outline-none" placeholder="Password"
                        />

                        <button
                            type="submit"
                            className="mt-4 bg-[#a83232] text-white px-10 py-2 rounded-lg font-semibold uppercase text-sm"
                        >
                            Sign In
                        </button>
                    </form>
                </div>

                {/* OVERLAY */}
                <div
                    className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 z-40
          ${active ? "-translate-x-full rounded-r-[150px]" : "rounded-l-[150px]"}`}
                >
                    <div
                        className={`relative left-[-100%] w-[200%] h-full bg-[#942a2a] text-white transition-all duration-700
            ${active ? "translate-x-1/2" : ""}`}
                    >

                        {/* overlay kiri */}
                        <div
                            className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center transition-all duration-700
              ${active ? "translate-x-0" : "-translate-x-[200%]"}`}
                        >
                            <h1 className="text-2xl font-bold">Welcome Back!</h1>
                            <p className="mt-4 text-sm">
                                Alredy have an account?
                            </p>
                            <button
                                onClick={() => setActive(false)}
                                className="mt-5 border border-white px-10 py-2 rounded-lg uppercase text-sm"
                            >
                                Sign In
                            </button>
                        </div>

                        {/* overlay kanan */}
                        <div
                            className={`absolute right-0 w-1/2 h-full flex flex-col items-center justify-center px-8 text-center transition-all duration-700
              ${active ? "translate-x-[200%]" : ""}`}
                        >
                            <h1 className="text-2xl font-bold">New in Here?</h1>
                            <p className="mt-4 text-sm">
                                Don't have an account?
                            </p>
                            <button
                                onClick={() => setActive(true)}
                                className="mt-5 border border-white px-10 py-2 rounded-lg uppercase text-sm"
                            >
                                Sign Up
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}