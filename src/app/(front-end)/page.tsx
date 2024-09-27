import Books from "@/components/front-end/home/Books";
import Features from "@/components/front-end/home/Features";
import Hero from "@/components/front-end/home/Hero";

export default async function Home() {
  return (
    <main className="flex flex-col gap-4 md:gap-8">
      {/* Hero section */}
      <Hero />
      {/* Key Feature section */}
      <Features />
      {/* Book Categories Section */}
      <Books />
      <section>Video Content Preview Section</section>
      <section>How It Works Section (For First-Time Users)</section>
      <section>Testimonials Section</section>
      <section>FAQ section</section>
    </main>
  );
}
