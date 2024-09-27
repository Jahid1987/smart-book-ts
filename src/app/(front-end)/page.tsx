import Books from "@/components/front-end/home/Books";
import Features from "@/components/front-end/home/Features";
import Hero from "@/components/front-end/home/Hero";
import HoTo from "@/components/front-end/home/HoTo";
import Tutorials from "@/components/front-end/home/Tutorials";

export default async function Home() {
  return (
    <main className="flex flex-col gap-4 md:gap-8">
      {/* Hero section */}
      <Hero />
      {/* Key Feature section */}
      <Features />
      {/* Book Categories Section */}
      <Books />
      {/* Video Content Preview Section */}
      <Tutorials />
      {/* How It Works Section */}
      <HoTo />
      <section>Testimonials Section</section>
      <section>FAQ section</section>
    </main>
  );
}
