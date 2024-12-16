"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { ArrowUpOutlined, BellFilled, MoreOutlined } from "@ant-design/icons";
import { TbTrendingUp } from "react-icons/tb";
import BaseButton from "../shared/base-button";
import { useGetWallet } from "@/hooks/wallet.hook";
import { formatRupiah } from "@/lib/utils";
import { Skeleton } from "antd";

export default function ListWallet() {
  const { data, isFetching } = useGetWallet({ page: 1, per_page: 10 });
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-6"
        onSlideChange={(val) => {
          console.log({ val });
        }}
      >
        {isFetching ? (
          <Skeleton.Node active={true} className="!w-full " />
        ) : (
          data?.result?.map((val, key) => {
            return (
              <SwiperSlide
                key={key}
                className="bg-textColor   text-white px-8 py-4 rounded-2xl"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                    <span className="font-medium">{val.name}</span>
                  </div>
                  <BaseButton
                    icon={<MoreOutlined className="text-white" />}
                    size="large"
                    type="text"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm mb-1">Total Balance</div>
                    <div className="text-4xl font-bold">
                      {formatRupiah(val.initial_balance)}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        )}
        {/* 
        <SwiperSlide className="bg-secondary  text-textColor px-8 py-4 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 10h20" />
              </svg>
              <span className="font-medium">Main Wallet</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-sm mb-1">Total Balance</div>
              <div className="text-4xl font-bold">$62,588.05</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-third  text-textColor px-8 py-4 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 10h20" />
              </svg>
              <span className="font-medium">Main Wallet</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-sm mb-1">Total Balance</div>
              <div className="text-4xl font-bold">$62,588.05</div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
