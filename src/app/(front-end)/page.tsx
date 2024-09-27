import Books from "@/components/front-end/home/Books";
import FAQ from "@/components/front-end/home/FAQ";
import Hero from "@/components/front-end/home/Hero";
import HowTo from "@/components/front-end/home/HowTo";
import Testimonial from "@/components/front-end/home/Testimonial";
import Tutorials from "@/components/front-end/home/Tutorials";
import Services from "@/components/front-end/home/Services";

export default async function Home() {
  return (
    <main className="flex flex-col gap-4 md:gap-8">
      {/* Hero section */}
      <Hero />
      {/* Key Feature section */}
      <Services />
      {/* Book Categories Section */}
      <Books />
      {/* Video Content Preview Section */}
      <Tutorials />
      {/* How It Works Section */}
      <HowTo />
      {/* Testimonials Section */}
      <Testimonial />
      {/* FAQ section */}
      <FAQ />
    </main>
  );
}
