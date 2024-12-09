"use client";
import Navbar from "@/components/shared/navbar";
import { RiHomeLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { TbTrendingUp } from "react-icons/tb";
import { PiUser, PiWallet } from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";
const layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathName = usePathname();
  const listItemBottomBar = [
    {
      url: "/",
      icon: RiHomeLine,
    },
    {
      url: "/statistic",
      icon: TbTrendingUp,
    },
    {
      url: "/wallet",
      icon: PiWallet,
    },
    {
      url: "/profile",
      icon: PiUser,
    },
  ];
  return (
    <div className="relative pb-12">
      <Navbar />
      {children}
      <div className="fixed w-full bottom-0  left-0  ">
        <div className="bg-background shadow-2xl flex justify-between shadow-black max-w-[420px] py-2 px-12 mx-auto">
          {listItemBottomBar.map((val, key) => {
            return (
              <div
                className={`${
                  val.url == pathName && "bg-secondary"
                } w-max p-2 cursor-pointer rounded-md`}
                onClick={() => {
                  router.push(val.url);
                }}
              >
                <val.icon className="text-2xl" />
                {val.url == pathName && (
                  <GoDotFill className=" h-1.5 w-1.h-1.5 mx-auto mt-0.5" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default layout;
