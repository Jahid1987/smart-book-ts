import Hero from "@/components/front-end/home/Hero";
import prisma from "@/lib/prisma-client";

export default async function Home() {
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <main className="flex flex-col gap-4">
      {/* Hero section */}
      <section className="flex justify-center">
        <Hero />
      </section>
      <section>Key Feature section</section>
      <section>Book Categories Section</section>
      <section>Video Content Preview Section</section>
      <section>How It Works Section (For First-Time Users)</section>
      <section>Testimonials Section</section>
      <section>FAQ section</section>
    </main>
  );
}
