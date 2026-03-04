"use client";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "DIMSUMBLOW",
    tagline: "Dynamic Visual Identity for Modern Frozen Food",
    desc: "DimsumBlow merupakan konsep kemasan futuristik yang dirancang untuk menampilkan kesan modern, bold, dan dinamis. Menggabungkan elemen tipografi tegas, bentuk geometris tajam, dan komposisi visual berlayer, packaging ini dirancang untuk menarik perhatian di rak display serta memperkuat identitas brand.",
    image: "/p1.png",
    thumb: "/p1.png",
  },
  {
    id: 2,
    name: "DIMSUMWRAP",
    tagline: "Premium Clean Carry Packaging",
    desc: "Desain tas tenteng praktis dengan tampilan clean dan premium untuk produk makanan.",
    image: "/p2.png",
    thumb: "/p2.png",
  },
  {
    id: 3,
    name: "DIMSUMBOX",
    tagline: "Minimal Strong Food Container",
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

      <h1 className="absolute left-1/2 top-1/3 -translate-x-1/3 -translate-y-1/2
      text-[180px] font-black text-[#7D2017]/10 whitespace-nowrap pointer-events-none select-none">
        {product.name}
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center w-full px-6">

        <div className="col-span-2 flex flex-col items-center gap-6">
          <button onClick={scrollUp} className="w-10 h-10 rounded-full bg-gray-100 text-black shadow flex items-center justify-center">↑</button>

          {products.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelected(index)}
              className={`w-16 h-16 rounded-full overflow-hidden border-2 transition
              ${selected === index ? "border-red-500 scale-110" : "border-gray-300"}`}
            >
              <Image src={item.thumb} alt={item.name} width={64} height={64}/>
            </button>
          ))}

          <button onClick={scrollDown} className="w-10 h-10 rounded-full bg-gray-100 text-black shadow flex items-center justify-center">↓</button>
        </div>

        <div className="col-span-5 z-10">

          <p className="text-xl font-bold text-[#7D2017] tracking-widest mb-1">
            MOST PUPULAR
          </p>

          <div className="flex text-orange-400 text-2xl mb-4">
            ★★★★★
          </div>

          <h2 className="text-5xl font-extrabold text-[#7D2017] mb-2">
            {product.name}
          </h2>

          <p className="text-lg font-semibold text-[#9C6B4E] mb-4">
            {product.tagline}
          </p>

          <p className="text-[#7D2017]/80 leading-relaxed max-w-md mb-8 text-sm">
            {product.desc}
          </p>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
            }
            className="bg-[#C3473F] hover:bg-[#a63b34]
            text-white font-semibold px-8 py-3 rounded-full
            shadow-lg transition"
          >
            Pesan Sekarang!
          </button>

        </div>

        {/* IMAGE */}
        <div className="col-span-5 flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={420}
            height={520}
            className="object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}