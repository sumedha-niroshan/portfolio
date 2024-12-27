import HeroSection from "./[components]/HeroSection";
import Navbar from "./[components]/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
