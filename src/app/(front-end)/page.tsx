import Features from "@/components/front-end/home/Features";
import Hero from "@/components/front-end/home/Hero";

export default async function Home() {
  return (
    <main className="flex flex-col gap-4 md:gap-8">
      {/* Hero section */}
      <section className="">
        <Hero />
      </section>
      {/* Key Feature section */}
      <section>
        <Features />
      </section>
      <section>Book Categories Section</section>
      <section>Video Content Preview Section</section>
      <section>How It Works Section (For First-Time Users)</section>
      <section>Testimonials Section</section>
      <section>FAQ section</section>
    </main>
  );
}
