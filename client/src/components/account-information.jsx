"use client";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const AccountInformation = () => {
  return (
    <div>
      <div className="p-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full flex justify-between hover:bg-gray-300 "
            >
              <div className="flex items-center my-6~">
                <div className="rounded-full bg-gray-500 w-[20px] h-[20px] text-white flex items-center justify-center p-4">
                  Z
                </div>
                <div className="ml-2">zain memon</div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <div className="flex items-center">
                <LogOut className="mr-2" size={17} />
                Log out
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
