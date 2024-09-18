import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma-client";

export default async function Home() {
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <div>
      This is home page
      <Button variant={"destructive"} about="About">
        Click Me
      </Button>
    </div>
  );
}
