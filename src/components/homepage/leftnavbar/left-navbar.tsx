"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CircleUserRound,
  Home,
  LogOut,
  MailPlus,
  Moon,
  NotebookText,
  PieChart,
  Settings,
  Telescope,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const LeftNavbar = () => {
  const pathname = usePathname();
  const data = [
    {
      icon: Home,
      name: "Home",
      path: "/home",
      iconSize: 23,
    },
    {
      icon: NotebookText,
      name: "Notes",
      iconSize: 23,
    },
    {
      icon: Moon,
      name: "Theme",
      iconSize: 23,
    },
    {
      icon: CircleUserRound,
      name: "Account",
      iconSize: 26,
    },
    {
      icon: Telescope,
      name: "Explore",
      iconSize: 24,
    },
    {
      icon: PieChart,
      name: "Graph",
      iconSize: 24,
    },
    {
      icon: MailPlus,
      name: "Messages",
      iconSize: 23,
    },
    {
      icon: Settings,
      name: "Setting",
      iconSize: 24,
    },
  ];
  return (
    <div className="w-[17%] bg-white h-[100vh] text-black  rounded-[30px] ml-2 border shadow-lg">
      {/* -------------------- User Image And Use Name -------------------- */}
      <div className="flex w-full justify-center flex-col items-center h-[15%]">
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className="h-13 w-13"
          />
          <AvatarFallback>Cn</AvatarFallback>
        </Avatar>
        <text className="text-[#13353D] font-bold text-sm mt-2">
          Tushar Dev
        </text>
      </div>

      {/* -------------------- Tab Icons And Tab Names -------------------- */}
      <div className="w-[100%]  h-[66%] flex flex-col justify-around    ">
        {data?.map((ele) => (
          <div className="flex group">
            <div
              className={cn(
                "flex justify-end cursor-pointer w-[40%] pt-3 pb-3 pr-4",
                pathname === ele.path &&
                  "bg-[#FFD34E] rounded-br-full rounded-tr-full ",
                pathname !== ele.path &&
                  "group-hover:rounded-br-full group-hover:rounded-tr-full group-hover:bg-slate-200 group-hover:transition-all text-gray-600 group-hover:text-black"
              )}
            >
              <ele.icon size={ele.iconSize - 3} strokeWidth={2} />
            </div>
            <div
              className={cn(
                "flex text-sm pl-5 text-black cursor-pointer pt-3 pb-3 pr-4 hover:bg-white w-[50%] font-semibold",
                pathname !== ele.path && ""
              )}
            >
              {ele?.name}
            </div>
          </div>
        ))}
      </div>

      {/* -------------------- Sign Out Button-------------------- */}
      <div className="flex justify-center items-center h-[17%]">
        <div className="">
          <LogOut
            className="bg-rose-500 rounded-md h-9 w-9 p-2 mr-3"
            size={30}
            color="white"
          />
        </div>
        <Button variant={"newOne"}>Logout</Button>
      </div>
    </div>
  );
};

export default LeftNavbar;
