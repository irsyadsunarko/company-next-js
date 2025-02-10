export default function ServicesSection() {
    const services = [
      {
        title: "Panel Listrik Berkualitas",
        description: "Kami menyediakan panel listrik dengan kualitas terbaik dan standar internasional.",
        icon: "⚡",
      },
      {
        title: "Instalasi Profesional",
        description: "Tim ahli kami siap menginstalasi panel listrik dengan cepat dan tepat.",
        icon: "🔧",
      },
      {
        title: "Layanan Purna Jual",
        description: "Kami memberikan layanan purna jual yang terbaik untuk kepuasan pelanggan.",
        icon: "📞",
      },
    ];
  
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Keunggulan Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }