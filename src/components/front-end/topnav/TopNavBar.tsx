"use client";
import { HiBars3BottomLeft } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const TopNavBar = () => {
  return (
    <nav className="shadow-md py-2">
      <div className="container px-1 mx-auto flex items-center justify-between">
        {/* Start  */}
        <div
          className="flex items-center gap-2
        "
        >
          <DropdownMenu>
            <DropdownMenuTrigger>
              <HiBars3BottomLeft className="block lg:hidden text-xl" />
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
          <h3 className="font-bold">Smart Book</h3>
        </div>
        {/* Center  */}
        <div className="hidden lg:flex">links</div>
        {/* End  */}
        <div>
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
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
