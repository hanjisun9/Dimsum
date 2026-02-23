import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo Feast Dimsum" width={60} height={60} className="object-contain"/>
        </div>

        <div className="hidden md:flex gap-8 text-[#72412D] font-medium">
          <a href="#" className="font-semibold">Home</a>
          <a href="#highlight" className="font-semibold">About Us</a>
          <a href="#preview" className="font-semibold">Desain</a>
          <a href="#contact" className="font-semibold">Contact Us</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[#72412D] font-semibold">Masuk</button>
          <button className="bg-[#72412D] text-white px-5 py-2 rounded-full font-semibold">
            Daftar
          </button>
        </div>

      </div>
    </nav>
  );
}