"use client";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-medium font-montserrat">Hello, cuy</h2>
      <div>
        <Avatar size={"large"} icon={<UserOutlined />} />
      </div>
    </div>
  );
};

export default Navbar;
