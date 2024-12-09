"use client";
import Navbar from "@/components/shared/navbar";
import Count from "@/components/home/count";
import React from "react";
import ListTransaction from "@/components/home/list-transaction";
import BaseButton from "@/components/shared/base-button";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { RiHomeLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

const Home = () => {
  const listItemBottomBar = [
    {
      url: "/",
      icon: RiHomeLine,
    },
    {
      url: "/",
      icon: RiHomeLine,
    },
    {
      url: "/",
      icon: RiHomeLine,
    },
    {
      url: "/",
      icon: UserOutlined,
    },
  ];
  return (
    <div className="space-y-4 relative">
      <Navbar />
      <Count />
      <ListTransaction />
      {/* <div className="fixed bottom-4   w-[390px] flex justify-end ">
        <BaseButton
          type="primary"
          icon={<PlusOutlined />}
          shape="circle"
          size="large"
          className="z-50"
        />
      </div> */}
      <div className="fixed w-full bottom-0  left-0  ">
        <div className="bg-background shadow-2xl flex justify-between shadow-black max-w-[420px] py-2 px-12 mx-auto">
          {listItemBottomBar.map((val, key) => {
            return (
              <div
                className={`${
                  key == 0 && "bg-secondary"
                } w-max p-2 cursor-pointer rounded-md`}
              >
                <val.icon className="text-2xl" />
                {key == 0 && (
                  <GoDotFill className="h-1.5 w-1.h-1.5 mx-auto mt-0.5" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
