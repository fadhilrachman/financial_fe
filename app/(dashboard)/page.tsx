"use client";
import Navbar from "@/components/shared/navbar";
import Count from "@/components/home/count";
import React from "react";
import ListTransaction from "@/components/home/list-transaction";
import BaseButton from "@/components/shared/base-button";
import { PlusOutlined } from "@ant-design/icons";

const Home = () => {
  return (
    <div className="space-y-6 relative">
      <Count />
      <ListTransaction />
      <div className="fixed bottom-[80px]   w-[390px] flex justify-end ">
        <BaseButton
          type="primary"
          icon={<PlusOutlined />}
          shape="circle"
          size="large"
          className="z-50"
        />
      </div>
    </div>
  );
};

export default Home;
