"use client";
import BaseButton from "@/components/shared/base-button";
import ButtonBack from "@/components/shared/button-back";
import ListIncomeExpenseWishlist from "@/components/wishlist/detail/list-income-expense-wishlist";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Progress } from "antd";
import React from "react";

const WishlistDetail = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <ButtonBack route="/profile" />
        <h2 className="text-2xl  font-medium font-montserrat">
          Wishlist Detail
        </h2>
      </div>
      <div className="w-full flex flex-col space-y-2 items-center justify-center !my-8">
        <Progress
          type="circle"
          percent={75}
          size={90}
          strokeColor={"#98EC65"}
        />
        <p className="text-xl font-semibold">Beli Motor</p>
        <div className="space-x-6">
          <BaseButton type="primary" size="small" icon={<PlusOutlined />}>
            Insert Money
          </BaseButton>
          <BaseButton color="danger" size="small" icon={<MinusOutlined />}>
            Take out Money
          </BaseButton>
        </div>
      </div>

      <ListIncomeExpenseWishlist />
    </div>
  );
};

export default WishlistDetail;
