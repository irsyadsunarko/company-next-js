'use client'; // Pastikan ini adalah Client Component karena menggunakan state
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function ProdukLayanan() {
  // Data produk langsung di dalam komponen
  const produk = [
    {
      id: 1,
      nama: 'Motor Control Center Panel',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis odit neque sunt doloribus aut cumque magnam nisi aliquid perspiciatis esse, earum itaque excepturi et exercitationem aliquam doloremque ipsum! Quis voluptatibus libero nostrum reprehenderit culpa, possimus magni laboriosam sunt veritatis. Dolorem, facere nulla? Eveniet commodi quia, sed odit libero totam!',
      gambar: '/images/motor-control-center.jpg', // Gambar produk 1
    },
    {
      id: 2,
      nama: 'Soft Starter Panel',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis odit neque sunt doloribus aut cumque magnam nisi aliquid perspiciatis esse, earum itaque excepturi et exercitationem aliquam doloremque ipsum! Quis voluptatibus libero nostrum reprehenderit culpa, possimus magni laboriosam sunt veritatis. Dolorem, facere nulla? Eveniet commodi quia, sed odit libero totam!',
      gambar: '/images/soft-starter-panel.jpg', // Gambar produk 2
    },
    {
      id: 3,
      nama: 'Sub Distribution Panel',
      deskripsi: 'Deskripsi Produk 3',
      gambar: '/images/sub-distribution-panel.jpg', // Gambar produk 3
    },
    {
      id: 4,
      nama: 'Capacitor Bank For All KVAR',
      deskripsi: 'Deskripsi Produk 4',
      gambar: '/images/capacitor-bank.jpg', // Gambar produk 4
    },
    {
      id: 5,
      nama: 'Main Distribution Board',
      deskripsi: 'Deskripsi Produk 5',
      gambar: '/images/main-distribution-board.jpg', // Gambar produk 5
    },
    {
      id: 6,
      nama: 'Automatic Transfer Switch',
      deskripsi: 'Deskripsi Produk 6',
      gambar: '/images/automatic-transfer-switch.jpg', // Gambar produk 6
    },
    {
      id: 7,
      nama: 'Low Voltage Main Distribution Board',
      deskripsi: 'Deskripsi Produk 7',
      gambar: '/images/low-voltage-main.jpg', // Gambar produk 7
    },
    {
      id: 8,
      nama: 'Control Syncron PLN & Genset',
      deskripsi: 'Deskripsi Produk 8',
      gambar: '/images/synchon-pln.jpg', // Gambar produk 8
    },
  ];

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
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-3xl font-bold text-center">Produk</h2>
          <p className="text-lg text-center mt-2 max-w-xl">
            Kami memiliki produk berkualitas yang sudah digunakan di berbagai wilayah Indonesia
          </p>
        </div>
      </div>

      {/* Daftar Produk */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-12 pb-24">
          {produk.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg shadow-lg flex flex-col h-full"
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
      </div>

      <Footer />
    </div>
  );
}