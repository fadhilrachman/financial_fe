"use client";
import { HeatMapOutlined, PlusOutlined } from "@ant-design/icons";
import { Divider, Progress } from "antd";
import React from "react";
import BaseButton from "../shared/base-button";
import { useRouter } from "next/navigation";

const Wishlist = () => {
  const router = useRouter();

  return (
    <div className="text-sm space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-base">Wishlist</h3>
        <BaseButton
          type="primary"
          icon={<PlusOutlined />}
          shape="circle"
          size="small"
          onClick={() => {
            router.push("/wishlist/create");
          }}
        />
      </div>
      <div className="spac">
        {[1, 2, 3, 4, 5].map((val, key) => {
          return (
            <div
              key={key}
              className="hover:opacity-100 cursor-pointer"
              onClick={() => {
                router.push(`/wishlist/${val}/detail`);
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {/* <div className="bg-textColor p-2 flex items-center justify-center w-[40px] h-[40px] rounded-xl text-background">
                    <HeatMapOutlined />
                  </div> */}
                  <div>
                    <h4 className="font-semibold">Kopi</h4>
                    <p className="text-sm text-neutral-400 max-w-[250px] line-clamp-1">
                      Terkumpul{" "}
                      <span className="font-semibold text-neutral-500 ">
                        250.000
                      </span>{" "}
                      dari{" "}
                      <span className="font-semibold text-neutral-500 ">
                        250.000
                      </span>
                    </p>
                  </div>
                </div>
                {/* <h3 className="font-bold">Rp 12.000</h3> */}
                <Progress
                  type="circle"
                  percent={75}
                  size={30}
                  strokeColor={"#98EC65"}
                />
              </div>
              <Divider className="my-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
