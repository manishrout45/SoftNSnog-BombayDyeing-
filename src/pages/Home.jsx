import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import ContactUsSection from "../components/ContactUsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
import MarqueeBar from "../components/MarqueeBar";
import Testimonial from "../components/Testimonial";
import CategoryTabs from "../components/CategoryTabs";
import Bedding3DSection from "../components/Bedding3DSection";
import BlanketBanner from "../components/BlanketBanner";

const Home = () => {
  return (
    <>
      <section id="home">
        <HeroSection className="fade-up" />
      </section>
      <CategoryTabs />
      <Bedding3DSection />
      <section id="about">
        <AboutSection className="fade-right" />
      </section>
      <BlanketBanner />

      <section id="services">
        <ServicesSection />
      </section>
      <MarqueeBar />

      <section id="whychoose">
        <WhyChooseUs />
      </section>


      <Testimonial />

      <section id="contact">
        <ContactUsSection className="fade-right" />
      </section>
    </>
  );
};

export default Home;