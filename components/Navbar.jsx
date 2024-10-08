"use client";
import { Button } from "./ui/button";
import { ModeToggle } from "./Toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 px-6 border-b backdrop-blur sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="text-lg font-bold">
          Todo List
        </Link>

        <div className="flex items-center justify-center gap-2">
          <Link href={"/"}>
            {" "}
            <Button size="sm">All Todos</Button>
          </Link>
          <Link href={"/add"}>
            <Button variant={"outline"} size="sm">
              Add Todo
            </Button>
          </Link>
          <ModeToggle className="text-md" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
