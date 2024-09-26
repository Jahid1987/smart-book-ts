import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
  btn: { name: string; link: string };
}) => {
  return (
    <Card className="transform transition-transform duration-300 hover:scale-105">
      <CardHeader className="text-center">
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <div className="flex justify-center">
          <Image src={image} alt={title} height={200} width={200} />
        </div>
      </CardHeader>
      <CardContent>
        {features.map((feature) => (
          <div key={feature.item} className="flex items-start gap-3 mb-3">
            <span className="h-2 w-2 rounded-full bg-primary mt-[2px]" />
            <p className="text-sm font-medium leading-none flex-1">
              {feature.item}
            </p>
          </div>
        ))}
      </CardContent>
      <CardFooter className="cursor-pointer">
        <Link href={btn.link}>
          <Button className="cursor-pointer">{btn.name}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
