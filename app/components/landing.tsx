"use client";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFFFFF] to-[#FFD9CF] flex items-center justify-center px-4">
      <div className="bg-[#F7F3F1] rounded-3xl shadow-lg max-w-xl w-full text-center px-10 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3E2A23] leading-snug">Make Your DIMSUM <br />Packaging More Cool, <br />Elegant, and Colorful</h1>
        <p className="text-gray-600 mt-4 text-sm leading-relaxed">Kami menyediakan jasa desain khusus packaging dimsum yang fungsional,estetik, dan siap meningkatkan nilai brand produk kamu</p>
        <button onClick={() => { document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-6 bg-[#6E4333] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition">Lihat Produk Kami!</button>
      </div>
    </div>
  );
}