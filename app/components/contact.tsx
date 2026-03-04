import Image from "next/image";

export default function Contact() {
    return (
        <section id="contact" className="bg-[#FFF1F1] py-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 text-[#7D2017]">
                    <p className="text-sm tracking-widest">KAMI SIAP MEMBANTU ANDA</p>
                    <h1 className="text-5xl font-light leading-tight mb-2"><span className="font-bold">Diskusikan</span><br /> Kebutuhan Solusi <br />Brand Anda</h1>
                    <p className="max-w-md mb-3">Ciptakan desain kemasan yang modern, kuat, dan berkarakter untuk merepresentasikan identitas brand Anda. Hubungi kami untuk konsultasi, kolaborasi, atau informasi lebih lanjut.</p>
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
                            <label className="block mb-2">Nama Lengkap *</label>
                            <input className="w-full h-12 rounded-xl bg-[#F2DAD8] px-4 outline-none" />
                        </div>

                        <div>
                            <label className="block mb-2">Email *</label>
                            <input type="email" className="w-full h-12 rounded-xl bg-[#F2DAD8] px-4 outline-none" />
                        </div>
                        <div>
                            <label className="block mb-2">Nomor Handphone *</label>
                            <input type="tel" className="w-full h-12 rounded-xl bg-[#F2DAD8] px-4 outline-none" />
                        </div>

                        <div>
                            <label className="block mb-2">Alamat *</label>
                            <textarea rows={5} className="w-full rounded-xl bg-[#F2DAD8] px-4 py-2 outline-none" />
                        </div>

                        <div className="flex justify-end">
                            <button className="bg-[#B54141] text-white rounded-full font-bold py-2 px-4 hover:opacity-90 transition">Masukan Keranjang</button>

                            <p>Harga</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}