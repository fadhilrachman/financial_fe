"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { ArrowUpOutlined, BellFilled } from "@ant-design/icons";
import { TbTrendingUp } from "react-icons/tb";
import { formatRupiah } from "@/lib/utils";

export default function Count({
  totalMoney,
  totalExpense,
  totalIncome,
}: {
  totalMoney: number;
  totalExpense: number;
  totalIncome: number;
}) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        onSlideChange={(val) => {
          console.log({ val });
        }}
        className="mySwiper mt-6"
      >
        <SwiperSlide className="bg-textColor pt-8  text-white px-8 py-4 rounded-2xl">
          <div className="space-y-4">
            <div>
              <div className="text-sm mb-1">Money Total</div>
              <div className="text-4xl font-bold">
                {formatRupiah(totalMoney)}
              </div>
              <div className="flex items-center gap-2 text-blue-500 mt-1">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                <span>8.82% (+$970)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-secondary pt-8  text-textColor px-8 py-4 rounded-2xl">
          <div className="space-y-4">
            <div>
              <div className="text-sm mb-1">Income Total</div>
              <div className="text-4xl font-bold">
                {formatRupiah(totalIncome)}
              </div>
              <div className="flex items-center gap-2 text-red-500 mt-1">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                <span>8.82% (+$970)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-third pt-8  text-textColor px-8 py-4 rounded-2xl">
          <div className="space-y-4">
            <div>
              <div className="text-sm mb-1">Expense Total</div>
              <div className="text-4xl font-bold">
                {formatRupiah(totalExpense)}
              </div>
              <div className="flex items-center gap-2 text-blue-50 mt-1">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                <span>8.82% (+$970)</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
