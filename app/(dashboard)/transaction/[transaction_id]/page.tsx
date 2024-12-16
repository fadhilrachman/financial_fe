"use client";
import BaseButton from "@/components/shared/base-button";
import ButtonBack from "@/components/shared/button-back";
import { DeleteFilled, EditFilled, HeatMapOutlined } from "@ant-design/icons";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const DetailTransaction = () => {
  const router = useRouter();
  const { transaction_id } = useParams();
  const items = [
    {
      label: "Amount",
      value: 222,
    },
    {
      label: "Record Type",
      value: "Expense",
    },
    {
      label: "Date",
      value: "12 March 2024",
    },
    {
      label: "Wallet",
      value: "Main Wallet",
    },
    {
      label: "Description",
      value: "Jajan Seblak",
    },
  ];
  return (
    <div>
      {" "}
      <div className="flex items-center space-x-2">
        <ButtonBack route="/" />
        <h3 className="text-xl my-4">Detail Recorded</h3>
      </div>
      <div>
        <div className="flex items-start space-x-4">
          <div className="bg-textColor p-2 flex items-center justify-center w-[40px] h-[40px] rounded-xl text-background">
            <HeatMapOutlined />
          </div>
          <div className="w-full mt-2 ">
            <div className="flex w-full justify-between items-center">
              <h4 className="font-semibold text-xl">Kopi</h4>
              <div className="flex space-x-2">
                <BaseButton
                  icon={<EditFilled className="text-yellow-500" />}
                  size="small"
                  onClick={() => {
                    router.push(`/${transaction_id}/update`);
                  }}
                />
                <BaseButton
                  icon={<DeleteFilled className="text-red-500" />}
                  size="small"
                />
              </div>
            </div>{" "}
            <div className="mt-3 space-y-4 ml w-full text-sm">
              {items.map((val) => {
                return (
                  <div className="flex border-b pb-1 w-full">
                    <p className="w-[100px] text-neutral-400">{val.label}</p>
                    <p>: {val.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTransaction;
