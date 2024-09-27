import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const FeatureCard = ({
  title,
  image,
  features,
  btn,
}: {
  title: string;
  image: string;
  features: { item: string }[];
  btn?: { name: string; link: string };
}) => {
  return (
    <Card className="relative transform transition-transform duration-300 hover:scale-105">
      <CardContent>
        <span className="flex justify-center w-full h-fit">
          <Image
            src={image}
            alt={title}
            height={400}
            width={400}
            className="rounded-md mt-6"
          />
        </span>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <CardDescription>
          {features.map((feature) => (
            <span
              key={feature.item}
              className="flex items-start justify-start gap-3 mb-3"
            >
              <span className="h-2 w-2 rounded-full bg-primary mt-[2px]" />
              <span className="leading-none flex-1">{feature.item}</span>
            </span>
          ))}
        </CardDescription>
      </CardHeader>

      {btn && (
        <CardFooter className="cursor-pointer">
          <Link href={btn.link}>
            <Button className="cursor-pointer">{btn.name}</Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default FeatureCard;
