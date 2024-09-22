import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-64">
      <Image src="/hero.jpg" alt="hero" fill className="object-cover" />
      <div className="absolute top-5 left-8 md:left-16 lg:left-32  z-10 space-y-2 md:space-y-4 w-3/4 md:w-3/5 lg:w-3/5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100">
          Unlock the Future of Learning <br /> with Smart Books
        </h1>
        <p className="text-gray-200 text-sm md:text-base">
          Interactive content, video lessons, real-time monitoring, and
          comprehensive guides for teachers.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 "></div>
    </div>
  );
}
