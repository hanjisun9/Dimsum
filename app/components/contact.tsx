"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {

    const [product, setProduct] = useState("Hexagon");
    const [layanan, setLayanan] = useState("Design Packaging");
    const [qty, setQty] = useState(1);

    const hargaSatuan = 120000;
    const totalHarga = hargaSatuan * qty;

    const tambahQty = () => {
        setQty(qty + 1);
    };

    const kurangQty = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };

    return (
        <section id="contact" className="bg-[#FFF1F1] py-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

                <div className="flex-1 text-[#7D2017]">
                    <p className="text-sm tracking-widest">KAMI SIAP MEMBANTU ANDA</p>

                    <h1 className="text-5xl font-light leading-tight mb-2">
                        <span className="font-bold">Diskusikan</span><br />
                        Kebutuhan Solusi <br />
                        Brand Anda
                    </h1>

                    <p className="max-w-md mb-3">
                        Ciptakan desain kemasan yang modern, kuat, dan berkarakter untuk
                        merepresentasikan identitas brand Anda. Hubungi kami untuk
                        konsultasi, kolaborasi, atau informasi lebih lanjut.
                    </p>

                    <div className="flex items-center gap-3">
                        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
                        <div>
                            <p>Instagram</p>
                            <p className="font-semibold">@feastdimsum</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                        <Image src="/telephone.png" alt="whatsapp" width={24} height={24} />
                        <div>
                            <p>Whatsapp</p>
                            <p className="font-semibold">+6289510390661</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-white rounded-3xl shadow-lg p-8 w-full max-w-xl">
                    <div className="space-y-5 text-[#7D2017]">

                        <div>
                            <label className="block mb-2">Nama Produk</label>

                            <select
                                value={layanan}
                                onChange={(e) => setLayanan(e.target.value)}
                                className="w-full h-12 rounded-xl bg-[#F2DAD8] px-4 outline-none"
                            >
                                <option value="Dimsum Blow">Dimsum Blow</option>
                                <option value="Dimsum Wrap">Dimsum Wrap</option>
                                <option value="Dimsum Box">Dimsum Box</option>
                                <option value="Dimsum Xmax">Dimsum Xmax</option>
                                <option value="Dimsum Bless">Dimsum Bless</option>
                            </select>
                        </div>

                        {/* PRODUK */}
                        <div>
                            <label className="block mb-2">Varian</label>

                            <div className="flex gap-3 items-center">

                                <select
                                    value={product}
                                    onChange={(e) => setProduct(e.target.value)}
                                    className="flex-1 h-12 rounded-xl bg-[#F2DAD8] px-4 outline-none"
                                >
                                    <option value="Hexagon">Hexagon</option>
                                    <option value="Custom">Custom</option>
                                </select>

                                <button
                                    onClick={kurangQty}
                                    className="w-10 h-10 bg-[#F2DAD8] rounded-lg font-bold"
                                >
                                    -
                                </button>

                                <span className="w-10 text-center">{qty}</span>

                                <button
                                    onClick={tambahQty}
                                    className="w-10 h-10 bg-[#F2DAD8] rounded-lg font-bold"
                                >
                                    +
                                </button>

                            </div>
                        </div>

                        {/* PILIH LAYANAN */}
                        <div>
                            <label className="block mb-2">Pilih Layanan *</label>

                            <select
                                value={layanan}
                                onChange={(e) => setLayanan(e.target.value)}
                                className="w-full h-12 rounded-xl bg-[#F2DAD8] px-4 outline-none"
                            >
                                <option value="Design Packaging">Design Packaging</option>
                                <option value="Cetak">Cetak</option>
                                <option value="Custom Shape">Custom Shape</option>
                            </select>
                        </div>

                        {/* METODE PEMBAYARAN */}
                        <div>
                            <label className="block mb-2">Metode Pembayaran</label>

                            <select className="w-full h-12 rounded-xl bg-[#F2DAD8] px-4 outline-none">
                                <option>E-Wallet</option>
                                <option>Debit Bank</option>
                                <option>COD</option>
                            </select>
                        </div>

                        <div className="flex justify-between items-center">

                            <button className="bg-[#B54141] text-white rounded-full font-bold py-2 px-4 hover:opacity-90 transition">
                                Masukan Keranjang
                            </button>

                            <p className="font-semibold">
                                Harga
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}