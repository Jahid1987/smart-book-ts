import SectionTitle from "@/components/shared/SectionTitle";
import BookCard from "./BookCard";
import { FaCalculator } from "react-icons/fa";
import { TbAbc } from "react-icons/tb";
import { LuBinary } from "react-icons/lu";
const Books = () => {
  return (
    <section>
      <SectionTitle title="Let's Explore All Books" />
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <BookCard
          name="ICT"
          details="This is ICT Paper - HSC"
          btn={{ name: "Read Now", link: "/books/ict" }}
        >
          <LuBinary className="text-3xl" />
        </BookCard>
        <BookCard
          name="English 1st"
          details="This is English 1st Paper - HSC"
          btn={{ name: "Read Now", link: "/books/english_1" }}
        >
          <TbAbc className="text-3xl" />
        </BookCard>
        <BookCard
          name="English 2nd"
          details="This is English 2nd Paper - HSC"
          btn={{ name: "Read Now", link: "/books/english_2" }}
        >
          <TbAbc className="text-3xl" />
        </BookCard>

        <BookCard
          name="Accounting 1st"
          details="This is Accounting 1st - HSC"
          btn={{ name: "Read Now", link: "/books/accounting_1" }}
        >
          <FaCalculator className="text-3xl" />
        </BookCard>
        <BookCard
          name="Accounting 2nd"
          details="This is Accounting 2nd - HSC"
          btn={{ name: "Read Now", link: "/books/accounting_2" }}
        >
          <FaCalculator className="text-3xl" />
        </BookCard>
      </div>
    </section>
  );
};

export default Books;
