"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { ArrowUpOutlined } from "@ant-design/icons";
import { TbTrendingUp } from "react-icons/tb";

export default function Count() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-6"
      >
        <SwiperSlide className="bg-textColor  text-white px-8 py-4 rounded-2xl">
          <h2 className="text-zinc-400 text-sm">Total Saldo</h2>
          <div className="space-y-3">
            <p className="text-3xl font-semibold">$ 32.000.000</p>
            <div className="inline-flex items-center gap-1 text-xs bg-secondary text-zinc-900 px-2 py-1 rounded-md">
              <TbTrendingUp className="w-3 h-3" />
              <span>70% dari bulan lalu</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-secondary  text-white px-8 py-4 rounded-2xl">
          <h2 className="text-zinc-600 text-sm">Total Pemasukan</h2>
          <div className="space-y-3">
            <p className="text-3xl font-semibold text-textColor">
              $ 32.000.000
            </p>
            <div className="inline-flex items-center gap-1 text-xs bg-textColor text-white px-2 py-1 rounded-md">
              <TbTrendingUp className="w-3 h-3" />
              <span>70% dari bulan lalu</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-third text-white px-8 py-4 rounded-2xl">
          <h2 className="text-zinc-600 text-sm">Total Pengeluaran</h2>
          <div className="space-y-3">
            <p className="text-3xl font-semibold text-textColor">
              $ 32.000.000
            </p>
            <div className="inline-flex items-center gap-1 text-xs bg-textColor  px-2 py-1 rounded-md">
              <TbTrendingUp className="w-3 h-3" />
              <span>70% dari bulan lalu</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
