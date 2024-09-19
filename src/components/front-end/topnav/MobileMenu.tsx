import { HiBars3BottomLeft } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
const MobileMenu = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <HiBars3BottomLeft className="block lg:hidden text-xl" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-3 z-10">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/books">
            <DropdownMenuItem>Books</DropdownMenuItem>
          </Link>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default MobileMenu;
