'use client'; // Pastikan ini adalah Client Component karena menggunakan state
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useState } from 'react';
// import Image from '../../public/automatic-transfer-switch.jpg';

export default function ProdukLayanan() {
  const [activeTab, setActiveTab] = useState('produk');
  const [modalOpen, setModalOpen] = useState(false); // State untuk membuka modal
  const [selectedProduct, setSelectedProduct] = useState(null); // Produk yang dipilih untuk modal

  // Data produk langsung di dalam komponen
  const produk = [
    {
      id: 1,
      nama: 'Motor Control Center Panel',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis odit neque sunt doloribus aut cumque magnam nisi aliquid perspiciatis esse, earum itaque excepturi et exercitationem aliquam doloremque ipsum! Quis voluptatibus libero nostrum reprehenderit culpa, possimus magni laboriosam sunt veritatis. Dolorem, facere nulla? Eveniet commodi quia, sed odit libero totam!',
      gambar: '/images/motor-control-center.jpg' // Gambar produk 1
    },
    {
      id: 2,
      nama: 'Soft Starter Panel',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis odit neque sunt doloribus aut cumque magnam nisi aliquid perspiciatis esse, earum itaque excepturi et exercitationem aliquam doloremque ipsum! Quis voluptatibus libero nostrum reprehenderit culpa, possimus magni laboriosam sunt veritatis. Dolorem, facere nulla? Eveniet commodi quia, sed odit libero totam!',
      gambar: '/images/soft-starter-panel.jpg' // Gambar produk 2
    },
    {
      id: 3,
      nama: 'Sub Distribution Panel',
      deskripsi: 'Deskripsi Produk 3',
      gambar: '/images/sub-distribution-panel.jpg' // Gambar produk 3
    },
    {
      id: 4,
      nama: 'Capacitor Bank For All KVAR',
      deskripsi: 'Deskripsi Produk 4',
      gambar: '/images/capacitor-bank.jpg' // Gambar produk 3
    },
    {
      id: 5,
      nama: 'Main Distribution Board',
      deskripsi: 'Deskripsi Produk 5',
      gambar: '/images/main-distribution-board.jpg' // Gambar produk 3
    },
    {
      id: 6,
      nama: 'Automatic Transfer Switch',
      deskripsi: 'Deskripsi Produk 6',
      gambar: '/images/automatic-transfer-switch.jpg' // Gambar produk 3
    },
    {
      id: 7,
      nama: 'Low Voltage Main Distribution Board',
      deskripsi: 'Deskripsi Produk 7',
      gambar: '/images/low-voltage-main.jpg' // Gambar produk 3
    },
    {
      id: 8,
      nama: 'Contron Syncron PLN & Genset',
      deskripsi: 'Deskripsi Produk 8',
      gambar: '/images/synchon-pln.jpg' // Gambar produk 3
    },
  ];

  const layanan = [
    {
      id: 1,
      nama: 'Layanan 1',
      deskripsi: 'Deskripsi Layanan 1',
      gambar: 'http://tekindomandiri.com/product/view/Soft-Starter-Panel/9' // Gambar Layanan 1
    },
    {
      id: 2,
      nama: 'Layanan 2',
      deskripsi: 'Deskripsi Layanan 2',
      gambar: '/assets/Layanan2.jpg' // Gambar Layanan 2
    },
    {
      id: 3,
      nama: 'Layanan 3',
      deskripsi: 'Deskripsi Layanan 3',
      gambar: '/assets/Layanan3.jpg' // Gambar Layanan 3
    },
    {
      id: 4,
      nama: 'Layanan 4',
      deskripsi: 'Deskripsi Layanan 4',
      gambar: '/assets/Layanan3.jpg' // Gambar Layanan 3
    },
    {
      id: 5,
      nama: 'Layanan 5',
      deskripsi: 'Deskripsi Layanan 5',
      gambar: '/assets/Layanan3.jpg' // Gambar Layanan 3
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <Header />
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis odit neque sunt doloribus aut cumque magnam nisi aliquid perspiciatis esse, earum itaque excepturi et exercitationem aliquam doloremque ipsum! Quis voluptatibus libero nostrum reprehenderit culpa, possimus magni laboriosam sunt veritatis. Dolorem, facere nulla? Eveniet commodi quia, sed odit libero totam!</p> */}

      {/* Banner Image */}
      <div className="relative w-full">
        <img
          src="/images/wallpaper-produk.jpg"
          alt="Banner Gambar"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-3xl font-bold text-center">Produk</h2>
          <p className="text-lg text-center mt-2 max-w-xl">
            Kami memiliki produk berkualitas yang sudah digunakan di berbagai wilayah Indonesia
          </p>
        </div>
      </div>

      {/* Tab untuk Produk dan Layanan */}
      <div className="container mx-auto px-4 mt-16">
        {/* Tab navigation */}
        {/* <div className="flex space-x-4 border-b mb-4">
          <button
            onClick={() => setActiveTab('produk')}
            className={`py-2 px-4 ${activeTab === 'produk'
              ? 'border-b-2 border-blue-500 font-bold text-blue-500'
              : 'text-gray-500 hover:text-blue-500'}`}
          >
            Produk
          </button>
          <button
            onClick={() => setActiveTab('layanan')}
            className={`py-2 px-4 ${activeTab === 'layanan'
              ? 'border-b-2 border-blue-500 font-bold text-blue-500'
              : 'text-gray-500 hover:text-blue-500'}`}
          >
            Layanan
          </button>
        </div> */}

        {/* Tampilkan konten berdasarkan tab aktif */}
        {activeTab === 'produk' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-12 pb-24">
            {produk.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow-lg flex flex-col h-full cursor-pointer"
                onClick={() => openModal(item)} // Menampilkan modal saat produk diklik
              >
                <img
                  src={item.gambar}
                  alt={item.nama}
                  className="w-full h-72 object-cover rounded-t-lg"
                />
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mt-2">{item.nama}</h3>
                  {/* <p className="text-gray-600 mt-1">{item.deskripsi}</p> */}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* {activeTab === 'layanan' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-24">
            {layanan.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow-lg flex flex-col h-full cursor-pointer"
                onClick={() => openModal(item)} // Menampilkan modal saat layanan diklik
              >
                <img
                  src={item.gambar}
                  alt={item.nama}
                  className="w-full h-72 object-cover rounded-t-lg"
                />
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mt-2">{item.nama}</h3>
                  <p className="text-gray-600 mt-1">{item.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        )} */}
      </div>

      {/* Modal */}
      {modalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-4xl relative">
            {/* Tombol Tutup "X" di pojok kanan atas */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>

            <div className="flex">
              {/* Bagian Foto Produk (Kiri) dengan ukuran yang lebih besar */}
              <div className="flex-none w-2/6 mr-8">
                <img
                  src={selectedProduct.gambar}
                  alt={selectedProduct.nama}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Bagian Nama Produk dan Deskripsi (Kanan) */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedProduct.nama}</h2>
                <p className="text-gray-600">{selectedProduct.deskripsi}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );

}
