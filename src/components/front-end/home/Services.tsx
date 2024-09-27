import SectionTitle from "@/components/shared/SectionTitle";
import ServiceCard from "./ServiceCard";

// https://i.ibb.co.com/f9NS849/Firefly-a-guardian-is-controlling-his-her-students-on-reading-table-at-home-in-bangladesh-61192.jpg
const Services = () => {
  return (
    <section className="">
      <SectionTitle title="Let's Explore Services" />
      {/* all Features */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
        {/* for students */}
        <ServiceCard
          title="For Students"
          image="https://i.ibb.co.com/tcXv9LF/Firefly-smart-book-features-for-students-where-students-will-be-able-to-study-interactively-they-wi.jpg"
          features={[
            { item: "বিনামূল্যে প্রতি বইয়ের মৌলিক বিষয়গুলো পড়তে পারবে" },
            { item: "বিষয়ভিত্তিক রেকর্ডেড ভিডিও দেখতে পারবে" },
            {
              item: "কোন বিষয় না বুঝতে পারলে সরাসরি কথা বলে সমাধান নিতে পারবে",
            },
            {
              item: "অধ্যায় শেষে পরীক্ষা দিয়ে নিজেকে যাচাই করতে পারবে",
            },
            {
              item: "এমনকি প্রতিটি বিষয়ভিত্তিক ছোট ছোট পরীক্ষা দিতে পারবে",
            },
            {
              item: "সারা দেশব্যাপী বিষয়ভিত্তিক পরীক্ষায় নিজের অবস্থান বুঝতে পারবে",
            },
            {
              item: "ফলাফল ভালো করলে থাকবে বিশেষ পুরস্কার",
            },
            {
              item: "বিষয়ভিত্তিক পরীক্ষায় ভালো করলে নিজস্ব এলাকায় বা অনলাইনে টিউশন দেওয়া হবে",
            },
            {
              item: "কেউ চাইলে ওয়েবসাইটে অবদান রাখতে পারবে",
            },
            {
              item: "আগ্রহীরা চাইলে ফ্রিলান্সিংও করতে পারবে",
            },
          ]}
          btn={{ name: "Get Started", link: "/services/student" }}
        />
        {/* for Teachers and Guardians */}
        <ServiceCard
          title="For Teachers"
          image="https://i.ibb.co.com/K9bcMWd/Firefly-a-guardian-is-controlling-his-her-students-on-reading-table-in-bangladesh-26052.jpg"
          features={[
            { item: "শিক্ষার্থীদের Assignment দিয়ে তা ট্রেস করতে পারবেন" },
            {
              item: "বিষয়ভিত্তিক অথবা অধ্যায়ভিত্তিক পরীক্ষা নিয়ে অগ্রগতি মূল্যায়ন করেতে পারবেন",
            },
            { item: "এই বই এর যেকোন অংশ পড়ানোর কাজে ব্যবহার করতে পারবেন" },
          ]}
          btn={{ name: "Get Started", link: "/services/teacher" }}
        />
        <ServiceCard
          title="For Guardians"
          image="https://i.ibb.co.com/f9NS849/Firefly-a-guardian-is-controlling-his-her-students-on-reading-table-at-home-in-bangladesh-61192.jpg"
          features={[
            { item: "আপনার সন্তানদের পড়ার অগ্রগতি মূল্যায়ন করতে পারবেন" },
            {
              item: "আপনার সন্তানরা কতক্ষণ পড়ছে তা ট্রেস করতে পারবেন সহজেই",
            },
          ]}
          btn={{ name: "Get Started", link: "/services/guardian" }}
        />
      </div>
    </section>
  );
};

export default Services;
