import { School } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Darkmode from "../../pages/Darkmode";
import { SheetClose, SheetFooter } from "./sheet";

const Navbar = () => {
  const user = true;

  return (
    <div className="h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2">
          <School size={30} />
          <h1 className="hidden md:block font-extrabold text-2xl">
            HustleWorld
          </h1>
        </div>
        <div className="flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline">Login</Button> <Button>Sign Up</Button>
            </div>
          )}
          <Darkmode />
        </div>
      </div>
      <div className="flex md:hidden justify-between items-center h-full px-4">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <School size={30} />
            <h1 className=" font-extrabold text-2xl gap-8"> HustleWorld</h1>
          </div>
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const role = "instructor";
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          size="icon"
          className="rounded-full bg-gray-200 hover:bg-gray-200 varint=outline text-black"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="mt-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">HustleWorld</h1>
            <Darkmode />
          </div>
        </SheetHeader>

        <nav className="flex flex-col gap-4 pl-5 cursor-pointer">
          <span>My Learning</span>
          <DropdownMenuSeparator />
          <span>Edit Profile</span>
          <DropdownMenuSeparator />
          <p>Log Out</p>
        </nav>
        {role === "instructor" && (
          <SheetClose asChild className="m-4">
            <Button type="submit">Dashboard</Button>
          </SheetClose>
        )}
      </SheetContent>
    </Sheet>
  );
};
