import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const FeatureCard = ({
  title,
  image,
  features,
}: {
  title: string;
  image: string;
  features: { item: string }[];
}) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <Image src={image} alt={title} fill />
      </CardHeader>
      <CardContent>
        {features.map((feature) => (
          <div key={feature.item} className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <p className="text-sm font-medium leading-none">{feature.item}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button>View All Books</Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
