"use client";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "DIMSUMBLOW",
    desc: "DimsumBlow merupakan konsep kemasan futuristik yang dirancang untuk menampilkan kesan modern, bold, dan dinamis...",
    image: "/p1.png",
    thumb: "/p1.png",
  },
  {
    id: 2,
    name: "DIMSUMWRAP",
    desc: "Desain tas tenteng praktis dengan tampilan clean dan premium untuk produk makanan.",
    image: "/p2.png",
    thumb: "/p2.png",
  },
  {
    id: 3,
    name: "DIMSUMBOX",
    desc: "Box makanan minimalis, kuat, dan cocok untuk delivery maupun hampers.",
    image: "/p3.png",
    thumb: "/p3.png",
  },
];

export default function Preview() {
  const [selected, setSelected] = useState(0);
  const product = products[selected];

  const scrollUp = () =>
    setSelected((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  const scrollDown = () =>
    setSelected((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  return (
    <section id="preview" className="relative bg-gradient-to-r from-[#FFFEFE] to-[#FFE6E0] min-h-screen flex items-center overflow-hidden">
      <h1 className="absolute left-1/2 top-1/4 -translate-x-1/3 -translate-y-1/2 text-[140px] font-black text-[#00000010] whitespace-nowrap pointer-events-none select-none">{product.name}</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center w-full px-6">

        <div className="col-span-2 flex flex-col items-center gap-4">
          <button onClick={scrollUp} className="w-10 h-10 rounded-full bg-[#D9D9D9] text-black shadow flex items-center justify-center">↑</button>

          {products.map((item, index) => (
            <button key={item.id} onClick={() => setSelected(index)} className={`w-16 h-16 rounded-full overflow-hidden border-2 transition ${selected === index ? "border-red-500 scale-110" : "border-gray-300"}`}>
              <Image src={item.thumb} alt={item.name} width={64} height={64} />
            </button>
          ))}

          <button onClick={scrollDown} className="w-10 h-10 rounded-full bg-[#D9D9D9] text-black shadow flex items-center justify-center">↓</button>
        </div>

        <div className="col-span-5 z-10">
          <h2 className="text-5xl font-bold text-[#7D2017] mb-3">{product.name}</h2>
          <p className="text-[#7D2017] max-w-md mb-8">{product.desc}</p>

          <button
            onClick={() => {document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });}} className="bg-[#B54141] text-white rounded-full font-bold py-2 px-4 hover:opacity-90 transition">Pesan Sekarang!</button>
        </div>

        <div className="col-span-5 flex justify-center">
          <Image src={product.image} alt={product.name} width={420} height={520} className="object-contain drop-shadow-2xl" />
        </div>

      </div>
    </section>
  );
}