import Footer from "@/components/Footer";
import Functionality from "@/components/Functionality";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <div className="flex flex-col items-center">
        <Hero />
        <Functionality />
        <Footer />
      </div>
    </main>
  );
}
