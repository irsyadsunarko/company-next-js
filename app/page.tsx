import Header from '../components/header';
import Hero from '../components/hero';
import AboutSection from '../components/aboutsection';
import ServicesSection from '../components/servicesection';
import PortfolioSection from '../components/portofoliosection';
import TestimonialSection from '../components/testimonialsection';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}