import SectionTitle from "@/components/shared/SectionTitle";
import BookCard from "./BookCard";

const Books = () => {
  return (
    <section>
      <SectionTitle title="Let's Explore All Books" />
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <BookCard />
      </div>
    </section>
  );
};

export default Books;
