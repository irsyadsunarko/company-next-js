export default function AboutSection() {
    return (
      <section className="bg-blue-300 w-full h-[41rem] flex items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Judul Section */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Welcome To PT. Sinar Tekindo Mandiri - Low Voltage Electrical Switchboard Maker
        </h2>
    
        {/* Konten Teks */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-4">
            Dalam mendukung program pembangunan nasional, baik sektor swasta (lokal maupun asing) maupun pemerintah, diperlukan sistem pengamanan dan pendistribusian kelistrikan yang handal untuk berbagai jenis bangunan, seperti gedung bertingkat, pabrik, rumah sakit, dan lainnya.
          </p>
        </div>
      </div>
    </section>
    );
  }