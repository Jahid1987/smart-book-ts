import SectionTitle from "@/components/shared/SectionTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Books = () => {
  return (
    <section>
      <SectionTitle title="All Books" />
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>This is header</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>This is content</CardDescription>
          </CardContent>
          <CardFooter>This is footer</CardFooter>
        </Card>
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>This is header</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>This is content</CardDescription>
          </CardContent>
          <CardFooter>This is footer</CardFooter>
        </Card>
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>This is header</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>This is content</CardDescription>
          </CardContent>
          <CardFooter>This is footer</CardFooter>
        </Card>
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>This is header</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>This is content</CardDescription>
          </CardContent>
          <CardFooter>This is footer</CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Books;
