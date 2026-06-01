import React from "react";
import Grain from "./components/Grain";
import Navbar from "./components/Navbar";
import HeroScroll from "./components/HeroScroll";
import BrandMarquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Trust from "./components/Trust";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCallBar";
import WhatsAppFab from "./components/WhatsAppFab";

export default function App() {
  return (
    <div className="relative min-h-screen bg-void-900 font-body text-white antialiased" data-testid="app-root">
      <Grain />
      <Navbar />
      <main>
        <HeroScroll />
        <BrandMarquee />
        <About />
        <Services />
        <Trust />
        <Contact />
        <Location />
      </main>
      <Footer />
      <MobileCallBar />
      <WhatsAppFab />
    </div>
  );
}
