import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
const Profile = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-3 z-10">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Profile;
