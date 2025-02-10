// pages/api/produk.js
export default function handler(req, res) {
    const produk = [
      { id: 1, nama: 'Produk 1', deskripsi: 'Deskripsi Produk 1' },
      { id: 2, nama: 'Produk 2', deskripsi: 'Deskripsi Produk 2' },
      { id: 3, nama: 'Produk 3', deskripsi: 'Deskripsi Produk 3' },
    ];
  
    res.status(200).json(produk);
  }