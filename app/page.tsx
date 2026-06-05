import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Realizations from "./components/Realizations";
import RevealOnScroll from "./components/RevealOnScroll";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <RevealOnScroll />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Realizations />
        <WhyChooseUs />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
