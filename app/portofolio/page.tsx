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
      deskripsi: 'Deskripsi Produk 1',
      gambar: '/images/motor-control-center.jpg' // Gambar produk 1
    },
    {
      id: 2,
      nama: 'Soft Starter Panel',
      deskripsi: 'Deskripsi Produk 2',
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

      {/* Banner Image */}
      <div className="relative w-full">
        <img
          src="/images/wallpaper-produk.jpg"
          alt="Banner Gambar"
          className="w-full h-[400px] object-cover"
        />
      </div>
      <Footer />
    </div>
  );

}
