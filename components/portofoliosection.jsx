export default function PortfolioSection() {
    const projects = [
      {
        title: "Proyek Gedung A",
        image: "/images/porto-1.jpg",
      },
      {
        title: "Proyek Pabrik B",
        image: "/images/porto-2.jpg",
      },
      {
        title: "Proyek Rumah C",
        image: "/images/porto-3.jpg",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Portofolio Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-96 group-hover:scale-125 transition duration-300" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }