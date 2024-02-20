"use client";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/user-context";

export const AccountInformation = () => {
  const { user } = useUser();
  const router = useRouter();
  const userLogout = async () => {
    deleteCookie("token");
    router.push("/login");
  };
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
                  {user[0]?.username[0].toUpperCase()}
                </div>
                <div className="flex flex-col items-start">
                  <div className="ml-2">{user[0]?.username}</div>
                  <div className="ml-2 text-xs text-gray-400">
                    {user[0]?.email}
                  </div>
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <div className="flex items-center" onClick={userLogout}>
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
