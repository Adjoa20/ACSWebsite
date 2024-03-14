import HeroSection from "./compontents/HeroSection";
import Navbar from "./compontents/Navbar";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
     <HeroSection />
     <Navbar />
    </main>
  );
}
