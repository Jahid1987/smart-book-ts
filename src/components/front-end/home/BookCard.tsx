import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const BookCard = ({
  name,
  details,
  btn,
  children,
}: {
  name: string;
  details: string;
  btn: { name: string; link: string };
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Card className="transform hover:border-primary ">
        <CardHeader className=" hover:text-primary">
          <CardTitle className="flex gap-2 items-center">
            {children}
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{details}</CardDescription>
        </CardContent>
        <CardFooter>
          <Link href={btn.link}>
            <Button className="cursor-pointer">{btn.name}</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookCard;
