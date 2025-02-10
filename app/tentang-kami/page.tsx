import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";

const AboutUs = () => {
  return (
    <div>
      <Header />

      {/* Banner Gambar */}
      <div className="relative w-full">
        <img
          src="/images/wallpaper-produk.jpg"
          alt="Banner Gambar"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-3xl font-bold text-center">Tentang Kami</h2>
        </div>
      </div>

      {/* Konten utama */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">

          {/* Bagian tentang perusahaan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center h-full p-8">
              <h3 className="text-4xl font-bold">PT. Sinar Tekindo Mandiri</h3>
            </div>


            {/* Bagian tim perusahaan */}
            <div className="p-8">
              <p className="text-gray-600 mb-4">
                Dalam menunjang program pembangunan nasional, baik lokal atau
                asing maupun pemerintah perlu adanya suatu sistem pengamanan &
                pendistribusian sistem kelistrikan pada bangunan bertingkat,
                gedung, pabrik, dll.
              </p>
              <p className="text-gray-600 mb-4">
                PANEL-PANEL LISTRIK (Electrical Switchboard) merupakan salah satu
                bagian dari kelistrikan tersebut.
              </p>
              <p className="text-gray-600 mb-4">
                Dengan ilmu pengetahuan dan pengalaman di bidang panel listrik,
                hal ini yang mendorong kami untuk mewujudkan dan turut aktif dalam
                program pembangunan nasional.
              </p>
              <p className="text-gray-600">
                Sebagai wujud dari hal di atas, kami mendirikan perusahaan yang
                bergerak di bidang pengadaan atau penjualan serta jasa maintenance
                panel-panel listrik dengan nama perusahaan kami PT. Sinar Tekindo
                Mandiri.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center h-full p-8">
              <p className="text-md mb-4 text-justify"><span className="font-bold">Visi</span> kami adalah Menjangkau pasar yang luas dengan menjaga & memberikan kepercayaan pada costumer agar cita-cita awal dapat terlaksana & tercapai untuk mewujudkan secara nyata dalam dunia proyek khususnya dibidang kelistrikan yaitu pengadaan / penjualan panel-panel listrik sehingga PT. SINAR TEKINDO MANDIRI menjadi bagian darinya dengan menjaga nama baik.</p>
            </div>


            {/* Bagian tim perusahaan */}
            <div className="p-8">
              <p className="text-md mb-4 text-justify">
                <span className="font-bold">Misi</span> kami adalah Memberikan yang terbaik dengan "MENGUTAMAKAN KEPUASAN PELANGGAN" dengan menjaga ketepatan waktu, purna jual, kualitas produk & harga jual serta siap menerima saran & kritik yang baik serta membangun untuk kemajuan perusahaan kami.
              </p>
            </div>
          </div>

          {/* Bagian sejarah perusahaan */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-4">Sejarah Perusahaan</h3>
            <p className="text-gray-600 mb-4 text-justify">
              PT. Sinar Tekindo Mandiri didirikan pada tahun 2010 dengan tujuan
              untuk menyediakan solusi teknologi terbaik dalam berbagai sektor
              industri. Sejak saat itu, kami telah melayani berbagai klien di
              berbagai industri, mulai dari sektor energi, manufaktur, hingga
              teknologi informasi.
            </p>
            <p className="text-gray-600">
              Dengan pengalaman lebih dari 10 tahun, kami terus berkembang dan
              berinovasi untuk memberikan layanan yang memenuhi ekspektasi dan
              kebutuhan klien kami.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
