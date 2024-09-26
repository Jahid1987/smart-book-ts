import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import FeatureCard from "./FeatureCard";

// https://i.ibb.co.com/f9NS849/Firefly-a-guardian-is-controlling-his-her-students-on-reading-table-at-home-in-bangladesh-61192.jpg
const Features = () => {
  return (
    <section className="">
      <SectionTitle title="Main Features" />
      {/* all Features */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
        <FeatureCard
          title="For Students"
          image="https://i.ibb.co.com/tcXv9LF/Firefly-smart-book-features-for-students-where-students-will-be-able-to-study-interactively-they-wi.jpg"
          features={[{ item: "This is test" }, { item: "This is test 2" }]}
          btn={{ name: "Get Started", link: "/featues/student" }}
        />
        <div className="flex flex-col gap-4">
          <FeatureCard
            title="For Teachers"
            image="https://i.ibb.co.com/K9bcMWd/Firefly-a-guardian-is-controlling-his-her-students-on-reading-table-in-bangladesh-26052.jpg"
            features={[
              { item: "শিক্ষার্থীদের Assignment দিয়ে তা ট্রেস করতে পারবেন" },
              {
                item: "বিষয়ভিত্তিক অথবা অধ্যায়ভিত্তিক পরীক্ষা নিয়ে অগ্রগতি মূল্যায়ন করেতে পারবেন",
              },
              { item: "এই বই এর যেকোন অংশ পড়ানোর কাজে ব্যবহার করতে পারবেন" },
            ]}
            btn={{ name: "Get Started", link: "/featues/teacher" }}
          />
          <FeatureCard
            title="For Guardians"
            image="https://i.ibb.co.com/f9NS849/Firefly-a-guardian-is-controlling-his-her-students-on-reading-table-at-home-in-bangladesh-61192.jpg"
            features={[
              { item: "আপনার সন্তানদের পড়ার অগ্রগতি মূল্যায়ন করতে পারবেন" },
              {
                item: "আপনার সন্তানরা কতক্ষণ পড়ছে তা ট্রেস করতে পারবেন সহজেই",
              },
            ]}
            btn={{ name: "Get Started", link: "/featues/teacher" }}
          />
        </div>
        <Card className="">
          <CardHeader>
            <CardTitle className="text-xl">Special Features</CardTitle>
            <CardDescription>
              এই দূর্মূল্যের বাজারে কিংবা এই প্রাকৃতিক বিপর্যয়ের সময়ে এই বই
              অবদান রাখবে যেসকল দিক থেকে -
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <div className="">
                <p className="text-sm font-medium leading-none">
                  প্রায় সকল বিষয় ফ্রি -
                  <Button variant={"link"}>
                    <Link href="/frre-features">
                      কি কি বিষয় ফ্রি থাকছে দেখুন
                    </Link>
                  </Button>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              <div className="">
                <p className="text-sm font-medium leading-none">
                  কাগজ বাঁচান পৃথিবী বাঁচান
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Features;
