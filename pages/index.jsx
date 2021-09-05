import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Hero from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
