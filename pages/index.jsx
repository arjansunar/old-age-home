import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Home/HeroSection";
import ImgDescSection from "../components/Home/ImgDescription/ImgDescSection";
import ServiceSection from "../components/Home/ServiceSection/ServiceSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <ServiceSection />
        <ImgDescSection />
      </main>

      <Footer />
    </div>
  );
}
