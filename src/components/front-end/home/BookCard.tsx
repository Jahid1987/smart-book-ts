import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const BookCard = () => {
  return (
    <div>
      <Card className="transform hover:border-primary ">
        <CardHeader>
          <CardTitle>This is header</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>This is content</CardDescription>
        </CardContent>
        <CardFooter>This is footer</CardFooter>
      </Card>
    </div>
  );
};

export default BookCard;
