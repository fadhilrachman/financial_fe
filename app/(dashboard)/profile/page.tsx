import Wishlist from "@/components/profile/wishlist";
import Navbar from "@/components/shared/navbar";
import { Avatar } from "antd";
import React from "react";

const Profile = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-medium font-montserrat">My Account</h2>
      <div className="w-full flex flex-col space-y-2 items-center justify-center !my-8">
        <Avatar
          size={90}
          className="text-5xl"
          style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
        >
          U
        </Avatar>
        <p className="text-xl font-semibold">Fadhil Rahman</p>
      </div>
      <Wishlist />
    </div>
  );
};

export default Profile;
