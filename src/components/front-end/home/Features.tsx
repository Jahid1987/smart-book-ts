import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import FeatureCard from "./FeatureCard";

type Book = {
  title: string;
  link: string;
};

const Features = () => {
  const books: Book[] = [
    { title: "ICT", link: "/ict" },
    { title: "English First Paper", link: "/english1" },
    { title: "English Second Paper", link: "/english2" },
    { title: "হিসাববিজ্ঞান ১ম পত্র", link: "/accounting1" },
    { title: "হিসাববিজ্ঞান ২য় পত্র", link: "/accounting2" },
  ];
  return (
    <section className="">
      <SectionTitle title="Main Features" />
      {/* all Features */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
        <FeatureCard
          title="For Students"
          image=""
          features={[{ item: "This is test" }]}
        />
        <div className="flex flex-col gap-4">
          <Card className="">
            <CardHeader>
              <CardTitle className="text-xl">For Teachers</CardTitle>
              <CardDescription>
                শিক্ষকরা এই বই এর যেকোন অংশ পড়ানোর কাজে ব্যবহার করতে পারবেন।
                তাছাড়া শিক্ষার্থীদের Assignment দিয়ে তা ট্রেস করতে পারবেন।
                বিষয়ভিত্তিক অথবা অধ্যায়ভিত্তিক পরীক্ষা নিয়ে শিক্ষার্থীদের
                অগ্রগতি মূল্যায়ন করতে পারবেন।
              </CardDescription>
            </CardHeader>
            {/* <CardContent></CardContent> */}
            <CardFooter>
              <Button>Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="">
            <CardHeader>
              <CardTitle className="text-xl">For Guardians</CardTitle>
              <CardDescription>
                অভিবাবকরাও তাদের সন্তানদের পড়ার অগ্রগতি মূল্যায়ন করতে পারবেন।
                তাদের বাচ্চারা এই সাইটে কতক্ষণ পড়ছে তা ট্রেস করতে পারবেন সহজেই।
              </CardDescription>
            </CardHeader>
            {/* <CardContent></CardContent> */}
            <CardFooter>
              <Button>Get Started</Button>
            </CardFooter>
          </Card>
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
