import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2"> {/* Menambahkan flex dan space-x-2 */}
          <img src="/images/logo.png" alt="logo" className="w-24 h-auto" />
          <h1 className="text-2xl font-bold">PT. Sinar Tekindo Mandiri</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-blue-300">Beranda</a>
            </li>
            <li>
              <a href="/tentang-kami" className="hover:text-blue-300">Tentang Kami</a>
            </li>
            <li>
              <a href="/produk-layanan" className="hover:text-blue-300">Produk & Layanan</a>
            </li>
            <li>
              <a href="/portofolio" className="hover:text-blue-300">Portofolio</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-300">Blog</a>
            </li>
            <li>
              <a href="/kontak-kami" className="hover:text-blue-300">Kontak</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}