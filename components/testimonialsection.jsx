import '../app/globals.css'; // import file CSS

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO Perusahaan X",
      comment: "Pelayanan sangat memuaskan, panel listrik yang dipasang bekerja dengan sempurna.",
      image: "/images/logo-testimoni.jpg",
    },
    {
      name: "Jane Smith",
      role: "Manajer Proyek Y",
      comment: "Tim instalasi sangat profesional dan cepat. Sangat direkomendasikan!",
      image: "/images/logo-testimoni.jpg",
    },
    {
      name: "Michael Johnson",
      role: "Pemilik Rumah Z",
      comment: "Harga bersaing dan kualitas produk terbaik. Terima kasih!",
      image: "/images/logo-testimoni.jpg",
    },
    {
      name: "Emily Davis",
      role: "Marketing Manager Perusahaan A",
      comment: "Sangat puas dengan layanan dan kualitas produk yang kami terima. Sangat profesional!",
      image: "/images/logo-testimoni.jpg",
    },
    {
      name: "Daniel Brown",
      role: "Pengusaha Mandiri",
      comment: "Mereka selalu memberikan solusi terbaik dengan harga yang sangat kompetitif. Sangat direkomendasikan!",
      image: "/images/logo-testimoni.jpg",
    },
    {
      name: "Sarah Wilson",
      role: "Arsitek",
      comment: "Produk mereka selalu memenuhi standar tertinggi. Kami senang bekerja sama dengan tim mereka.",
      image: "/images/logo-testimoni.jpg",
    },
    {
      name: "Chris Taylor",
      role: "Direktur Teknologi Perusahaan B",
      comment: "Solusi yang diberikan sangat inovatif dan memuaskan. Layanan pelanggan mereka juga luar biasa.",
      image: "/images/logo-testimoni.jpg",
    },
  ];
  

  return (
    <section className="py-16 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Apa Kata Pelanggan Kami?</h2>
    <div className="overflow-hidden">
      <div className="flex animate-marquee space-x-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center flex-shrink-0 w-80" // Set lebar kartu dan mencegah memanjang
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">{testimonial.name}</h3>
            <p className="text-gray-600 mb-2">{testimonial.role}</p>
            <p className="text-gray-800">"{testimonial.comment}"</p>
          </div>
        ))}
        {/* Duplicate testimonials to make the scrolling effect seamless */}
        {testimonials.map((testimonial, index) => (
          <div
            key={`duplicate-${index}`}
            className="bg-white p-6 rounded-lg shadow-lg text-center flex-shrink-0 w-80" // Set lebar kartu dan mencegah memanjang
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">{testimonial.name}</h3>
            <p className="text-gray-600 mb-2">{testimonial.role}</p>
            <p className="text-gray-800">"{testimonial.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
}
