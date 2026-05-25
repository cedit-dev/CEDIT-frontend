import Navbar from "@/components/cedit/Navbar";
import Hero from "@/components/cedit/Hero";
import About from "@/components/cedit/About";
import Services from "@/components/cedit/Services";
import Programs from "@/components/cedit/Programs";
import Gallery from "@/components/cedit/Gallery";
import Contact from "@/components/cedit/Contact";
import Footer from "@/components/cedit/Footer";
import LatestNews from "@/components/cedit/LatestNews";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Programs />
      <Gallery />
      <LatestNews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
