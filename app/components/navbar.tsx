"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [openDesign, setOpenDesign] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo Feast Dimsum"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
        <div className="hidden md:flex gap-8 text-[#72412D] font-medium items-center">
          <a href="#" className="font-semibold">Home</a>
          <a href="#highlight" className="font-semibold">About Us</a>
          <div className="relative">
            <button
              onClick={() => setOpenDesign(!openDesign)}
              className="font-semibold"
            >
              Desain ▾
            </button>

            {openDesign && (
              <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-2xl p-4 w-44 flex flex-col gap-3 z-50">
                <a
                  href="/?id=2#preview"
                  className="bg-[#C3473F] text-white py-2 rounded-lg text-center hover:bg-[#9c1c1c] transition"
                >
                  Hexagon
                </a>

                <a
                  href="/?id=3#preview"
                  className="bg-[#C3473F] text-white py-2 rounded-lg text-center hover:bg-[#9c1c1c] transition"
                >
                  Custom
                </a>
              </div>
            )}
          </div>

          <a href="#contact" className="font-semibold">Contact Us</a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="bg-[#C3473F] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-[#B71C1C] transition-all duration-300"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
}